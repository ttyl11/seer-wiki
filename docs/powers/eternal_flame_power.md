# 火种永存

> **归属**：玩家可施加
> **施加来源**：玩家获得——[火种永存](/cards/character/eternal_flame.md)（卡牌）

<img src="/images/powers/eternal_flame_power.png" alt="火种永存" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 烧伤概率 | 70 |
| 固定伤害层数 | 5 |

## 描述

己方回合开始时，有 <span style="color:#3aa675;font-weight:600">70</span>% 概率对所有敌人各施加 <span style="color:#3aa675;font-weight:600">1</span> 层[焚烬](/powers/ash_power.md)；若某敌人的焚烬层数未增加（<span style="color:#3aa675;font-weight:600">30</span>% 概率未触发，或施加被免疫），则对其施加 <span style="color:#3aa675;font-weight:600">5</span> 层[固定伤害](/powers/fixed_damage_power.md)。触发后层数 -<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **回合开始触发**：拥有者一方回合开始前：
  1. **先做一次随机判定**（所有敌人共享这一次判定的结果）：≤ 70% 则本回合尝试焚烬，> 30% 则本回合不施加焚烬
  2. 对每个可攻击的敌人：
     - 记录焚烬施加前的层数
     - 若判定通过，对敌人施加 <span style="color:#3aa675;font-weight:600">1</span> 层[焚烬](/powers/ash_power.md)
     - 记录焚烬施加后的层数
     - **若焚烬层数未增加，施加 <span style="color:#3aa675;font-weight:600">5</span> 层[固定伤害](/powers/fixed_damage_power.md)**。未增加有两条路径：
       - ① <span style="color:#3aa675;font-weight:600">30</span>% 概率判定未通过——本回合压根没施加焚烬
       - ② 判定通过但敌人**免疫异常**——施加被无效化
  3. 触发后层数 -<span style="color:#3aa675;font-weight:600">1</span>
- **保底设计**：无论哪条路径失败，5 层固定伤害都是"违约赔偿"——免疫焚烬的敌人（如某些 Boss）反而会稳定吃固伤，这层反而成了打免疫怪的稳定输出。
- **随机数选择**：使用同步随机数（杂项用途），确保多端一致。

## 相关卡牌

- [火种永存](/cards/character/eternal_flame.md)：打出时获得此能力

## 源码

- `SeerEternalFlamePower.cs`
