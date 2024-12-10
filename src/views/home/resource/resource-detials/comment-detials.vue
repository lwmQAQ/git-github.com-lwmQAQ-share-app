<template>
    <div class="con">
    <div class="user">
        <div class="avatar"></div>
    </div>
    <div class="com">
        <div class="user-name">lwm</div>
        <div class="content">标题是无敌的</div>
        <div class="tools">
            <div class="com-date">2024-12-03 18:42</div>
            <div class="com-like-num"><div class="icon"><img src="@assets/Like.png" /></div>21</div>
            <div class="reply">回复</div>
        </div>
    </div>
    </div>
</template>

<style scoped>
/* 用于左右分布 user 和 com */
.container {
    display: flex;
    justify-content: space-between;
}
.con {
    display: flex;  /* 启用 Flexbox 布局 */
    justify-content: flex-start;  /* 默认情况下已经是水平排列 */
    align-items: flex-start;  /* 垂直方向对齐到顶部 */
}
.com-like-num {
    display: flex; /* 水平排列 */
    align-items: center; /* 垂直居中对齐 */
}

/* user 和 com */
.user {
    width: 50px; /* 根据需要调整宽度 */
}
.icon{
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    margin-right: 3px;
}
.icon img{
    width: 13px;
    height: 13px;
}
.avatar {
    width: 40px;
    height: 40px;
    background-color: #ccc;  /* 示例背景色，替换为实际头像 */
}
.com {
    width: 75%; /* 根据需要调整宽度 */
    display: flex;
    flex-direction: column; /* com 中的元素竖直排列 */
}

/* tools 中的元素水平排列 */
.tools {
    font-size: 12px;
    gap: 30px; /* 添加元素间的间隔，可以调整数值 */
    color: rgb(153, 153, 153);
    display: flex;
    justify-content: flex-start; /* 元素水平对齐到左侧 */
    align-items: center; /* 垂直居中对齐 */
}

/* 根据需要的样式来调整 user-name、content 和其他元素 */
.user-name, .content, .com-date, .com-like-num, .reply {
    margin-bottom: 5px; /* 给每个元素添加适当的间距 */
}
</style>
