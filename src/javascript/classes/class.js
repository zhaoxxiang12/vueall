import axios from "../http/axios.js";

/**
 * 
 * @param {*} params 
 * @returns 返回班级promis对象
 */
function getClasses (params) {
    return axios({
        url: '/api/class/getClassesInfo',
        method: 'get',
        params
    })
}

/**
 * 
 * @param {String} params 
 * @returns 
 */
function getClassesByPage (params) {
    return axios({
        url: '/api/class/getClassesInfoByPage',
        method: 'get',
        params
    })
}

export default {
    getClasses,
    getClassesByPage
}