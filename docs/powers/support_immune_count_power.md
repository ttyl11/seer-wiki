# 支援庇护

<img src="/images/powers/support_immune_count_power.png" alt="支援庇护" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无（不属于增益/减益，不可被清除）
- **叠加方式**: 计数器叠加
- **可见**: 是

## 数值参数

| 参数 | 数值 |
|---|---|
| 每次支援成功获得层数 | 2 |

## 描述

受到[<span style="color:#d4a017;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)时，免疫该次异常并消耗 <span style="color:#3aa675;font-weight:600">1</span> 层。

## 详细机制

- **按次数免疫，不按回合**：每次即将受到的[异常状态](/mechanics/abnormal-status.md)被完全免疫（层数归 0，异常不挂上），然后本能力消耗 1 层。不随回合结束衰减——不用掉就一直在。
- **只挡异常状态**：普通减益（如力量下降类非异常 debuff）不在拦截范围内。
- **与宿命之佑的互斥**：被庇护免疫掉的异常不算"受到"，不会触发支援的宿命之佑条件（受异常获得格挡）。庇护有层数时，宿命之佑实际处于休眠；庇护耗尽后，下一次异常才会同时触发宿命之佑。
- **来源**：每次[支援](/powers/support_power.md)触发成功获得 2 层，可叠加。支援触发越频繁，异常免疫越厚。

## 相关遗物

- [奥菲利娅](/relics/legendary/ophelia.md)（支援成功奖励庇护的来源）

## 相关能力

- [支援](/powers/support_power.md)（庇护的唯一获取来源；庇护与宿命之佑条件互斥）

## 源码

- `SeerSupportImmuneCountPower.cs`
