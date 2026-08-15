# 等价坩埚

<img src="/images/relics/neow_potion_price.png" alt="等价坩埚" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 药水数量 | 2 |

## 描述

拾起时，获得<span style="color:#3aa675;font-weight:600">2</span>个随机 Seer 药水，移除牌组中<span style="color:#3aa675;font-weight:600">1</span>张随机牌。

- **药水筛选**：从所有 Seer 药水中随机抽选，循环 2 次每次取 1 个。
- **牌组移除**：从牌组中随机取 1 张移除。

## 风味文字

<span style="color:#d44;font-weight:600">药水。</span>

## 小贴士

- **2 瓶随机 Seer 药水换 1 张随机牌**：拾起时获得 2 个随机 Seer 药水，代价是牌组随机移除 1 张牌。药水是即战力，但移除的牌完全随机，可能误伤核心卡。
- **可移除任意牌**：随机抽选不排除诅咒/状态/永恒牌。若抽到永恒牌会被 [永恒机制](/mechanics/eternal.md) 拦截无法移除；抽到诅咒或状态牌反而是免费清理。
- **随机结果多端一致**：药水选取和牌组移除都走同步随机源，多人模式下两端抽到的药水和被移除的牌完全一致。
- **性价比**：先古稀有度合理——2 瓶药水换 1 张随机牌，运气好白嫖药水 + 清理废牌，运气差误伤核心卡。

## 源码

- `SeerNeowPotionPrice.cs`
