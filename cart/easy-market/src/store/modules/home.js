import {getIndex} from '../../services'

const state = {
    banner: []
}

const getters = {

}

const mutations = {
    updateState(state, payload){
        state = Object.assign(state, {...payload})
    }
}

const actions = {
    async getIndex({commit}, payload){
        let result = await getIndex()
        commit('updateState', result);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}