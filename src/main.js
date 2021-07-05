import Vue from 'vue'
import App from './App.vue'
import axiosPlugin from '../plugins/axios'

Vue.config.productionTip = false
Vue.config.errorHandler = function(err, vm, info) {
  vm.$errors(err, info)  
}
Vue.use(axiosPlugin)

new Vue({
  render: h => h(App)
}).$mount('#app')
