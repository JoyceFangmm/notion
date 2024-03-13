<template>
  <router-view v-slot="{ Component }">
    <keep-alive :max="5">
      <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.fullPath" ref="keepCompRef" />
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.fullPath" ref="commonCompRef" />
  </router-view>
</template>
<!-- 1.通过设置key为$route.fullPath来阻止组件复用，切换路由时mounted会被触发
    2.$route.fullPath，完成解析后的URL，包含查询参数和hash的完整路径
 -->

<script setup lang="ts"></script>

<style scoped></style>
