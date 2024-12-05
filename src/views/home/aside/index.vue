<template>
    <div class="icons">
      <div class="icon">
        <div class="img"></div>
        <div class="tips">首页</div>
      </div>
      <div class="icon">
        <div class="img"></div>
        <div class="tips">资源</div>
      </div>
      <div class="icon">
        <div class="img"></div>
        <div class="tips">会话</div>
      </div>
      <div class="icon bottom">
        <div class="img"></div>
        <div class="tips">工具</div>
      </div>
    </div>
  </template>
  
  <script setup>
  // 暂无脚本
  </script>
  
  <style scoped>
  /* 栅格布局 */
  .icons {
    display: flex;
    flex-direction: column;  /* 竖直排列 */
    justify-content: space-between; /* 空间分配，前面的图标靠顶部，最后一个靠底部 */
    height: 650px;           /* 让容器占满全屏高度 */
  }
  
  /* 每个图标的样式 */
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;     /* 水平居中 */
    justify-content: center; /* 垂直居中 */
    margin-top: 10px;
  }
  
  .img {
    width: 50px;             /* 图标宽度 */
    height: 50px;            /* 图标高度 */
    background-color: #ccc;  /* 设置一个背景颜色来模拟图标 */
    margin-bottom: 5px;      /* 图标和文字之间的间距 */
  }
  
  .tips {
    text-align: center;
    font-size: 14px;
  }
  
  /* 使最后一个图标靠底部 */
  .bottom {
    margin-top: auto; /* 将该图标推到容器底部 */
  }
  </style>
  