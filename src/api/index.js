var axios = require('axios')
import { API } from './api'

const API_ROOT = '/api'

// export API interface
export default {
  NewsResource () {
    return axios.get(API_ROOT.concat(API.news))
  },
  NewsIdResource (id) {
    return axios.get(API_ROOT.concat(API.newsById).concat(id))
  },
  NewsDateResource (date) {
    return axios.get(API_ROOT.concat(API.newsByDate).concat(date))
  },
  NewsInfoResource (id) {
    return axios.get(API_ROOT.concat(API.newsInfo).concat(id))
  },
  TopicsResource () {
    return axios.get(API_ROOT.concat(API.topics))
  },
  TopicIdResource (topicid) {
    return axios.get(API_ROOT.concat(API.topicById).concat(topicid))
  },
  SectionsResource () {
    return axios.get(API_ROOT.concat(API.sections))
  },
  SectionIdResource (sectionid) {
    return axios.get(API_ROOT.concat(API.sectionById).concat(sectionid))
  },
  LongCommentsResource (id) {
    return axios.get(API_ROOT.concat(API.comments).concat(id).concat('/long-comments'))
  },
  ShortCommentsResource (id) {
    return axios.get(API_ROOT.concat(API.comments).concat(id).concat('/short-comments'))
  }
}
