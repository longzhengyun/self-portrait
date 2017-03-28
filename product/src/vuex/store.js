import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    localData: JSON.parse(window.localStorage['localData'] || '{}'),
    headerConfig:{},
    resumeData:{},
    caseData:{}
}

const mutations = {
    isLogin(state, localData) {
        state.localData = localData
    },
    setHeaderConfig(state, headerConfig){
        state.headerConfig = headerConfig
    },
    getResumeData(state, resumeData){
        state.resumeData = resumeData
    },
    getCaseData(state, caseData){
        state.caseData = caseData
    }
}

export default new Vuex.Store({
    state,
    mutations
})