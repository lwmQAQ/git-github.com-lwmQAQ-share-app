<template>
    <div class="create-con">
        <div class="main">
            <div class="form-item">
                <div class="title">标题：</div>
                <input type="text" class="input"  placeholder="请输入标题">
            </div>
            <div class="form-item">
                <div class="title">分类：</div>
                <el-radio-group v-model="radio">
                    <el-radio :value="1">百度网盘</el-radio>
                    <el-radio :value="2">夸克网盘</el-radio>
                    <el-radio :value="3">阿里网盘</el-radio>
                </el-radio-group>

            </div>
            <div class="form-item">
                <div class="title">标签：</div>
                <Tag />
            </div>
            <div class="form-item">
                <div class="title">链接：</div>
                <input class="input" placeholder="请输入链接">
            </div>
        </div>
        <div class="Rich-editor">
            <Editor api-key="0rdva94cfj1e56j6diyh3wb9lbyfhjos8n66p81pb3amtxyh" :init="{
                toolbar_mode: 'sliding',
                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
            }" initial-value="编辑资源内容" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import Editor from '@tinymce/tinymce-vue'
import Tag from './tag-create.vue' 
import { ref } from 'vue'

const radio = ref(1)
</script>


<style scoped>
.create-con {
    display: flex;
    width: 80%;
    flex-direction: column;
    /* 垂直排列子元素 */
    height: 650px;
    /* 让容器占满视口高度 */
    margin: 0 auto;
}

.main {
    height: 150px;
    /* 固定高度 */
    background-color: #f9f9f9;
    /* 浅色背景，接近卡片效果 */
    border: 1px solid #ddd;
    /* 边框颜色 */
    border-radius: 8px;
    /* 圆角效果 */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    /* 阴影效果 */
    padding: 20px;
    /* 内边距 */
    display: flex;
    /* 布局 */
    flex-direction: column;
    /* 垂直方向排列 */
    justify-content: flex-start;
    /* 内容靠顶部 */
    align-items: flex-start;
    /* 内容靠左对齐 */
}

.Rich-editor {
    flex: 1;

    /* 示例背景色 */
}


.form-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.title {
    width: 80px;
    text-align: right;
    margin-right: 10px;
    font-size: 14px;
    color: #333;
}

.input {
    flex: 1;
    padding: 5px 10px;
    border: 1px solid #ccc;
    width: 300px;
    border-radius: 4px;
    font-size: 14px;
}

.input:focus {
    border-color: #409eff;
    outline: none;
}
</style>
