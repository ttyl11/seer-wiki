# 宝剑

<img src="/images/cards/sword.png" alt="宝剑" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 无
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 铸造数值 | 10 |
| 重放次数 | 3 |

## 描述

[<span style="color:#d4a017;font-weight:600">铸造</span>](/mechanics/forge.md)<span style="color:#3aa675;font-weight:600">10</span>，[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中所有<span style="color:#d4a017;font-weight:600">君王之剑</span>。[<span style="color:#d4a017;font-weight:600">重放</span>](/mechanics/replay.md)<span style="color:#3aa675;font-weight:600">3</span>次。

## 小贴士

- **分类**：无色牌，技能牌，耗能 <span style="color:#3aa675;font-weight:600">1</span>，稀有度罕见。（无法升级）。
- **铸造**：执行 <span style="color:#3aa675;font-weight:600">10</span> 次[铸造](/mechanics/forge.md)（基值 <span style="color:#3aa675;font-weight:600">10</span>）。
- **铸造会生成君王之剑——自带 20 伤害**：铸造时若场上没有未消耗的君王之剑，会**必定**新建一把加入手牌——基础伤害 10 + 本次铸造 10 = **自带 20 伤害**。
- **铸造强化所有君王之剑（含已消耗的）**：每次铸造 +10 会加到**每一把**君王之剑上，包括已经躺在消耗堆里的——剑越铸越肥，是铸造流伤害滚雪球的核心。
- **消耗君王之剑**：遍历[手牌](/mechanics/hand.md)中所有"君王之剑"，逐张[消耗](/mechanics/exhaust.md)。由于铸造刚生成的那把也在手牌中，实际上每段执行都会把新剑送进消耗堆。
- **重放**：此牌额外[重放](/mechanics/replay.md) <span style="color:#3aa675;font-weight:600">3</span> 次（基值 <span style="color:#3aa675;font-weight:600">3</span>）——单张宝剑共执行 4 段"铸造+消耗"，产生 4 把君王之剑。
- **目标选取**：无目标。
- **主要获取途径**：由[万剑归一](/cards/character/myriad_swords_unity.md)免费发放（1 费降为 0 费）。

## 源码

- `SeerSword.cs`
