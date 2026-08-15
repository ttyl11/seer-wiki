# 苍鹭幻翎

<img src="/images/cards/heron_illusion_feather.png" alt="苍鹭幻翎" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 3
- **能量消耗**: 2
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **获得格挡**: 是
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 8 | 13 |
| 全属性基础加成 | +1 | +1 |
| 每30点最大生命额外加成 | +1 | +1 |
| 多回合先制持续回合 | 4 | 4 |
| 每回合获得先制 | 1 | 1 |
| PP | 3 | 3 |
| 最大PP | 3 | 3 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 获得<span style="color:#3aa675;font-weight:600">8</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)<span style="color:#3aa675;font-weight:600">+1</span>，每<span style="color:#3aa675;font-weight:600">30</span>点最大生命再<span style="color:#3aa675;font-weight:600">+1</span>。下<span style="color:#3aa675;font-weight:600">4</span>回合[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)<span style="color:#3aa675;font-weight:600">+1</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 获得<span style="color:#3aa675;font-weight:600">13</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)<span style="color:#3aa675;font-weight:600">+1</span>，每<span style="color:#3aa675;font-weight:600">30</span>点最大生命再<span style="color:#3aa675;font-weight:600">+1</span>。下<span style="color:#3aa675;font-weight:600">4</span>回合[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)<span style="color:#3aa675;font-weight:600">+1</span>。

## 小贴士

- **全属性加成有陷阱**：四属性各 +1，但效果不一样——[力量](/powers/strength_power.md)+1 每张攻击牌多 1 伤害、[防御](/powers/defense_power.md)+1 受到的攻击伤害 -1，这两个直接生效；[命中](/powers/accuracy_power.md)+1 对自身**无直接效果**（正数命中只用于抵消敌人施加的负命中）；[速度](/powers/speed_power.md)+1 **单层不生效**，需累积到 2 层才多抽 1 张牌。
- **血量越高收益越大**：每 30 点最大生命额外 +1 全属性。90 血时四属性各 +4，150 血时各 +6。配合血量成长遗物（如生命类先古遗物），后期一发出手就是成吨的属性堆叠。
- **4 回合先制链**：接下来 4 个回合，每回合开始获得 1 点[先制](/powers/first_strike_power.md)——先制让下一张牌耗能 -1，打出后消失。相当于未来 4 回合每回合首张牌减 1 费，适合配合高费爆发牌连打。
- **性价比**：2 费换 8 格挡+四属性加成+4 回合先制链，罕见稀有度配得上长期收益。格挡数值偏低但属性增益覆盖整场战斗，长期收益补偿即时格挡不足。
- **升级仅提升格挡**：8 → 13，多 5 点格挡。全属性和先制完全不变。升级适合需要即时生存的场景，若只为属性堆叠则升级优先级不高。

## 相关能力

- [先制](/powers/first_strike_power.md)（下 4 回合每回合先制 +1）
- [力量](/powers/strength_power.md)（全属性之一，每层 +1 攻击伤害）
- [防御](/powers/defense_power.md)（全属性之一，每层受到攻击伤害 -1）
- [命中](/powers/accuracy_power.md)（全属性之一，正数对自身无直接效果）
- [速度](/powers/speed_power.md)（全属性之一，每 2 层多抽 1 张）

## 相关机制

- [格挡](/mechanics/block.md)（获得 8 点格挡，升级后 13 点）
- [全属性](/mechanics/all_attributes.md)（力量/防御/命中/速度各 +1）

## 源码

- `SeerHeronIllusionFeather.cs`
