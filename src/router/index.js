import Vue from 'vue';
import VueRouter from 'vue-router';
import Student from '../components/student/Student.vue';
import FrontPage from '../components/FrontPage.vue';
import StudentAdd from '../components/student/StudentAdd.vue';
import StudentList from '../components/student/StudentList.vue';
import User from '../components/user/User.vue';
import Register from '../components/user/Register.vue';
import UserLogin from '../components/user/UserLogin.vue';
import StudentUpdate from '../components/student/StudentUpdate.vue';

Vue.use(VueRouter);

// 配置(url和组件的映射)
const routes = [
    {
        path: '/',
        redirect: '/user/login',
    },
    {
        path: '/student',
        component: Student,
        children: [
            {
                path: 'studentAdd',
                component: StudentAdd,
            },
            {
                path: 'StudentList',
                component: StudentList,
            },
            {
                path: 'StudentUpdate',
                component: StudentUpdate,
            },
        ],
    },
    {
        path: '/frontPage',
        component: FrontPage,
    },
    // 用户
    {
        path: '/user',
        component: User,
        children: [
            {
                path: 'register',
                component: Register,
            },
            {
                path: 'login',
                component: UserLogin,
            },
        ],
    },
];

const router = new VueRouter({
    routes,
});

// 暴露路由对象
export default router;
