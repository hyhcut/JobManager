const state = {
    status: false,
    id: ''
}

// getters
const getters = {
    logStatus: state => {
        return state.status
    },
    userId: state => {
        return state.id
    }
}
// mutations
const mutations = {
    setLogStatus(state, data){
        state.id = data.id
        state.status = data.status
    }
}

// actions
const actions = {
    logIn({commit, state}, data){
        commit('setLogStatus', data)
    }
}



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
