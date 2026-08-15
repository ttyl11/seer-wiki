# 害怕

<img src="/images/powers/fear_power.png" alt="害怕" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）/ [<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)
- **叠加方式**: 叠加（Counter）
- **可见**: 是
- **来源**: mod

### 数值参数

| 参数 | 数值 |
|---|---|
| 攻击伤害降低百分比 | 30 |

## 描述

攻击伤害降低<span style="color:#3aa675;font-weight:600">30</span>%。在你的回合结束时减少<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- **攻击伤害降低**：仅减少拥有者造成的攻击伤害，非攻击伤害不受影响。攻击伤害降低 <span style="color:#3aa675;font-weight:600">30</span>%（伤害 ×0.7）。
- **回合结束递减**：在拥有者一方回合结束时，层数 -<span style="color:#3aa675;font-weight:600">1</span>。
- **异常状态**：属于 mod [异常状态](/mechanics/abnormal-status.md) 之一，可被 [异常免疫·反弹](/powers/debuff_immune_reflect_power.md) 等能力免疫或反弹。
- **与原版易伤的区别**：原版 [易伤](/powers/vulnerable_power.md) 使受到的伤害增加，而害怕使自身造成的攻击伤害降低，方向相反。

## 小贴士

- **削弱输出型异常**：降低持有者造成的攻击伤害 30%，与原版[易伤](/powers/vulnerable_power.md)（放大受伤）方向相反。

## 相关卡牌

- [王·联盟审判](/cards/character/king_alliance_judgment.md)（对目标施加害怕 2 回合）
- [义乂梵我婆娑纱](/cards/character/righteous_brahma_veil.md)（拒赦怒威态时对所有敌人施加害怕 5 回合）
- [曙光普照](/cards/character/shining_light.md)（对目标施加害怕 2 回合）

## 相关附魔

- [害怕宝石](/enchantments/fear_gem.md)（攻击时施加害怕）

## 相关能力

- [拒赦怒威态](/powers/wrathful_judgment_power.md)（触发害怕施加的条件之一）
- [异常免疫·反弹](/powers/debuff_immune_reflect_power.md)（可免疫或反弹害怕）

## 源码

- `SeerFearPower.cs`
- `SeerAbnormalStatus.cs`（异常状态注册）
