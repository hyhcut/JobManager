<template>
    <div id="index">
        <el-button @click="logout">注销</el-button>
    </div>
</template>

<script>

export default {
    methods:{
        logout(){
            this.$cookies.set('login', 'off');
            this.$router.push('/login');
        }
    }
}
</script>

<style>

</style>
