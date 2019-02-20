<template>
    <div id="list_with_operation">
        <el-table :table="table" :data="table.data" v-loading="loading">
            <el-table-column v-for="col in table.col_list" :key="col.name" :prop="col.name" :label="col.label">

            </el-table-column>
            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="view(scope.row.id)">查看</el-button>
                    <el-button type="primary" @click="edit(scope.row.id)" size="mini">编辑</el-button>
                    <el-button type="danger" @click="handleDelete(scope.$index, scope.row, table.data)" size="mini">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    props:{
        table: Object
    },
    data(){
        return{
            loading: false
        }
    },
    inject:['view', 'edit', 'handleDelete'],
    methods:{
        get_data(){
            this.loading = true;
            this.$ajax.post(this.table.data_url)
            .then((res) => {
                if (res.data.code === 200){
                    this.table.data = res.data.data;
                } else {
                    this.$notify.error({
                        title: '获取列表数据失败',
                        message: res.data.data,
                        duration: 0
                    })
                }
                this.loading = false;
            }).catch((err) => {
                this.$notify.error({
                    title: '获取列表数据失败',
                    message: '请检查网络或联系管理员',
                    duration: 0
                })
                this.loading = false;
            });
        }
    },
    mounted(){
        this.get_data();
    }
}
</script>

<style>

</style>
