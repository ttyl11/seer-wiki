# 充能球图鉴

Seer Mod 在原版 5 种充能球（闪电、冰霜、黑暗、等离子、玻璃）基础上**新增了 9 种自定义充能球**，按功能分为 3 类。点击对应分类进入详情。

<div class="orb-category-grid">

<a href="forest_orb" class="orb-category-item">
  <img src="/images/orbs/forest_orb.png" alt="森林" class="orb-category-icon" />
  <div class="orb-category-name">森林</div>
  <div class="orb-category-type">异常施加型</div>
  <div class="orb-category-desc">被动随机中毒，激发全体感染</div>
</a>

<a href="ocean_orb" class="orb-category-item">
  <img src="/images/orbs/ocean_orb.png" alt="海洋" class="orb-category-icon" />
  <div class="orb-category-name">海洋</div>
  <div class="orb-category-type">异常施加型</div>
  <div class="orb-category-desc">被动随机冻伤，激发全体冰封</div>
</a>

<a href="volcano_orb" class="orb-category-item">
  <img src="/images/orbs/volcano_orb.png" alt="火山" class="orb-category-icon" />
  <div class="orb-category-name">火山</div>
  <div class="orb-category-type">异常施加型</div>
  <div class="orb-category-desc">被动随机烧伤，激发全体焚烬</div>
</a>

<a href="star_orb" class="orb-category-item">
  <img src="/images/orbs/star_orb.png" alt="星星" class="orb-category-icon" />
  <div class="orb-category-name">星星</div>
  <div class="orb-category-type">资源产出型</div>
  <div class="orb-category-desc">被动产辉星，激发加储君卡</div>
</a>

<a href="pp_orb" class="orb-category-item">
  <img src="/images/orbs/pp_orb.png" alt="PP" class="orb-category-icon" />
  <div class="orb-category-name">PP</div>
  <div class="orb-category-type">资源产出型</div>
  <div class="orb-category-desc">被动 2 点 PP，激发 6 点 PP</div>
</a>

<a href="holy_grail_orb" class="orb-category-item">
  <img src="/images/orbs/holy_grail_orb.png" alt="圣杯" class="orb-category-icon" />
  <div class="orb-category-name">圣杯</div>
  <div class="orb-category-type">资源产出型</div>
  <div class="orb-category-desc">被动隔回合回血，激发按损失生命回血</div>
</a>

<a href="multi_orb" class="orb-category-item">
  <img src="/images/orbs/multi_orb.png" alt="多用" class="orb-category-icon" />
  <div class="orb-category-name">多用</div>
  <div class="orb-category-type">资源产出型</div>
  <div class="orb-category-desc">被动铸造+召唤，激发赋予关键词</div>
</a>

<a href="tower_orb" class="orb-category-item">
  <img src="/images/orbs/tower_orb.png" alt="高塔" class="orb-category-icon" />
  <div class="orb-category-name">高塔</div>
  <div class="orb-category-type">自身增益型</div>
  <div class="orb-category-desc">被动 1 层覆甲，激发 4 层覆甲</div>
</a>

<a href="oracle_orb" class="orb-category-item">
  <img src="/images/orbs/oracle_orb.png" alt="神谕" class="orb-category-icon" />
  <div class="orb-category-name">神谕</div>
  <div class="orb-category-type">自身增益型</div>
  <div class="orb-category-desc">被动随机属性，激发随机附魔（不吃集中）</div>
</a>

</div>

- [查看全部充能球](all)

## 小贴士

- **集中影响规则**：不是所有充能球都吃集中——[神谕](oracle_orb.md)完全不吃集中，[星星](star_orb.md)/[多用](multi_orb.md)仅被动吃集中，其余 6 个被动和激发均吃集中。详见[充能球机制](/mechanics/orb.md)。
- **异常施加三球对称**：[森林](forest_orb.md)（中毒/感染）、[海洋](ocean_orb.md)（冻伤/冰封）、[火山](volcano_orb.md)（烧伤/焚烬）机制完全对称——被动随机单体施加基础异常，激发全体施加扩散异常，可混合搭配形成多系异常压制。

<style>
.orb-category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin: 24px 0;
}
.orb-category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  background: var(--vp-c-bg);
}
.orb-category-item:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.orb-category-icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
  margin-bottom: 12px;
  border-radius: 50%;
}
.orb-category-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
}
.orb-category-type {
  font-size: 12px;
  color: var(--vp-c-brand);
  margin-bottom: 8px;
}
.orb-category-desc {
  font-size: 12px;
  color: var(--vp-c-text-2);
  text-align: center;
  line-height: 1.5;
}
</style>
