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

- **挨打变强的自调节遗物**：受到攻击伤害后按伤害大小给不同奖励——防得好（掉血≤20）奖励进攻（全员回 PP + 下次伤害×1.5），防不好（掉血>20）奖励防守（单卡回满 PP + 缓冲）。无论你打成什么样都有收益，不会完全白板。
- **低伤分支是进攻爆发**：掉血≤20 时所有 PP 牌回 1 点 PP + 下次攻击伤害×1.5。×1.5 是核弹级增伤，配合高伤攻击牌一击重创。所以格挡得好反而能打出更高输出——奖励防守到位的玩家。
- **高伤分支是防守续命**：掉血>20 时随机一张 PP 牌回满 + 1 层缓冲。缓冲能挡下次掉血，PP 回满保证下回合还能打牌。这是给你防不住时的补救，避免连续挨打崩盘。
- **20% 概率群体睡眠是额外控场**：每打出一张牌都有 20% 概率让所有对手睡眠 1 层。睡眠让敌人攻击伤害 -50%，多打牌就能频繁触发，长战斗中累计控场可观。
- **核心矛盾：低伤奖励要格挡 vs 高伤奖励要硬吃**：想触发低伤的×1.5 增伤就得好好格挡（掉血≤20），想触发高伤的满 PP + 缓冲就得硬吃伤害（掉血>20）。两个分支互相拉扯——你不可能同时拿两边奖励，要根据场面选防还是莽。
- **只对攻击牌伤害触发**：判定和奖励都只针对攻击牌伤害。中毒/烧伤/固定伤害等非攻击伤害既不触发遗物效果，也不受×1.5 增伤影响。
- **性价比**：稀有度合理——挨打变强 + 群体睡眠控场 + PP 续航三合一，自调节设计让它在任何局面都有收益，稀有定价不亏。

## 源码

- `SeerChaoticSnake.cs`
