var axios = require('axios')

const API_ROOT = 'http://119.29.68.183:8088/'
axios.default.withCredentials = true

const getApiDataFromCache = (url) => {
  if ('caches' in window) {
    /* eslint-disable */
    return caches.match(url).then(function (cache) {
      if (!cache) {
        return
      }
      return cache.json()
    })
  } else {
    return Promise.resolve()
  }
}

// export API interface
export default {
  // Use cache storage
  NewsResourceCache () {
    return getApiDataFromCache(API_ROOT.concat('news'))
  },
  NewsResource () {
    return axios.get(API_ROOT.concat('news'))
  },
  NewsIdResource (id) {
    return axios.get(API_ROOT.concat('newsById'), {params: {id: id}})
  },
  NewsDateResource (date) {
    return axios.get(API_ROOT.concat('newsByDate'), {params: {time: date}})
  },
  NewsInfoResource (id) {
    return axios.get(API_ROOT.concat('newsInfo'), {params: {id: id}})
  },
  TopicsResource () {
    return axios.get(API_ROOT.concat('topics'))
  },
  TopicIdResource (topicid) {
    return axios.get(API_ROOT.concat('topicById'), {params: {id: topicid}})
  },
  SectionsResource () {
    return axios.get(API_ROOT.concat('sections'))
  },
  SectionIdResource (sectionid) {
    return axios.get(API_ROOT.concat('sectionById'), {params: {id: sectionid}})
  },
  LongCommentsResource (id) {
    return axios.get(API_ROOT.concat('longComments'), {params: {id: id}})
  },
  ShortCommentsResource (id) {
    return axios.get(API_ROOT.concat('shortComments'), {params: {id: id}})
  }
}
