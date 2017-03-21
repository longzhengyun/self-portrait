import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import store from './vuex/store'
import routes from './router/index'
import App from './App'

import './config'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history'
})

// 全局导航钩子
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        // console.log(isEmptyObject(store.state.user)) 
        if (!isEmptyObject(store.state.user.initCode)) {
            next();
        } else {
            next({
                path: store.state.staticPath + 'login',
                query: {// 将跳转的路由path作为参数，登录成功后跳转到该路由
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next();
    }
})

//判断object是否为空
function isEmptyObject(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
})