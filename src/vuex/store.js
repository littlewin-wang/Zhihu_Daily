import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
// import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    news: [],
    topics: [],
    sections: [],
    posts: [],
    topicPosts: {},
    sectionList: {},
    loading: false,
    index: 0
  },
  getters,
  mutations,
  actions
})
