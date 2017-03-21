import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    staticPath: '/',
    // staticPath: '/resume/',
    user: JSON.parse(window.localStorage['localData'] || '{}'),
    headerConfig:{},
    resumeData:{}
}

const mutations = {
    isLogin(state, user) {
        state.user = user
    },
    setHeaderConfig(state, headerConfig){
        state.headerConfig = headerConfig
    },
    getResumeData(state, resumeData){
        state.resumeData = resumeData
    }
}

export default new Vuex.Store({
    state,
    mutations
})