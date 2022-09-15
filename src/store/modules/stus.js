import axios from '../../javascript/http/axios.js';
export default {
    namespaced: true,
    state: {
        name: '张三123',
        student: [],
        page: {
            total: 0,
            pageTotal: 0,
            pageSize: 5,
            pageIndex: 1,
        },
    },
    getters: {},
    mutations: {
        CHANGE_STUS(state, data) {
            state.student = data;
        },
        CHANGE_PAGE(state, data) {
            state.page = data;
        },
    },
    actions: {
        // 查询所有学生(分页)
        async getStus(store, params) {
            let res = await axios({
                url: '/api/students/getAllStus',
                method: 'get',
                params: store.state.page,
            });
            if (res.status) {
                store.commit('CHANGE_STUS', res.data);
                store.commit('CHANGE_PAGE', res.page);
            }
        },
    },
};
