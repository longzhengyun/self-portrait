import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import store from './vuex/store'
import routes from './router/index'
import App from './App'

import './config'

Vue.use(VueResource)
Vue.use(VueRouter)

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition
    } else {
        const position = {}
        // new navigation.
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash
        }
        
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }

        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position
    }
}

const router = new VueRouter({
    base: ROUTER_PATH,
    scrollBehavior,
    routes,
    mode: 'history'
})

// 全局导航钩子
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        // console.log(isEmptyObject(store.state.user)) 
        if (isPass(store.state.localData)) {
            next();
        } else {
            next({
                path: '/login',
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
function isPass(obj) {
    var now = new Date().getTime();
    if((obj.code == CODE) && (now - obj.date) < 3600000){
        obj.date = now;
        window.localStorage['localData'] = JSON.stringify(obj);//本地存储用户信息
        return true;
    }else{
        window.localStorage.removeItem('localData'); //清除本地存储用户数据
        return false;
    };
}

new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
})