import { createApp } from "vue";
import App from "./App.vue";
import './assets/styles/global.css'; // Import global styles
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router'; // Import router

const app = createApp(App);

// Use Element Plus
app.use(ElementPlus);
// Use router
app.use(router);

app.mount("#app");
