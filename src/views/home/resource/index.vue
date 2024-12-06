<template>
    <div class="container">
        <div class="search">
            <div class="search-container">
                <el-input v-model="searchQuery" placeholder="请输入搜索内容(可以根据标签搜索或标题搜索)" clearable class="search-input">
                    <template #append>
                        <el-button  @click="onSearch()">搜索</el-button>
                    </template>
                </el-input>
            </div>
        </div>
        <div class="cards">
            <div class="card">
                <Card/>
            </div>
            <div class="card"> <Card/></div>
            <div class="card"> <Card/></div>
            <div class="card"> <Card/></div>
            <div class="card"> <Card/></div>
            <div class="card"> <Card/></div>
            <div class="card"> <Card/></div>
            <div class="card"> <Card/></div>
            <div class="card"> <Card/></div>
            <div class="card"> <Card/></div>
            <div class="card"> <Card/></div>
            <div class="card"> <Card/></div>
            <div class="card"> <Card/></div>
            
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Card from "./card.vue";
// 搜索框绑定的值
const searchQuery = ref("");

// 搜索按钮的点击事件
const onSearch = () => {
    if (searchQuery.value.trim()) {
        console.log("搜索内容：", searchQuery.value);
        // 在此处处理搜索逻辑
    } else {
        console.warn("请输入有效的搜索内容！");
    }
};
// 可以在这里添加标签逻辑
</script>

<style scoped>
/* 容器样式 */
.container {
    display: flex;
    width: 90%;
    flex-direction: column;
    /* 垂直方向布局 */
    gap: 16px;
    height: 650px;
  
    /* 上下间距 */
    margin: 0 auto;
}

.search-container {
    height: 30px;
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.search-input {
    max-width: 500px;
    height: 40px;
    width: 100%;
}

/* 搜索框样式 */
.search {
    padding: 16px;

    width: 50%;
    height: 40px;
    margin: 0 auto;
}

/* 卡片容器样式 */
.cards {
    display: flex;
    margin-top: 30px;
    overflow-y: auto;
    flex-wrap: wrap; /* 允许换行 */
    gap: 16px; /* 卡片间距 */
    width: 100%;
}

.card {
    flex: 0 1 calc(33.333% - 16px); /* 每行三列，减去间距 */
    max-width: calc(33.333% - 16px); /* 确保宽度一致 */
    padding: 16px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;

    box-sizing: border-box; /* 确保 padding 和 border 不影响宽度 */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>