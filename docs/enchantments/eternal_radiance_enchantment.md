# 永耀

<img src="/images/enchantments/seer_eternal_radiance_enchantment.png" alt="永耀" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 特殊附魔
- **显示数量**: 否
- **额外卡牌文本**: 是

### 数值参数

无

## 描述

此类牌耗能降为<span style="color:#3aa675;font-weight:600">0</span>，拥有关键词[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)，但所有[<span style="color:#d4a017;font-weight:600">永耀</span>](#)牌每回合只能打出一张。

## 详细机制

- **附魔时**：卡牌立即获得[保留](/mechanics/retain.md)关键词，且耗能降为 0。
- **每回合限一张**：检查战斗历史，若本回合已打出过其它永耀牌（排除当前正在打出的牌），则禁止打出。
- **不限卡牌类型**：可附魔于任何卡牌类型。
- **战斗内有效**：每回合限一张的判定每回合重置。

## 小贴士

- **0费+保留+限一张**：永耀让卡牌 0 费+保留（留手不弃），但每回合只能打出一张永耀牌——是"免费+稳定持有"换"每回合限一张"的平衡设计。
- **适合关键能力牌**：附在关键能力牌上，0 费免费打出+保留保证不弃，但需规划每回合打出哪张永耀牌——多张永耀牌时需排序使用。

::: tip 与梅赫维特/阿玛迪斯光的关系
永耀附魔统一在附魔内处理降费与保留，梅赫维特/阿玛迪斯光等事件无需再单独降费。永耀牌每回合只能打出一张是核心限制——即使手牌有多张永耀牌，也需规划打出顺序。
:::

## 相关关键词

- [保留](/mechanics/retain.md)：附魔后获得保留关键词

## 源码

- `SeerEternalRadianceEnchantment.cs`
