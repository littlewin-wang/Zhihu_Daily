// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

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

// API.SectionsResource().then((response) => {
//   if (response.ok) {
//     console.log(response.data)
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
