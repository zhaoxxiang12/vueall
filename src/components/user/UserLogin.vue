<template>
    <div>
        <h1>登录</h1>
        用户名：
        <input type="text" v-model="user.username" />
        <br />
        密码：
        <input type="password" v-model="user.password" />
        <br />
        <button type="button" @click="login">登录</button>
        <router-link to="/user/register">没有账号？去注册</router-link>
    </div>
</template>

<script>
// export default {
//     data() {
//         return {
//             user: {
//                 username: '',
//                 password: '',
//             },
//         };
//     },
//     methods: {
//         async login() {
//             let res = (await this.api.users.login(this.user));
//             if (res.status) {
//                 alert(res.msg)
//                 localStorage.setItem('token', res.token)
//                 this.$router.push('/student/studentList');
//             } else {
//                 alert(res.msg)
//             }
//         },
//     },
// };

// 使用模块化进行登录
import { createNamespacedHelpers } from 'vuex';
let { mapState: mapState_users, mapActions: mapActions_users } = createNamespacedHelpers('users');
export default {
    data() {
        return {
            user: {
                username: '',
                password: '',
            },
        };
    },
    methods: {
        ...mapActions_users(['userLogin']),
        async login() {
            let res = await this.userLogin(this.user);
            if (res.status) {
                alert(res.msg);
                localStorage.setItem('token', res.token);
                this.$router.push('/student/studentList');
            } else {
                alert(res.msg);
            }
        },
    },
    computed: {},
};
</script>

<style></style>
