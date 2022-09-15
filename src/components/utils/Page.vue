<template>
    <div>
        <select @change="change" v-model="pagesize">
            <option v-for="item in pageArray" :key="item" :value="item">{{ item }}</option>
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
            :class="page.pageIndex == pageCount ? { disabled: true } : { canClick: true }"
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
        <span>{{ pageCount }}</span>
        页
    </div>
</template>

<script>
// export default {
//     props: {
//         pageArray: {
//             type: Array,
//             default: [5, 6, 7],
//         },
//         total: {
//             required: true,
//         },
//     },
//     data() {
//         return {
//             pagesize: this.pageArray[0],
//             pageIndex: 1,
//         };
//     },
//     methods: {
//         change() {
//             this.pageIndex = 1
//             this.$emit('go', {pageIndex:this.pageIndex, pageSize:this.pagesize})
//         },
//         // 首页
//         first() {
//             this.pageIndex = 1;
//             this.$emit('go', { pageIndex: this.pageIndex, pageSize: this.pageSize });
//         },
//         // 上一页
//         prev() {
//             if (this.pageIndex > 1) {
//                 this.pageIndex--;
//                 this.$emit('go', { pageIndex: this.pageIndex, pageSize: this.pageSize });
//             }
//         },
//         // 下一页
//         next() {
//             if (this.pageIndex < this.pageCount) {
//                 this.pageIndex++;
//                 this.$emit('go', { pageIndex: this.pageIndex, pageSize: this.pageSize });
//             }
//         },
//         // 尾页
//         last() {
//             this.pageIndex = this.pageCount;
//             this.$emit('go', { pageIndex: this.pageIndex, pageSize: this.pageSize });
//         },
//     },
//     computed: {
//         pageCount() {
//             return Math.ceil(this.total / this.pagesize);
//         },
//     },
// };

// 模块化
import { createNamespacedHelpers } from 'vuex';
let { mapState: mapState_stus, mapActions: mapActions_stus } = createNamespacedHelpers('stus');
export default {
    props: {
        pageArray: {
            type: Array,
            default: [5, 6, 7],
        },
        total: {
            required: true,
        },
    },
    data() {
        return {
            pagesize: this.pageArray[0],
        };
    },
    methods: {
        change() {},
        ...mapActions_stus(['getStus']),
        // 首页
        first() {
            this.page.pageIndex = 1;
            this.$emit('go', { pageIndex: this.pageIndex, pageSize: this.pageSize });
        },
        // 上一页
        prev() {
            if (this.page.pageIndex > 1) {
                this.page.pageIndex--;
                this.$emit('go', { pageIndex: this.pageIndex, pageSize: this.pageSize });
            }
        },
        // 下一页
        next() {
            if (this.page.pageIndex < this.page.pageTotal) {
                this.page.pageIndex++;
                this.getStus()
                // this.$emit('go', { pageIndex: this.pageIndex, pageSize: this.pageSize });
            }
        },
        // 尾页
        last() {
            this.page.pageIndex = this.pageCount;
            this.getStus()
            // this.$emit('go', { pageIndex: this.pageIndex, pageSize: this.pageSize });
        },
    },
    mutations: {},
    computed: {
        pageCount() {
            return Math.ceil(this.total / this.pagesize);
        },
        ...mapState_stus(['page'])
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
