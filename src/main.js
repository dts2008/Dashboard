import Vue from 'vue'
import './plugins/vuetify'
import { i18n } from './i18n'
import App from './App.vue'
import router from './router'
//import i18n from './i18n'

Vue.config.productionTip = false


const vue = new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')


export default vue.$children[0];