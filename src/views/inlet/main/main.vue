<template>
    <div class="main">
        <div class="left">
            <Left />
        </div>
        <div class="right">
            <Right />
        </div>
    </div>
</template>

<script setup>
import Left from './left.vue'
import Right from './right.vue'
</script>

<style scoped>
.main {
    display: flex;
    /* Use Flexbox to arrange children horizontally */
    width: 100%;
    height: 100vh;
    /* Full width */
}

.left {
    flex: 0 0 45%;
    /* Left takes 40% of the width */
}

.right {
    flex: 0 0 55%;
    /* Right takes 60% of the width */
}
</style>