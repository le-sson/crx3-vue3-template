<template>
    <div class="crx3-vue3-template">
        <el-alert title="this is 'crx3-vue3-template' content page" type="success" />
    </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
    setup() {
        onMounted(() => {
            console.log("this is app.vue")
        })
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.crx3-vue3-template {
    position: fixed;
    top: 50px;
    width: 50%;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 9999999;
}
</style>