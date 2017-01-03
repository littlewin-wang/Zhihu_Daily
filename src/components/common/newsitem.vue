<template>
  <router-link :to="'/news/' + item.id">
    <div class="news">
      <img v-if="item.images" v-lazy="imgProxy(item.images[0])">
      <p>{{ item.title }}</p>
      <em v-if="item.multipic">多图</em>
    </div>
  </router-link>
</template>

<script type="text/ecmascript-6">
  import { imgProxy } from 'common/js/utils'

  export default {
    props: {
      item: Object
    },
    methods: {
      imgProxy
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .news
    margin: 20px
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25)
    cursor: pointer
    position: relative
    img
      max-height: 100px
      max-width: 120px
    p
      display: inline-block
      width: 400px
      margin: 20px
      padding-left: 20px
      vertical-align: middle
      font-size: 1.6rem
    em
      position: absolute
      right: 10px
      bottom: 10px
</style>
