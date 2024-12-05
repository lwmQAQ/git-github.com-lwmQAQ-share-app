<template>
    <div class="left">
        <div class="tips">
            <img src="@assets/qr-code.png" alt="QR Code" />
            <span>扫一扫登录</span>
        </div>
        <div class="double-tips">
            <span>请使用 <a href="#" class="app-link">手机app</a> 扫码登录</span>
        </div>
        <div class="code">
            <div class="qr">
                
            </div>
        </div>
        <div class="flash">
            <el-button>刷新二维码</el-button>
        </div>
    </div>
</template>

<script setup>
// Add any necessary logic here
</script>

<style scoped>
.left {
    display: flex;
    /* Enable Flexbox */
    flex-direction: column;
    /* Arrange items vertically */
    align-items: center;
    /* Center items horizontally (optional) */
    gap: 20px;
    /* Add spacing between the items */

    width: 100%;
    /* Optional: Set width */
    height: auto;
    /* Allow height to adjust based on content */

}

.tips {
    margin-top: 40px;
    display: flex;
    /* Flexbox for aligning image and text */
    align-items: center;
    /* Vertically align image and text */
    gap: 10px;
    /* Add spacing between image and text */
}

.tips img {
    width: 20px;
    /* Set fixed width for the image */
    height: 20px;
    /* Set fixed height for the image */
}
.double-tips,
.code,
.flash  {
  display: flex; /* Enable Flexbox */
  justify-content: center; /* Horizontally center the content */
  align-items: center; /* Vertically center the content */
 
  font-size: 14px; /* Adjust font size */
  color: #333; /* Default text color */
  line-height: 1.5; /* Better spacing for text */
}

.double-tips span {
    font-size: 14px;
    color:  #868686;
}

.app-link {
  color: #249beb; /* Link color (blue) */
  text-decoration: none; /* Remove underline */

  cursor: pointer; /* Show pointer cursor on hover */
}

.app-link:hover {
  text-decoration: underline; /* Add underline on hover */
  color: #277edb; /* Darker blue on hover */
}
.qr{
    width: 150px;
    height: 150px;
    border: 1px solid #e4e2e2; /* Add a solid border with color */
}
</style>