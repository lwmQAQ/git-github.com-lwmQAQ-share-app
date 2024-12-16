<template>
    <div class="login">
        <div class="username">
            <el-input v-model="loginresp.email" size="large" style="width: 280px" placeholder="邮箱" :prefix-icon="User" />
        </div>
        <div class="password">
            <el-input v-model="loginresp.password" size="large" style="width:280px" placeholder="请输入密码" :prefix-icon="Lock"
                type="password" />
        </div>
        <div class="tools">
            <el-checkbox v-model="loginresp.isSave" label="记住密码" />
            <el-checkbox v-model="loginresp.isAuto" label="自动登录" />
            <a href="#" class="app-link" target="_blank">忘记密码?</a>
        </div>
    </div>
</template>

<script setup>
import { User, Lock } from '@element-plus/icons-vue'


defineProps({
  loginresp: {
    type: Object,
    required: true,
  },
});


</script>

<style scoped>
.tools{
    display: flex;
  justify-content: center;  /* Horizontally centers the content */
  align-items: center;      /* Vertically centers the content */
}
.username {
    margin-bottom: 20px;
}

.password {
    margin-bottom: 20px;
}
.app-link {
    margin-left: 40px;
    font-size: 12px;
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