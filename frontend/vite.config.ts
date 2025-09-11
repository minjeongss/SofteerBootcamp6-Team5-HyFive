import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // JS entry 리소스
        entryFileNames: "assets/[name]-[hash].js",
        // Lazy-loaded chunk (dynamic import)
        chunkFileNames: "assets/[name]-[hash].js",
        // CSS, 이미지, 폰트 등 정적 리소스
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
