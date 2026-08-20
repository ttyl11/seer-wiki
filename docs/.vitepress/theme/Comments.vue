<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import GiscusComments from './GiscusComments.vue'

const route = useRoute()

// 公共评论区聚合页用大标题；其它内容页统一普通标题。
// 评论区本体全站统一 giscus：每个页面按路径（pathname 映射）对应一条独立讨论串，所有人可见
const isPublicBoard = computed(() => route.path.replace(/\/$/, '').endsWith('/comments'))
</script>

<template>
  <div class="wiki-comments">
    <div class="comments-header">
      <h3 class="comments-title">
        <span class="comments-icon">💬</span>
        {{ isPublicBoard ? '公共评论区' : '评论区' }}
      </h3>
      <p class="comments-desc">所有人可见 · 使用 GitHub 账号登录发言 · 数据存于 GitHub Discussions</p>
    </div>
    <GiscusComments />
  </div>
</template>

<style scoped>
.wiki-comments {
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--vp-c-divider);
}
.comments-header { margin-bottom: 20px; }
.comments-title {
  display: flex; align-items: center; gap: 8px;
  margin: 0; font-size: 18px; font-weight: 600; color: var(--vp-c-text-1);
}
.comments-icon { font-size: 20px; }
.comments-desc { margin: 6px 0 0; font-size: 13px; color: var(--vp-c-text-3); }
</style>
