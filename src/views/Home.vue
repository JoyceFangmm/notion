<template>
  <div>
    home 2024-03-13 17:00
    <div @click="jumpDetail">跳转到detail页面</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const $router = useRouter()
function jumpDetail() {
  $router.push({
    name: 'detail',
  })
}
</script>

<style scoped></style>
