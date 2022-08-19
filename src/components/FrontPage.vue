<template>
    <div>
        <h1>首页</h1>
        <button type="button" @click="go">跳转到学生界面</button>
    </div>
</template>

<script>
export default {
    methods: {
        go () {
            this.$router.push('/student')
        }
    }
}
</script>

<style>

</style>