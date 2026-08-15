# 臣服宝石

<img src="/images/enchantments/seer_subjugation_gem.png" alt="臣服宝石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 状态宝石附魔
- **可附魔牌类型**: 攻击 / 技能 / 能力
- **显示数量**: 否
- **额外卡牌文本**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 持续回合 | 3 |

## 描述

打出时，对目标施加<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#9b59b6;font-weight:600">臣服</span>](/powers/subjugation_power.md)。

## 详细机制

- **触发时机**：卡牌打出时触发
- **目标选取**：
  - 若卡牌目标为"所有敌方"，则作用于所有敌人
  - 若卡牌有指定目标，则作用于该目标
  - 否则默认作用于所有敌人
- **施加状态**：对目标施加对应状态，持续 3 回合
- **可附魔牌类型**：攻击 / 技能 / 能力

## 相关状态

- [臣服](/powers/subjugation_power.md)：异常状态（Debuff）。持有者攻击伤害降低 <span style="color:#3aa675;font-weight:600">70</span>%；被移除时玩家生成 2 张免费随从卡（突袭/牺牲/俯冲），怪物则获得 <span style="color:#3aa675;font-weight:600">3</span> 层[力量](/powers/strength_power.md)；每回合末层数 -1

## 小贴士

- **副作用需注意**：臣服自然到期时怪物会获得 3 层力量作为补偿，对怪物应在臣服期间快速击杀，避免让其自然到期。
- **对玩家反而有利**：臣服对玩家自然到期时生成 2 张免费随从卡，是收益项——可故意让低血敌人臣服玩家获取随从卡资源。

## 源码

- `SeerSubjugationGem.cs`（继承 `SeerStatusGemEnchantment<SeerSubjugationPower>`）
