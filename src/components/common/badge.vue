<template>
  <div class="badge">
    <div class="agree">
      <button class="up" title="赞同">
        <i class="icon"></i>
        <span class="count">{{ popularity }}</span>
      </button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      popularity: {
        required: true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .agree
    .up
      display: block
      position: relative
      height: 45px
      line-height: 24px
      width: 38px
      border-radius: 3px
      border: 0
      cursor: pointer
      background: #eff6fa
      color: #698ebf
      font-size: 1.2rem
      text-align: center
      &:hover
        background: #698ebf
        color: #fff
        .icon
          border-bottom-color: #fff
      .icon
        display: block
        width: 0
        height: 0
        border: 6px solid transparent
        border-bottom-color: #698ebf
        margin: 0 auto
</style>
