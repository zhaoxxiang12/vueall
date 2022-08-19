import axios from '../http/axios.js'

/**
 * 
 * 查询所有学生
 * @returns 返回promise对象
 */
function getAllStudent(params) {
    return axios({
        url: '/stus/getAllStus',
        method: 'get',
        params
    });
}

/**
 * 
 * 添加学生
 * @param {Object} data 学生对象列表
 * @returns 返回promise对象
 */
function addStudent (data) {
    return axios ({
        url: '/stus/addStudent',
        method: 'post',
        data
    })
}

/**
 * 
 * @param {String} params 学生id
 * @returns 
 */
function delStudent (data) {
    return axios({
        url: '/stus/delStu',
        method: 'delete',
        data
    })
}

/**
 * 
 * @param {String} params 学生Id
 * @returns 
 */
function getStudent (params) {
    return axios({
        url:'/stus/selectId',
        method: 'get',
        params
    })
}

function updateStu (data) {
    return axios ({
        url: '/stus/updstu',
        method: 'post',
        data
    })
}

export default {
    getAllStudent,
    addStudent,
    delStudent,
    getStudent,
    updateStu
}
