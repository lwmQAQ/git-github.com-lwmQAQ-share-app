<template>
    <div class="container">
        <div class="details card">
            <div class="title">Virtual Serial Port Driver 专业版汉化</div>
            <div class="tips">
                <div class="date"><div class="icon"><img src="@assets/date.png" /></div><span>更新日期：2024/12/9</span></div>
                <div class="view"><div class="icon"><img src="@assets/eyes.png" /></div><span>123阅读</span></div>
                <div class="like"><div class="icon"><img src="@assets/Like.png" /></div><span>1223点赞</span></div>
            </div>
            <div class="classify">网盘分类： <el-tag type="primary" size="small" >Tag 1</el-tag></div>
            <div class="tags">资源标签：<el-tag type="success" size="small">Tag 2</el-tag><el-tag type="success" size="small">Tag 2</el-tag><el-tag type="success" size="small">Tag 2</el-tag></div>
            <div class="link">资源链接：<a style="margin-left: 5px;" href="#">https://element-plus.org/zh-CN/component</a></div>
            <div class="content">资源详情：</div>
            <div class="detial"  v-html="content">

            </div>
            <div class="likes">
                <el-button type="primary"><img src="@assets/like-1.png" />点赞(4)</el-button>
            </div>
        </div>
        <div class="comments card">
            <div class="lists">
                <div class="top">
                    <div class="tip">评论列表(共有10条评论)</div>
                    <div class="tool" v-if="!isopen" @click="CommentOpen()">展开<img src="@assets/open.png"></div>
                    <div class="tool" v-else  @click="CommentOpen()">收起<img src="@assets/noopen.png"></div>
                </div>
                <div class="underline"></div>
                <div style="width: 100%;"> <Comment /></div>
            </div>
            <div class="comment-form">
                <div class="tip">发表评论</div>
                <el-input class="textarea"
                    v-model="textarea"
                    style="width: 740px"
                    :autosize="{ minRows: 4, maxRows: 6 }"
                    type="textarea"
                    placeholder="Please input"
                />
                <div class="buttons">
                    <button class="submit">提交</button>
                    <button class="cancel">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import None from './None.vue'
import Comment from './comment.vue';
import { ref } from 'vue';
const textarea = ref("");
const isopen = ref(false);
const content =ref( "<p><strong>标题：</strong> 这是详细内容</p><p>更多的描述...</p>")
function CommentOpen(){
    isopen.value = !isopen.value
}
</script>

<style scoped>
.likes {
    font-size: 20px;
    width: 100%;
    display: flex;
    justify-content: center;  /* 水平居中 */
    align-items: center;      /* 垂直居中 */
}
.likes img{
    width: 18px;
    height: 18px;
}
.el-tag{
    margin-left: 5px;
}
.container {
    display: flex;
    flex-direction: column; /* Ensures details and comments stack vertically */
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    height: 650px;
    font-family: Arial, sans-serif;
}

.card {
    background-color: #f6f6f6;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px; /* Added margin to separate sections */
}

.details {
    margin-bottom: 20px; /* Ensures space between details and comments */
    max-height: 450px;
}

.comments {
    margin-top: 20px; /* Space between comments and details */
}

.title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
}

.tips {
    display: flex;
    justify-content: flex-start; /* Align items to the left */
    align-items: center; /* Vertically center the items */
    gap: 10px; /* Space between the items */
    margin-bottom: 12px;
}

.date, .view, .like {
    font-size: 13px;
    text-align: left; /* Ensure text aligns left */
}

.date,.view, .like {
    display: flex;
    align-items: center;
}

.icon {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right: 5px;
}

.icon img {
    width: 16px;
    height: 16px;
}

.classify, .tags, .link, .content {
    font-size: 14px;
    margin-bottom: 8px;
}

.comments .lists .tip {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
}
.top {
    display: flex;
    justify-content: space-between; /* Spread the items across the container */
    align-items: center; /* Vertically center the items */
    margin-bottom: 0px; /* Space between the top section and the underline */
}

.tip {
    font-size: 14px;
    font-weight: bold;
}

.tool {
    font-size: 14px;
    display: flex;
    user-select: none;
    justify-content: center;
    align-items: center;
    color: #007BFF; /* Add color for the tool */
    cursor: pointer; /* Indicate it's clickable */
}
.tool img{
    width: 12px;
    height: 12px;
    margin-left: 3px;
}

.underline {
    border-bottom: 1px solid #ccc;
    width: 100%;
    margin-top: 5px; /* Adds space between the top section and underline */
    margin-bottom: 10px;
}
.comment-form .tip {
    font-size: 14px;
    margin-bottom: 8px;
}

.textarea {
    padding: 10px;
    margin-bottom: 10px;
    resize: vertical;
    font-size: 14px;
}

.buttons {
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    gap: 10px;
}

.submit, .cancel {
    padding: 10px 20px;
    font-size: 13px;
    cursor: pointer;
    border: none;
    background-color: #007BFF;
    color: white;
    border-radius: 5px;
}

.submit:hover, .cancel:hover {
    background-color: #0056b3;
}

.cancel {
    background-color: #f0f0f0;
    color: #333;
}

.cancel:hover {
    background-color: #ccc;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        width: 100%;
        padding: 15px;
    }
    
    .details, .comments {
        margin-bottom: 15px;
    }

    .textarea {
        width: 100%;
    }
}
</style>
