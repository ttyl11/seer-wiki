<script setup lang="ts">
import { onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Comments from './Comments.vue'

onMounted(() => {
  // 兼容旧链接：仓库曾是 seer-wiki（子路径部署），改名 ttyl11.github.io 后站点挂根路径，
  // 带 /seer-wiki/ 前缀的旧链接会落到 404.html（本 SPA），这里自动去掉前缀跳转
  const p = window.location.pathname
  if (p.startsWith('/seer-wiki/') && p !== '/seer-wiki/') {
    window.location.replace(p.replace(/^\/seer-wiki/, '') + window.location.search + window.location.hash)
  } else if (p === '/seer-wiki/' || p === '/seer-wiki') {
    window.location.replace('/' + window.location.search + window.location.hash)
  }
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <Comments />
    </template>
  </DefaultTheme.Layout>
</template>
