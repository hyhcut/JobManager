<template>
    <div id="index">
        <el-container>
            <el-header>
                <el-row type="flex" justify="space-between">
                    <el-col :span="12">
                        <h1 class="text-center">JobManager</h1>
                    </el-col>
                    <el-col :span="4">
                        <el-row>
                            <el-col :span="12">
                                <el-button type="danger" @click="logout" plain>注销</el-button>  
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-main class="main">
                    <el-row>
                        <el-col :span="4">
                        <level-one-menu :menu-list="menu_list"></level-one-menu>
                        </el-col>
                        <el-col :span="20">
                        <router-view></router-view>
                        </el-col>
                    </el-row>
                </el-main>
            </el-container>
            <el-footer>
                <el-row type="flex" justify="end">
                    <el-col :span="6">
                        <h2 class="text-center">Design By hyh_cut</h2>
                    </el-col>
                </el-row>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import LevelOneMenu from '@/components/common/menu/LevelOneMenu.vue';

export default {
    components:{
        'level-one-menu': LevelOneMenu
    },
    data(){
        return{
            menu_list:[
                {
                    label: '项目',
                    icon: 'el-icon-tickets',
                    url: '/project'
                }
            ]
        }
    },
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
