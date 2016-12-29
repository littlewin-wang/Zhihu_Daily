<template>
  <div>
    这是新闻列表区域
  </div>
</template>

<script type="text/ecmascript-6">
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
      ...mapGetters(['news', 'topics', 'sections'])
    },
    methods: {
      ...mapActions(['getNews', 'getTopics', 'getSections'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
