import Vue from 'vue'
import VueResource from 'vue-resource'
import { API } from './api'

const API_ROOT = '/api'

Vue.use(VueResource)

Vue.http.options.crossOrigin = true

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
  TopicIdResource (id) {
    return Vue.resource(API_ROOT.concat(API.topicById)).get({id: id})
  },
  SectionsResource () {
    return Vue.resource(API_ROOT.concat(API.sections)).get()
  },
  SectionIdResource (id) {
    return Vue.resource(API_ROOT.concat(API.sectionById)).get({id: id})
  },
  LongCommentsResource (id) {
    return Vue.resource(API_ROOT.concat(API.longComments)).get({id: id})
  },
  ShortCommentsResource (id) {
    return Vue.resource(API_ROOT.concat(API.shortComments)).get({id: id})
  }
}
