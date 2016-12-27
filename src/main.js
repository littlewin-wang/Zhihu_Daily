// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import API from './api/index'
import Router from './router/router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Router.routes
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
