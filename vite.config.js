import { fileURLToPath, URL } from "node:url"
import { defineConfig, loadEnv } from "vite"
import Components from "unplugin-vue-components/vite"
import viteCompression from "vite-plugin-compression"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
import vue from "@vitejs/plugin-vue"

const Timestamp = new Date().getTime()

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const config = {
    plugins: [
      vue(),
      Components({
        resolvers: [AntDesignVueResolver()]
      }),
      viteCompression({ threshold: 1024 * 1024 })
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
      chunkSizeWarningLimit: 1500,
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
          chunkFileNames: `${env.VITE_OUTDIR_ASSETS}/js/${env.VITE_OUTDIR_NAME}-[hash]-${Timestamp}.js`,
          entryFileNames: `${env.VITE_OUTDIR_ASSETS}/js/[name]-${Timestamp}.js`,
          assetFileNames: `${env.VITE_OUTDIR_ASSETS}/[ext]/${env.VITE_OUTDIR_NAME}-[hash]-${Timestamp}[extname]`
        }
      }
    }
  }

  // Console.log(config)
  return defineConfig(config)
}
