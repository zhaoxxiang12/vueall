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
                <th>头像</th>
                <th>班级</th>
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
                        <img
                            :src="`http://localhost:3131/images/${item.head}`"
                            alt=""
                            style="width: 50px"
                        />
                    </td>
                    <td>{{ item.class_id.cname }}</td>
                    <td>
                        <button type="button" @click="delStu(item._id)">删除</button>
                        <button type="button" @click="goUpdate(item._id)">修改</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="8">
                        <Page :pageArray="[5, 10, 15]" @go="show" :total="page.total" />
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import Page from '../utils/Page.vue';
export default {
    data() {
        return {
            student: [],
            page: {
                total: 0,
                pageTotal: 0,
                pageSize: 5,
                pageIndex: 1,
            },
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
        async show({ pageSize = 5, pageIndex = 1 } = {}) {
            let res = (await this.api.students.getAllStudent({pageSize, pageIndex})).data;
            if (res.status) {
                this.student = res.data;
                this.page = res.page;
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
    components: { Page },
};
</script>

<style>
.canClick {
    cursor: pointer;
    color: blue;
    pointer-events: auto;
}

.disabled {
    cursor: default;
    color: gray;
    pointer-events: none;
}
</style>
