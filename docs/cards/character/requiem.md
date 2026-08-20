# 镇魂歌

<img src="/images/cards/requiem.png" alt="镇魂歌" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 10
- **能量消耗**: 3
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 回合数 | 3 | 3 |
| 精英回合 | 6 | 6 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |
| 耗能 | 3 | 2 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> <span style="color:#3aa675;font-weight:600">3</span>回合后击杀目标（精英<span style="color:#3aa675;font-weight:600">6</span>回合，Boss无效）。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> <span style="color:#3aa675;font-weight:600">3</span>回合后击杀目标（精英<span style="color:#3aa675;font-weight:600">6</span>回合，Boss无效）。耗能降至<span style="color:#3aa675;font-weight:600">2</span>。

## 小贴士

- **真正的"死亡倒计时"——无视血量/格挡直接击杀**：打出后给目标挂上[镇魂歌](/powers/requiem_power.md)减益，<span style="color:#3aa675;font-weight:600">3</span> 回合后直接击杀——不管它还剩多少血、有多少格挡，倒计时归零就死。原版没有这种"倒计时必杀"机制，是 seer 独有的精英战清场设计。
- **倒计时在敌方回合结束时 -1——无法加速，只能熬**：每次敌方回合结束倒计时 <span style="color:#3aa675;font-weight:600">-1</span>，归零时击杀；玩家自己的回合结束不计入。所以"3 回合后击杀"意味着目标还能再行动 <span style="color:#3aa675;font-weight:600">3</span> 次（精英 <span style="color:#3aa675;font-weight:600">6</span> 次）。没有任何手段能加速倒计时——[击晕](/mechanics/stun.md)/[石化](/powers/petrify_power.md)的价值是让目标在倒计时期间少输出，不是让它死得更快。
- **精英战给 6 回合——长窗口是平衡设计**：精英房延长到 <span style="color:#3aa675;font-weight:600">6</span> 回合。看似比普通房的 <span style="color:#3aa675;font-weight:600">3</span> 回合慢一倍，实际是给玩家更长生存窗口的缓冲——精英输出高，3 回合可能不够你处理其他威胁。
- **Boss 房直接无效——打出仍扣费**：Boss 房打出这张牌不施加任何效果，但能量和 PP 照样消耗——等于白扔。这是平衡设计，避免 <span style="color:#3aa675;font-weight:600">3</span> 费秒杀 Boss。**所以这张牌是精英战特化牌**，普通战可用，Boss 战千万别打。
- **同一目标重打无效——PP 照扣**：目标已有镇魂歌时再打这张牌直接无效（不刷新、不叠加），但能量和 PP 一样消耗。不要对同一目标重复打出。
- **PP10 = 多目标专用**：一场战斗最多可打出 <span style="color:#3aa675;font-weight:600">10</span> 次，但同一目标只有第一次有效——高 PP 是给多敌人/多波次战斗准备的（每个敌人各挂一个倒计时），不是让你对同一只怪反复挂。精英房单目标场景实际只用到 <span style="color:#3aa675;font-weight:600">1</span> 次。
- **目标为敌方单体——多敌人场景需选目标**：只对一个敌人生效，多敌人场景下要选最棘手的那只（如精英+小怪组合，挂给精英最划算）。
- **升级只减费，回合数不变**：升级后耗能 <span style="color:#3aa675;font-weight:600">3</span>→<span style="color:#3aa675;font-weight:600">2</span>，倒计时回合数不变。升级的价值是"更便宜地打出精英战清场牌"，不是"更快击杀"。
- **性价比**：<span style="color:#3aa675;font-weight:600">3</span> 费换精英战必杀，配合升级 <span style="color:#3aa675;font-weight:600">2</span> 费更灵活——精英战清场神器，普通战也能用但价值降低，Boss 战完全无效。

## 相关能力

- [镇魂歌](/powers/requiem_power.md)（核心施加能力，倒计时击杀）

## 相关机制

- [击晕](/mechanics/stun.md)：倒计时期间压制目标输出（不加速倒计时）

## 源码

- `SeerRequiem.cs`
- `SeerRequiemPower.cs`
