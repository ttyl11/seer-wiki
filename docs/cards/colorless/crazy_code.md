# 疯狂编码

<img src="/images/cards/crazy_code.png" alt="疯狂编码" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 4
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）
- **标签**: 故障机器人

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 卡牌数量 | 4 | 4 |
| 生成卡形态 | 基础 | 升级形态 |
| 生成卡耗能增幅 | +1 | +1 |
| 生成卡重放次数 | +1 | +1 |

## 描述

将随机<span style="color:#3aa675;font-weight:600">4</span>张故障机器人牌加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)，耗能<span style="color:#3aa675;font-weight:600">+1</span>，[<span style="color:#d4a017;font-weight:600">重放</span>](/mechanics/replay.md)<span style="color:#3aa675;font-weight:600">1</span>。

## 升级后

将随机<span style="color:#3aa675;font-weight:600">4</span>张<span style="color:#d4a017;font-weight:600">升级</span>后的故障机器人牌加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)，耗能<span style="color:#3aa675;font-weight:600">+1</span>，[<span style="color:#d4a017;font-weight:600">重放</span>](/mechanics/replay.md)<span style="color:#3aa675;font-weight:600">1</span>。

## 小贴士

- **🔑 每张生成牌都是"打两次"的双倍体验**：生成的 4 张牌自带[重放](/mechanics/replay.md)+1——打出一张等于结算两次。虽然每张耗能 +1（仅本战斗），但双倍结算远比 +1 费值：一张 1 费牌变 2 费打两次依然超值，攻击牌相当于双倍伤害。
- **卡池来自原版故障机器人**：从**当前解锁状态**下的原版故障机器人（Defect）卡池随机生成——你没构筑过的牌也能被生成，随机性是双刃剑：可能白嫖高费强牌，也可能来一堆用不上的充能球牌。
- **生成在抽牌堆底部——需要抽牌配合**：4 张牌全部沉入[抽牌堆](/mechanics/draw_pile.md)**底部**，不是直接上手——打出后需要足够的抽牌能力把它们抽回来，否则战斗结束时还没摸到就浪费了。配合抽牌引擎或长战斗使用。
- **4 费启动费 + 生成牌加价——能量黑洞**：启动费 4 点，生成牌还要各 +1 费（打两次实际每张多花 1 费换一次重放）。没有能量引擎（能量遗物/回费牌）的构筑慎用——容易启动后没钱驱动。
- **升级是质变：生成 4 张升级形态**：升级后每张生成牌自动以升级形态进堆——双倍结算 + 升级数值双重放大，价值远超普通升级。
- **衍生牌，战斗结束消失**：生成的牌是战斗内衍生牌，不进牌组、战斗结束离场——纯本战爆发工具，无长期构筑代价。
- **多人同步**：随机选牌走同步随机源（CombatCardGeneration），多人两端生成结果一致。

## 相关机制

- [抽牌堆](/mechanics/draw_pile.md)（生成卡牌加入抽牌堆底部）
- [重放](/mechanics/replay.md)（生成卡牌重放 1 次，打出结算两次）
- [能量](/mechanics/energy.md)（启动费 4 + 每张生成牌 +1 费）

## 源码

- `SeerCrazyCode.cs`
