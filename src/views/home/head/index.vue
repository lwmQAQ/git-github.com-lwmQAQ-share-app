<template>
    <div class="container" data-tauri-drag-region>
        <!-- 左侧图标 -->
        <div class="icons" data-tauri-drag-region>
            <Icon />
        </div>
        <!-- 中间工具区域 -->
        <div class="tool" data-tauri-drag-region>
            <el-dropdown placement="bottom">
                <div class="user"></div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>The Action 1st</el-dropdown-item>
                        <el-dropdown-item>The Action 2st</el-dropdown-item>
                        <el-dropdown-item @click="logout()">login out</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <span>username</span>
            <span>level</span>
        </div>

        <!-- 右侧控制区域 -->
        <div class="controller">
            <div class="tools">
                <Controller />
            </div>
        </div>
    </div>
</template>

<script setup>
import { getCurrentWindow } from '@tauri-apps/api/window';
import Controller from '@views/tools/controller/controller.vue'
import Icon from '@views/tools/icon/icon.vue'
async function logout(){
    localStorage.removeItem('token');  // 例如 'token' 或其他
    await getCurrentWindow().close()
}
</script>

<style scoped>
.tools {
    position: absolute;
    width: 120px;
    height: 40px;
    top: 0px;
    /* Adjust the distance from the top */
    right: 0px;
    /* Adjust the distance from the right */
}

/* 栅格布局 */
.container {
    display: flex;
    justify-content: space-between;
    /* 子元素之间均匀分布，保持水平排列 */
    align-items: center;
    /* 垂直方向居中对齐 */
    width: 100%;
    height: 40px;
    /* 容器高度 */
}

/* 图标区域 */
.icons {
    margin-left: 20px;
    display: flex;
    width: 700px;
    /* 使用flex布局 */
    justify-content: flex-start;
    /* 使图标靠左对齐 */
    align-items: center;
    /* 垂直方向居中对齐 */
    flex: 1;
    /* 让图标区域占用剩余空间 */
}

/* 工具区域 */
.tool {
    align-items: center;
    /* 使文本和其他元素竖直居中 */
    display: flex;
    gap: 10px;
    /* 设置两个user之间的间距 */
}

/* 用户区域 */
.user {
    width: 40px;
    /* 用户图标的宽度 */
    height: 40px;
    /* 用户图标的高度 */
    background-color: #ccc;
    /* 设置背景色来模拟用户头像 */
    border-radius: 50%;
    /* 圆形 */
}

/* 控制区域 */

</style>