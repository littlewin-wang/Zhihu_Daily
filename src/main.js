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

// 注册service worker，service worker脚本文件为sw.js
if ('serviceWorker' in navigator) {
  run().catch(error => console.error(error))
}

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

async function run () {
  const registration = await navigator.serviceWorker.register('./sw.js')
  console.log('Service Worker 注册成功')

  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    // The `urlBase64ToUint8Array()` function is the same as in
    // https://www.npmjs.com/package/web-push#using-vapid-key-for-applicationserverkey
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  })

  // eslint-disable-next-line no-undef
  await fetch('/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'content-type': 'application/json'
    }
  })
  console.log('Web push subscribe完成')
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
