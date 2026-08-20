# 妖族异术

<img src="/images/cards/yao_zu_yi_shu.png" alt="妖族异术" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 先制层数 | 1 | 1 |
| 反弹回合数 | 2 | 2 |
| 格挡 | 6 | 10 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。获得<span style="color:#3aa675;font-weight:600">6</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)，<span style="color:#3aa675;font-weight:600">2</span>回合内免疫并反弹[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。获得<span style="color:#3aa675;font-weight:600">10</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)，<span style="color:#3aa675;font-weight:600">2</span>回合内免疫并反弹[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)。

## 小贴士

- **三效合一的万金油防御**：[先制](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>（下一张牌耗能 -<span style="color:#3aa675;font-weight:600">1</span>）+ <span style="color:#3aa675;font-weight:600">6</span> 点格挡 + <span style="color:#3aa675;font-weight:600">2</span> 回合异常免疫反弹，一张牌同时覆盖减费、防御、异常对策三个方向。作为普通稀有度牌，覆盖面却接近多张专门牌之和。
- **先制把这张牌"打回"0 费**：打出自带的先制后，紧接的下一张牌耗能 -<span style="color:#3aa675;font-weight:600">1</span>——等于这张 <span style="color:#3aa675;font-weight:600">1</span> 费牌的能耗被下一张牌全额找补。先制在下一张牌打出后即消失，所以出牌顺序上把它排在高费牌前面收益最大。
- **免疫范围是异常状态、不含原版减益**：免疫并反弹的是 mod 的 <span style="color:#3aa675;font-weight:600">25</span> 种[异常状态](/mechanics/abnormal-status.md)（烧伤、中毒、冰封、失明、麻痹、石化等），**不免疫**原版虚弱/易伤/脆弱——面对挂原版减益的敌人这层保护是空的，别高估它的覆盖面。
- **反弹目标是全体敌人**：免疫期间吃到的异常会原样弹给**所有**敌人（不是只弹施加者）。多敌人遭遇战里反弹收益翻倍——尤其在敌方多人轮流挂异常的场合，敌人等于在给全队自残。
- **覆盖窗口精确到 2 个敌方回合**：反弹层数在**对方回合结束**时递减，<span style="color:#3aa675;font-weight:600">2</span> 层恰好覆盖 <span style="color:#3aa675;font-weight:600">2</span> 个敌方回合。应对单次大规模异常攻势（如 Boss 蓄力一波挂全场）绰绰有余；长线异常消耗战则需续杯手段或换[阑珊百转](/cards/character/waning_turns.md)（<span style="color:#3aa675;font-weight:600">4</span> 回合版）顶上。
- **格挡吃敏捷加成**：这 <span style="color:#3aa675;font-weight:600">6</span> 点格挡属于卡牌格挡，受敏捷/脆弱影响——敏捷流构筑里实际到手的格挡更高。
- **升级只加格挡**：格挡 <span style="color:#3aa675;font-weight:600">6</span>→<span style="color:#3aa675;font-weight:600">10</span>（+<span style="color:#3aa675;font-weight:600">67</span>%），先制、反弹回合均不变。升级走的是纯防御数值路线，免疫反弹的机制面没有变化。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费三效，先制找补能耗后实际约等于白嫖一层防御+异常对策——普通牌里的性价比标杆，几乎任何构筑都塞得下。

## 相关能力

- [先制](/powers/first_strike_power.md)：下一张牌耗能 -1
- [异常免疫·反弹](/powers/debuff_immune_power.md)：免疫异常状态并反弹给所有敌人

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)：被免疫并反弹的独立状态体系
- [格挡](/mechanics/block.md)：获得 6/10 点，受敏捷影响
- [PP 系统](/mechanics/pp-system.md)

## 源码

- `SeerYaoZuYiShu.cs`
- `SeerDebuffImmuneReflectPower.cs`
