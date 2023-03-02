<template>
    <div class="popup">
        <el-alert title="this is 'crx3-vue3-template' popup page" type="success" :closable="false"/>
    </div>
</template>

<script>
export default {
    setup() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.popup {
    width: 300px;
}
</style>