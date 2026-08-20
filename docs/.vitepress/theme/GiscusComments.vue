<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import { useRoute, useData } from 'vitepress'

// ==================== giscus 配置 ====================
// 仓库：ttyl11/ttyl11.github.io（GitHub Pages 部署仓库，Discussions 已开启）
// 分类：Announcements（giscus 官方推荐——giscus bot 自动建帖，普通用户可回复，不能手动开新帖）
// 若更换仓库/分类，重新在 https://giscus.app/zh-CN 生成后替换以下 4 个值：
const GISCUS_REPO = 'ttyl11/ttyl11.github.io'
const GISCUS_REPO_ID = 'R_kgDOT5Ua4A'
const GISCUS_CATEGORY = 'Announcements'
const GISCUS_CATEGORY_ID = 'DIC_kwDOT5Ua4M4DDcTr'
// ====================================================

const route = useRoute()
const { isDark } = useData()
const container = ref<HTMLElement>()

const configured = !!(GISCUS_REPO && GISCUS_REPO_ID && GISCUS_CATEGORY_ID)

function giscusTheme() {
  return isDark.value ? 'transparent_dark' : 'light'
}

function mountGiscus() {
  if (!configured || !container.value) return
  container.value.innerHTML = ''

  const s = document.createElement('script')
  s.src = 'https://giscus.app/client.js'
  s.async = true
  s.crossOrigin = 'anonymous'
  s.setAttribute('data-repo', GISCUS_REPO)
  s.setAttribute('data-repo-id', GISCUS_REPO_ID)
  s.setAttribute('data-category', GISCUS_CATEGORY)
  s.setAttribute('data-category-id', GISCUS_CATEGORY_ID)
  s.setAttribute('data-mapping', 'pathname')
  s.setAttribute('data-strict', '0')
  s.setAttribute('data-reactions-enabled', '1')
  s.setAttribute('data-emit-metadata', '0')
  s.setAttribute('data-input-position', 'top')
  s.setAttribute('data-theme', giscusTheme())
  s.setAttribute('data-lang', 'zh-CN')
  container.value.appendChild(s)
}

// 深色/浅色主题切换时通知 giscus 换肤
watch(isDark, () => {
  const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: giscusTheme() } } },
    'https://giscus.app'
  )
})

watch(() => route.path, () => nextTick(mountGiscus))

onMounted(mountGiscus)
</script>

<template>
  <div class="giscus-wrap">
    <template v-if="configured">
      <div ref="container"></div>
    </template>
    <div v-else class="giscus-unconfigured">
      <p class="giscus-unconfigured-title">评论区尚未接入</p>
      <p>
        站长需要先完成 giscus 配置（GitHub 公开仓库 + 开启 Discussions + 安装
        <a href="https://github.com/apps/giscus" target="_blank" rel="noopener">giscus App</a>，
        在 <a href="https://giscus.app/zh-CN" target="_blank" rel="noopener">giscus.app</a>
        生成参数后填入 <code>.vitepress/theme/GiscusComments.vue</code> 顶部配置区）。
      </p>
    </div>
  </div>
</template>

<style scoped>
.giscus-wrap { margin-top: 8px; }
.giscus-unconfigured {
  padding: 20px 24px; border: 1px dashed var(--vp-c-divider);
  border-radius: 12px; background: var(--vp-c-bg-soft);
  font-size: 14px; line-height: 1.8; color: var(--vp-c-text-2);
}
.giscus-unconfigured-title { font-weight: 600; color: var(--vp-c-text-1); margin: 0 0 6px; }
.giscus-unconfigured code {
  padding: 2px 6px; border-radius: 4px;
  background: var(--vp-c-bg); font-size: 13px;
}
</style>
