<template>
    <div class="person-con" data-tauri-drag-region>
        <div class="user"  data-tauri-drag-region>
            <div class="avatar" @click="openFilePicker">
                <img src="@assets/test.jpg">
                <div class="change-avatar">更换头像</div>
                <input type="file" ref="fileInput" style="display: none" @change="handleFileChange" />
            </div>
            <div class="info">
                <div class="username">昵称：<input type="text" :placeholder="user.name" v-model="user.name"/></div>
                <div class="email">邮箱：<input type="text" :placeholder="user.email"  v-model="user.email"/></div>
                <div class="bio">简介：<input type="text" :placeholder="user.bio"  v-model="user.bio"/></div>
            </div>
        </div>
        <div class="bottom">
            <div>
                <el-segmented v-model="value" :options="options" block />
            </div>
        </div>
    </div>

</template>

<script setup>

import { ref } from 'vue';


const fileInput = ref(null);

const openFilePicker = () => {
  fileInput.value.click(); // 触发文件选择器
};
const handleFileChange = (event) => {
  const file = event.target.files[0]; // 获取选择的文件
  if (file) {
    console.log("选择的文件:", file.name);
  }
};
const user  = ref({
    name:"lwm",
    avatar:"",
    bio:"你好",
    email:"3191711818@qq.com"
})
const value = ref('Mon')

const options = [
    '资源',
    '我的收藏',
    '我的关注',

]
</script>

<style scoped>
/* 导入 Google 字体 */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
.change-avatar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5); /* 半透明的黑色背景 */
  color: white;
  width: 80px;
  height: 80px;
  border-radius: 5px;
  font-size: 14px;
  display: none; /* 默认不显示 */
  pointer-events: none; /* 防止阻止鼠标事件 */
  text-align: center; /* 水平居中文本 */
  line-height: 5; /* 确保文字上下居中 */
}

.avatar:hover .change-avatar {
  display: block; /* 鼠标移入时显示提示层 */
}

/* 移除默认边框 */
input {
  border: none; /* 移除边框 */
  outline: none; /* 移除选中时的外边框 */

  font-size: 14px; /* 设置字体大小 */
  transition: border-bottom-color 0.3s ease; /* 添加过渡效果 */
}
.user {
    display: flex;
    height: 140px;
    align-items: center;
    /* 垂直居中对齐 avatar 和 info */
    margin-left: 20px;
    margin-right: 20px;
}
.avatar img{
    width: 80px;
    height: 80px;
    border-radius: 5%;
}
.avatar {
    position: relative; /* 使提示层可以相对于头像定位 */
    display: inline-block; /* 使头像自适应大小 */
    width: 80px;
    height: 80px;
    background-color: #ccc;
    /* 示例背景色 */
    border-radius: 5%;
    /* 圆形头像 */
    margin-right: 20px;
    /* avatar 和 info 之间的间距 */
}

.info {
    display: flex;
    display: flex;
    flex-direction: column;
    /* 垂直排列子元素 */
    justify-content: center;
    /* 使子元素垂直居中 */
    flex-direction: column;
    /* 垂直排列子元素 */
    justify-content: space-between;
    gap: 10px;
    /* 将子元素上下分布 */
}

.username,
.email,
.bio {
    user-select: none; /* 禁止选中文本 */
    display: flex; /* 使用 Flexbox 布局 */
    align-items: center; /* 使子元素竖直居中 */
    font-family: 'Roboto', sans-serif; /* 使用 Google 字体 Roboto */
  font-size: 14px; /* 设置字体大小 */
  color: #333; /* 设置字体颜色 */
}

.person-con {
    display: flex;
    flex-direction: column;
    /* 垂直分布 */
    height: 100vh;
    /* 设置容器高度，确保能够看到上下分布效果 */
}


.bottom {

    padding: 10px;
    /* 给底部部分添加一些内边距 */
    flex: 1;
}
</style>