<template>
  <div class="topiclist">
    <div class="img">
      <img :src="imgProxy(topicPosts.image)">
      <p>
        {{ topicPosts.description }}
      </p>
    </div>
    <div v-if="topicPosts.stories">
      <newsitem v-for="news in topicPosts.stories" track-by="id" :item="news"></newsitem>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import newsitem from './common/newsitem'
  import {imgProxy} from 'common/js/utils'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      newsitem
    },
    computed: {
      ...mapGetters(['topicPosts']),
      id () {
        return this.$route.params.id
      }
    },
    methods: {
      ...mapActions(['getTopicPosts']),
      imgProxy
    },
    mounted () {
      this.$emit('loadingStart')
      this.getTopicPosts(this.$route.params.id)
          .then(() => {
            this.$emit('loadingDone')
          })
    },
    watch: {
      id () {
        this.$emit('loadingStart')
        this.getTopicPosts(this.$route.params.id)
            .then(() => {
              this.$emit('loadingDone')
            })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .topiclist
    .img
      position: relative
      p
        position: absolute
        left: 5%
        bottom: 5%
        text-align: center
        color: #fff
        cursor: pointer
</style>
