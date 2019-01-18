import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    token: ''
}

const mutations = {
    changeToken(state, token) {
        state.token = token;
    }
}
export default new Vuex.Store({
    state,
    mutations
});