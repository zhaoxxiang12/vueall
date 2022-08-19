import axios from "../http/axios.js";

/**
 * 
 * @param {*} params 
 * @returns 返回班级promis对象
 */
function getClasses (params) {
    return axios({
        url: '/clas/getAllClasses',
        method: 'get',
        params
    })
}

export default {
    getClasses
}