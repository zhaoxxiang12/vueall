<template>
    <div>
        <h1>student</h1>
        <h2>
            欢迎您
            <span>{{user.username}}</span>
        </h2>
        <router-link to="/frontPage">跳转到首页</router-link>
        <div style="display: flex">
            <ul>
                <li>
                    <router-link to="/student/studentList">学生列表</router-link>
                </li>
                <li>
                    <router-link to="/student/studentAdd">学生添加</router-link>
                </li>
                <li>
                    <router-link to="/student/classes">班级列表</router-link>
                </li>
            </ul>
            <div style="flex-grow: 1; border: 1px solid red">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
let { mapState: mapState_users, mapActions: mapActions_users } = createNamespacedHelpers('users');
export default {
    data () {
        return {
            user: {

            }
        }
    },
    methods: {
        ...mapActions_users(['getUserInfo']),
    },
    async created() {
        let res = await this.getUserInfo();
        if (res.status) {
            this.user = res.data
        }
    },
};
</script>

<style></style>
