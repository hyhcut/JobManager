<template>
    <div id="login">
        <el-row type="flex" justify="center">
            <el-col :span="8">
                <j-form :form="form"></j-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import BaseForm from '@/components/common/form/BaseForm.vue'

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
    }
}
</script>

<style>

</style>
