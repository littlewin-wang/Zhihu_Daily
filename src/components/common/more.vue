<template>
  <div class="more" :class="loading ? 'isloading' : ''">
    <loading :mask="false" v-if="loading"></loading>
    <span class="more-icon" v-else @click="addFun">加载更多</span>
  </div>
</template>

<script type="text/ecmascript-6">
  import loading from './loading'

  export default {
    props: {
      loading: Boolean,
      addFun: Function
    },
    components: {
      loading
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .more
    position: relative
    height: 30px
    line-height: 30px
    text-align: center
    margin: 20px
    background-color: #eee
    border-radius: 5px
    .more-icon
      display: inline-block
      width: 100%
      cursor: pointer

  .isloading
    background-color: #fff
</style>
