<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import GiscusComments from './GiscusComments.vue'

interface Comment {
  id: string
  nickname: string
  content: string
  time: number
  pageKey: string
}

const route = useRoute()

// 公共评论区页面用 giscus（所有人可见），其它页面用本地存储评论
const isPublicBoard = computed(() => route.path.replace(/\/$/, '').endsWith('/comments'))

const getPageKey = () => route.path || 'unknown'

const nickname = ref('')
const content = ref('')
const comments = ref<Comment[]>([])

const STORAGE_KEY = 'seer-wiki-comments'
const NICKNAME_KEY = 'seer-wiki-nickname'

function loadComments() {
  try {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as Comment[]
    const key = getPageKey()
    comments.value = all.filter(c => c.pageKey === key).sort((a, b) => a.time - b.time)
  } catch {
    comments.value = []
  }
}

function saveComment() {
  if (!content.value.trim()) return
  const nick = nickname.value.trim() || '匿名赛尔'

  const comment: Comment = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    nickname: nick,
    content: content.value.trim(),
    time: Date.now(),
    pageKey: getPageKey()
  }

  try {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as Comment[]
    all.push(comment)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
    localStorage.setItem(NICKNAME_KEY, nick)
  } catch {}

  content.value = ''
  loadComments()
}

function deleteComment(id: string) {
  try {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as Comment[]
    const filtered = all.filter(c => c.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
    loadComments()
  } catch {}
}

function formatTime(ts: number) {
  const diff = Date.now() - ts
  if (diff < 60000) return '刚刚'
  if (diff < 3600000) return `${Math.floor(diff / 60000)} 分钟前`
  if (diff < 86400000) return `${Math.floor(diff / 3600000)} 小时前`
  if (diff < 2592000000) return `${Math.floor(diff / 86400000)} 天前`
  const d = new Date(ts)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function avatarColor(name: string) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  const colors = ['#3aa675', '#e74c3c', '#3498db', '#9b59b6', '#f39c12', '#1abc9c', '#e67e22', '#2ecc71']
  return colors[Math.abs(hash) % colors.length]
}

function avatarLetter(name: string) {
  return name.charAt(0).toUpperCase()
}

onMounted(() => {
  nickname.value = localStorage.getItem(NICKNAME_KEY) || ''
  loadComments()
})

watch(() => route.path, () => {
  content.value = ''
  loadComments()
})
</script>

<template>
  <div class="wiki-comments" v-if="isPublicBoard">
    <div class="comments-header">
      <h3 class="comments-title">
        <span class="comments-icon">💬</span>
        公共评论区
      </h3>
      <p class="comments-desc">所有人可见 · 使用 GitHub 账号登录发言</p>
    </div>
    <GiscusComments />
  </div>

  <div class="wiki-comments" v-else>
    <div class="comments-header">
      <h3 class="comments-title">
        <span class="comments-icon">💬</span>
        评论区
        <span class="comments-count" v-if="comments.length > 0">{{ comments.length }}</span>
      </h3>
      <p class="comments-desc">评论存储在本地浏览器中，仅你可见</p>
    </div>

    <div class="comment-form">
      <div class="comment-nick-row">
        <div class="comment-avatar" :style="{ backgroundColor: avatarColor(nickname || '匿名赛尔') }">
          {{ avatarLetter(nickname || '匿') }}
        </div>
        <input
          v-model="nickname"
          type="text"
          class="comment-nick-input"
          placeholder="昵称（默认匿名赛尔）"
          maxlength="20"
        />
      </div>
      <textarea
        v-model="content"
        class="comment-textarea"
        placeholder="写下你的想法、补充、纠错建议..."
        rows="3"
        maxlength="500"
        @keydown.ctrl.enter="saveComment"
        @keydown.meta.enter="saveComment"
      />
      <div class="comment-form-footer">
        <span class="comment-hint">Ctrl+Enter 快速提交</span>
        <button class="comment-submit" :disabled="!content.trim()" @click="saveComment">
          发表评论
        </button>
      </div>
    </div>

    <div class="comments-list" v-if="comments.length > 0">
      <div v-for="c in comments" :key="c.id" class="comment-item">
        <div class="comment-item-header">
          <div class="comment-avatar-small" :style="{ backgroundColor: avatarColor(c.nickname) }">
            {{ avatarLetter(c.nickname) }}
          </div>
          <span class="comment-name">{{ c.nickname }}</span>
          <span class="comment-time">{{ formatTime(c.time) }}</span>
          <button class="comment-delete" title="删除此条评论" @click="deleteComment(c.id)">×</button>
        </div>
        <div class="comment-body">{{ c.content }}</div>
      </div>
    </div>

    <div class="comments-empty" v-else>
      <span class="comments-empty-icon">🫧</span>
      <span>还没有评论，来写第一条吧~</span>
    </div>
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
.comments-count {
  display: inline-flex; align-items: center; justify-content: center;
  min-width: 22px; height: 22px; padding: 0 6px; border-radius: 11px;
  background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1);
  font-size: 13px; font-weight: 600;
}
.comments-desc { margin: 6px 0 0; font-size: 13px; color: var(--vp-c-text-3); }

