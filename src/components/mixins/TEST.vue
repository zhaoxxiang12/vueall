<template>
    <div>
        {{name}}
        <button @click="read">点击read</button>
        {{hobby}}
        <button @click="change">改变</button>
    </div>
</template>

<script>
import minxins from '../../javascript/minxins/minxins.js'
export default {
    data () {
        return {
            name: '赵云'
        }
    },
    mixins: [minxins],
    methods: {
        change () {
            this.hobby = '打球'
        }
    }
}
</script>

<style>

</style>