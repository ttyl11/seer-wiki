# 虚无

<img src="/images/cards/void_nothingness.png" alt="虚无" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 基础牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 基础
- **目标**: 自身
- **可升级**: 是（1 级）
- **对应先古牌**: [圣灵悲魂曲](/cards/ancient/holy_requiem.md)（由[起源流转](/relics/starter/origin_shift.md)转化）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 缓冲触发次数 | 3 | 3 |
| 能量消耗 | 1 | 0 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 下<span style="color:#3aa675;font-weight:600">3</span>次受到伤害后，获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 下<span style="color:#3aa675;font-weight:600">3</span>次受到伤害后，获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。（能量消耗降至 <span style="color:#3aa675;font-weight:600">0</span>）

## 小贴士

- **每次受伤换一层缓冲**：打出后获得 3 层虚无能力。之后每次受到未格挡伤害，立刻获得 1 层[缓冲](/powers/buffer_power.md)（阻止下一次生命值损伤），能力层数减 1。所以 3 层等于 3 次受伤各换 1 层缓冲，不是"挨打 3 次才给 1 层"。
- **触发只看实际掉血**：只有受到未格挡伤害（实际扣血）才触发，完全[格挡](/mechanics/block.md)掉的攻击不触发。所以这是"被打才补偿"的后置防御，不是预铺盾。
- **与缓冲形成交替减伤**：缓冲会挡掉下一次伤害，而被挡掉的那次不触发虚无。所以实际节奏是：挨打→得缓冲→下一击被缓冲挡住→再挨打→再得缓冲……3 层虚无实际能覆盖约 6 次攻击（3 次实伤加 3 次缓冲挡），对多段攻击敌人性价比极高。
- **不适合扛单次大招**：对单次高伤敌人，往往只能触发 1 次就结束，剩下 2 层要等后续小伤才能用上。最适合对抗多段攻击的精英/Boss。
- **升级降费到 0**：升级只把费用从 1 降到 0，不改变触发次数。0 费能力牌白嫖，升级价值明显，几乎必升。
- **性价比**：基础牌级别，1 费换 3 次缓冲触发，配合多段攻击敌人是优质防御。升级到 0 费后更是无脑强。

## 相关能力

- [缓冲](/powers/buffer_power.md)（每次受伤获得，阻止下一次生命值损伤）
- [虚无](/powers/void_nothingness_power.md)（本牌授予的计数型能力）

## 源码

- `SeerVoidNothingness.cs`
- `SeerVoidNothingnessPower.cs`
