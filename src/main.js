// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import API from './api/index'
import Router from './router/router'

import 'common/stylus/base.styl'
import 'common/stylus/reset.styl'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Router.routes
})
// To next hook until all done
router.beforeEach((to, from, next) => {
  next()
})

API.ShortCommentsResource(9098005).then((response) => {
  if (response.ok) {
    console.log(response.data)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
