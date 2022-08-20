<template>
    <div>
        <h1>学生修改</h1>
        <div
            style="
                width: 800px;
                height: 800px;
                border: 1px solid red;
                margin: 0 auto;
                display: flex;
            "
        >
            <div style="width:500px">
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
                <select v-model="student.class_id._id">
                    <option v-for="item in classes" :key="item.id" :value="item._id">
                        {{ item.cname }}
                    </option>
                </select>
                <br />
                <button type="button" @click="updateStudent">修改</button>
            </div>
            <div>
                <img v-if="student.head" :src="`http://localhost:3131/images/${student.head}`" alt="" style="width:100px;height:100px">
                <input type="file" >
            </div>
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
        let res = await this.api.classes.getClasses();
        if (res.status) {
            this.classes = res.data;
        }
        // 渲染修改界面
        let studentInfoRes = await this.api.students.getStudent({ _id: this.id });
        if (studentInfoRes.status) {
            this.student = { ...studentInfoRes.data[0] };
            console.log(this.student);
        }
    },

    methods: {
        async updateStudent() {
            let res = await this.api.students.updateStu(this.student);
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
