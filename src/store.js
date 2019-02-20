import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Login = 'Login';
const Logout = 'Logout';
export default new Vuex.Store({
  state: {
    login: {
      status: false,
      id: ''
    }
  },
  mutations: {
    [Login] (state, id) {
      let login = {
        status: true,
        id: id
      };
      sessionStorage.setItem("login", login);
    },
    [Logout] (state) {
      let login = {
        status: false,
        id: ''
      };
      sessionStorage.setItem("login", login);
    }
  },
  actions: {

  }
})
