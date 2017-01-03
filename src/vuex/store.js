import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import plugins from './plugins'

Vue.use(Vuex)

export const STORAGE_NEWS_KEY = 'news'
export const STORAGE_TOPICS_KEY = 'topics'
export const STORAGE_POSTS_KEY = 'posts'
export const STORAGE_SECTIONS_KEY = 'sections'

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    news: JSON.parse(window.localStorage.getItem(STORAGE_NEWS_KEY) || '[]'),
    topics: JSON.parse(window.localStorage.getItem(STORAGE_TOPICS_KEY) || '[]'),
    sections: JSON.parse(window.localStorage.getItem(STORAGE_SECTIONS_KEY) || '[]'),
    posts: JSON.parse(window.localStorage.getItem(STORAGE_POSTS_KEY) || '[]'),
    topicPosts: {},
    sectionList: {},
    index: 0
  },
  getters,
  mutations,
  actions,
  plugins
})
