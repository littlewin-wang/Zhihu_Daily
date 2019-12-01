/* eslint-disable */
var cacheName = 'cache-prefix'
var apiCacheName = 'api-prefix'
var cacheFiles = [
  '/',
  '/app.js'
]

// 监听install事件，安装完成后，进行文件缓存
self.addEventListener('install', function (e) {
  console.log('Service Worker 状态： install')
  var cacheOpenPromise = caches.open(cacheName).then(function (cache) {
    return cache.addAll(cacheFiles)
  });
  e.waitUntil(cacheOpenPromise)
})

// 监听activate事件，激活后通过cache的key来判断是否更新cache中的静态资源
self.addEventListener('activate', function (e) {
  console.log('Service Worker 状态： activate')
  var cachePromise = caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (key) {
      if (key !== cacheName && key !== apiCacheName) {
        return caches.delete(key)
      }
    }))
  })
  e.waitUntil(cachePromise)
  // 注意不能忽略这行代码，否则第一次加载会导致fetch事件不触发
  return self.clients.claim()
})

self.addEventListener('fetch', function (e) {
  // 需要缓存的xhr请求
  var cacheRequestUrls = [
    '/news',
    '/topics',
    '/sections'
  ]
  console.log('现在正在请求：' + e.request.url)

  // 判断当前请求是否需要缓存
  var needCache = cacheRequestUrls.some(function (url) {
    return e.request.url.indexOf(url) > -1
  })

  if (needCache) {
    // 需要缓存
    // 使用fetch请求数据，并将请求结果clone一份缓存到cache
    // 此部分缓存后在browser中使用全局变量caches获取
    caches.open(apiCacheName).then(function (cache) {
      return fetch(e.request).then(function (response) {
        cache.put(e.request.url, response.clone())
        return response
      })
    })
  }
})

self.addEventListener('push', ev => {
  const data = ev.data.json()
  console.log('Got push', data)
  self.registration.showNotification(data.title, {
    body: 'Hello, World!',
    icon: 'https://daily.zhihu.com/favicon.ico'
  });
})

self.addEventListener('notificationclick', function (e) {
  var action = e.action
  console.log(`action tag: ${e.notification.tag}`, `action: ${action}`)

  switch (action) {
    case 'viewSource':
      console.log('view source')
      break
    case 'contactMe':
      console.log('contact me')
      break
    default:
      console.log(`未处理的action: ${e.action}`)
      action = 'default'
      break
  }
  e.notification.close()

  e.waitUntil(
    // 获取所有clients
    self.clients.matchAll().then(function (clients) {
      if (!clients || clients.length === 0) {
        // 当不存在client时，打开该网站
        self.clients.openWindow && self.clients.openWindow('http://127.0.0.1:8080')
        return
      }
      // 切换到该站点的tab
      clients[0].focus && clients[0].focus()
      clients.forEach(function (client) {
        // 使用postMessage进行通信
        client.postMessage(action)
      })
    })
  )
})

self.addEventListener('sync', function (e) {
  console.log(`service worker需要进行后台同步，tag: ${e.tag}`)
  var init = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  if (e.tag === 'sample_sync') {
    var request = new Request(`sync?name=Littlewin`, init)
    e.waitUntil(
      fetch(request).then(function (response) {
        response.json().then(console.log.bind(console))
        return response
      })
    );
  }
})
