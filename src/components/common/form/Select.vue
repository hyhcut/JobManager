<template>
    <el-select v-model="modelValue" :placeholder="select.placeholder">
        <el-option v-for="option in option_list" :key="option.label" :label="option.label" :value="option.value"></el-option>
    </el-select>
</template>

<script>
export default {
    props:{
        select: Object,
        modelValue: String
    },
    computed:{
        option_list: function () {
            if (this.select.option_list) {
                return this.select.option_list;
            } else {
                this.$ajax.post(this.select.option_url)
                .then((res) => {
                    if (res.data.code === 200){
                       return res.data.data;
                    }
                }).catch((err) => {
                    console.log(err);
                });
            }
        }
    }
}
</script>

<style>

</style>
