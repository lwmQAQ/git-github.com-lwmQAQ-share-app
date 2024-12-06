<template>
    <div class="container">
        <div class="title">这是标题这是一个非常长非常长非常长非常长的标题，可能会超出容器的宽度</div>
        <div class="tags">
            <el-tag type="success">美剧</el-tag>
            <el-tag type="success">白夜破晓</el-tag>
            <el-tag type="success">Tag 2</el-tag>

            <el-tag type="success">Tag 2</el-tag>
            <el-tag type="success">Tag 2</el-tag>
            <el-tag type="success">Tag 2</el-tag>
        </div>
        <div class="bottom">
            <div class="name">作者名称</div>
            <div class="date">2024-12-06</div>
        </div>
    </div>
</template>

<script setup>
// 逻辑处理可以放在这里
</script>

<style scoped>
/* 整体容器样式 */
.container {
    display: flex;
    flex-direction: column;
    height: 100px;
    /* 垂直布局 */
    gap: 16px;
    /* 子元素间距 */
    align-items: flex-start;
    /* 子元素左对齐 */
    width: 100%;
}

/* 标题样式 */
.title {
    font-weight: bold;
    /* 加粗 */
    font-size: 18px;
    /* 字体大小 */
    color: #333;
    /* 字体颜色 */
    white-space: nowrap;
    /* 禁止换行 */
    overflow: hidden;
    /* 超出部分隐藏 */
    text-overflow: ellipsis;
    /* 超出部分显示省略号 */
    width: 220px;
    /* 设置容器宽度，省略号基于此宽度生效 */
}

/* 标签容器样式 */
.tags {
    display: flex;
    gap: 8px;
    /* 标签间距 */
    overflow: hidden;
    /* 隐藏超出内容 */
    white-space: nowrap;
    /* 禁止换行 */
    width: 250px;
    /* 设置容器宽度 */
}

/* 底部容器样式 */
.bottom {
    display: flex;
    /* 水平排列 */
    justify-content: space-between;
    /* 两端对齐 */
    width: 100%;
    /* 占据容器宽度 */
}

.name,
.date {
    font-size: 14px;
    /* 设置字体大小 */
    color: #666;
    /* 字体颜色 */
}
</style>