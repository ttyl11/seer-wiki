# 怪物图鉴

Seer Mod 共包含 56 个怪物，按以下 4 个类型分组展示。点击对应类型进入怪物列表。

<div class="monster-category-grid">

<a href="/monsters/normal/" class="monster-category-item">
  <div class="monster-category-icon">🐾</div>
  <div class="monster-category-name">普通怪物</div>
  <div class="monster-category-count">28 项</div>
  <div class="monster-category-desc">出现于普通战斗房间（弱怪池/强怪池）</div>
</a>

<a href="/monsters/elite/" class="monster-category-item">
  <div class="monster-category-icon">⚔️</div>
  <div class="monster-category-name">精英怪物</div>
  <div class="monster-category-count">15 项</div>
  <div class="monster-category-desc">出现于精英战斗房间，击败后掉落遗物</div>
</a>

<a href="/monsters/boss/" class="monster-category-item">
  <div class="monster-category-icon">👑</div>
  <div class="monster-category-name">Boss 怪物</div>
  <div class="monster-category-count">11 项</div>
  <div class="monster-category-desc">每层结尾遭遇，击败后掉落稀有遗物</div>
</a>

<a href="/monsters/special/" class="monster-category-item">
  <div class="monster-category-icon">✨</div>
  <div class="monster-category-name">特殊怪物</div>
  <div class="monster-category-count">2 项</div>
  <div class="monster-category-desc">由事件、召唤或特殊机制产生</div>
</a>

</div>

- [查看全部怪物](all)

## 小贴士

- **分类依据**：以遭遇战的房间类型为准（普通怪物、精英怪物、Boss）。特殊怪物不归属于任何战斗池，由事件或召唤产生。
- **彩蛋血量**：部分怪物血量为梗值（如史莱姆 114512、试炼史莱姆 114514、魔狮迪露 999998、索伦森 777），均为源码设定的初始血量。

<style>
.monster-category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin: 24px 0;
}
.monster-category-item {
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
.monster-category-item:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.monster-category-icon {
  font-size: 36px;
  margin-bottom: 12px;
}
.monster-category-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
}
.monster-category-count {
  font-size: 13px;
  color: var(--vp-c-brand);
  margin-bottom: 8px;
}
.monster-category-desc {
  font-size: 12px;
  color: var(--vp-c-text-2);
  text-align: center;
  line-height: 1.5;
}
</style>
