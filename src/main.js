import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css'  //保持各浏览器css效果一样
import 'nprogress/nprogress.css'  // 加载进度条

import './components'  //引入全局组件

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import './styles.scss'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
