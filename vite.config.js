import { fileURLToPath, URL } from "node:url"
import { defineConfig, loadEnv } from "vite"
import Components from "unplugin-vue-components/vite"
import viteCompression from "vite-plugin-compression"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
import vue from "@vitejs/plugin-vue"

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const config = {
    plugins: [
      vue(),
      Components({
        resolvers: [AntDesignVueResolver()]
      }),
      viteCompression({
        // 生成压缩包gz
        verbose: true, // 是否在控制台输出压缩结果
        filter: /\.(js|mjs|json|css|html)$/i, // 指定哪些资源不压缩
        disable: false, // 是否禁用
        threshold: 102400, // 体积大于 threshold 才会被压缩,单位 b
        algorithm: "gzip", // 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
        ext: ".gz", // 生成的压缩包后缀
        // compressionOptions: Object, // 对应的压缩算法的参数
        deleteOriginFile: true // 压缩后是否删除源文件
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
      // chunkSizeWarningLimit: 1500,
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
