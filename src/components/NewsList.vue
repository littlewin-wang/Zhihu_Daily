<template>
  <div class="newslist">
    <div class="newswrapper" v-for="(item, index) in newsList">
      <!--顶部轮播图, latest news打开-->
      <slider v-if="!index" :list="sliderList"></slider>
      <h3 v-if="index">{{ item.date }}</h3>
      <!--新闻列表-->
      <newsitem v-for="news in item.stories" :item="news"></newsitem>
    </div>
    <more :show="news.length" :loading="loading" :addFun="getLastNews"></more>
  </div>
</template>

<script type="text/ecmascript-6">
  import API from '../api/index'
  import slider from './common/slider'
  import newsitem from './common/newsitem'
  import more from './common/more'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    mounted () {
      this.$nextTick(() => {
        this.getNews()

        if (!this.topics.length) {
          this.getTopics()
        }

        if (!this.sections.length) {
          this.getSections()
        }
      })
    },
    data () {
      return {
        loading: false
      }
    },
    computed: {
      ...mapGetters(['news', 'topics', 'sections', 'index']),
      sliderList () {
        let arr = []
        if (this.news.length && this.news[0].top_stories) {
          this.news[0].top_stories.forEach(item => {
            arr.push({
              image: item.image,
              title: item.title,
              url: '/news/' + item.id
            })
          })
        }
        return arr
      },
      newsList () {
        let arr = []
        if (this.news.length) {
          arr = this.news.filter((x, index) => {
            return index <= this.index
          })
        }
        return arr
      }
    },
    methods: {
      ...mapActions(['getNews', 'getTopics', 'getSections', 'addIndex', 'addNews']),
      getLastNews () {
        this.loading = true
        this.addIndex()
        if (this.news.length - 1 >= this.index) {
          this.$nextTick(() => {
            this.loading = false
          })
          return false
        }

        let date = this.news[this.news.length - 1].date
        API.NewsDateResource(date).then(res => {
          this.addNews(res.data)
          this.$nextTick(() => {
            this.loading = false
          })
        })
      }
    },
    components: {
      slider,
      newsitem,
      more
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .newswrapper
    h3
      padding-top: 0.3rem
      text-align: center
      font-size: 2.2rem
      color: #7f8c8d
</style>
