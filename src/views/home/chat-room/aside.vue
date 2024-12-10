<template>
    <div class="container">
        <div class="tools">
            <!-- 工具栏内容，例如按钮等 -->
        </div>
        <div class="lists">
            <div class="list">列表项 1</div>
            <div class="list">列表项 2</div>
            <div class="list">列表项 3</div>
        </div>
    </div>
</template>

<script setup>
// 这里可以放置 JavaScript 逻辑
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column; /* 使子元素垂直排列 */

    max-width: 500px; /* 控制卡片的最大宽度 */

    padding: 10px; /* 内边距 */
    background-color: #dddddd; /* 白色背景 */
    border-radius: 10px; /* 圆角效果 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 卡片阴影效果 */
    overflow: hidden; /* 防止内容溢出卡片区域 */
    height: 600px;
}

.tools {
    background-color: #f0f0f0; /* 工具栏的背景色 */
    padding: 10px;
    height: 20px;
    text-align: center; /* 工具栏内容居中 */
}

.lists {
    flex-grow: 1; /* 使列表区域占据剩余空间 */
    overflow-y: auto; /* 如果列表项超出可显示滚动条 */

}

.list {
    background-color: #e0e0e0; /* 列表项背景色 */
    padding: 10px;
    margin: 5px 0; /* 每个列表项之间的间距 */
    border-radius: 4px; /* 圆角效果 */
}
</style>
