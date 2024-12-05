<script setup>
import { onMounted, ref } from "vue";
import { WebviewWindow } from '@tauri-apps/api/webviewWindow'
import { useRouter } from 'vue-router';

const router = useRouter();  // 获取router实例
onMounted(() => {
  const token = localStorage.getItem('token'); // or sessionStorage.getItem('token') if stored in sessionStorage
  
  if (token) {
    createhome()
  } else {
    router.push('/inlet');  // 跳转到关于页
  }
})
function createhome() {
  const webview = new WebviewWindow('home', {
    url: '/home', // The URL to load in the window
    width: 800,   // Set the width of the window
    height: 600,  // Set the height of the window
    resizable: true, // Optionally, make the window resizable
    fullscreen: false, // Optionally, make the window fullscreen
    title: "Home Window" // Optional: Set the window's title
  });

  // Since the webview window is created asynchronously,
  // Tauri emits the `tauri://created` and `tauri://error` to notify you of the creation response
  webview.once('tauri://created', function () {
    console.log('Webview window successfully created');
  });

  webview.once('tauri://error', function (e) {
    console.error('An error occurred during webview window creation', e);
  });
}
/**
async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke("greet", { name: name.value });
}
 */

</script>

<template>
  <router-view></router-view>  
</template>

<style scoped>

</style>
