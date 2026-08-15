<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Comments from './Comments.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <Comments />
    </template>
  </DefaultTheme.Layout>
</template>
