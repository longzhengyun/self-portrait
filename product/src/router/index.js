//先引入需要路由的文件
import Login from '../components/Login'
import Main from '../components/Main'
import CaseList from '../components/CaseList'
import CaseDetail from '../components/CaseDetail'
import Info from '../components/Info'
import Skill from '../components/Skill'
import Experience from '../components/Experience'
import Other from '../components/Other'

export default [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/main',
        meta: {// 添加该字段，表示进入这个路由是需要登录的
            requireAuth: true,
            scrollToTop: true
        },
        component: Main
    },
    {
        path: '/caselist',
        meta: {
            requireAuth: true
        },
        component: CaseList
    },
    {
        path: '/casedetail/:id',
        meta: {
            scrollToTop: true
        },
        component: CaseDetail
    },
    {
        path: '/info',
        meta: {
            requireAuth: true,
            scrollToTop: true
        },
        component: Info
    },
    {
        path: '/skill',
        meta: {
            requireAuth: true,
            scrollToTop: true
        },
        component: Skill
    },
    {
        path: '/experience',
        meta: {
            requireAuth: true,
            scrollToTop: true
        },
        component: Experience
    },
    {
        path: '/other',
        meta: {
            requireAuth: true,
            scrollToTop: true
        },
        component: Other
    },
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '*',
        redirect: '/main'
    }
]