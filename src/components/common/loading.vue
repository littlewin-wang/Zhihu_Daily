<template>
  <div class="loading">
    <div class="loading-start">
    </div>
    <div class="floating" v-if="mask"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      mask: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loading-start
    margin: 20px auto
    position: relative
    box-sizing: border-box
    height: 30px
    width: 30px
    border: 2px solid #008BED
    border-right-color: transparent
    border-radius: 50%
    animation: rotate-forever 1s infinite linear

    @keyframes rotate-forever
      0%
        transform: rotate(0deg)
      100%
        transform: rotate(360deg)
</style>
