<template>
  <div class="dark">
    <el-row :justify="'center'">
      <el-col :xs="24" :sm="24" :md="{ span: 16, offset: 2 }" :lg="{ span: 16, offset: 2 }">
        <div class="grid-content">
          <!-- <div v-html="Example2"></div> -->
          <!-- <Example /> -->
          <!-- <Test /> -->
          <div>2024-04-11 08:22</div>
          <component :is="markdownComponents" />
        </div>
      </el-col>
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

import { useHead } from '@unhead/vue'
import { defineAsyncComponent, nextTick } from 'vue'
import { useRouter } from 'vue-router'

import blogData from '../../api/blogData'
blogData.init()
const path = blogData.allData[2].pages[0].path
console.log(path)

// const path =
//   '../../../blog/Export-51317f2f-8a40-4ba9-b7eb-d0704b8181e0/Life ffa2022abf62464dbd187b46e72c263a/Life2-About，H难过。 4b73f874ee4d433dac44b2800e0f6d71.md'

const markdownComponents = defineAsyncComponent(() => import(path))

// eslint-disable-next-line import/no-unresolved
import Example2 from './Example.html?raw'
import Example from './Example.md'
/** 将资源引入为字符串
 * 资源可以使用 ?raw 后缀声明作为字符串引入
 * vite官网地址：https://vitejs.cn/guide/assets.html#explicit-url-imports
 */
// eslint-disable-next-line import/no-unresolved
import mdExample from './Example.md?raw'
nextTick(() => {
  const mdBody = document.querySelector('.markdown-body') as any
  // console.log('房志梅-3')
  // console.log(mdBody)
  // console.log(JSON.stringify(mdBody))

  const container = mdBody

  if (container) {
    // 查找第一个 <h1>元素
    const firstH1 = container.querySelector('h1')

    // 查找第一个 <hr> 元素
    const firstHr = container.querySelector('hr')

    if (firstH1 && firstHr) {
      let element = firstH1.nextSibling // 从 <h1> 的下一个兄弟开始

      // 循环直到遇到第一个 <hr> 或没有更多兄弟元素
      while (element && element !== firstHr) {
        const nextElement = element.nextSibling // 保存下一个兄弟节点的引用
        container.removeChild(element) // 删除当前节点
        element = nextElement // 移动到下一个兄弟节点
      }
      container.removeChild(firstHr) // 删除当前节点
    }
  }
})

const newmdExample = mdExample.replace(/date:.*\nslug:.*\nstatus:.*\ntags:.*\nsummary:.*\ntype:.*\n\n---\n/, '')
// console.log('房志梅-2')
// console.log(newmdExample)

useHead({
  title: '我是新标题',
  meta: [{ name: 'description', content: () => '我是描述，中国，joyce' }],
  titleTemplate: 'My Site - %s',
})
// console.log('房志梅-1')
// console.log(Example)
// console.log('房志梅')

const dom = document.createElement('div')
dom.innerHTML = Example2
// console.log(dom)

// const table = dom.getElementsByClassName('properties')[0] as any
const table = dom.querySelector('.properties') as any
// console.log(table)
// console.log(table[0])
for (let i = 0; i < table.rows.length; i++) {
  // 获取当前行
  const row = table.rows[i]

  // 遍历当前行的单元格
  for (let j = 0; j < row.cells.length; j++) {
    // 获取当前单元格
    const cell = row.cells[j]

    // 输出单元格内容
    // console.log(cell.innerHTML)
  }
}

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

<style>
.code {
  overflow-x: scroll;
}
</style>
