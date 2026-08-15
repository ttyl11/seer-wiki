# 支援效果翻倍

<img src="/images/powers/support_double_power.png" alt="支援效果翻倍" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无（不属于增益/减益，不可被清除）
- **叠加方式**: 计数器叠加
- **可见**: 是

## 数值参数

| 参数 | 数值 |
|---|---|
| 两张终末牌各施加层数 | 3 |

## 描述

下 <span style="color:#3aa675;font-weight:600">3</span> 次支援的效果翻倍，每次触发消耗 <span style="color:#3aa675;font-weight:600">1</span> 层。

## 详细机制

- **翻倍的范围**：只放大[支援](/powers/support_power.md)五个条件中**条件本身的效果**——暴击再 ×3（合计 ×4.5）、击杀回血 10、受异常格挡 14、低伤固定伤害 ×2、无效化 2 个意图。
- **不翻倍的部分**：支援成功的固定收尾奖励（+1 层[命运晨星](/powers/fate_morning_star_power.md)、+2 层[支援庇护](/powers/support_immune_count_power.md)）不吃翻倍，永远是 1 层和 2 层。
- **按次消耗**：每次支援触发消耗 1 层，与支援层数同步扣减。支援层数耗尽时翻倍层数保留，下次补层后继续生效。
- **叠加**：多次施加层数累加（打两张终末牌就是 6 次）。

## 相关卡牌

- [终末·赫星黎明（技能）](/cards/character/final_star_dawn_skill.md)（有支援时施加 3 层）
- [终末·赫星黎明（攻击）](/cards/token/final_star_dawn_attack.md)（打出即施加 3 层）

## 相关能力

- [支援](/powers/support_power.md)（翻倍的作用对象）

## 源码

- `SeerSupportDoublePower.cs`
