<template>
  <div class="card">
    <a :href="url" target="_blank" class="content" @mouseenter="changeGif" @mouseout="changeCover">
      <div class="card-bg" ref="cardbg"></div>
      <div class="card-bg2"></div>
      <div class="card-title">
        <div class="card-title__bar">{{title}}</div>
      </div>
      <progressive-background class="card-img" ref="card" :src="demo_img"/>
      <img class="card-img__gif" :src="gif"/>
    </a>
    <div class="card-msg" v-html="msg">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueProgressiveImage from 'vue-progressive-image'
Vue.use(VueProgressiveImage, {
  blur: 30
})
export default {
  props: {
    title: String,
    cover: String,
    url: String,
    gif: String,
    msg: String
  },
  data () {
    return {
      demo_img: ''
    }
  },
  methods: {
    changeGif (ev) {
      if (this.$props.gif) {
        this.$data.demo_img = this.$props.gif
      }
      this.$refs.cardbg.style.visibility = 'hidden'
    },
    changeCover (ev) {
      this.$data.demo_img = this.$props.cover
      this.$refs.cardbg.style.visibility = 'visible'
    }
  },
  created () {
    this.$data.demo_img = this.$props.cover
  }
}
</script>

<style lang="stylus" scoped>
.card
  th-green = #41B883
  th-dark = #35495E
  z-index 0
  position relative
  display inline-block
  box-shadow 0 0 10px th-dark
  transition transform .5s, z-index .5s
  .content
    display inline-block
    width 100%
    height 100%
    background-color white
    background-repeat no-repeat
    background-size cover
    background-position center
    overflow hidden
    text-align center
  &:hover
    z-index 100
    transform scale(1.5)
    .card-msg
      left 100%
  &-bg
    z-index 50
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background-color rgba(255, 255, 255, .5)
  &-bg2
    z-index 50
    position absolute
    width 100%
    height 100%
  &-img
    display inline-block
    height 100%
    &__gif
      width 0
      height 0
      visibility hidden
  &-title
    title-bg = rgba(0, 0, 0, .5)
    z-index 100
    pointer-events none
    display inline-block
    position absolute
    top 10px
    left 0
    width 70%
    margin-left -5px
    text-align left
    text-indent 10px
    background-color title-bg
    font-size 25px
    font-weight bolder
    line-height 40px
    color white
    &__bar
      width 100%
      overflow-x hidden
      text-overflow ellipsis
      &:before
        tri-width = 5px
        content ' '
        position absolute
        left 0
        top - tri-width
        width 0
        height 0
        border-top tri-width solid transparent
        border-right tri-width solid rgba(title-bg, .3)
  &-msg
    z-index -10
    position absolute
    top 0
    left 0
    box-sizing border-box
    // max-width 100%
    height 100%
    padding 5px
    background-color th-green
    text-align left
    font-size 15px
    overflow hidden
    color white
    transition left .5s
</style>
