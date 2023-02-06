import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createViteResolve } from "./config/resolve";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 解析配置
  resolve: createViteResolve(__dirname),
  server: {
    proxy: {
      "/api": {
        target: "http://139.224.54.218:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
