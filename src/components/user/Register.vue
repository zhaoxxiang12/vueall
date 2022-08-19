<template>
    <div>
        <h1>注册</h1>
        用户名:
        <input type="text" v-model="user.username" />
        <br />
        密码：
        <input type="password" v-model="user.password" />
        <br />
        <button type="button" @click="register">注册</button>
        <router-link to="/user/login">已有账号？去登录</router-link>
    </div>
</template>

<script>
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
        async register() {
            let res = (await this.api.users.register(this.user)).data;
            if (res.status) {
              alert(res.msg);
              this.$router.push('/user/login')
            } else {
              alert(res.msg)
            }
        },
    },
};
</script>

<style></style>
