<template>
  <div class="newslist">
    <div class="newswrapper">
      <!--顶部轮播图-->
      <slider :list="sliderList"></slider>
      <!--新闻列表-->
      <newsitem v-for="news in news[0].stories" :item="news"></newsitem>
    </div>
    <more :loading="true"></more>
  </div>
</template>

<script type="text/ecmascript-6">
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
    computed: {
      ...mapGetters(['news', 'topics', 'sections']),
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
      }
    },
    methods: {
      ...mapActions(['getNews', 'getTopics', 'getSections'])
    },
    components: {
      slider,
      newsitem,
      more
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
