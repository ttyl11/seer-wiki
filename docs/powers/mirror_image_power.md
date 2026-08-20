# 镜影术

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[魔狮迪露](/monsters/elite/mojj_monster.md)

<img src="/images/powers/mirror_image_power.png" alt="镜影术" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

自身受到的伤害放大1000倍。在其回合结束时，若生命值低于10%，获得20层<span style="color:#d44;font-weight:600">狂暴</span>。

## 详细机制

- **受伤 ×1000**：`ModifyDamageMultiplicative` 钩子——持有者（魔狮迪露）受到的**一切伤害**在乘区直接 ×<span style="color:#3aa675;font-weight:600">1000</span>，无伤害类型过滤：常规攻击、[固定伤害](/powers/fixed_damage_power.md)、[灼烧](/powers/burn_power.md)等 DoT 跳伤全部照放大。
- **百万血的正确读法**：魔狮迪露本体血量 <span style="color:#3aa675;font-weight:600">999998~1000003</span>（约一百万）——×1000 的意义是把有效血量压到约 <span style="color:#3aa675;font-weight:600">1000</span> 点：你打出 1 点伤害 = 实际结算 1000 点。
- **低血软狂暴**：持有者自己回合结束时（`AfterSideTurnEnd`），若当前体力 ≤ 最大体力的 <span style="color:#3aa675;font-weight:600">10%</span>（≤10 万血），获得 <span style="color:#3aa675;font-weight:600">20</span> 层[狂暴](/powers/fury_power.md)（每层攻击伤害 +25%——爆发期输出直接 ×6，每回合结束递减 1 层）。

## 小贴士

- **别被百万血条吓退**：一切伤害 ×1000 意味着有效血量只有约 1000——任何能打输出的卡在这里都是"真实伤害 ×1000"，正常输出节奏 3~4 回合就能收掉。
- **固伤/DoT 在这里效率爆炸**：1 层[固定伤害](/powers/fixed_damage_power.md) = 1000 实际掉血、1 层[灼烧](/powers/burn_power.md)每回合跳 1000——固伤流打魔狮迪露等于自带斩杀线，优先倾泻小额多段伤害。
- **斩杀线就是狂暴线**：把它打进 10 万血（约最后 100 点有效伤害）后，它回合结束立刻 +20 层狂暴——下一轮粉尘烈冲破（15 伤）会以 ×6 ≈ <span style="color:#d44;font-weight:600">90</span> 点砸脸。**尽量在一回合内从 10% 以上直接打死**，不给它狂暴回合；做不到就提前铺格挡硬扛狂暴期。
- **狂暴只增幅攻击伤害**：狂暴期它的天降甘露（降属性）、流星雨固伤部分不受 ×6 加成——真正的致死威胁只有攻击型招式，针对性留格挡即可。

## 源码

- `SeerMirrorImagePower.cs`（`ModifyDamageMultiplicative` 受伤 ×1000；`AfterSideTurnEnd` 低血 ≤10% 时 `Apply<SeerFuryPower>` 20 层）
- 持有者 `SeerMojjMonster.cs`（`MinInitialHp = 999998`，开局 `AfterAddedToRoom` 自带本能力）
