# 火种永存

<img src="/images/cards/eternal_flame.png" alt="火种永存" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 2
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 火焰回合 | 2 | 3 |
| 烧伤概率 | 70 | 100 |
| 固定伤害层数 | 5 | 5 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> <span style="color:#3aa675;font-weight:600">2</span>回合内，每回合<span style="color:#3aa675;font-weight:600">70</span>%概率[<span style="color:#d4a017;font-weight:600">焚烬</span>](/powers/ash_power.md)所有敌人，失败则施加<span style="color:#3aa675;font-weight:600">5</span>层[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> <span style="color:#3aa675;font-weight:600">3</span>回合内，每回合<span style="color:#3aa675;font-weight:600">100</span>%概率[<span style="color:#d4a017;font-weight:600">焚烬</span>](/powers/ash_power.md)所有敌人，失败则施加<span style="color:#3aa675;font-weight:600">5</span>层[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。

## 小贴士

- **核心定位**：2 费持续控制+保底伤害 + 缓冲防护卡。2 回合内每回合 70% 概率给所有敌人挂焚烬（降攻+回合末烧伤），失败则改施 5 层固定伤害，附带 1 层缓冲。罕见稀有度合理——兼顾降攻、持续伤害、保底与防御的多功能卡本就稀缺。
- **判定时机**：在你**每个自己回合开始前**掷一次随机数判定（70% 概率，随机结果多端同步一致），**所有敌人共享这一次判定的结果**。注意打出当回合不判定——第一次判定要等到**下一个自己回合开始前**，2 层 = 覆盖接下来 2 个自己回合（升级后 3 个）。之后的结算按每个敌人分别检查"焚烬层数有没有涨"：
 - 判定通过 + 敌人正常 → 挂上焚烬
 - 判定通过 + 敌人**免疫异常** → 焚烬施加无效，该敌人改吃 <span style="color:#3aa675;font-weight:600">5</span> 层固定伤害
 - 判定未通过（<span style="color:#3aa675;font-weight:600">30</span>%）→ 所有敌人各吃 <span style="color:#3aa675;font-weight:600">5</span> 层固定伤害
 
 所以失败有**两条路径**——概率未触发、被免疫——无论哪条，固伤都是保底赔偿。免疫异常的敌人（如部分 Boss）会**每回合稳定吃 5 层固伤**，这反而是打免疫怪的稳定输出。重复打出可叠加火焰层数（PP 5 = 单场最多 5 次，每次 +2 回合），延长覆盖期。
- **焚烬机制（降攻 + 回合末烧伤）**：[焚烬](/powers/ash_power.md)是挂在敌人身上的减益：使敌人的**攻击伤害降低 20%**（非攻击伤害不受影响，**降攻比例固定 20%，不随焚烬层数叠加**）；在敌人回合结束时，敌人获得 <span style="color:#3aa675;font-weight:600">2</span> 层[烧伤](/powers/burn_power.md)，焚烬层数 -1。所以焚烬不是立即伤害，而是"削弱敌人输出 + 延迟烧伤持续伤害"的双效控制。多层焚烬的价值在于持续更多回合——每回合都给 2 层烧伤，烧伤累积更快，但降攻比例始终是 20%。
- **固定伤害保底（失败分支）**：判定失败时，对所有敌人施加 <span style="color:#3aa675;font-weight:600">5</span> 层[固定伤害](/powers/fixed_damage_power.md)。固定伤害是减益，目标在其下回合开始时受到 5 点[固定伤害](/mechanics/fixed-damage.md)，绕过[格挡](/mechanics/block.md)。所以失败回合也不是空过——5 点保底输出照样结算。
- **缓冲防护**：获得 <span style="color:#3aa675;font-weight:600">1</span> 层[缓冲](/powers/buffer_power.md)。拥有者受到 HP 损失时，将损失量降为 <span style="color:#3aa675;font-weight:600">0</span>，然后层数减 1。1 层缓冲等于免疫一次 HP 损失——配合持续伤害/降攻 卡牌，可以在等效果发酵时安全防御。
- **配合建议**：
 - **异常状态流**：配合[四月的信徒](./april_believer.md)（对处于异常状态的敌人伤害翻倍）——焚烬、烧伤都是异常状态，挂上后攻击直接翻倍，是核心联动。
 - **烧伤叠加流**：焚烬会在敌人回合末给敌人 2 层烧伤，配合[醉酒燃烧](./drunken_burn.md)（全体烧伤+易燃传播）可以快速叠加烧伤层数，让烧伤持续伤害爆发。
 - 不适合纯爆发流——焚烬是延迟控制，固定伤害要等下回合才结算，节奏偏慢。
- **升级的关键性**：火焰回合从 <span style="color:#3aa675;font-weight:600">2</span> 增至 <span style="color:#3aa675;font-weight:600">3</span>（+1），概率从 <span style="color:#3aa675;font-weight:600">70</span>% 升至 <span style="color:#3aa675;font-weight:600">100</span>%。升级价值高——100% 概率意味着判定必定通过，正常敌人不再有失败回合，降攻+烧伤稳定覆盖 3 回合（免疫异常的敌人依然会吃固伤，这反而更稳）。升级优先级高，是体系成型的关键节点。
- **性价比**：2 费换来 2 回合持续降攻+烧伤+保底固定伤害 + 缓冲，多功能覆盖攻防两端。罕见稀有度合理——持续伤害 + 缓冲的组合本就稀缺。适合异常状态流和续航流体系，纯爆发流可能不够直接。

## 源码

- `SeerEternalFlame.cs`
- `SeerEternalFlamePower.cs`
