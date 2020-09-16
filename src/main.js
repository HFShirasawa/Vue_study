/*
 * @Author: your name
 * @Date: 2020-06-15 12:47:39
 * @LastEditTime: 2020-09-14 10:24:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simc:\Users\31692\Desktop\test\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs';
// 引入淘宝适配方案
import 'lib-flexible'

Vue.config.productionTip = false
window.eventBus = new Vue();
Vue.prototype.$ajax = axios
Vue.prototype.$qs = qs

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')