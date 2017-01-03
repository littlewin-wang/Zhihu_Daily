<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in list">
        <router-link :to="item.url">
          <img v-lazy="imgProxy(item.image)">
          <p>{{ item.title }}</p>
        </router-link>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
  import { imgProxy } from 'common/js/utils'

  export default {
    props: {
      list: Array
    },
    mounted () {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          direction: 'horizontal',
          loop: true,
          autoplay: 2500,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplayDisableOnInteraction: false,
          preventClicks: false
        })
      })
    },
    methods: {
      imgProxy
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    max-width: 640px
    height: 640px

  .swiper-slide
    position: relative
    cursor: pointer
    img[lazy=loading]
      position: absolute
      width: 440px
      height: 290px
      left: 50%
      top: 50%
      margin-left: -220px
      margin-top: -145px
    p
      width: 70%
      word-wrap: break-word
      position: absolute
      text-align: center
      bottom: 30px
      left: 15%
      color: #fff
      cursor: pointer
</style>
