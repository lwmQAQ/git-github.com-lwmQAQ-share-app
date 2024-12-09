<template>
    <div class="com-connain">
        <Detials/>
        <div class="user-reply">
            <Detials/>
        </div>
    </div>
</template>

<script setup>
import Detials from './comment-detials.vue';


</script>
<style scoped>
.com-connain {
    display: flex;
    flex-direction: column;  /* 竖直排列子元素 */
    gap: 10px;  /* 设置子元素之间的间距 */
}
</style>