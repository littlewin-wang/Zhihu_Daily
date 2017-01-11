<template>
  <div class="newscontent">
    <div class="post">
      <img class="postimage" :src="imgProxy(post.image)">
      <div v-html="imgProxy(post.body)"></div>
      <div class="comments" v-show="showComments && post.body">
        <div class="comment" v-for="item in comments">
          <img :src="imgProxy(item.avatar)">
          <div class="content">
            <span class="author">{{ item.author }}</span>
            <span class="time">{{ timeFormat(item.time) }}</span>
            <div>
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="imgFrom">图片库: {{ post.image_source }}</span>
    <badge class="left" v-if="post.body" :popularity="post.popularity"></badge>
  </div>
</template>

<script type="text/ecmascript-6">
  import API from '../api/index'
  import badge from './common/badge'
  import {imgProxy} from 'common/js/utils'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    components: { badge },
    data () {
      return {
        longComments: [],
        shortComments: [],
        showComments: false
      }
    },
    computed: {
      ...mapGetters(['posts']),
      post () {
        let id = this.$route.params.id
        let post = this.posts.find(p => p.id.toString() === id) || {}
        return post
      },
      comments () {
        let arr = []
        arr = arr.concat(this.longComments, this.shortComments)
        arr.sort((a, b) => {
          return a.time > b.time
        })
        return arr
      }
    },
    methods: {
      ...mapActions(['getPost']),
      imgProxy,
      timeFormat (time) {
        return new Date(time * 1000).toLocaleString()
      },
      getComment () {
        this.showComments = !this.showComments
        if (!this.comments.length) {
          let id = this.$route.params.id
          API.LongCommentsResource(id).then(res => {
            if (res.statusText === 'OK') {
              this.longComments = res.data.comments
            }
          })
          API.ShortCommentsResource(id).then(res => {
            if (res.statusText === 'OK') {
              this.shortComments = res.data.comments
            }
          })
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {
        vm.$emit('loadingStart')
        let id = vm.$route.params.id
        if (!vm.post.body) {
          vm.getPost(id)
        }
        vm.getComment()
        vm.$emit('loadingDone')
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .post
    position: relative
    .comments
      .comment
        border-bottom: 2px solid #eee
        &:last-child
          border-bottom: none
        img
          width: 48px
          height: 48px
          border-radius: 100%
          margin: 0 10px
          float: left
        .content
          margin: 10px 0 10px 88px
          .author
            color: #444
            font-weight: 700
          .time
            font-size: 1.6rem
            margin-left: 10px
  .imgFrom
    position: absolute
    top: 680px
    right: 40px
    color: rgba(255, 255, 255, .6)
  .left
    position: fixed
    left: 50%
    top: 20%
    margin-left: -360px
</style>
