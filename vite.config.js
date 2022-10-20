import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
  },
  server: {
    host: '0.0.0.0',
    port: 6060,
    strictPort: true,
  },
  build: {
    target: "modules",
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
    minify: "terser",
  },
});
