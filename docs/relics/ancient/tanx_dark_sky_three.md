# 陨日蚀锤

<img src="/images/relics/tanx_dark_sky_three.png" alt="陨日蚀锤" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 卡牌数量 | 3 |

## 描述

战斗开始时，将<span style="color:#3aa675;font-weight:600">3</span>张费用-<span style="color:#3aa675;font-weight:600">1</span>的<span style="color:#9b59b6;font-weight:600">[魔·黑天暗罚](/cards/character/magic_black_sky_punishment.md)</span>加入抽牌堆。

- **⚠️ 本地化与实际卡名不一致**：本地化写"魔·大暗黑天"，实际生成的卡是[魔·黑天暗罚](/cards/character/magic_black_sky_punishment.md)（大暗黑天系列对称卡），以实际效果为准。
- **触发时机**：每场战斗开始前自动创建 3 张魔·黑天暗罚加入抽牌堆。
- **费用减免**：每张卡整场战斗费用 -1（最低 0，不会变负）。
- **加入位置**：抽牌堆随机位置。

## 风味文字

<span style="color:#d44;font-weight:600">大暗黑天。</span>

## 小贴士

- **3 张战斗生成的全能终端**：每场战斗开局白送 3 张[魔·黑天暗罚](/cards/character/magic_black_sky_punishment.md)——35 点伤害、Boss 房伤害翻倍、造成伤害 25% 吸血、2 回合[异常免疫](/powers/debuff_immune_power.md)、[先制](/powers/first_strike_power.md)+2、随机 2 种[异常状态](/mechanics/abnormal-status.md) 2 回合，一张牌把输出/续航/保命/加速/控制全包。生成的卡**只在战斗内存在**：不进牌组、不占牌组位、战斗结束即消失。
- **PP 3/3，每场最多 9 次暗罚**：每张 PP 3——单张单场可打出 3 次，3 张合计 9 次。Boss 战 9 次 × 70 点（翻倍后）理论上限 630 点伤害，每次还附带吸血与异常覆盖，持续作战能力极强。
- **减费全名牌共享，越打越便宜**：遗物先压到 4 费，同名牌递减再叠加——第 1 次 4 费、第 2 次 3 费、第 3 次 2 费、第 4 次 1 费、第 5 次起 0 费，9 次全打总成本仅 **10 点能量**。
- **先制 +2 的接牌技巧**：每次打出给 2 层[先制](/powers/first_strike_power.md)（下一张牌耗能 -2）——打出暗罚后紧接着甩一张高费牌最赚，等于把 4 费的暗罚净成本压回 2 费左右；连续打出时先制层层相续，费用曲线进一步下探。
- **吸血是持久战保险**：回复量按本次攻击**总伤害**（含被格挡吸收部分）的 25% 结算——Boss 战 70 伤稳定回 17 血，9 次全打累计可回百点以上，配合异常免疫的 2 回合安全窗口，硬刚长线 Boss 战毫无压力。
- **随机异常方差大但总量足**：每次随机 2 种不重复异常 2 回合，9 次打出累计 18 次异常施加——抽到瘫痪/石化这类硬控是赚到，抽到温和异常也有压制；对比[审判战戟](/relics/ancient/tanx_alliance_three.md)的稳定麻痹+害怕，暗罚走的是"量大管饱"路线。
- **性价比**：先古稀有度名副其实——每场 3 张（最多 9 次）六效合一的战斗生成卡，不占牌组位、Boss 特化、自带续航。与[审判战戟](/relics/ancient/tanx_alliance_three.md)是同骨架的对称设计：审判走稳定双控，暗罚走吸血+免疫+随机异常，二选一按构筑口味定。

## 源码

- `SeerTanxDarkSkyThree.cs`
