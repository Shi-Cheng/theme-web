import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import './utils/permission'
import store from './store/index'

/*
* 自定义组件库
* */
import { SearchCard, ThemeFooter } from './components'

// 解决方式如下 NavigationDuplicated
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(SearchCard)
Vue.use(ThemeFooter)
Vue.prototype.axios = axios

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
