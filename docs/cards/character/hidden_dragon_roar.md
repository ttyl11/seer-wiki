# 潜龙伏地啸

<img src="/images/cards/hidden_dragon_roar.png" alt="潜龙伏地啸" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 8 | 8 |
| 力量减少 | 1 | 2 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 对敌人造成<span style="color:#3aa675;font-weight:600">8</span>点伤害，令其[<span style="color:#d4a017;font-weight:600">力量</span>](/powers/strength_power.md)<span style="color:#3aa675;font-weight:600">-1</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 对敌人造成<span style="color:#3aa675;font-weight:600">8</span>点伤害，令其[<span style="color:#d4a017;font-weight:600">力量</span>](/powers/strength_power.md)<span style="color:#3aa675;font-weight:600">-2</span>。

## 小贴士

- **力量减益是永久的**：[力量](/powers/strength_power.md)-1 不是一回合，而是持续整场战斗。敌人每段攻击都少 1 点伤害——多段攻击的 Boss（一回合打 3 段）相当于每回合少受 3 点。
- **PP10 是这张牌的灵魂——越打越狠**：单场最多可打出 10 次，每次都附带力量削减。也就是说理论上单场累计能削掉敌人 10 点力量（升级后 20 点）——任何物理系 Boss 被打到中后期攻击会归零甚至负数。它不是一次性功能牌，是长战斗的"温水煮青蛙"引擎。
- **减力降的是"未来的每一次攻击"**：伤害在削减生效前照常结算——这张牌先打 8 点伤害、再挂减益，所以它压不住敌人**本回合**已经宣告的意图，是给后续回合铺路。面对"下回合要放超大招"的敌人，本回合就要打出它，而不是等大招当回合才想起来。
- **减力可被免疫挡掉**：力量削减属于能力施加，遇到[免疫属性下降](/powers/blue_dragon_scale_power.md)（如蓝龙鳞、薇尔诗相邻效果）或[免疫异常状态](/powers/debuff_immune_power.md)的敌人（部分 Boss 和先古怪）会只吃到 8 点伤害、减益落空。这类敌人换其它输出手段更实际。
- **升级翻倍减益，不涨伤害**：力量减少 1 → 2，减伤效果翻倍。伤害不变，但长期减伤价值显著提升——10 次打出从累计 -10 力质变到 -20 力，几乎等于拔掉物理 Boss 的牙。对付高攻或多段 Boss 时是高优先级升级对象。
- **性价比**：1 费换 8 伤+永久力量削减，普通稀有度定价厚道。长期减伤价值在长 Boss 战里持续放大。

## 相关能力

- [力量](/powers/strength_power.md)：原版增益能力，每层增加 1 点攻击伤害；负层数减少攻击伤害

## 源码

- `SeerHiddenDragonRoar.cs`
