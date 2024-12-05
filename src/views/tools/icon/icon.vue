<template>
    <div class="icon">
        <img src="@assets/icon.png" />
        <span>资源网盘</span>
    </div>
</template>
<style scoped>
.icon {
    display: flex;
    align-items: center;
    /* Vertically align text and image */
    justify-content: center;
    /* Horizontally align content */
    font-size: 20px;
    user-select: none;
    /* Prevent text selection */
}

.icon img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    /* Add spacing between the image and text */
}

.icon span {
    white-space: nowrap;
    /* Ensure text does not wrap */
    font-weight: bold;
    /* Make the text bold */
}
</style>