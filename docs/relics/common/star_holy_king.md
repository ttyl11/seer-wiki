# 星灵圣王

<img src="/images/relics/star_holy_king.png" alt="星灵圣王" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 普通

### 数值参数

| 参数 | 数值 |
|---|---|
| 铸造数量 | 1 |
| 辉星获取 | 1 |

## 描述

每当卡牌被生成或消耗时，获得<span style="color:#3aa675;font-weight:600">1</span>点<span style="color:#d4a017;font-weight:600">[辉星](/mechanics/star.md)</span>，<span style="color:#d4a017;font-weight:600">[铸造](/mechanics/forge.md)</span><span style="color:#3aa675;font-weight:600">1</span>。

- **生成触发**：响应战斗中任何卡牌生成事件（包括打到牌堆里的卡、生成的状态牌等），不限制拥有者。
- **消耗触发**：仅响应拥有者自己消耗的牌。
- **两个钩子共用同一逻辑**：获得辉星 + 铸造。

## 风味文字

<span style="color:#d44;font-weight:600">星灵圣王。</span>

## 小贴士

- **生成和消耗双重触发**：卡牌生成和消耗都触发，每次给1点辉星+1点铸造。生成牌（如状态牌、衍生牌）和消耗牌都能白嫖资源，配合大量生成/消耗的卡牌收益极高。
- **生成钩子不限拥有者**：卡牌生成触发不做拥有者过滤，所有玩家生成的卡都会触发——多人模式下对手生成牌你也能拿资源，相当于被动蹭资源。
- **铸造流核心启动件**：每点铸造都向君王之剑体系积累，配合[圣剑三型](/cards/token/holy_sword_three.md)类铸造流卡牌可以快速堆出圣剑。辉星则是通用资源，可用于商店购买等。
- **性价比**：普通稀有度合理——生成+消耗双触发的资源滚雪球件，铸造流派优质启动。

## 源码

- `SeerStarHolyKing.cs`
