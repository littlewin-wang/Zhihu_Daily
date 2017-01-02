<template>
  <div class="float">
    <div class="gotop" id='gotop' title="返回顶部">
      <div class="arrow"></div>
      <div class="stick"></div>
    </div>
    <router-link to="/">
      <div class="gohome" v-if="$route.path!=='/'" title="返回主页">
        <div class="arrow"></div>
        <div class="stick"></div>
      </div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  import { goTop } from 'common/js/utils'

  export default {
    mounted () {
      this.$nextTick(() => {
        goTop('gotop')
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .float
    position: fixed
    left: 50%
    top: 80%
    margin-left: 400px
    .gotop
      width: 38px
      height: 38px
      background-color: #F9F9F9
      border-radius: 3px
      position: relative
      cursor: pointer
      margin: 5px 0
      .arrow
        border: 9px solid transparent
        border-bottom-color: #aaa
        position: absolute
        top: 0
        left: 10px
      .stick
        width: 9px
        height: 15px
        background-color: #aaa
        position: absolute
        top: 16px
        left: 15px
      &:hover
        opacity: 0.7
    .gohome
      width: 38px
      height: 38px
      background-color: #F9F9F9
      border-radius: 3px
      position: relative
      cursor: pointer
      margin: 5px 0
      .arrow
        border: 12px solid transparent
        border-bottom-color: #aaa
        position: absolute
        top: -7px
        left: 8px
      .stick
        width: 4px
        height: 12px
        border-left: 7px solid #aaa
        border-right: 7px solid #aaa
        position: absolute
        top: 16px
        left: 11px
      &:hover
        opacity: 0.7
</style>
