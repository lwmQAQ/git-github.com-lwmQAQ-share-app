<template>
    <div class="send-con">
        <div class="tools">
            <!-- 工具栏内容，例如表情、附件等按钮 -->
        </div>
        <div class="text-area">
            <!-- 文本输入区 -->
        </div>
        <div class="send">
            <!-- 发送按钮 -->
        </div>
    </div>
</template>

<script setup>
// 这里可以放置 JavaScript 逻辑
</script>

<style scoped>
.send-con {
    display: flex;
    flex-direction: column; /* 垂直排列 */
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
    height: 150px;

}

.tools {
    display: flex;
    justify-content: space-between; /* 工具栏内容左右对齐 */
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 4px;
}

.text-area {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 10px 0; /* 上下间距 */
    resize: vertical; /* 允许垂直调整大小 */
    height: 100px; /* 设置固定高度 */
}

.send {
    background-color: #4CAF50;
    color: #fff;
    text-align: center;
    width: 60px;
    height: 30px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
    margin-left: auto; /* 向右推 */
}

.send:hover {
    background-color: #45a049; /* 悬停时按钮颜色变化 */
}
</style>
