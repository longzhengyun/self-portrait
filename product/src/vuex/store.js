import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    initCode: JSON.parse(window.localStorage['localData'] || '{}'),
    headerConfig:{},
    resumeData:{},
    caseData:{}
}

const mutations = {
    isLogin(state, initCode) {
        state.initCode = initCode
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