# 混沌天蛇太祖

<img src="/images/relics/chaotic_snake.png" alt="混沌天蛇太祖" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 稀有

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害阈值 | 20 |
| 低伤恢复PP数 | 1 |
| 睡眠触发概率(%) | 20 |
| 下次伤害倍率(%) | 150 |

## 描述

受到敌方攻击伤害后：若伤害≤<span style="color:#3aa675;font-weight:600">20</span>，恢复所有牌<span style="color:#3aa675;font-weight:600">1</span>点<span style="color:#d4a017;font-weight:600">[PP](/mechanics/pp-system.md)</span>且下次造成伤害×<span style="color:#3aa675;font-weight:600">1.5</span>；若伤害><span style="color:#3aa675;font-weight:600">20</span>，恢复随机1张<span style="color:#d4a017;font-weight:600">[PP牌](/mechanics/pp-system.md)</span>的满<span style="color:#d4a017;font-weight:600">[PP](/mechanics/pp-system.md)</span>（优先<span style="color:#d4a017;font-weight:600">[PP](/mechanics/pp-system.md)</span>为0的牌），获得1层<span style="color:#d4a017;font-weight:600">[缓冲](/powers/buffer_power.md)</span>。<br/>打出卡牌后，有<span style="color:#3aa675;font-weight:600">20</span>%概率令所有对手进入<span style="color:#d4a017;font-weight:600">[睡眠](/powers/sleep_power.md)</span>。

- **低伤分支**：实际掉血≤20 时，所有 PP 牌恢复 1 点 PP（不超过上限），并使你下次攻击伤害×1.5。
- **高伤分支**：实际掉血>20 时，随机 1 张 PP 牌恢复满 PP（优先 PP 为 0 的），并获得 1 层<span style="color:#d4a017;font-weight:600">[缓冲](/powers/buffer_power.md)</span>。
- **下次伤害倍率**：×1.5 只对攻击牌伤害生效，打出后立即清除，战斗结束重置。
- **睡眠触发**：每次打出自身卡牌后 20% 概率令所有对手睡眠 1 层。

## 风味文字

<span style="color:#d44;font-weight:600">混天。</span>

## 小贴士

- **挨打必有奖的自调节遗物**：受敌方攻击实际掉血后按伤量分档——掉血≤20 奖励进攻（全体 PP 牌 +1 PP、下次攻击×1.5），掉血>20 奖励防守（一张 PP 牌回满 + 1 层[缓冲](/powers/buffer_power.md)）。防得好拿爆发，防不住拿续命，永远不会白板。
- **×1.5 的完整规格**：只对**攻击伤害**生效，触发后**一直保留到你下次攻击**（可跨回合），攻击结算完立即清除——留着这张 1.5 倍券等关键攻击牌最划算。多段攻击整轮吃满 ×1.5（一次攻击命令的所有段共享加成），配合多段连击牌收益最大化。
- **低伤分支全员回 PP**：所有牌堆里的 PP 牌统一 +1 点（不超上限）——不挑手牌还是抽牌堆，全体续航。
- **高伤分支优先救 PP 归零的牌**：随机选一张 PP 牌回满，**优先从 PP=0 的牌里选**——刚打空的核心 PP 牌最可能被救回。
- **睡眠是易碎的控制**：20% 概率令所有对手进入 1 层[睡眠](/powers/sleep_power.md)——敌方攻击伤害 -50%，但**敌人一旦受到任何未格挡伤害立即苏醒**（层数直接移除）。想让睡眠控场生效，就别在它睡着时打它；群体睡眠+群体攻击的组合会瞬间打醒所有人。
- **触发条件逐条拆解**：只有**敌方的攻击**且**实际掉血>0** 才触发判定——被格挡完全吸收不触发，异常状态/固定伤害等非攻击伤害不触发，队友（多人模式）的误伤也不触发。
- **双分支的取舍**：想拿×1.5 就好好格挡（掉血≤20），想拿回满 PP+缓冲就得硬吃大伤害（>20）。两边的奖励互斥，按场面需求选防还是莽——整体上低伤分支（×1.5 + 全员 PP）的期望收益更高。

## 源码

- `SeerChaoticSnake.cs`
