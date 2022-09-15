import axios from '../../javascript/http/axios.js';

export default {
    namespaced: true,
    state: {
        user: {
            username: '',
            password: '',
        },
    },
    getters: {},
    mutations: {
        CHANGE_USERS(state, data) {
            state.user = data;
        },
    },
    actions: {
        async getUserInfo(store, params) {
            return await axios({
                url: '/api/users/getUserInfo',
                method: 'get',
                params,
            });
        },

        async userLogin(store, data) {
            return await axios({
                url: '/api/users/login',
                method: 'post',
                data,
            });
        },
    },
};
