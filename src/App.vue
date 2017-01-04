<template>
  <div class="app">
    <v-header></v-header>
    <loading :mask="false" v-if="isShow"></loading>
    <router-view keep-alive @loadingDone="closeLoading" @loadingStart="startLoading"></router-view>
    <float></float>
  </div>
</template>

<script type="text/ecmascript-6">
  import loading from 'components/common/loading'
  import vHeader from 'components/common/header'
  import float from 'components/common/float'

  export default {
    data () {
      return {
        isShow: true
      }
    },
    methods: {
      startLoading () {
        this.isShow = true
      },
      closeLoading () {
        this.isShow = false
      }
    },
    components: {
      loading,
      vHeader,
      float
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
