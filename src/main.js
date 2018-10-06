// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'

Vue.config.productionTip = false

Vue.use(VueSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
