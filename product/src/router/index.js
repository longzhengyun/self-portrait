import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Info from '@/components/Info'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'Info',
        meta: {
            requireAuth: true //添加字段，表示进入这个路由需要登录
        },
        component: Info
    }, {
        path: '/info',
        name: 'Info',
        meta: {
            requireAuth: true //添加字段，表示进入这个路由需要登录
        },
        component: Info
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }],
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        next({
            path: '/login',
            query: {
                redirect: to.fullPath
            } //将跳转的路由path作为参数，登录成功后跳转到该路由
        });
    } else {
        next();
    }
});

export default router;