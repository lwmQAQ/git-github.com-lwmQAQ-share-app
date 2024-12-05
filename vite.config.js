import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // 引入 path 模块
const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [vue()],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'), // 添加 @asset 别名
      '@views': path.resolve(__dirname, 'src/views'), // 添加 @asset 别名
      '@src': path.resolve(__dirname, 'src'), // 添加 @asset 别名
    },
  },
}));
