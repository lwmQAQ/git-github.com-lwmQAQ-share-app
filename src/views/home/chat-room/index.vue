<template>
    <div class="chat-con">
        <div class="chat-aside"><Aside/></div>
        <div class="chat-main"><Main /></div>
    </div>
</template>

<script setup>
import Aside from './aside.vue';
import Main from './main.vue';
// 这里暂时不需要添加任何 JavaScript 逻辑
</script>

<style scoped>
.chat-con {
    display: flex;  /* 设置父容器为 flex 布局 */
    height: 650px;
}

.chat-aside {
    width: 200px;   /* 设置侧边栏宽度 */
 
    padding: 20px;
}

.chat-main {
    flex-grow: 1;    /* 主内容区域占满剩余空间 */
    background-color: #fff; /* 主区域背景色 */
    padding: 20px;
}
</style>
