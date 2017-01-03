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
  error: 'static/error.jpg',
  loading: 'static/loading.gif',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
