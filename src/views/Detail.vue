<template>
  <div>
    detail 2024-03-13 17:00

    <div @click="jumpHome">跳转到Home页面</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const $router = useRouter()
function jumpHome() {
  $router.push({
    name: 'home',
  })
}
</script>

<style scoped></style>
