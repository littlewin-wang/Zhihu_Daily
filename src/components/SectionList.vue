<template>
  <div class="sectionlist">
    <div class="section" v-if="sectionList.stories">
      <newsitem v-for="news in sectionList.stories" track-by="id" :item="news"></newsitem>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import newsitem from './common/newsitem'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {
      newsitem
    },
    computed: {
      ...mapGetters(['sectionList']),
      id () {
        return this.$route.params.id
      }
    },
    methods: {
      ...mapActions(['getSectionList'])
    },
    mounted () {
      this.$emit('loadingStart')
      this.getSectionList(this.$route.params.id)
          .then(() => {
            this.$emit('loadingDone')
          })
    },
    watch: {
      id () {
        this.$emit('loadingStart')
        this.getSectionList(this.$route.params.id)
            .then(() => {
              this.$emit('loadingDone')
            })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
