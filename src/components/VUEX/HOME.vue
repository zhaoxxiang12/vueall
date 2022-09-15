<template>
    <div>
        {{ name }}
        {{ stus }}
        <!-- {{stus}}
        <hr />
        <input type="text" v-model="t" />
        <button type="button" @click="change">修改值</button> -->
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
let { mapState: mapState_stus, mapActions: mapActions_stus } = createNamespacedHelpers('stus');
export default {
    //     data() {
    //         return {
    //             t: '',
    //         };
    //     },
    //     computed: {
    //         name() {
    //             return this.$store.state.name;
    //         },
    //         stus() {
    //            return this.$store.state.student
    //         },
    //     },
    //     methods: {
    //         change() {
    //             this.$store.commit('CHANGE_NAME', this.t);
    //         },
    //     },
    //    async created () {
    //         // 方式一
    //         // let res = await this.$store.dispatch("getStus")
    //         // this.$store.commit("CHANGE_STUS", res.data)
    //         // 方式二
    //         this.$store.dispatch("getStus")
    //     }
    computed: {
        ...mapState_stus(['name', 'stus']),
    },
    methods: {
        ...mapActions_stus(['getStus']),
    },
    created() {
        // this.getStus();
    },
};
</script>

<style></style>
