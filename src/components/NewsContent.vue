<template>
  <div class="newscontent">
    <div class="post">
      <img class="postimage" :src="imgProxy(post.image)">
      <div v-html="imgProxy(post.body)"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import API from '../api/index'
  import loading from './common/loading'
  import { imgProxy } from 'common/js/utils'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      loading
    },
    computed: {
      ...mapGetters(['posts']),
      post () {
        let id = this.$route.params.id
        let post = this.posts.find(p => p.id.toString() === id) || {}
        return post
      }
    },
    methods: {
      ...mapActions(['getPost']),
      imgProxy
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {
        let id = vm.$route.params.id
        if (!vm.post.body) {
          vm.getPost(id)
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .post
    position: relative
</style>
