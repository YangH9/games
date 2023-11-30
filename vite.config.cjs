import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteCompression from 'vite-plugin-compression'
import { createHtmlPlugin } from 'vite-plugin-html'

// const Timestamp = new Date().getTime()

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const config = {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // 将所有带短横线的标签名都视为自定义元素
            isCustomElement: (tag) => tag.startsWith('my-')
          }
        }
      }),
      vueJsx(),
      createHtmlPlugin({ minify: true, inject: { data: { title: env.VITE_TITLE } } }),
      viteCompression({ threshold: 1024 * 1024 * 10 })
    ],
    root: env.VITE_ROOT_URL,
    base: env.VITE_BASE_URL,
    hmr: true,
    resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
    server: { host: '0.0.0.0', port: 6600, strictPort: true },
    build: {
      chunkSizeWarningLimit: 1024 * 1024 * 10,
      minify: 'terser',
      target: 'modules',
      outDir: env.VITE_OUTDIR_URL,
      emptyOutDir: true,
      terserOptions: {
        // 生产环境时移除 console
        compress: { drop_console: true, drop_debugger: true }
      },
      rollupOptions: {
        output: {
          chunkFileNames: `${env.VITE_OUTDIR_ASSETS}/js/${env.VITE_OUTDIR_NAME}-[hash].js`,
          entryFileNames: `${env.VITE_OUTDIR_ASSETS}/js/[name]-[hash].js`,
          assetFileNames: `${env.VITE_OUTDIR_ASSETS}/[ext]/${env.VITE_OUTDIR_NAME}-[hash][extname]`
        }
      }
    }
  }

  return defineConfig(config)
}
