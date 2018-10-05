<template>
  <div id="app">
    <div class="head">
      <img class="icon" src="./assets/icon.jpg">
      <h1>
        The Demos/Projects by XXT
      </h1>
    </div>
    <!-- <router-view/> -->
    <div class="demo">
      <div class="demo-left">
        <card class="demo-left-item"
          :title="blog.title"
          :cover="blog.cover"
          :url="blog.url"
          :gif="blog.gif"
          :msg="blog.msg"
        />
      </div>
      <div class="demo-right">
        <card class="demo-right-item"
          v-for="demo in demos"
          :key="demo.id"
          :title="demo.title"
          :cover="demo.cover"
          :url="demo.url"
          :gif="demo.gif"
          :msg="demo.msg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import card from './components/DemoCard.vue'
export default {
  name: 'App',
  components: {
    card
  },
  data () {
    return {
      demos: [
        {
          id: 1,
          title: 'Todo',
          cover: require('./assets/todo.png'),
          url: this.getUrl('todo'),
          gif: require('./assets/todo.gif'),
          msg: '<b>Vue.js@2.x, Webpack@4.0</b>'
        },
        {
          id: 2,
          title: 'Dialog',
          cover: require('./assets/dialog.png'),
          url: this.getUrl('dialog'),
          gif: require('./assets/dialog.gif'),
          msg: '<b>Vue.js@2.x, Webpack@4.0</b>'
        },
        {
          id: 3,
          title: 'Sysu 7th hospital',
          cover: require('./assets/7y.png'),
          url: this.getUrl('7y'),
          msg: '<b>Thinkphp@5.0, Drupal@8.5.3</b>, Mobile Compitable'
        }
      ],
      blog: {
        title: 'Blog',
        cover: require('./assets/blog.png'),
        url: 'https://xuxiantao.github.io',
        msg: '<b>hexo@3.7.1</b>, Customize the <a href="https://yanm1ng.github.io/" target="_blank">vexo theme</a>'
      }
    }
  },
  methods: {
    getUrl (demo) {
      const baseUrl = '.dev.xuxiantao.xin'
      return 'http://' + demo + baseUrl
    }
  }
}
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.head
  .icon
    width 200px
    height 200px
.demo
  display inline-block
  width 1000px
  height 500px
  margin-top 20px
  text-align center
  font-size 0
  &-left
    display inline-block
    width 30%
    height 100%
    padding-right 20px
    box-sizing border-box
    &-item
      width 100%
      height 100%
  &-right
    display inline-block
    width 70%
    height 100%
    text-align left
    vertical-align top
    &-item
      width 49%
      height 48%
      &:nth-child(2n+1) {
        margin-right 2%
      }
      &:nth-child(n+3) {
        margin-top 3%
      }
</style>
