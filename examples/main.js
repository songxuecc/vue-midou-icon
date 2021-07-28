import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import MdUi from '../src'
const IconFont = MdUi.createFromIconfontCN({
  scriptUrl:[
    '//at.alicdn.com/t/font_2290850_u39lgeyfiz.js'
  ],
  // name可以不写 默认为 md-icon
  name: 'example-icon',
})

// 注册组件库
Vue.use(IconFont)
Vue.use(MdUi)


Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')