import Vue from 'vue'
import VueResource from 'vue-resource'
import { API } from './api'

const API_ROOT = '/api'

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.interceptors.push((response, next) => {
  // Add interceptor before request
  next((response) => {
    // Add interceptor after request
  })
})

// export API interface
export default {
  NewsResource () {
    return Vue.resource(API_ROOT.concat(API.news)).get()
  },
  NewsIdResource (id) {
    return Vue.resource(API_ROOT.concat(API.newsById)).get({id: id})
  },
  NewsDateResource (date) {
    return Vue.resource(API_ROOT.concat(API.newsByDate)).get({date: date})
  },
  NewsInfoResource (id) {
    return Vue.resource(API_ROOT.concat(API.newsInfo)).get({id: id})
  },
  TopicsResource () {
    return Vue.resource(API_ROOT.concat(API.topics)).get()
  },
  TopicIdResource (topicid) {
    return Vue.resource(API_ROOT.concat(API.topicById)).get({topicid: topicid})
  },
  SectionsResource () {
    return Vue.resource(API_ROOT.concat(API.sections)).get()
  },
  SectionIdResource (sectionid) {
    return Vue.resource(API_ROOT.concat(API.sectionById)).get({sectionid: sectionid})
  },
  LongCommentsResource (id) {
    return Vue.resource(API_ROOT.concat(API.longComments)).get({id: id})
  },
  ShortCommentsResource (id) {
    return Vue.resource(API_ROOT.concat(API.shortComments)).get({id: id})
  }
}
