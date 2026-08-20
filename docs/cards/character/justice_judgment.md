# 正义大裁决

<img src="/images/cards/justice_judgment.png" alt="正义大裁决" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌（带关键词）
- **最大PP**: 1
- **能量消耗**: 60（基础值，随牌组张数递减）
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础能量消耗 | 60 | 60 |
| 攻击伤害 | 100 | 100 |
| 固定伤害 | 100 | 250 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 造成<span style="color:#3aa675;font-weight:600">100</span>点伤害，并给对手附加<span style="color:#3aa675;font-weight:600">100</span>点[<span style="color:#9b59b6;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。自身<span style="color:#d4a017;font-weight:600">牌组</span>每有一张牌，能耗<span style="color:#3aa675;font-weight:600">-1</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 造成<span style="color:#3aa675;font-weight:600">100</span>点伤害。并给对手附加<span style="color:#3aa675;font-weight:600">250</span>点[<span style="color:#9b59b6;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。自身<span style="color:#d4a017;font-weight:600">牌组</span>每有一张牌，能耗<span style="color:#3aa675;font-weight:600">-1</span>。

## 小贴士

- **一张为"大卡组"而生的牌**：实际能耗 = max(0, 60 - 牌组张数)。注意这里数的是**牌组**（局外构筑的卡组快照）——牌组张数在战斗开始时就固定下来，**战斗中生成/销毁的牌都不会改变这个数字**。想让它便宜，唯一的办法是在局外把卡组堆大：
 - 常规 20~35 张的卡组 → 能耗 25~40，**一辈子打不出去**，等于白带；
 - 50 张 → 10 费，仍需极端的能量爆发才够得着；
 - **55 张 → 5 费，开始进入正常出牌区间**；
 - 58 张 → 2 费，60 张 → **0 费**。
 换句话说：**拿到它，就等于接下了"不删牌、狂加牌"的构筑课题**。为它堆卡组的路上，每一张新牌都在为它降费。
- **不删牌反而是赚**：绝大多数构筑思路都在做减法（删弱牌提高抽牌质量），这张牌把逻辑完全反过来——**每删一张牌，它就贵 1 费**。围绕它构筑时，商店的删牌服务、事件中的移除选项都变成负收益；反而"获得随机牌""往牌组塞牌"类效果（哪怕塞进来的是平庸牌）都在给它降费。这是 mod 里最极端的反主流构筑方向之一。
- **两段斩杀线**：打出时先造成 <span style="color:#3aa675;font-weight:600">100</span> 点攻击伤害（吃力量/增伤，会被格挡），再附加 <span style="color:#3aa675;font-weight:600">100</span> 点（升级 <span style="color:#3aa675;font-weight:600">250</span> 点）[固定伤害](/powers/fixed_damage_power.md)——固伤在目标下回合开始时结算、不吃格挡。基础合计 200 点斩杀线，升级后 350 点，足以单独终结一场战斗的后期 Boss。
- **升级只涨固伤**：攻击伤害固定 100 不变，升级把固伤 100 → 250（+150）。对高血量目标来说升级收益极高，建议在卡组成型后优先升级它。
- **芜生关键词**：带[芜生](/mechanics/void_birth.md)，打出后此牌转化为"芜"。它本身 PP: 1/1、一场也只会打出一次，转化对它几乎没有额外代价。
- **0 费形态的爽点**：卡组堆到 60 张时它彻底免费，"0 费打 100+250"是这套大卡组构筑给玩家的终极回报——届时每回合多余的能量都可以砸在过牌上，把它尽快抽到手。

## 相关能力

- [固定伤害](/powers/fixed_damage_power.md)：mod 减益能力，目标下回合开始时受到等于层数的固定伤害后移除

## 相关机制

- [芜生](/mechanics/void_birth.md)（打出后此牌转化为"芜"）

## 源码

- `SeerJusticeJudgment.cs`
