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
                        <select v-model="page.pageSize" @change="change">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                        &nbsp;
                        <a href="" @click.prevent="first">首页</a>
                        &nbsp;
                        <a
                            href=""
                            @click.prevent="prev"
                            :class="page.pageIndex == 1 ? { disabled: true } : { canClick: true }"
                        >
                            上一页
                        </a>
                        &nbsp;
                        <a
                            href=""
                            @click.prevent="next"
                            :class="
                                page.pageIndex == page.pageTotal
                                    ? { disabled: true }
                                    : { canClick: true }
                            "
                        >
                            下一页
                        </a>
                        &nbsp;
                        <a href="" @click.prevent="last">尾页</a>
                        &nbsp; 第
                        <span>{{ page.pageIndex }}</span>
                        页 / 共
                        <span>{{ page.total }}</span>
                        条 &nbsp; 共
                        <span>{{ page.pageTotal }}</span>
                        页
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
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

        async show() {
            let res = (await this.api.students.getAllStudent(this.page)).data;
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
        // 首页
        first() {
            this.page.pageIndex = 1;
            this.show();
        },
        // 上一页
        prev() {
            if (this.page.pageIndex > 1) {
                this.page.pageIndex--;
                this.show();
            }
        },
        // 下一页
        next() {
            if (this.page.pageIndex < this.page.pageTotal) {
                this.page.pageIndex++;
                this.show();
            }
        },
        // 尾页
        last() {
            this.page.pageIndex = this.page.pageTotal;
            this.show();
        },
        change() {
            this.page.pageIndex = 1;
            this.show();
        },
    },
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
