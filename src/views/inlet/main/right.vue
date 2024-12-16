<template>
    <div class="right">
        <div class="type">
            <div class="tips">{{ tips }}</div>
            <div class="link"> <a href="#" class="app-link" @click="change()">{{ linktips }}></a></div>
        </div>
        <div class="main">
            <Password v-if="!type" :loginresp="loginresp" />
            <Email v-else :email-login-resp="EmailLoginresp" />
        </div>
        <div class="bottom">
            <div class="button">
                <el-button type="primary" style="width: 100%;height: 40px;" @click="login()">登录</el-button>
            </div>
            <div class="read" v-if="type">
                <span>阅读并接受<a href="#" class="app-link" target="_blank">《用户协议》</a></span>
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
import { post } from '@src/https';
import CryptoJS from 'crypto-js';
import { ElMessage } from 'element-plus';
import {emitTo } from '@tauri-apps/api/event';

//这个为真就是使用账号密码登录
const passtips = "账号密码登录"
const emailtios = "邮箱快捷登录"
const type = ref(true)
const tips = ref("")
const EmailLoginresp = ref({
    email: "",
    code: "",
})

const loginresp = ref({
    email: "",
    password: "",
    isAuto: false,
    isSave: true
})

const linktips = ref("")
onMounted(() => {
    change()
    loginresp.value.password = localStorage.getItem("password")
    loginresp.value.email =localStorage.getItem("email")
})
async function login() {
    if (type.value) { //邮箱登录
        console.log(EmailLoginresp.value)

    } else {// 密码登录
        const encryptedPassword = CryptoJS.MD5(loginresp.value.password).toString();
        const loginreq = {
            email: loginresp.value.email,
            password: encryptedPassword,
        }
        post('/v1/public/login', loginreq)
            .then((response) => {
                if (response.code !== 200) {
                    ElMessage.error(response.errorMessage);
                } else {
                    const token = response.data.token;
                    const id = response.data.id;

                    if (loginresp.value.isAuto) {
                        localStorage.setItem('setToken', token);  // 正确地分发 'setToken' action
                        localStorage.setItem('setId', id);  // 使用 'dispatch' 方法
                    } else {
                        console.error('Vuex store 未初始化');
                    }
                    if (loginresp.value.isSave){
                        localStorage.setItem('email', loginresp.value.email); 
                        localStorage.setItem('password', loginresp.value.password); 
                    }
                    ElMessage.success("登录成功");   
                }
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
            });
    }
    await emitTo('main', 'login-succss');
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
.read {
    height: 30px;
    display: flex;
    /* Use Flexbox for centering */
    justify-content: center;
    /* Horizontally centers the content */
    align-items: center;
    /* Vertically centers the content (if needed) */
    width: 100%;
    font-size: 14px;
    color: #868686;
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