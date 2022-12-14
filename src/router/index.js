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
import Classes from '../components/classes/classes.vue';
import api from '../javascript/api';
import store from '@/store';
import Test from '../components/mixins/TEST.vue'
import Test2 from '../components/mixins/TEST2.vue'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(error => error);
};

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
            {
                path: 'classes',
                component: Classes,
            },
        ],
        // 导航守卫拦截
        // async beforeEnter(to, from, next) {
        //     // ...
        //     let res = await api.users.getUserInfo();
        //     if (res.status) {
        //         next()
        //     }
        // },
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
    {
        path: '/test',
        component: Test
    },
    {
        path: '/test2',
        component: Test2
    }
];

const router = new VueRouter({
    routes,
});

// 全局前置守卫
// router.beforeEach((to, from, next) => {
//     // to 到哪里去 目标
//     console.log(to.path);
//     // from 原目标
//     // 放行
//     if (to.path == '/user/login' || to.path == '/user/register') {
//         next();
//     } else {
//         if (localStorage.token) {
//             next();
//         } else {
//             router.push('/user/login');
//         }
//     }
// });

// router.beforeEach(async (to, from, next) => {
//     if (to.path == '/login' || to.path == '/user/register') {
//         next();
//     } else {
//         if (store.state.users.user) {
//             next();
//         } else {
//             let res = await api.users.getUserInfo();
//             if (res?.status) {
//                 store.commit('CHANGE_USERS', res.data);
//                 next();
//             }
//         }
//     }
// });

// 暴露路由对象
export default router;
