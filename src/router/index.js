/*
 * @Author: your name
 * @Date: 2020-06-15 12:47:39
 * @LastEditTime: 2020-09-11 21:28:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simc:\Users\31692\Desktop\test\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import login2 from '../views/login/login2.vue'
import login4 from '../views/login/login4.vue'
import Routerstudy from '../views/Vuestudy/Routerstudy.vue'
import Routerstudy1 from '../views/Vuestudy/Routerstudy1.vue'
import main from '../views/Vuestudy/main.vue'
window.eventBus = new Vue();
Vue.use(VueRouter)
Vue.component('loginInput', login2)
Vue.component('loginInput2', login4)
Vue.component('Routerstudy1', Routerstudy1)
Vue.component('Routerstudy', Routerstudy)
const routes = [{
        path: '/',
        name: 'login',
        // 路由懒加载
        component: () =>
            import ('../views/login/login.vue')
    },
    {
        path: '/login3',
        name: 'login3',
        // 路由懒加载
        component: () =>
            import ('../views/login/login3.vue')
    },
    {
        path: '/login5',
        name: 'login5',
        // 路由懒加载
        component: () =>
            import ('../views/login/login5.vue')
    },
    {
        path: '/Routerstudy',
        name: 'Routerstudy',
        component: Routerstudy,
        // children:[
        //   {
        //     path:'/Routerstudy1',
        //     name:'Routerstudy1',
        //     component:Routerstudy1
        //   },
        // ]
    },
    {
        path: '/main',
        name: 'main',
        component: main,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router