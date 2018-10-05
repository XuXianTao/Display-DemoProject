<template>
  <div class="card">
    <a :href="url" target="_blank" class="content" ref="card" :style="{'background-image': 'url(' + cover + ')'}" @mouseenter="changeGif" @mouseout="changeCover">
      <div class="card-bg" ref="cardbg"></div>
      <div class="card-bg2"></div>
      <div class="card-title">
        <div class="card-title__bar">{{title}}</div>
      </div>
    </a>
    <div class="card-msg" v-html="msg">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    cover: String,
    url: String,
    gif: String,
    msg: String
  },
  methods: {
    changeGif (ev) {
      if (this.$props.gif) this.$refs.card.style.backgroundImage = 'url(' + this.$props.gif + ')'
      this.$refs.cardbg.style.visibility = 'hidden'
    },
    changeCover (ev) {
      this.$refs.card.style.backgroundImage = 'url(' + this.$props.cover + ')'
      this.$refs.cardbg.style.visibility = 'visible'
    }
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
    z-index 0
    display inline-block
    width 100%
    height 100%
    background-repeat no-repeat
    background-size cover
    background-position center
  &:hover
    z-index 100
    transform scale(1.5)
    .card-msg
      left 100%
  &-bg
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background-color rgba(255, 255, 255, .5)
  &-bg2
    position absolute
    width 100%
    height 100%
  &-title
    title-bg = rgba(0, 0, 0, .5)
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
        border-right tri-width solid title-bg
  &-msg
    z-index -10
    position absolute
    top 0
    left 0
    box-sizing border-box
    max-width 100%
    height 100%
    padding 10px
    background-color th-green
    text-align left
    font-size 30px
    color white
    transition left .5s
</style>
