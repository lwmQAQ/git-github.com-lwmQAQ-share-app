<template>
    <div class="container">
      <Head  data-tauri-drag-region style="width: 100%;"></Head>
      <Main ></Main>
    </div>
  </template>
  
  <script setup>
  import Head from './head/head.vue'
  import Main from './main/main.vue'
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column; /* Stack the child components vertically */
    width: 100%; /* Full width of the container */
    height: 100vh; /* Full viewport height */
  }
  </style>
  