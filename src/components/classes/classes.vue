<template>
    <div>
        <h1>班级列表</h1>
        <table border="1" cellspacing="0" cellpadding="0" align="center">
            <thead>
                <th>编号</th>
                <th>班级名称</th>
                <th>班规</th>
                <th>地址</th>
            </thead>
            <tbody>
                <tr v-for="item in classes" :key="item._id">
                    <td>{{item._id}}</td>
                    <td>{{item.cname}}</td>
                    <td>{{item.rules}}</td>
                    <td>{{item.address}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4">
                        <Page :pageArray="[5, 10, 15]" :total="page.count" @go="show"/>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import Page from '../utils/Page.vue';
export default {
    components: { Page },
    data() {
        return {
            page: {
                total: 0,
                pageTotal: 0,
                pagesize: 5,
                pageindex: 1,
            },
            classes: []
        };
    },
    async created() {
        this.show()
    },
    methods: {
        async show({pageSize = 5, pageIndex = 1}={}) {
            let res = (await this.api.classes.getClassesByPage({pageIndex,pageSize}));
            if(res.status) {
                this.classes = res.page.clas
                this.page = res.page
            }
        },
    },
};
</script>

<style></style>
