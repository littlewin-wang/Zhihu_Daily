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
  import { prevDate } from 'common/js/utils'
  import slider from './common/slider'
  import newsitem from './common/newsitem'
  import more from './common/more'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    mounted () {
      this.$emit('loadingStart')
      this.$nextTick(() => {
        this.getNews()

        if (!this.topics.length) {
          this.getTopics()
        }

        if (!this.sections.length) {
          this.getSections()
        }

        this.$emit('loadingDone')
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
        let find = false
        this.loading = true
        this.addIndex()
        this.news.forEach((item) => {
          if (item.date === prevDate(this.news[0].date, this.index)) {
            find = true
            this.$nextTick(() => {
              this.loading = false
            })
          }
        })

        if (!find) {
          let date = prevDate(this.news[0].date, this.index - 1)
          API.NewsDateResource(date).then(res => {
            this.addNews(res.data)
            this.$nextTick(() => {
              this.loading = false
            })
          })
        }
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
