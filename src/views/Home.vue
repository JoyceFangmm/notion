<template>
  <div class="dark">
    <el-row :justify="'center'">
      <el-col :xs="24" :sm="24" :md="{ span: 16, offset: 2 }" :lg="{ span: 16, offset: 2 }"
        ><div class="grid-content"> <Example /> </div
      ></el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" class="hidden-sm-and-down">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// xs	<768px 响应式栅格数或者栅格属性对象
// sm	≥768px 响应式栅格数或者栅格属性对象
// md	≥992px 响应式栅格数或者栅格属性对象
// lg	≥1200px 响应式栅格数或者栅格属性对象
// xl	≥1920px 响应式栅格数或者栅格属性对象

// hidden-xs-only - 当视口在 xs 尺寸时隐藏
// hidden-sm-only - 当视口在 sm 尺寸时隐藏
// hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏
// hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏
// hidden-md-only - 当视口在 md 尺寸时隐藏
// hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏
// hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏
// hidden-lg-only - 当视口在 lg 尺寸时隐藏
// hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏
// hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏
// hidden-xl-only - 当视口在 xl 尺寸时隐藏
import 'element-plus/theme-chalk/display.css'

import { useRouter } from 'vue-router'

// eslint-disable-next-line import/no-unresolved
import Example2 from './Adding.html?raw'
import Example from './Example.md'
/** 将资源引入为字符串
 * 资源可以使用 ?raw 后缀声明作为字符串引入
 * vite官网地址：https://vitejs.cn/guide/assets.html#explicit-url-imports
 */
// eslint-disable-next-line import/no-unresolved
import mdExample from './Example.md?raw'

console.log('房志梅')
console.log(mdExample)

const $router = useRouter()
function jumpDetail() {
  $router.push({
    name: 'detail',
  })
}
</script>

<style scoped lang="scss">
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 76px;
  font-size: 20px;
}

:root {
  --ep-c-bg-row: #f9fafc;
  --ep-c-bg-purple: #d3dce6;
  --ep-c-bg-purple-dark: #99a9bf;
  --ep-c-bg-purple-light: #e5e9f2;
}

.dark {
  --ep-c-bg-row: #18191a;
  --ep-c-bg-purple: #46494d;
  --ep-c-bg-purple-dark: #242526;
  --ep-c-bg-purple-light: #667180;
}

.row-bg {
  padding: 10px 0;
  background-color: var(--ep-c-bg-row);
}

.ep-bg-purple-dark {
  background: var(--ep-c-bg-purple-dark);
}

.ep-bg-purple {
  background: var(--ep-c-bg-purple);
}

.ep-bg-purple-light {
  background: var(--ep-c-bg-purple-light);
}
</style>
