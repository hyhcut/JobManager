<template>
    <div id="login">
        <j-form :form="form"></j-form>
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
                        name: 'test',
                        type: 2,
                        placeholder: '请选择',
                        option_list:[
                            {
                                label: '测试1',
                                value: '测试1'
                            },
                            {
                                label: '测试2',
                                value: '测试2'
                            }
                        ]
                    }
                ],
                data:{
                    test: ''
                }
            }
        }
    }
}
</script>

<style>

</style>
