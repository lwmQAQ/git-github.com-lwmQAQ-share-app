<template>
    <div class="head">
        <div class="icon">
            <img src="@assets/icon.png"/>
            <span>资源网盘</span>
        </div>
        <div class="tools"><Controller /></div>
    </div>
</template>

<script setup>
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


.icon {
  display: flex;
  align-items: center; /* Vertically align text and image */
  justify-content: center; /* Horizontally align content */
  font-size: 20px;
  
  margin-left: 265px; /* Optional: Add left spacing */
  user-select: none; /* Prevent text selection */
}

.icon img {
  width: 40px;
  height: 40px;
  margin-right: 10px; /* Add spacing between the image and text */
}
.icon span {
  white-space: nowrap; /* Ensure text does not wrap */
  font-weight: bold; /* Make the text bold */
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