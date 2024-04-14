<template>
  <div>
    <div>2024-04-14 10:05</div>

    <router-link to="/temp">temp</router-link>
    <div>======*****==============*****========</div>
    <router-link to="/中文名字">中文名字</router-link>
    <div>======*****==============*****========</div>
    <router-link to="/temp qiantao">temp qiantao</router-link>
    <div>======*****==============*****========</div>
    <router-link to="/temp_qiantao">temp_qiantao</router-link>
    <div>======*****==============*****========</div>
    <Test></Test>
    <div>======*****==============*****========</div>
    <div class="markdown-body" v-html="markdownToHtml"></div>
  </div>
</template>

<script setup lang="ts">
import { marked } from 'marked'
import { nextTick, ref, shallowRef } from 'vue'

import BlogData from '@/api/blogData'
import Test from '@/pages/markdown/Export-51317f2f-8a40-4ba9-b7eb-d0704b8181e0/Life ffa2022abf62464dbd187b46e72c263a/Life2-About，H难过。 4b73f874ee4d433dac44b2800e0f6d71.md'

const value = ref('**Hello,World**')
const markdownToHtml = shallowRef('Loading...')
markdownToHtml.value = marked(value.value) as any

const path2 = BlogData.allData[0].pages[10].path
console.log('path2-->', path2)
import { fetchGet } from '@/utils/api'
const getMd2 = async () => {
  const response = await fetchGet(path2)

  console.log('response-->', response)

  value.value = response as any
  console.log(typeof marked(value.value))
  console.log(typeof marked.parse(value.value))
  console.log(typeof Test)
  console.log(Test)
  markdownToHtml.value = marked(value.value) as any

  nextTick(() => {
    // 获取所有的img标签
    const imgTags = document.getElementsByTagName('img')

    // 遍历每个img标签
    for (let i = 0; i < imgTags.length; i++) {
      const img = imgTags[i]
      const src = img.getAttribute('src')

      // 如果src存在且不以指定的前缀开头，则添加前缀
      if (src && !src.startsWith('/blog/markdown')) {
        const arr = path2.split('/')
        arr.shift()
        arr.pop()

        const srcNew = import.meta.env.VITE_PUBLIC_PATH + arr.join('/') + '/' + src
        console.log('src-->', path2, ' ', src)
        console.log('srcNew-->', srcNew)
        img.setAttribute('src', srcNew)
      }
    }
  })
}

getMd2()
</script>

<style scoped></style>
