import NewsContent from 'components/NewsContent'
import NewsList from 'components/NewsList'
import TopicList from 'components/TopicList'
import SectionList from 'components/SectionList'

export default {
  routes: [
    {path: '/', component: NewsList},
    {path: '/news/:id', component: NewsContent},
    {path: '/topic/:id', component: TopicList},
    {path: '/section/:id', component: SectionList}
  ]
}
