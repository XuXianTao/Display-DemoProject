<template>
  <div id="app">
    <div class="head">
      <img class="icon" src="./assets/icon.jpg">
      <h1>
        The Demos/Projects by XXT
      </h1>
    </div>
    <!-- <router-view/> -->
    <swiper :options="swiperOption">
      <swiper-slide class="wrapper">
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
              v-for="demo in firstCard"
              :key="demo.id"
              :title="demo.title"
              :cover="demo.cover"
              :url="demo.url"
              :gif="demo.gif"
              :msg="demo.msg"
            />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="wrapper" v-for="n in cardNum" :key="n">
        <div class="demo">
          <div class="demo-other">
            <card class="demo-other-item"
              v-for="demo in otherCard(1)"
              :key="demo.id"
              :title="demo.title"
              :cover="demo.cover"
              :url="demo.url"
              :gif="demo.gif"
              :msg="demo.msg"
            />
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
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
          title: 'Todo(Demo)',
          cover: require('./assets/todo.png'),
          url: this.getUrl('todo'),
          gif: require('./assets/todo.gif'),
          msg: '<h5>2018.7.1-2018.10.1</h5><b>Vue.js@2.x, Webpack@4.0</b>'
        },
        {
          id: 2,
          title: 'Dialog(Demo)',
          cover: require('./assets/dialog.png'),
          url: this.getUrl('dialog'),
          gif: require('./assets/dialog.gif'),
          msg: '<h5>2018.10.1-2018.10.4</h5><b>Vue.js@2.x, Webpack@4.0</b>'
        },
        {
          id: 3,
          title: '中大七院官网(CN)',
          cover: require('./assets/7y.png'),
          url: this.getUrl('7y'),
          msg: '<h5>2018.4.1-2018.8.31</h5><b>Thinkphp@5.0, Drupal@8.5.3</b>, Mobile Compitable'
        },
        {
          id: 4,
          title: '中大七院官网(EN)',
          cover: require('./assets/7y_en.png'),
          url: this.getUrl('en.7y'),
          msg: '<h5>2018.9.1-2018.10.1</h5><b>Thinkphp@5.0, Drupal@8.5.3</b>, Mobile Compitable'
        },
        {
          id: 5,
          title: '中大七院官网(EN)',
          cover: require('./assets/7y_en.png'),
          url: this.getUrl('en.7y'),
          msg: '<h5>2018.9.1-2018.10.1</h5><b>Thinkphp@5.0, Drupal@8.5.3</b>, Mobile Compitable'
        },
        {
          id: 6,
          title: '中大七院官网(EN)',
          cover: require('./assets/7y_en.png'),
          url: this.getUrl('en.7y'),
          msg: '<h5>2018.9.1-2018.10.1</h5><b>Thinkphp@5.0, Drupal@8.5.3</b>, Mobile Compitable'
        }
      ],
      blog: {
        title: 'Blog',
        cover: require('./assets/blog.png'),
        url: 'https://xuxiantao.github.io',
        msg: '<h5>2018.7.1-now</h5><b>hexo@3.7.1</b>, Customize the <a href="https://yanm1ng.github.io/" target="_blank">vexo theme</a>'
      },
      swiperOption: {
        loop: false,
        autoplay: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    firstCard () {
      return this.$data.demos.slice(0, 4)
    },
    cardNum () {
      return Math.floor(this.$data.demos.length / 4)
    }
  },
  methods: {
    getUrl (demo) {
      const baseUrl = '.dev.xuxiantao.xin'
      return 'http://' + demo + baseUrl
    },
    otherCard (nth) {
      return this.$data.demos.slice(4 * nth, 4 * nth + 4)
    }
  }
}
</script>

<style lang="stylus">
body
  overflow hidden
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow visible
  white-space nowrap
}
.head
  .icon
    width 200px
    height 200px
.swiper-container
  overflow visible
.wrapper
  // display inline-block
  width 100%
  text-align center
.demo
  display inline-block
  width 1200px
  height 500px
  margin-top 20px
  overflow visible
  vertical-align top
  font-size 0
  white-space normal
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
  &-other
    display inline-block
    width 1000px
    height 500px
    text-align center
    font-size 0
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
