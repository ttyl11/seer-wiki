# 魔术师

<img src="/images/relics/tarot_magician.png" alt="魔术师" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 塔罗遗物
- **稀有度**: 普通

### 数值参数

| 参数 | 数值 |
|---|---|
| 全属性降低 | 1 |

## 描述

回合开始时：对每个处于[异常状态](/mechanics/abnormal-status.md)的敌人，令其[全属性](/mechanics/all_attributes.md)-<span style="color:#3aa675;font-weight:600">1</span>。

- 自身回合开始时逐个敌人检查：只要敌人身上任意一种异常状态层数非零就触发，多个异常状态也只判定一次。
- 触发后同时扣减 [力量](/powers/strength_power.md)、[防御](/powers/defense_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md) 各 1 点。
- 每个符合条件的敌人单独触发一次闪光，群怪场面收益成倍放大。

## 风味文字

<span style="color:#d44;font-weight:600">魔术。</span>

## 小贴士

- **异常铺路即收益**：异常状态在本 mod 里覆盖极广，[烧伤](/powers/burn_power.md)、[中毒](/powers/poison_power.md)、[流血](/powers/bleed_power.md)、[冰封](/powers/freeze_power.md)、[凝滞](/powers/stasis_power.md)、[失明](/powers/blind_power.md)、[诅咒](/powers/curse_power.md)、[衰弱](/powers/weaken_power.md)、[狂暴](/powers/fury_power.md)、[沸涌](/powers/boiling_power.md)、[超频](/powers/overclock_power.md)、[神游](/powers/trance_power.md)、[臣服](/powers/subjugation_power.md)、[寄生](/powers/parasite_power.md)、[麻痹](/powers/ma_power.md)、[瘫痪](/powers/paralysis_power.md)、[害怕](/powers/fear_power.md)、[冻伤](/powers/frostbite_power.md)、[睡眠](/powers/sleep_power.md)、[束缚](/powers/constrict_power.md)、[石化](/powers/petrify_power.md)、[感染](/powers/infect_power.md)、[焚烬](/powers/ash_power.md)、[沉默](/powers/silence_power.md)、[易燃](/powers/flammable_power.md) 全部算数。任何一张能上异常的卡牌都能让魔术师开张。
- **群怪场面放大器**：判定是逐敌进行的，多怪场面只要每个怪都挂上任意异常，每回合开局就是全员四属性 -1。配合能群体上异常的卡牌，几回合就能把整场敌人的输出和防御同时压垮。
- **速度削得最致命**：敌人速度被压低意味着己方先手更稳，能够抢先斩杀或抢先控制。这条隐性收益在长线 boss 战里比力量 -1 还更值钱。
- **最怕"无异常"局面**：自身不能上异常，完全依赖卡组或队友提供异常来源。如果卡组根本不打异常流，这张遗物等于白占一格。
- **塔罗内部联动**：和[恋人](tarot_lovers.md)（回合结束时按手牌奇偶上烧伤/冻伤或生成球）、[倒吊人](tarot_hanged_man.md)（自损换暴击且受击触发）等塔罗能形成"上异常→削属性→收割"的稳定链条；自身不产异常，需要卡组或队友补足异常来源。
- **价值锚点**：普通稀有度但收益高度依赖卡组配置，异常流卡组里是 T1 级群体削弱，非异常流卡组里几乎为零；带它之前先确认自己的牌库里至少有 3-4 张稳定上异常的牌。

## 源码

- `SeerTarotMagician.cs`
