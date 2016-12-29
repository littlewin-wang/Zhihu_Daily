<template>
  <div class="newslist">
    <div class="news">
      <slider :list="sliderList"></slider>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import slider from './common/slider'
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
              url: '/new/' + item.id
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
      slider
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
