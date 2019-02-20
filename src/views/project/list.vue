<template>
    <div id="list">
        <el-row type="flex" justify="end">
            <el-button type="primary" @click="edit_dialog_show = true" round>添加</el-button>
        </el-row>
        <el-row>
            <j-table :table='table'></j-table>
        </el-row>
        <el-dialog title="新建项目" :visible.sync="edit_dialog_show" append-to-body>
            <j-form :form="add_form"></j-form>
            <span slot="footer">
                <el-button type="primary" @click="add">确定</el-button>
                <!-- <el-button type="warning" @click="reset">重置</el-button> -->
                <!-- <el-button @click="close_dialog">关闭</el-button> -->
            </span>
        </el-dialog>
    </div>
</template>

<script>
import Table from '@/components/common/table/Table.vue'
import Form from '@/components/common/form/BaseForm.vue'

export default {
    components:{
        'j-table': Table,
        'j-form': Form
    },
    data(){
        return{
            table:{
                data_url: '/project/list',
                data: [],
                col_list:[
                    {
                        name: 'name',
                        label: '项目名称',
                    },
                    {
                        name: 'type_name',
                        label: '项目类型',
                    },
                    {
                        name: 'start_time',
                        label: '开始时间',
                    },
                    {
                        name: 'end_time',
                        label: '结束时间',
                    }
                ]
            },
            edit_dialog_show: false,
            add_form:{
                name: 'add_project',
                label_position: 'right',
                label_width: '80px',
                url: '/project/add',
                unit_list:[
                    {
                        name: 'name',
                        label: '项目名称',
                        type: 1,
                        placeholder: '项目名称',
                    },
                    {
                        name: 'type_id',
                        label: '项目类型',
                        type: 2,
                        placeholder: '项目类型'
                    }
                ],
                data:{
                    username: '',
                    password: ''
                }
            }
        }
    },methods:{
        view(){
            
        },
        edit(){

        },
        handleDelete(){

        },
        add(){

        }
    },
    provide(){
        return{
            view: this.view,
            edit: this.edit,
            handleDelete: this.handleDelete
        }
    }
}
</script>

<style>

</style>
