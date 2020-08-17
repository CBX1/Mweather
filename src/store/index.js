import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const state= {
  windspeed: null,
  pressure: null,
  temp_yesterday:null,
  temp_today: null,
  date: null,
  winddirection: null,
  alltrue:false,
};
const mutations = {
setwindspeed(state, num){
  state.windspeed = num;
},
switchalltrue(state){
state.alltrue=true;
},
switchalltruefalse(state){
  state.alltrue=false;
},
setpressure(state, num){
  state.pressure = num;
},
set_temp_yesterday(state, num){
  state.temp_yesterday = num;
},
settemp_today(state, num){
  state.temp_today = num;
},
setdate(state, num){
  state.date = num;
},
setwinddirection(state, num){
  state.winddirection = num;
},


};
const actions = {
    setwindspeed({commit}, num){
      commit('setwindspeed', num);
    },
    setpressure({commit}, num){
      commit('setpressure', num);
    },
    set_temp_yesterday({commit}, num){
      commit('set_temp_yesterday', num);
    },
    settemp_today({commit}, num){
      commit('settemp_today', num);
    },
    setdate({commit}, num){
      commit('setdate', num);
    },
    setwinddirection({commit}, num){
      commit('setwinddirection', num);
    },
    switchalltrue({commit}){
      commit('switchalltrue');
    },
    switchalltruefalse({commit}){
      commit('switchalltruefalse');
    },
};
const getters = {};

/* eslint-disable no-new */
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersistedState()],
  modules: {
  }
})

export default store
