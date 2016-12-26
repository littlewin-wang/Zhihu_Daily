import Vue from 'vue'
import VueResource from 'vue-resource'
import { API } from './api'

const API_ROOT = '/api'

Vue.use(VueResource)

Vue.http.options.crossOrigin = true

export default {
  NewsResource () {
    return Vue.resource(API_ROOT.concat(API.news))
  },
  NewsIdResource () {
    return Vue.resource(API_ROOT.concat(API.newsById))
  },
  NewsDateResource () {
    return Vue.resource(API_ROOT.concat(API.newsByDate))
  },
  NewsInfoResource () {
    return Vue.resource(API_ROOT.concat(API.newsInfo))
  },
  TopicsResource () {
    return Vue.resource(API_ROOT.concat(API.topics))
  },
  TopicIdResource () {
    return Vue.resource(API_ROOT.concat(API.topicById))
  },
  SectionsResource () {
    return Vue.resource(API_ROOT.concat(API.sections))
  },
  SectionIdResource () {
    return Vue.resource(API_ROOT.concat(API.sectionById))
  },
  LongCommentsResource () {
    return Vue.resource(API_ROOT.concat(API.longComments))
  },
  ShortCommentsResource () {
    return Vue.resource(API_ROOT.concat(API.shortComments))
  }
}
