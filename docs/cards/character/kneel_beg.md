# 跪地求饶

<img src="/images/cards/kneel_beg.png" alt="跪地求饶" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 3
- **能量消耗**: X
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 额外意图 | 0 | 1 |
| PP | 3 | 3 |
| 最大PP | 3 | 3 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 随机无效化<span style="color:#3aa675;font-weight:600">X</span>个敌方意图。若本回合受到攻击伤害，自身死亡。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 随机无效化<span style="color:#3aa675;font-weight:600">X</span>+<span style="color:#3aa675;font-weight:600">1</span>个敌方意图。若本回合受到攻击伤害，自身死亡。

## 小贴士

- **X 费换 X 个意图无效化，赌博型清意图**：把本回合所有能量砸进意图清除，每个意图清除约值 <span style="color:#3aa675;font-weight:600">1</span> 费。代价是被攻击即死——这是 mod 里最极端的高风险高回报卡，要么全清意图白嫖保命，要么剩一个意图没清就暴毙。
- **死亡条件要精读：未被格挡的攻击伤害**：触发死亡需要三个条件同时满足——①受到的是**攻击伤害**（非攻击伤害如烧伤自伤、固定伤害不触发）②伤害**未被格挡**（实际掉血，被格挡到 <span style="color:#3aa675;font-weight:600">0</span> 不死）③在能力存在期间（打出后到敌人回合结束，玩家回合内受反击也会触发）。所以意图被无效化、攻击被格挡、攻击未命中都不触发死亡。
- **X 耗能的矛盾：砸越多越安全但越废回合**：X 越大清越多意图越安全，但 X = 所有能量，打完这回合基本无法做其它事（除非有 <span style="color:#3aa675;font-weight:600">0</span> 费牌或能量回复）。想安全就砸更多能量，砸完能量这回合就废了——这是"用回合行动力换生存"的交易。
- **意图清除是跨所有敌人随机的**：随机无效化跨所有存活敌人选——多敌人场景下随机性大，可能集中清一个敌人也可能分散。无法指定清除哪个意图，所以多敌人时风险更高（可能漏掉高威胁意图）。
- **无效化不重复、不浪费**：已无效化的意图不会再被选中——X=<span style="color:#3aa675;font-weight:600">3</span> 就必定清掉 <span style="color:#3aa675;font-weight:600">3</span> 个**不同**的原始意图；某敌人意图全被清完后会自动转向其余敌人，场上意图总数不足 X 时按实际数量清空为止。
- **被无效化的意图表现为"眩晕"**：意图图标变为眩晕样式，敌人行动时只播放眩晕动画、不产生任何效果（不出伤害、不上 buff）。可以直观确认哪些意图已被清掉，数一数剩余攻击意图就知道还会不会挨打。
- **格挡能保命但通常没能量格挡**：死亡条件是"未被格挡的攻击伤害"，所以理论上格挡能保命。但打这张牌消耗所有能量，通常没能量再格挡——除非有 <span style="color:#3aa675;font-weight:600">0</span> 费格挡牌或被动格挡能力。所以实际是"清不干净就死"。
- **升级 X→X+1 提升下限**：升级额外 <span style="color:#3aa675;font-weight:600">+1</span> 个意图无效化。X=<span style="color:#3aa675;font-weight:600">0</span> 时（没能量）也能无效化 <span style="color:#3aa675;font-weight:600">1</span> 个意图，提升下限。X 越大升级收益越明显（X=<span style="color:#3aa675;font-weight:600">3</span> 时清 <span style="color:#3aa675;font-weight:600">4</span> 个意图）。
- **最佳时机：敌人意图少或能确保不被打到**：敌人只有 <span style="color:#3aa675;font-weight:600">1</span>-<span style="color:#3aa675;font-weight:600">2</span> 个意图时最稳——X=<span style="color:#3aa675;font-weight:600">2</span> 就能全清。配合反弹类能力（如[护盾反弹](/powers/reflect_block_power.md)）或 <span style="color:#3aa675;font-weight:600">0</span> 费格挡牌能降低风险——只要格挡掉所有攻击就不死。
- **性价比**：X 费换 X（升级 X+1）个意图无效化，每个意图清除约值 <span style="color:#3aa675;font-weight:600">1</span> 费——死亡风险是真正的定价变量：全清意图时白嫖保命，剩 <span style="color:#3aa675;font-weight:600">1</span> 个意图没清就暴毙。

## 相关能力

- [跪地求饶](/powers/kneel_beg_power.md)：减益，敌人回合受到未被格挡的攻击伤害时自身死亡，敌人回合结束时移除

## 源码

- `SeerKneelBeg.cs`
