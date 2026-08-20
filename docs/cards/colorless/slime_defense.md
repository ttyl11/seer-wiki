# 防御史莱姆

<img src="/images/cards/slime_defense.png" alt="防御史莱姆" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（无限级，可重复升级）

### 数值参数

| 参数 | 数值 |
|---|---|
| 防御数值 | 1 |

## 描述

获得<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)。

## 升级后

获得<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)。

## 小贴士

- **🔑 无限升级的防御蓄水池**：裸卡只有 <span style="color:#3aa675;font-weight:600">1</span> 防御，但**可无限次升级、每级 +<span style="color:#3aa675;font-weight:600">1</span> 防御**——局内溢出的升级资源（休息锻打、升级事件、升级遗物）可以全部灌进这一张，升 8 次 = 1 费拿 9 防御，**没有上限**。
- **[防御](/powers/defense_power.md)是永久累积的攻击减伤**：每层使你受到的**攻击伤害**掉血 -1（格挡之后直接减免 HP 损失），层数不随回合清空；对[固定伤害](/powers/fixed_damage_power.md)和 DoT 无效——纯抗物理输出。
- **与[好男孩](/cards/colorless/good_boy.md)同体系的叠加引擎**：两者都吃"防御"这一成长轴——防御史莱姆提供一次性大额注入，好男孩提供每回合持续注入，长战斗里防御层数轻松滚到两位数，攻击型敌人打你像挠痒。
- **PP 1 = 每场只能打出一次**：单场限打 1 次（[PP](/mechanics/pp-system.md) 机制），能力离场后防御永久保留整场。
- **裸拿性价比低、升级价值线性**：1 费 1 防御起步寒酸，每级 +1 也是平缓成长——适合"升级资源富裕 + 敌人以攻击输出为主"的局；法伤/DoT 压力的对局里防御不生效，优先级下调。

## 相关机制

- [PP](/mechanics/pp-system.md)（PP 1：单场限打一次）
- [防御](/powers/defense_power.md)（每层受攻击伤害掉血 -1）

## 源码

- `SeerSlimeDefense.cs`