.comment-form {
  background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);
  border-radius: 12px; padding: 16px; margin-bottom: 20px;
}
.comment-nick-row { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.comment-avatar {
  width: 32px; height: 32px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: white; font-weight: 700; font-size: 14px; flex-shrink: 0;
}
.comment-avatar-small {
  width: 28px; height: 28px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: white; font-weight: 700; font-size: 12px; flex-shrink: 0;
}
.comment-nick-input {
  flex: 1; height: 32px; padding: 0 12px;
  border: 1px solid var(--vp-c-divider); border-radius: 8px;
  background: var(--vp-c-bg); color: var(--vp-c-text-1);
  font-size: 14px; outline: none; transition: border-color 0.2s;
}
.comment-nick-input:focus { border-color: var(--vp-c-brand-1); }
.comment-textarea {
  width: 100%; padding: 10px 12px;
  border: 1px solid var(--vp-c-divider); border-radius: 8px;
  background: var(--vp-c-bg); color: var(--vp-c-text-1);
  font-size: 14px; line-height: 1.6; resize: vertical;
  outline: none; transition: border-color 0.2s; font-family: inherit; box-sizing: border-box;
}
.comment-textarea:focus { border-color: var(--vp-c-brand-1); }
.comment-form-footer {
  display: flex; align-items: center; justify-content: space-between; margin-top: 10px;
}
.comment-hint { font-size: 12px; color: var(--vp-c-text-3); }
.comment-submit {
  padding: 7px 20px; border: none; border-radius: 8px;
  background: var(--vp-c-brand-1); color: white;
  font-size: 14px; font-weight: 500; cursor: pointer;
  transition: background 0.2s, opacity 0.2s;
}
.comment-submit:hover:not(:disabled) { background: var(--vp-c-brand-2); }
.comment-submit:disabled { opacity: 0.5; cursor: not-allowed; }

.comments-list { display: flex; flex-direction: column; gap: 12px; }
.comment-item {
  padding: 14px 16px; background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider); border-radius: 10px;
  transition: border-color 0.2s;
}
.comment-item:hover { border-color: var(--vp-c-divider-light); }
.comment-item-header { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.comment-name { font-weight: 600; font-size: 14px; color: var(--vp-c-text-1); }
.comment-time { font-size: 12px; color: var(--vp-c-text-3); }
.comment-delete {
  margin-left: auto; width: 22px; height: 22px; border: none; border-radius: 4px;
  background: transparent; color: var(--vp-c-text-3); font-size: 16px;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: background 0.2s, color 0.2s; padding: 0; line-height: 1;
}
.comment-delete:hover { background: var(--vp-c-danger-soft); color: var(--vp-c-danger-1); }
.comment-body {
  font-size: 14px; line-height: 1.7; color: var(--vp-c-text-1);
  white-space: pre-wrap; word-break: break-word; padding-left: 36px;
}
.comments-empty {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  padding: 40px 0; color: var(--vp-c-text-3); font-size: 14px;
}
.comments-empty-icon { font-size: 40px; opacity: 0.6; }
</style>
