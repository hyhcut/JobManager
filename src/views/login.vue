<template>
    <div id="login">
        <el-row>
            <h1 style="text-align:center">JobManager</h1> 
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :span="8">
                <j-form :form="form" ref="login"></j-form>
                <el-button type="primary" @click="login(form.name)">登录</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import BaseForm from '@/components/common/form/BaseForm.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    components:{
        'j-form': BaseForm
    },
    data(){
        return{
            form:{
                name: 'login',
                label_position: 'right',
                label_width: '80px',
                url: '/login',
                unit_list:[
                    {
                        name: 'username',
                        label: '用户名',
                        type: 1,
                        placeholder: '用户名',
                    },
                    {
                        name: 'password',
                        label: '密码',
                        type: 1,
                        input_type: 'password',
                        placeholder: '密码'
                    }
                ],
                data:{
                    username: '',
                    password: ''
                }
            }
        }
    },
    computed:mapGetters('login', [
        'userId'
    ]),
    methods:{
        ...mapActions('login', [
            'logIn'
        ]),
        login(form_name){
            this.$refs[form_name].submit(this.login_callback);
        },
        login_callback(data){
            if (data.code === 200) {
                // this.$store.dispatch('login/logIn', data.data);
                this.logIn(data.data);
                this.$cookies.set("login", "on", 30 * 60);
                this.$notify.success({
                    title: '操作成功',
                    message: data.message,
                    duration: 1500
                })
                console.log(this.userId);
                this.$router.push('/');
            } else {
                this.$notify.error({
                    title: '操作失败',
                    message: data.message,
                    duration: 1500
                })
            }
        }
    }
}
</script>

<style>

</style>
