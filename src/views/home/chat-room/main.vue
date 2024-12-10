<template>
    <div class="chat-container">
        <div class="head">
            RoomName
        </div>
        <div class="room-content">
            <!-- 聊天内容区域 -->
            
        </div>
        <div class="room-send">
            <!-- 发送消息区域 -->
             <Send/>
        </div>
    </div>
</template>

<script setup>
import Send from './send.vue';
// 这里暂时不需要添加任何 JavaScript 逻辑
</script>

<style scoped>
.chat-container {
    display: flex;
    flex-direction: column;  /* 使子元素垂直排列 */
    height: 620px;
}

.head {
   
    padding: 10px;
    text-align: center;  /* 房间名居中 */
    font-size: 18px;
    background-color: rgb(238, 238, 238);
    font-weight: bold;
}

.room-content {
    flex-grow: 1;  /* 使聊天内容区域占据剩余空间 */
    background-color: rgb(238, 238, 238);
    overflow-y: auto;  /* 如果内容超出，显示滚动条 */
    padding: 20px;
    margin-bottom: 10px;
}

.room-send {
    
    height: 180px;
    text-align: center;  /* 输入框和按钮居中 */
}
</style>
