<template>
  <div class="container">

    <Head data-tauri-drag-region style="width: 100%;"></Head>
    <Main></Main>
  </div>
</template>

<script setup>
import Head from './head/head.vue'
import Main from './main/main.vue'
import { onMounted } from "vue";

import { WebviewWindow } from '@tauri-apps/api/webviewWindow'
import { getCurrentWindow } from "@tauri-apps/api/window";
onMounted(async () => {
  const token = localStorage.getItem('token'); // or sessionStorage.getItem('token') if stored in sessionStorage
  if (!token) {
    createhome(); // assuming this is a function that creates a home page or redirects
    await getCurrentWindow().close()
  }
});
function createhome() {
  const webview = new WebviewWindow('home', {
    url: '/home', 
    width: 1100,   // Set the width of the window
    height: 700,  // Set the height of the window
    decorations: false,
    resizable: false, // Optionally, make the window resizable
    fullscreen: false, // Optionally, make the window fullscreen
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
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  /* Stack the child components vertically */
  width: 100%;
  /* Full width of the container */
  height: 100vh;
  /* Full viewport height */
}
</style>