import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import NavHeader from './components/NavHeader/NavHeader'
import store from './store'
import Stars from './components/Stars/Stars'
//全局注册组件
Vue.component('NavHeader',NavHeader)
Vue.component('Stars',Stars)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  Stars
})
