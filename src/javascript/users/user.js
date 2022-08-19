import axios from '../http/axios.js'

// 登录
/**
 * 
 * @param {Object} data 用户名 密码 
 * @returns promise
 */
function login (data) {
    return axios ({
        url: '/users/login',
        method: 'post',
        data
    })
}

/**
 * 
 * @param {Object} data  用户名 密码
 * @returns  返回promise对象
 */
function register (data) {
    return axios ({
        url: '/users/register',
        method: 'post',
        data
    })
}

export default {
    login, register
}