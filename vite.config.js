import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: "./public",
  base: "/minesweeper/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
  },
  preview: {
    host: '0.0.0.0'
  },
  build: {
    target: "modules",
    outDir: "../dist",
    emptyOutDir: true,
    assetsDir: "assets",
    minify: "terser",
  },
});
