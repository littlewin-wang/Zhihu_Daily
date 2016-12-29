<template>
  <div class="app">
    <v-header></v-header>
    <router-view keep-alive></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import vHeader from 'components/common/header'
  export default {
    components: {
      vHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
