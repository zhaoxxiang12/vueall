<template>
    <div>
        <h1>学生列表</h1>
        <table border="1" cellspacing="0" cellpadding="0" align="center">
            <thead>
                <th>编号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>爱好</th>
                <th>性别</th>
                <th>操作</th>
            </thead>
            <tbody>
                <tr v-for="item in student" :key="item.id">
                    <td>{{ item._id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.age }}</td>
                    <td>{{ item.hobby.join() }}</td>
                    <td>{{ item.gender == 0 ? '女' : '男' }}</td>
                    <td>
                        <button type="button" @click="delStu(item._id)">删除</button>
                        <button type="button" @click="goUpdate(item._id)">修改</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            student: [],
        };
    },
    async created() {
        this.show();
    },
    methods: {
        async delStu(_id) {
            let res = (await this.api.students.delStudent({ _id })).data;
            if (res.status) {
                alert(res.msg);
                this.show();
            } else {
                alert('删除失败');
            }
        },

        async show() {
            let res = (await this.api.students.getAllStudent()).data;
            if (res.status) {
                this.student = res.data;
            }
        },
        goUpdate(id) {
            this.$router.push({
                path: '/student/StudentUpdate',
                query: {
                    id: id,
                },
            });
        },
    },
};
</script>

<style></style>
