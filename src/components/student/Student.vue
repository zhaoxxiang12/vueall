<template>
    <div>
        <h1>student</h1>
        <router-link to="/frontPage">跳转到首页</router-link>
        <div style="display: flex">
            <ul>
                <li>
                    <router-link to="/student/studentList">学生列表</router-link>
                </li>
                <li>
                    <router-link to="/student/studentAdd">学生添加</router-link>
                </li>
            </ul>
            <div style="flex-grow: 1; border: 1px solid red">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
