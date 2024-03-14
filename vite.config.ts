import legacyPlugin from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
// eslint-disable-next-line import/no-unresolved
import AutoImport from 'unplugin-auto-import/vite'
// eslint-disable-next-line import/no-unresolved
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// eslint-disable-next-line import/no-unresolved
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root) //获取环境变量，即package.json内scripts的环境变量，https://cn.vitejs.dev/config/

  const publicPath = env.VITE_PUBLIC_PATH
  console.log(`当前环境信息-->\nenv=${JSON.stringify(env)}\nmode=${mode}\npublicPath=${publicPath}`)

  const pluginList = [] as any
  if (mode == 'development') {
    // 低版本调试
    pluginList.push({
      ...esbuild({
        target: 'chrome70',
        // 如有需要可以在这里加 js ts 之类的其他后缀
        include: /\.(vue|ts)$/,
        loaders: {
          '.vue': 'js',
        },
      }),
      enforce: 'post',
    })
  }

  return {
    base: publicPath,
    define: {
      'process.env.VITE_BUILD_MODE': `"${mode}"`,
    },
    plugins: [
      vue(),
      ...pluginList,
      legacyPlugin({
        targets: ['defaults', 'ie >= 11', 'chrome >= 50'], // 需要兼容的目标列表，可以设置多个；
        modernPolyfills: ['es.promise.finally', 'es.array.flat', 'es.array.flat-map'],
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: '0.0.0.0',
      port: parseInt(env.VITE_PORT),
      proxy: {},
    },
    esbuild: {
      drop: env.VITE_DROP_CONSOLE === 'true' ? ['console', 'debugger'] : [],
    },
    build: {
      target: 'es2015', // modules
      outDir: 'docs',
      chunkSizeWarningLimit: 1500,
      sourcemap: env.VITE_SOURCE_MAP === 'true',
    },
  }
})
