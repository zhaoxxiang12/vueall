import axios from '../javascript/http/axios.js';
import Vue from 'vue';
import Vuex from 'vuex';
import stus from '../store/modules/stus.js';
import users from '../store/modules/users.js';

Vue.use(Vuex);

// export default new Vuex.Store({
//     state: {
//         name: '吕布',
//         student: [],
//     },
//     getters: {},
//     mutations: {
//         CHANGE_NAME(state, data) {
//             state.name = data;
//         },
//         CHANGE_STUS(state, data) {
//             state.student = data;
//         },
//     },
//     actions: {
//         async getStus(store,params) {
//             // 方式一
//             // return await axios({
//             //       url: '/api/students/getAllStus',
//             //       method: 'get',
//             //       params,
//             //   });

//             // 方式二
//             let res = await axios({
//                 url: '/api/students/getAllStus',
//                 method: 'get',
//                 params,
//             });
//             store.commit("CHANGE_STUS",res.data)
//         },
//     },
//     modules: {},
// });
export default new Vuex.Store({
    modules: {
      stus,
      users
    }
  })