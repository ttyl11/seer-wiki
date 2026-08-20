# 卡牌图鉴

Seer Mod 共有 289 张卡牌，按以下 9 个分类分组展示。点击对应分类进入卡牌列表。

<div class="card-category-grid">

<a href="/cards/basic/" class="card-category-item">
  <div class="card-category-icon">🧱</div>
  <div class="card-category-name">基础牌</div>
  <div class="card-category-count">9 项</div>
  <div class="card-category-desc">谱尼的初始卡牌：7 张初始 PP 牌与打击、防御</div>
</a>

<a href="/cards/character/" class="card-category-item">
  <div class="card-category-icon">🎭</div>
  <div class="card-category-name">角色（圣灵谱尼）牌</div>
  <div class="card-category-count">181 项</div>
  <div class="card-category-desc">谱尼角色专属卡牌，构成战斗的核心卡池</div>
</a>

<a href="/cards/ancient/" class="card-category-item">
  <div class="card-category-icon">📜</div>
  <div class="card-category-name">先古牌</div>
  <div class="card-category-count">11 项</div>
  <div class="card-category-desc">先古稀有度卡牌（含横向 7 张真神牌），效果强大且带有特殊机制</div>
</a>

<a href="/cards/curse/" class="card-category-item">
  <div class="card-category-icon">💀</div>
  <div class="card-category-name">诅咒牌</div>
  <div class="card-category-count">18 项</div>
  <div class="card-category-desc">带有负面效果的卡牌，会干扰玩家的战斗节奏</div>
</a>

<a href="/cards/status/" class="card-category-item">
  <div class="card-category-icon">⚗️</div>
  <div class="card-category-name">状态牌</div>
  <div class="card-category-count">13 项</div>
  <div class="card-category-desc">不可打出或具有被动效果，通常由其他机制生成</div>
</a>

<a href="/cards/colorless/" class="card-category-item">
  <div class="card-category-icon">🌈</div>
  <div class="card-category-name">无色牌</div>
  <div class="card-category-count">35 项</div>
  <div class="card-category-desc">可被任何角色使用，主要通过事件或特殊途径获取</div>
</a>

<a href="/cards/event/" class="card-category-item">
  <div class="card-category-icon">✨</div>
  <div class="card-category-name">事件牌</div>
  <div class="card-category-count">9 项</div>
  <div class="card-category-desc">由特定事件或剧情触发获得的卡牌</div>
</a>

<a href="/cards/token/" class="card-category-item">
  <div class="card-category-icon">🎴</div>
  <div class="card-category-name">衍生牌</div>
  <div class="card-category-count">11 项</div>
  <div class="card-category-desc">通过其他卡牌/遗物/能力在战斗中生成的卡牌</div>
</a>

<a href="/cards/quest/" class="card-category-item">
  <div class="card-category-icon">🎯</div>
  <div class="card-category-name">任务牌</div>
  <div class="card-category-count">2 项</div>
  <div class="card-category-desc">带有长期追踪目标，完成条件后获得奖励并移除</div>
</a>

</div>

<style>
.card-category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin: 24px 0;
}
.card-category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  background: var(--vp-c-bg);
}
.card-category-item:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.card-category-icon {
  font-size: 36px;
  margin-bottom: 12px;
}
.card-category-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
}
.card-category-count {
  font-size: 13px;
  color: var(--vp-c-brand);
  margin-bottom: 8px;
}
.card-category-desc {
  font-size: 12px;
  color: var(--vp-c-text-2);
  text-align: center;
  line-height: 1.5;
}
</style>
