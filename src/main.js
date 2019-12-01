// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import VueLazyLoad from 'vue-lazyload'

import App from './App'
import Router from './router/router'
import store from './vuex/store'

import 'common/stylus/base.styl'

const publicVapidKey = 'BH6KXF52SefsDGaB4ao9lvfdqGgkiDo4uTVwFyjkIy58-MxwhdEW_1Dbr6qgAQqsdCl51HSvAqiqNcJ1HT2r-D8'

function urlBase64ToUint8Array (base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding)
    // eslint-disable-next-line no-useless-escape
    .replace(/\-/g, '+')
    .replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

function askPermission () {
  return new Promise(function (resolve, reject) {
    /* eslint-disable */
    var permissionResult = Notification.requestPermission(function (result) {
      resolve(result)
    })

    if (permissionResult) {
      permissionResult.then(resolve, reject)
    }
  }).then(function (permissionResult) {
    if (permissionResult !== 'granted') {
      throw new Error('We weren\'t granted permission.')
    }
  })
}

// 注册service worker，service worker脚本文件为sw.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(function (registration) {
    return Promise.all([
      registration,
      askPermission()
    ])
  }).then(function (result) {
    var registration = result[0]

    document.querySelector('#Notification').addEventListener('click', function () {
      var title = 'Zhihu_Daily';
      var options = {
        body: 'You are welcome',
        icon: '/img/newspaper-128.png',
        actions: [{
          action: 'viewSource',
          title: '原网页'
        }, {
          action: 'contactMe',
          title: '联系我'
        }],
        tag: 'zhihu-daily-notification',
        renotify: true
      }
      registration.showNotification(title, options)
    })

    console.log('Service Worker 注册成功')

    return registration.pushManager.subscribe({
      userVisibleOnly: true,
      // The `urlBase64ToUint8Array()` function is the same as in
      // https://www.npmjs.com/package/web-push#using-vapid-key-for-applicationserverkey
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    })
  }).then(function (subscription) {
    // eslint-disable-next-line no-undef
    fetch('/subscribe', {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: {
        'content-type': 'application/json'
      }
    })
  }).then(() => {
    console.log('Web push subscribe完成')
  })
}

// service worker 消息通信
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('message', function (e) {
    var action = e.data
    console.log(`receive post-message from sw, action is '${e.data}'`)
    switch (action) {
      case 'viewSource':
        window.open(
          'https://daily.zhihu.com/',
          '_blank'
        )
        break
      case 'contactMe':
        window.open(
          'mailto:someone@sample.com',
          '_blank'
        )
        break
      default:
        break
    }
  })
}

// Background Sync
if ('serviceWorker' in navigator && 'SyncManager' in window) {
  navigator.serviceWorker.ready.then(function (registration) {
    var tag = "sample_sync"

    document.getElementById('Sync').addEventListener('click', function () {
      registration.sync.register(tag).then(function () {
        console.log('后台同步已触发', tag)
      }).catch(function (err) {
        console.log('后台同步触发失败', err)
      })
    })
  })
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Router.routes
})
// To next hook until all done
router.beforeEach((to, from, next) => {
  next()
})

sync(store, router)

Vue.use(VueLazyLoad, {
  error: 'error.jpg',
  loading: 'loading.gif',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
