import { fileURLToPath, URL } from "node:url"
import { defineConfig, loadEnv } from "vite"
import Components from "unplugin-vue-components/vite"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
import vue from "@vitejs/plugin-vue"

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const config = {
    plugins: [
      vue(),
      Components({
        resolvers: [AntDesignVueResolver()]
      })
    ],
    root: env.VITE_ROOT_URL,
    base: env.VITE_BASE_URL,
    hmr: true,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },
    server: {
      host: "0.0.0.0",
      port: 6060,
      strictPort: true
    },
    build: {
      minify: "terser",
      target: "modules",
      outDir: env.VITE_OUTDIR_URL,
      emptyOutDir: true,
      terserOptions: {
        compress: {
          // 生产环境时移除 console
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          chunkFileNames: `${env.VITE_OUTDIR_ASSETS}/js/${env.VITE_OUTDIR_NAME}-[hash].js`,
          entryFileNames: `${env.VITE_OUTDIR_ASSETS}/js/[name].js`,
          assetFileNames: `${env.VITE_OUTDIR_ASSETS}/[ext]/${env.VITE_OUTDIR_NAME}-[hash][extname]`
        }
      }
    }
  }

  // Console.log(config)
  return defineConfig(config)
}
