<template functional>
    <el-dialog
    title="提示"
    :visible.sync="value"
    width="30%"
    :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
</template>

<script>
    export default {
        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleClose() {
                this.$emit("input", false);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>