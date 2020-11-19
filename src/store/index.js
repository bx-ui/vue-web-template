import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

import user from "./user.js"

export default new Vuex.Store({
  modules: {
    user
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      reducer(val) {
        return {
          // 需要储存的数据
          user: val.user
        };
      }
    })
  ]
})
