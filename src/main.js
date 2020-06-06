import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import feather from 'vue-icon'
import Ripple from 'vue-ripple-directive'

Vue.directive('ripple', Ripple);
Vue.use(feather, 'v-icon')

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')