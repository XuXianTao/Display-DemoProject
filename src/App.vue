<template>
  <div id="app">
    <div class="head">
      <img class="icon" src="./assets/icon.jpg">
      <h1>
        The Demos/Projects by <a :href="person" target="_blank">XXT</a>
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
    <Introduce mdfile="intro.md"/>
  </div>
</template>

<script>
import card from './components/DemoCard.vue'
import Introduce from './components/introduce.vue'
export default {
  name: 'App',
  components: {
    card,
    Introduce
  },
  data () {
    return {
      person: 'http://xuxiantao.xin/person',
      demos: [
        {
          id: 1,
          title: 'Todo(Demo)',
          cover: require('./assets/todo.png'),
          url: this.getUrl('todo'),
          gif: require('./assets/todo.gif'),
          msg: '<h5>2018.7.1-2018.10.1</h5><h4>Vue.js@2.x, Webpack@4.x</h4>入门Vuejs组件化开发'
        },
        {
          id: 2,
          title: 'Dialog(Demo)',
          cover: require('./assets/dialog.png'),
          url: this.getUrl('dialog'),
          gif: require('./assets/dialog.gif'),
          msg: '<h5>2018.10.1-2018.10.4</h5><h4>Vue.js@2.x, Webpack@4.x</h4>聊天Demo的入门开发(后续做线上版,以熟悉Vue接口操作)'
        },
        {
          id: 3,
          title: '中大七院官网(CN)',
          cover: require('./assets/7y.png'),
          url: this.getUrl('7y'),
          gif: require('./assets/7y.gif'),
          msg: '<h5>2018.4.1-2018.8.31</h5><h4>Thinkphp@5.0, Drupal@8.5.3</h4>移动端适配，JsonApi接口'
        },
        {
          id: 4,
          title: '中大七院官网(EN)',
          cover: require('./assets/7y_en.png'),
          url: this.getUrl('en.7y'),
          gif: require('./assets/7y_en.gif'),
          msg: '<h5>2018.9.1-2018.10.1</h5><h4>Thinkphp@5.0, Drupal@8.5.3</h4>移动端适配，复用中文版官网部分逻辑函数，重构优化代码逻辑，独立开发'
        },
        {
          id: 5,
          title: '基于Thinkphp的rest接口',
          cover: require('./assets/tp.png'),
          url: this.getUrl('tp'),
          msg: `
          <h5>2018.9.1-2018.10.1</h5>
          <h4>Thinkphp@5.1</h4>
          <a href="https://github.com/XuXianTao/thinkphp5.1-restfulapi__custom#thinkphp51-rest-api---for-smart-car" target="_blank">在线文档</a><br>
          目前线上版本没有导入数据`
        },
        {
          id: 6,
          title: '教学辅助系统(Undone)',
          cover: require('./assets/lab.png'),
          url: this.getUrl('lab'),
          gif: require('./assets/lab.gif'),
          msg: `<h5>2018.9.1-2018.10.1</h5><h4>Thinkphp@5.1</h4>
          学生签到统计,故障反馈|维护|统计,助理工作时长登记(Excel导入导出等)`
        }
      ],
      blog: {
        title: 'Blog',
        cover: require('./assets/blog.png'),
        url: 'https://xuxiantao.github.io',
        msg: `<h5>2018.7.1-now</h5><h4>hexo@3.7.1</h4>
        基于<a href="https://yanm1ng.github.io/" target="_blank">vexo theme</a>的二次开发,
        添加了鼠标效果，修改首页布局，将归档模块改到右侧作为快捷导航，记录了大大小小的开发遇到到的问题`
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
  overflow-x hidden
  overflow-y scroll
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 150px
  overflow visible
  white-space nowrap
}
.head
  .icon
    width 200px
    height 200px
.swiper-container
  overflow visible !important
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
