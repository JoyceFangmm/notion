<template>
  <div class="dark">
    <el-row :justify="'center'">
      <el-col :xs="24" :sm="24" :md="{ span: 16, offset: 2 }" :lg="{ span: 16, offset: 2 }">
        <div class="grid-content ep-bg-purple"> 我是内容 </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" class="hidden-sm-and-down">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import 'element-plus/theme-chalk/display.css'

import { useRouter } from 'vue-router'

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
