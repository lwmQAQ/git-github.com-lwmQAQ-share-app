<template>
    <div class="login">
        <div class="username">
            <el-input v-model="username" size="large" style="width: 280px" placeholder="输入邮箱" :prefix-icon="User" />
        </div>
        <div class="email">
            <el-input v-model="username" size="large" style="width: 160px" placeholder="输入动态密码" :prefix-icon="Message" />
            <el-button style="margin-left: 20px;height: 40px;">获取验证码</el-button>
        </div>
    </div>
</template>
<script setup>
import { User, Message } from '@element-plus/icons-vue'

</script>
<style scoped>

.username {
    margin-bottom: 20px;
}
.email{
    margin-bottom: 30px;
}
</style>