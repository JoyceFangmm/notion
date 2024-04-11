/// <reference types="vite/client" />

/// <reference types="vite-plugin-pages/client" />

// https://cn.vuejs.org/guide/typescript/overview.html#definecomponent
// 查看defineComponent()章节
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // 下方是使用了注释方式来配置ESLint规则，否则会有警告
  /* eslint @typescript-eslint/no-explicit-any: 0, @typescript-eslint/ban-types: 0 */
  const component: DefineComponent<{}, {}, any>
  export default component
}
