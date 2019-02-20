<template>
    <div id="menu">
        <el-radio-group v-model="menu_hide" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu :collapse="menu_hide" class="el-menu-vertical-demo" router>
            <el-menu-item v-for="menu in menuList" :key="menu.label" :index="menu.url">
                <i :class="menu.icon"></i>
                <span slot="title">{{ menu.label }}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    props:{
        menuList: Array
    },
    data(){
        return{
            menu_hide: true
        }
    }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 150px;
}
</style>
