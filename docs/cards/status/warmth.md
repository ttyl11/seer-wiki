# 温

<img src="/images/cards/warmth.png" alt="温" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 状态牌
- **最大PP**: 1
- **能量消耗**: 不可打出
- **类型**: 状态
- **稀有度**: 状态
- **目标**: 无
- **关键词**: [虚无](/mechanics/ethereal.md)、[不能被打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 格挡数值 | 4 |
| PP | 1 |
| 最大PP | 1 |

## 描述

此牌加入[<span style="color:#d4a017;font-weight:600">消耗牌堆</span>](/mechanics/exhaust_pile.md)时，获得<span style="color:#3aa675;font-weight:600">4</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。

## 升级后

此牌加入[<span style="color:#d4a017;font-weight:600">消耗牌堆</span>](/mechanics/exhaust_pile.md)时，获得<span style="color:#3aa675;font-weight:600">4</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。

## 小贴士

- **虚无**（[<span style="color:#d4a017;font-weight:600">查看机制页</span>](/mechanics/ethereal.md)，原版关键词）：若此牌在回合结束时仍留在手牌中，则被消耗，进入[消耗牌堆](/mechanics/exhaust_pile.md)并触发格挡获取。
- **不能被打出**（[<span style="color:#d4a017;font-weight:600">查看机制页</span>](/mechanics/unplayable.md)，原版关键词）：此牌无法通过正常方式打出。
- **触发时机**：两条路径均会触发格挡获取：
  - **生成时**：当此牌被生成进入战斗时（如[余温之辰](/cards/event/residual_warmth_star.md)将「温」直接加入[消耗牌堆](/mechanics/exhaust_pile.md)），立即获得 <span style="color:#3aa675;font-weight:600">4</span> 点[格挡](/mechanics/block.md)。
  - **消耗时**：当此牌被消耗时（含[虚无](/mechanics/ethereal.md)关键词回合结束自动消耗），获得 <span style="color:#3aa675;font-weight:600">4</span> 点[格挡](/mechanics/block.md)。
- **目标选取**：自身（施法者）。
- **不可战斗中生成**：此牌仅由特定卡牌效果（如[余温之辰](/cards/event/residual_warmth_star.md)）加入[消耗牌堆](/mechanics/exhaust_pile.md)。
- **洗牌后变「辰」**：温不是终点——牌堆洗牌时，[余温之辰](/cards/event/residual_warmth_star.md)会把消耗堆里所有温转化为[辰](/cards/status/morning_star.md)移入抽牌堆（辰抽到时提供辉星、能量与储君卡）。温 = 先拿 4 格挡、洗牌后再结一次利息。
- **升级效果**：本卡不可升级。

## 相关卡牌

- [余温之辰](/cards/event/residual_warmth_star.md)（温的生成来源与洗牌转化引擎）
- [辰](/cards/status/morning_star.md)（洗牌时温的转化产物）

## 相关机制

- [消耗牌堆](/mechanics/exhaust_pile.md)（触发格挡获取的位置）
- [格挡](/mechanics/block.md)（加入消耗牌堆时获得 4 点）
- [虚无](/mechanics/ethereal.md)（回合结束时被消耗）
- [不能被打出](/mechanics/unplayable.md)（无法主动打出）

## 源码

- `SeerWarmth.cs`
