//先引入需要路由的文件
import Login from '../components/Login'
import Main from '../components/Main'
import CaseList from '../components/CaseList'

export default [
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/main',
        meta: {// 添加该字段，表示进入这个路由是需要登录的
            requireAuth: true
        },
        component: Main
    },
    {
        path: '/caselist',
        meta: {
            requireAuth: true
        },
        component: CaseList
    }
]