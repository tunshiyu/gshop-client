import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
/*配置路由器*/
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes
})

