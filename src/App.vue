<template>
  <div class="app">
    <v-header></v-header>
    <router-view keep-alive></router-view>
    <float></float>
  </div>
</template>

<script type="text/ecmascript-6">
  import vHeader from 'components/common/header'
  import float from 'components/common/float'

  export default {
    components: {
      vHeader,
      float
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
