<template>
  <div class="introduce" ref="md">
    <button class="btn" @touchstart="showMd" @click="showMd">?</button>
    <md class="markdown"></md>
    <div class="wrapper" @click="hideMd"></div>
  </div>
</template>

<script>
export default {
  props: {
    mdfile: {
      type: String,
      required: true
    }
  },
  methods: {
    showMd () {
      this.$refs.md.classList.add('active')
    },
    hideMd () {
      this.$refs.md.classList.remove('active')
    }
  },
  created () {
    this.$options.components.md = () => import('../' + this.$props.mdfile)
  }
}
</script>

<style lang="stylus" scoped>
.introduce
  theme-dark= #35495E
  theme-green= #41B883
  z-index 100
  position fixed
  text-align left
  .wrapper
    visibility hidden
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    transition background-color .5s, visibility .5s
  .btn
    position fixed
    top 10px
    left 10px
    z-index 100
    width 50px
    height @width
    border none
    outline none
    box-shadow 0 0 5px theme-dark
    background-color theme-green
    font-size 20px
    font-weight bolder
    line-height @font-size
    text-align center
    color white
    transition box-shadow .5s, transform .5s
    &:active
      box-shadow 0 0 15px theme-dark
    &:hover
      transform scale(1.2)
  .markdown
    visibility hidden
    opacity 0
    position fixed
    z-index 100
    left 50%
    top 50px
    box-sizing border-box
    width 60%
    height 75%
    margin-left -(@width / 2)
    padding 20px
    background-color white
    overflow auto
    white-space normal
    transition opacity .5s, visibility .5s
    @media screen and (max-width 1200px) {
      top 80px
      left 0
      width 100vw
      margin-left 0
    }
  &.active
    .wrapper
      visibility visible
      background-color rgba(100, 100, 100, .5)
    .markdown
      visibility visible
      opacity 1
</style>
