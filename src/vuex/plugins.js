import { STORAGE_NEWS_KEY, STORAGE_TOPICS_KEY, STORAGE_SECTIONS_KEY, STORAGE_POSTS_KEY } from './store'

const localStoragePlugin = store => {
  store.subscribe((mutation, { news }) => {
    window.localStorage.setItem(STORAGE_NEWS_KEY, JSON.stringify(news))
  })
  store.subscribe((mutation, { topics }) => {
    window.localStorage.setItem(STORAGE_TOPICS_KEY, JSON.stringify(topics))
  })
  store.subscribe((mutation, { posts }) => {
    window.localStorage.setItem(STORAGE_POSTS_KEY, JSON.stringify(posts))
  })
  store.subscribe((mutation, { sections }) => {
    window.localStorage.setItem(STORAGE_SECTIONS_KEY, JSON.stringify(sections))
  })
}

export default [localStoragePlugin]
