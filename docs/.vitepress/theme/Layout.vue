<script setup lang="ts">
import { onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Comments from './Comments.vue'

onMounted(() => {
  // 兜底：不带 /seer-wiki/ 前缀的旧链接（如 /relics/starter/）会落到 GitHub Pages 的
  // 404.html（仍是本 SPA），这里识别后自动跳转到带前缀的正确地址
  const p = window.location.pathname
  if (!p.startsWith('/seer-wiki/')) {
    const m = p.match(/^\/(cards|relics|powers|potions|monsters|mechanics|characters|enchantments|orbs|trivia|combos|easter-eggs|changelog|support|comments)(\/|$)/)
    if (m) {
      window.location.replace('/seer-wiki' + p + window.location.search + window.location.hash)
    }
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
