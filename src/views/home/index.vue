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
  import Aside from './aside/index.vue';
  import Header from './head/index.vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter(); // 获取router实例
  onMounted(async () => {
    router.push("/resource/view/1");
  });
  // 暂无需要使用的逻辑脚本
  </script>
  
  <style scoped>
  /* 基本布局 */
  .container {
    display: grid;
    grid-template-areas:
      "head head"
      "aside main";
    grid-template-columns: 1fr 12fr; /* 侧边栏占1份，主内容占12份 */
    grid-template-rows: auto 1fr; /* 头部自动高度，其余占满 */
    height: 100vh; /* 全屏高度 */
    overflow: hidden; /* 禁止整个容器出现滚动条 */
  }
  
  /* 样式细化 */
  .head {
    grid-area: head;
    height: 40px;
    background-color: #eff2f6;
    padding: 10px;
    text-align: center;
    overflow: hidden; /* 避免头部出现滚动条 */
  }
  
  .aside {
    grid-area: aside;
    background-color: #f9fafb;
    padding: 10px;
    overflow: hidden; /* 禁止侧边栏出现滚动条 */
  }
  
  .main {
    grid-area: main;
    background-color: #ffffff;
    padding: 10px;
    overflow-y: auto; /* 仅允许垂直滚动条 */
    height: 650px; /* 保证滚动条正常出现 */
  }
  </style>
  