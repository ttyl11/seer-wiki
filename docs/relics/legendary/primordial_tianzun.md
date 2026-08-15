# 混元天尊

<img src="/images/relics/primordial_tianzun.png" alt="混元天尊" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 塔罗遗物
- **稀有度**: 传说（自定义稀有度）

### 数值参数

| 参数 | 数值 |
|---|---|
| 奥斯提生命比例 | 30（%） |
| 每10%生命增伤 | 5（%） |
| 回复生命 | 3 |
| 异常免疫层数 | 3 |

## 描述

战斗开始时，<span style="color:#d4a017;font-weight:600">[召唤](/mechanics/summon.md)</span>奥斯提（生命为自身最大生命的<span style="color:#3aa675;font-weight:600">30</span>%），<span style="color:#d4a017;font-weight:600">[击晕](/mechanics/stun.md)</span>随机1个敌方。<br/>奥斯提存活时：①回合开始时，奥斯提每损失10%生命，当回合<span style="color:#d4a017;font-weight:600">攻击伤害</span>+<span style="color:#3aa675;font-weight:600">5</span>%；②回合开始时，若自身处于<span style="color:#d44;font-weight:600">[异常状态](/mechanics/abnormal-status.md)</span>，抽1张牌；③若自身任一[属性](/mechanics/all_attributes.md)为负值，回合结束时回复<span style="color:#3aa675;font-weight:600">3</span>点生命。<br/>奥斯提死亡时，<span style="color:#d4a017;font-weight:600">[击晕](/mechanics/stun.md)</span>随机1个敌方（每场战斗1次），获得<span style="color:#3aa675;font-weight:600">3</span>层<span style="color:#9b59b6;font-weight:600">[异常免疫](/powers/debuff_immune_power.md)</span>（免疫异常状态3回合，且每层减伤33%异常状态伤害）。

- **增伤档位**：奥斯提每损失10%生命（向下取整），自身攻击伤害+5%。奥斯提半血时+25%，濒死时+50%。
- **属性负值检测**：回合开始时检查力量、敏捷、命中、速度、防御五项属性，任一为负则回合结束回复3点生命。
- **异常免疫双重效果**：奥斯提死亡时获得的[异常免疫](/powers/debuff_immune_power.md)既免疫异常状态3回合，又每层减少33%异常状态伤害（上限100%）。

## 风味文字

<span style="color:#d44;font-weight:600">天尊。</span>

## 小贴士

- **开局召唤奥斯提+击晕**：战斗开始召唤奥斯提（生命为自身最大生命30%），并随机击晕1个敌方。开局就有人帮你承伤+控场，节奏领先。
- **奥斯提越残血自身攻击越强**：奥斯提存活时，每损失10%生命自身攻击伤害+5%。奥斯提掉到半血时自身攻击+25%，濒死时+50%。奥斯提承伤=自身增伤，双刃剑设计——想增伤就得让奥斯提挨打。
- **异常状态抽牌补偿**：奥斯提存活时，回合开始若自身处于异常状态，抽1张牌。被上异常不亏反赚，相当于异常状态的补偿机制。
- **属性为负回血兜底**：奥斯提存活时，自身任一属性（力量/敏捷/命中/速度/防御）为负，回合结束回3点血。对抗削属性敌人的续航手段。
- **奥斯提死亡触发异常免疫+击晕**：奥斯提死亡时获得3层[异常免疫](/powers/debuff_immune_power.md)（免疫异常状态3回合，每层减伤33%异常状态伤害），并击晕随机敌方（每场1次）。奥斯提死后不白死，留下保命+控场遗产。
- **增伤只对攻击伤害生效**：奥斯提残血增伤只加成攻击牌的伤害，非攻击伤害不受影响。想最大化增伤收益集中打攻击牌。
- **性价比**：传说稀有度合理——召唤+击晕+增伤+抽牌+回血+死亡遗产六合一，全能型传说遗物。

## 源码

- `SeerPrimordialTianzun.cs`
