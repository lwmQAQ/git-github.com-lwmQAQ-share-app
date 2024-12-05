<template>
    <div class="tools">
        <div class="tool" @click="share">
            <img src="@assets/share.png" />
        </div>
        <div class="tool" @click="min">
            <img src="@assets/min.png" />
        </div>
        <div class="tool" @click="close">
            <img src="@assets/close.png" />
        </div>
    </div>
</template>

<script setup>
import { getCurrentWindow } from "@tauri-apps/api/window";
async function share() {
    
}
async function close(){
  await getCurrentWindow().close()
}
async function min(){
  await getCurrentWindow().minimize();
}
</script>

<style scoped>
.tools {
    width: 120px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    /* Distribute the items evenly */
    align-items: center;
    /* Vertically center the items */
    /* Set a fixed width or adjust as needed */
}

.tool {
  width: 40px; /* Set a fixed width for the tool */
  height: 30px; /* Set a fixed height for the tool */
  display: flex; /* Enable Flexbox for centering */
  align-items: center; /* Vertically center content */
  justify-content: center; /* Horizontally center content */
  background-color: #eff2f6; /* Optional background color */
  cursor: pointer; /* Show a pointer cursor on hover */
}

.tool img {
  max-width: 60%; /* Ensure the image scales within the container */
  max-height: 60%; /* Prevent the image from overflowing */
  display: block; /* Remove any inline spacing caused by default img behavior */
}
.tool:hover{
    background-color: #d3d3d3;
}

</style>