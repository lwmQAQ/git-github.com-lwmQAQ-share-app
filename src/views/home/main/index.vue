<template>

  <div class="all"  ref="all">
    <div class="go-back-to-top" @click="scrollToTop()">
      <el-tooltip class="box-item" effect="light" content="回到顶部" placement="top"> <img
          src="@assets/top.png" /></el-tooltip>
    </div>
    <div class="block text-center">
      <el-carousel height="200px" motion-blur>
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="container">
      <div class="gourp" v-for="(item, index) in groups" :key="index">
        <!-- 动态内容 -->
        <div class="list-container">
          <div class="top">
            <h2 class="title">置顶</h2>
            <a href="#" class="more">更多</a>
          </div>

          <div class="underline"></div>
          <ul class="list">
            <li>
              <span><a href="#">本站123盘收集的资源分享合集</a></span>
              <span class="date">11-26</span>
            </li>
            <li>
              <span><a href="#">本站123盘收集的资源分享合集</a></span>
              <span class="date">09-13</span>
            </li>
            <li>
              <span>度盘新用户vip3天会员或者老用户500g空间——</span>
              <span class="date">06-02</span>
            </li>
            <li>
              <span>本站123盘收集的资源分享合集</span>
              <span class="date">08-07</span>
            </li>
            <li>
              <span>阿里「游戏库」超多整理合集</span>
              <span class="date">03-07</span>
            </li>
            <li>
              <span>2024资料库</span>
              <span class="date">10-24</span>
            </li>
            <li>
              <span>2024视频教程库</span>
              <span class="date">10-16</span>
            </li>
            <li>
              <span>2024网盘分享WPFX.ORG各种专题合集</span>
              <span class="date">06-04</span>
            </li>
            <li>
              <span>2024最新影视大合集（更新中）</span>
              <span class="date">05-26</span>
            </li>
            <li>
              <span>2024软件库</span>
              <span class="date">04-15</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const groups = ref(["1", "2", "3", "4","1", "2", "3", "4"])
const all = ref(null);
// 定义点击回到顶部的函数
// 定义点击回到顶部的函数
function scrollToTop() {
  const scrollTo = 0;
  const scrollDuration = 300; // 滚动持续时间，单位毫秒
  const currentScroll = all.value.scrollTop;
  const startTime = performance.now();

  // 创建平滑滚动的动画
  function scrollStep() {
    const currentTime = performance.now();
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / scrollDuration, 2); // 滚动进度，最大为 1

    // 更新 scrollTop 值
    all.value.scrollTop = currentScroll - (currentScroll * progress);

    // 如果还未滚动到顶部，继续请求动画帧
    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }

  // 开始动画
  requestAnimationFrame(scrollStep);
}

</script>

<style scoped>
.go-back-to-top:hover {
  background-color: #56a6fc;
  /* 鼠标悬停时更改背景色 */
}

.go-back-to-top img {
  width: 25px;
  /* 可以调整为你想要的宽度 */
  height: 25px;
  /* 可以调整为你想要的高度 */
}

.go-back-to-top {
  position: absolute;
  bottom: 20px;
  /* 距离底部20px */
  right: 20px;
  /* 距离右边20px */
  width: 40px;
  /* 可以调整为你想要的宽度 */
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  height: 40px;
  /* 可以调整为你想要的高度 */
  background-color: #e4e2e2;
  /* 设置背景色 */
  color: white;
  /* 设置文字颜色 */
  display: flex;
  justify-content: center;
  transition: background-color 0.3s;
  /* 添加过渡效果 */
  align-items: center;
  border-radius: 50%;
  /* 圆形 */
  cursor: pointer;
  /* 鼠标悬停显示手型 */
}

.all {
  height: 650px;
  overflow-y: auto;
  /* 仅允许垂直滚动条 */
}

.block {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 50px;
}

.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.container {
  display: flex;
  flex-wrap: wrap;
  /* 自动换行 */
  width: 80%;
  gap: 20px;
  /* 每列之间的间距 */
  margin: 0 auto;

  /* 水平居中 */
}

.gourp {
  flex: 1 1 calc(50% - 20px);
  /* 每个项占50%的宽度，减去间距 */
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}

.list-container {
  width: 350px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 5px;
}

.underline {
  width: 100%;
  height: 2px;
  background-color: #000;
  margin-bottom: 15px;
}

.list {
  list-style-type: none;
  padding: 0;
}

.list li span a {
  display: inline-block;
  max-width: 250px;
  /* 设置最大宽度 */
  white-space: nowrap;
  /* 防止换行 */
  overflow: hidden;
  /* 隐藏超出部分 */
  text-overflow: ellipsis;
  /* 显示省略号 */
  text-decoration: none;
  /* 去除链接下划线 */
  color: inherit;
  /* 继承父元素颜色 */
}

.list li span a:hover {
  text-decoration: underline;
  /* 鼠标悬停时显示下划线 */
}

.list li span {
  display: inline-block;
  max-width: 300px;
  /* 设置最大宽度 */
  white-space: nowrap;
  /* 防止换行 */
  overflow: hidden;
  /* 隐藏超出部分 */
  text-overflow: ellipsis;
  /* 显示省略号 */
}

.list li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.list li .date {
  font-size: 14px;
  color: #888;
}


.top {
  margin-bottom: 10px;
  display: flex;
  /* 使用 flexbox 布局 */
  justify-content: space-between;
  /* 在两侧分配空白，确保一个靠左一个靠右 */
  align-items: center;
  /* 垂直居中对齐元素 */
}

.title {
  margin: 0;
  /* 去除标题的默认外边距 */
}

.more {
  text-decoration: none;
  /* 去除链接下划线 */
  color: #007bff;
  /* 设置链接颜色 */
}

.more:hover {
  text-decoration: underline;
  /* 鼠标悬停时显示下划线 */
}
</style>
