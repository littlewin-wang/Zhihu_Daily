<template>
  <div class="list">
    <ul>
      <li v-for="item in items" :title="item.name" @click="link(item.id)">
        <img :src="imgProxy(item.thumbnail)" width="40" height="40">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import { imgProxy } from 'common/js/utils'

  export default {
    props: {
      items: Array,
      type: String
    },
    methods: {
      imgProxy,
      link (id) {
        this.$router.push(`/${this.type}/${id}`)
        this.$parent.type = ''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .list
    position: absolute
    top: 80px
    right: 0
    background: #fff
    color: #aaa
    z-index: 1001
    font-size: 1.6rem
    padding: 2px
    ul
      margin: 0
      padding: 0
      li
        padding: 3px
        line-height: 20px
        cursor: pointer
        &:hover
          background: #eee
</style>
