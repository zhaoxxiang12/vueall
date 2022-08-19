<template>
    <div>
        <h1>学生修改</h1>
        <div style="width: 500px; height: 500px; border: 1px solid red; margin: 0 auto">
            姓名:
            <input type="text" v-model="student.name" />
            <br />
            年龄:
            <input type="text" v-model="student.age" />
            <br />
            性别: 男
            <input type="radio" v-model="student.gender" value="1" />
            女
            <input type="radio" v-model="student.gender" value="0" />
            <br />
            爱好: 睡觉
            <input type="checkbox" v-model="student.hobby" value="睡觉" />
            打豆豆
            <input type="checkbox" v-model="student.hobby" value="吃饭" />
            吃饭
            <input type="checkbox" v-model="student.hobby" value="打豆豆" />
            <br />
            班级:
            <select v-model="student.class_id">
                <option v-for="item in classes" :key="item.id" :value="item._id">
                    {{ item.cname }}
                </option>
            </select>
            <br />
            <button type="button" @click="updateStudent">修改</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            student: {
                class_id: '62e77912dabbb10a6c108822',
                hobby: [],
                gender: '',
                name: '',
                age: '',
            },
            classes: [],
            id: '',
        };
    },
    async created() {
        this.id = this.$route.query.id;
        // 获取班级信息
        let res = (await this.api.classes.getClasses()).data;
        if (res.status) {
            this.classes = res.data;
        }
        // 渲染修改界面
        let studentInfoRes = (await this.api.students.getStudent({ _id: this.id })).data;
        if (studentInfoRes.status) {
            this.student = { ...studentInfoRes.result };
        }
    },

    methods: {
        async updateStudent() {
            let res = (await this.api.students.updateStu(this.student)).data;
            if (res.status === 1) {
                alert(res.msg);
                this.$router.push('/student/StudentList');
            } else {
                alert(res.msg);
            }
        },
    },
};
</script>

<style></style>
