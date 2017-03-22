import store from '../vuex/store'

//先引入需要路由的文件
import Login from '../components/Login'
import Main from '../components/Main'
import CaseList from '../components/CaseList'
import CaseDetail from '../components/CaseDetail'

export default [
    {
        path: store.state.staticPath,
        redirect: store.state.staticPath + 'main'
    },
    {
        path: store.state.staticPath + 'login',
        component: Login
    },
    {
        path: store.state.staticPath + 'main',
        meta: {// 添加该字段，表示进入这个路由是需要登录的
            requireAuth: true
        },
        component: Main
    },
    {
        path: store.state.staticPath + 'caselist',
        meta: {
            requireAuth: true
        },
        component: CaseList,
        children: [
            {
                path: ':id',
                component: CaseDetail,
                meta: {
                    requireAuth: true
                }
            }
        ]
    }
]