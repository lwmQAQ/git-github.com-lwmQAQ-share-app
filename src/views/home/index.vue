<template>
    <div class="container">
        <!-- Header Section -->
        <div class="head" data-tauri-drag-region>
            <Header data-tauri-drag-region />
        </div>

        <!-- Sidebar Section -->
        <div class="aside">
            <Aside />
        </div>
        <!-- Main Content Section -->
        <div class="main">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Aside from './aside/index.vue'
import Header from './head/index.vue'
import { useRouter } from 'vue-router';

const router = useRouter();  // 获取router实例
onMounted(async () => {
    router.push("/main")
})
// 暂无需要使用的逻辑脚本
</script>

<style scoped>
/* 基本布局 */
.container {
    display: grid;
    grid-template-areas:
        "head head"
        "aside main";
    grid-template-columns: 1fr 12fr;
    /* 侧边栏占1份，主内容占3份 */
    grid-template-rows: auto 1fr;
    /* 头部自动高度，其余占满 */
    height: 100vh;
    /* 全屏高度 */
}

/* 样式细化 */
.head {
    grid-area: head;
    height: 40px;
    background-color: #eff2f6;
    padding: 10px;
    text-align: center;
}

.aside {
    grid-area: aside;
    background-color: #e0e0e0;
    padding: 10px;
}

.main {
    grid-area: main;
    background-color: #fff;
    padding: 10px;
    overflow-y: auto;
}
</style>