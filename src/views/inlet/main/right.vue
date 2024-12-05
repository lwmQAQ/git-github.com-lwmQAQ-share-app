<template>
    <div class="right">
        <div class="type">
            <div class="tips">{{ tips }}</div>
            <div class="link"> <a href="#" class="app-link" @click="change()">{{ linktips }}></a></div>
        </div>
        <div class="main">
            <Password v-if="!type" />
            <Email v-else />
        </div>
        <div class="bottom">
            <div class="button">
                <el-button type="primary" style="width: 100%;height: 40px;" @click = "login()">登录</el-button>
            </div>
            <div class="read" v-if="type">
                <span>阅读并接受<a href="#" class="app-link"  target="_blank">《用户协议》</a></span>
            </div>
            <div class="tools">
                <a href="#" class="app-link" target="_blank">注册账号</a>
                <div class="tool">
                    <el-tooltip class="box-item" effect="light" content="lwm的博客" placement="bottom">
                        <a href="https://lwmqaq.github.io/" target="_blank"><img src="@assets/blog.png" /></a>
                        </el-tooltip>
                    <el-tooltip class="box-item" effect="light" content="github" placement="bottom">
                        <a href="https://github.com/lwmQAQ" target="_blank"> <img src="@assets/github.png" /></a> 
                    </el-tooltip>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Password from './password.vue';
import Email from './email.vue';
//这个为真就是使用账号密码登录
const passtips = "账号密码登录"
const emailtios = "邮箱快捷登录"
const type = ref(true)
const tips = ref("")
const linktips = ref("")
onMounted(() => {
    change()
})
function login(){

}

function change() {
    if (type.value) {
        tips.value = passtips
        linktips.value = emailtios
    } else {
        tips.value = emailtios
        linktips.value = passtips
    }
    type.value = !type.value
}

</script>
<style scoped>
.read{
    height: 30px;
    display: flex;            /* Use Flexbox for centering */
    justify-content: center;  /* Horizontally centers the content */
    align-items: center;      /* Vertically centers the content (if needed) */
    width: 100%;    
    font-size: 14px;
    color:  #868686;
}
.tools {
    margin-top: 30px;
    display: flex;
    /* Aligns items in a row */
    justify-content: space-between;
    /* Distributes space between the links and the images */
    align-items: center;
    /* Vertically centers the content */
    width: 100%;
    /* Ensure the container takes full width */
}

.tool {
    display: flex;
    /* Aligns images in a row */
    gap: 20px;
    /* Sets 5px gap between images */
}

.tool img {
    width: 20px;
    /* Adjust the image size as needed */
    height: 20px;
    /* Adjust the image size as needed */
}

.bottom {
    margin-top: 10px;
}

.main {
    margin-top: 30px;
}

.right {
    padding-left: 40px;
    padding-right: 40px;
}

.type {
    margin-top: 40px;
    display: flex;
    /* Use Flexbox to align children in a row */
    align-items: center;
    /* Vertically center the items */

}

.link {
    margin-left: 72px;
}

.tips {
    font-size: 18px;
    margin-right: 10px;
    /* Optional: Add some space between the tips and link */

}

.app-link {
    font-size: 14px;
    color: #249beb;
    /* Link color (blue) */
    text-decoration: none;
    /* Remove underline */

    cursor: pointer;
    /* Show pointer cursor on hover */
}

.app-link:hover {
    text-decoration: underline;
    /* Add underline on hover */
    color: #277edb;
    /* Darker blue on hover */
}
</style>