<template>
    <div class="head">
        <div class="icons"> <Icon/></div>
        <div class="tools"><Controller /></div>
    </div>
</template>

<script setup>
import Icon from '@views/tools/icon/icon.vue'
import Controller from '@views/tools/controller/controller.vue'
// You can add logic here if necessary
</script>

<style scoped>
.head {
    width: 100%;
    height: 80px;
    background-color: #eff2f6;
    display: flex;
    justify-content: space-between;
    /* Aligns the icon and tools horizontally */
    align-items: center;
    /* Vertically center the items */
}


.icons {
  margin-left: 265px; /* Optional: Add left spacing */
}


.tools {
    position: absolute;
    width: 120px;
    height: 30px;
    background-color: aliceblue;
    top: 0px;
    /* Adjust the distance from the top */
    right: 0px;
    /* Adjust the distance from the right */
}
</style>