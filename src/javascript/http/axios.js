import axios from 'axios';
import router from '../../router/index.js';

let newAxios = axios.create({
    baseURL: process.env.VUE_APP_URL,
    timeout: 3000,
});

// 拦截响应
newAxios.interceptors.response.use(
    config => {
        // return 表示放行
        return config.data;
    },
    error => {
        if (error?.response?.status == 401) {
            alert('请登录');
            router.push('/user/login');
        }
    }
);

// 拦截请求
newAxios.interceptors.request.use(
    config => {
        //挂载token到请求头
        config.headers.Authorization = localStorage.token;

        //一定要放行，不放行，任何的ajax都发不出去
        return config;
    },
    err => {
        return err;
    }
);

export default newAxios;
