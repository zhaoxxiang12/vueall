import axios from '../http/axios.js';

// 登录
/**
 *
 * @param {Object} data 用户名 密码
 * @returns promise
 */
function login(data) {
    return axios({
        url: '/api/users/login',
        method: 'post',
        data,
    });
}

/**
 *
 * @param {Object} data  用户名 密码
 * @returns  返回promise对象
 */
function register(data) {
    return axios({
        url: '/api/users/register',
        method: 'post',
        data,
    });
}

/**
 *
 * @returns 返回promise对象
 */
function getUserInfo() {
    return axios({
        url: '/api/users/getUserInfo',
        method: 'get',
    });
}

export default {
    login,
    register,
    getUserInfo,
};
