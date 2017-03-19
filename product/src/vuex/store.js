import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    user: {},
    headerConfig:{}
}

const mutations = {
    isLogin(state, user) {
        state.user = user
    },
    headerConfig(state, headerConfig){
        state.headerConfig = headerConfig
    }
}

export default new Vuex.Store({
    state,
    mutations
})