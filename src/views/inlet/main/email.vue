<template>
    <div class="login">
        <div class="username">
            <el-input v-model="emailLoginResp.email" size="large" style="width: 280px" placeholder="输入邮箱"
                :prefix-icon="User" />
        </div>
        <div class="email">
            <el-input v-model="emailLoginResp.code" size="large" style="width: 160px" placeholder="输入动态密码"
                :prefix-icon="Message" />
            <el-button style="margin-left: 20px;height: 40px;" @click="GetCode(emailLoginResp.email)">获取验证码</el-button>
        </div>
    </div>
</template>
<script setup>
import { User, Message } from '@element-plus/icons-vue'
import { get } from '@src/https';
import { CheckEmail } from '@src/utils';
import { ElMessage } from 'element-plus';
defineProps({
    emailLoginResp: {
        type: Object,
        required: true,
    },
});

async function GetCode(email) {
    if (email== ""){
        ElMessage.error("邮箱不能为空");
        return 
    }
    if (!CheckEmail(email)){
        ElMessage.error("邮箱不符合格式");
        return 
    }
    const addr = "/v1/api/public/get/code?email=" + email
    get(addr)
        .then((response) => {
            if (response.code !== 200) {
                ElMessage.error(response.errorMessage);
            } else {
                ElMessage.success("发送成功");
            }
        })
        .catch((error) => {
            console.error('Error submitting form:', error);
            ElMessage.error("发送失败");
        });
}
</script>
<style scoped>
.username {
    margin-bottom: 20px;
}

.email {
    margin-bottom: 30px;
}
</style>