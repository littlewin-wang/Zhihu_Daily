<template>
  <div>
    这是新闻列表区域
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapActions } from 'vuex'

  export default {
    mounted () {
      this.$nextTick(() => {
        this.addIndex()
      })
    },
    methods: {
      ...mapActions(['addIndex'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
