# 圣灵谱尼

<img src="/images/characters/puni.png" alt="圣灵谱尼" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **名称**: 圣灵谱尼
- **代词**: 祂
- **性别**: 中性（Neutral）
- **名称颜色**: #9966CC（紫色）
- **初始生命**: 77
- **初始金币**: 82
- **初始充能球槽**: 1
- **攻击动画延迟**: 0.15s
- **施法动画延迟**: 0.25s
- **攻击特效**: 钝击（`vfx_attack_blunt`）、重钝击（`vfx_heavy_blunt`）、斩击（`vfx_attack_slash`）三种随机
- **解锁条件**: 以任意角色通关一次后解锁
- **卡牌修饰名**: 圣灵卡牌
- **卡牌修饰描述**: 圣灵之力是救赎而非毁灭，蕴含温暖而神圣的光泽

## 描述

传奇的君王，不朽的奇迹，诸神时代终结后唯一的真神

## 初始卡组（13 张）

| 数量 | 卡牌 | 说明 |
|---|---|---|
| 3 | [打击](/cards/basic/puni_strike.md) | 谱尼专属基础攻击牌 |
| 3 | [防御](/cards/basic/puni_defend.md) | 谱尼专属基础防御牌 |
| 1 | [虚无](/cards/character/nothingness.md) | 谱尼七形态之一 |
| 1 | [元素](/cards/basic/element.md) | 谱尼七形态之一 |
| 1 | [能量](/cards/basic/energy.md) | 谱尼七形态之一 |
| 1 | [生命](/cards/basic/life.md) | 谱尼七形态之一 |
| 1 | [轮回](/cards/basic/reincarnation.md) | 谱尼七形态之一 |
| 1 | [永恒](/cards/basic/eternity.md) | 谱尼七形态之一 |
| 1 | [圣洁](/cards/basic/holiness.md) | 谱尼七形态之一 |

::: tip 谱尼七形态
虚无、元素、能量、生命、轮回、永恒、圣洁是谱尼的七种形态牌，每种形态对应一种元素属性。注意谱尼形态名"虚无/圣洁"与元素系统名"虚空/圣灵"是不同概念——形态名是谱尼专属命名，元素名来自 [powers.json](/mechanics/element-affinity.md) 的元素能力 title。
:::

## 初始遗物

- [起源流转](/relics/starter/origin_shift.md)：每场战斗开始时获得[神灵](/powers/divine_power.md)属性；每经过 7 个战斗房间（精英算 2 次，Boss 算 3 次），随机将 1 张基础牌转化为对应的先古任务牌。

### 起源流转转化表

[起源流转](/relics/starter/origin_shift.md)会将基础形态牌转化为对应的先古任务牌，转化关系固定（7 种）：

| 基础形态牌 | 转化为 | 先古任务牌位置 |
|---|---|---|
| [生命](/cards/basic/life.md) | [光荣之梦](/cards/ancient/glorious_dream.md) | 角色牌 |
| [虚无](/cards/character/nothingness.md) | [圣灵悲魂曲](/cards/ancient/holy_requiem.md) | 角色牌 |
| [轮回](/cards/basic/reincarnation.md) | [神圣复苏](/cards/ancient/holy_revival.md) | 角色牌 |
| [元素](/cards/basic/element.md) | [神灵之触](/cards/ancient/divine_touch.md) | 先古牌 |
| [能量](/cards/basic/energy.md) | [神圣启示歌](/cards/ancient/divine_revelation.md) | 先古牌 |
| [永恒](/cards/basic/eternity.md) | [圣光吟诵](/cards/ancient/holy_chant.md) | 角色牌 |
| [圣洁](/cards/basic/holiness.md) | [璨灵圣光](/cards/ancient/radiant_holy_light.md) | 先古牌 |

- **计数规则**：只计算战斗房间（普通战斗 +1、精英 +2、Boss +3），非战斗房间（商店/事件/篝火/宝箱）不计。计数满 7 清零并触发转化，可在一轮中多次触发（如 Boss 战后计数 +3，若累计达 14 则触发 2 次转化）。
- **随机选择**：从牌组中所有未转化的基础形态牌中随机选 1 张，多人模式两端一致。
- **不可逆转化**：转化后基础牌永久变为先古任务牌，无法变回。

## 角色专属机制

谱尼作为 Seer Mod 唯一角色，以下核心机制均围绕其设计：

- [PP 系统](/mechanics/pp-system.md)：谱尼卡牌独有的 PP 资源系统，每场战斗重置，打出 PP 卡消耗 PP。
- [元素克制](/mechanics/element-affinity.md)：26 种元素属性相生相克，谱尼七形态对应不同元素。
- [异常状态](/mechanics/abnormal-status.md)：25 种异常状态，是 mod 战斗的核心压制手段。
- [全属性](/mechanics/all_attributes.md)：力量/命中/防御/速度四属性体系。
- [固定伤害](/mechanics/fixed-damage.md)：延迟结算、不可格挡的特殊伤害机制。
- [充能球](/mechanics/orb.md)：谱尼初始 1 槽位，mod 新增 9 种充能球。
- [铸造系统](/mechanics/forge.md)：铸造剑刃衍生物的机制。
- [复活机制](/mechanics/revive.md)：mod 改造的复活系统。
- [真神牌堆](/mechanics/true-god-pile.md)：独立于抽/弃/消耗牌堆的二级资源系统。

## 角色可用资源统计

谱尼作为 mod 唯一角色，可使用以下全部 mod 内容：

| 资源类型 | 数量 | 链接 |
|---|---|---|
| 角色牌 | 192 张 | [角色牌图鉴](/cards/character/) |
| 先古牌 | 6 张 | [先古牌图鉴](/cards/ancient/) |
| 无色牌 | 35 张 | [无色牌图鉴](/cards/colorless/) |
| 诅咒牌 | 18 张 | [诅咒牌图鉴](/cards/curse/) |
| 状态牌 | 13 张 | [状态牌图鉴](/cards/status/) |
| 事件牌 | 9 张 | [事件牌图鉴](/cards/event/) |
| 衍生牌 | 8 张 | [衍生牌图鉴](/cards/token/) |
| 任务牌 | 2 张 | [任务牌图鉴](/cards/quest/) |
| 遗物 | 205 个 | [遗物图鉴](/relics/) |
| 能力 | 200+ 种 | [能力图鉴](/powers/) |
| 附魔 | 52 种 | [附魔图鉴](/enchantments/) |
| 充能球 | 9 种 | [充能球图鉴](/orbs/) |
| 药水 | 26 种 | [药水图鉴](/potions/) |

## 风味文字

- **死亡防触发台词**：不朽的奇迹不会轻易陨落。
- **金币独白**：这些财富……或许能用来重建宇宙的秩序。
- **混沌气息**：混沌的气息……不过是对秩序的另一种亵渎。
- **回合结束闲聊（存活）**：圣灵不急。
- **回合结束闲聊（死亡）**：……

## 小贴士

- **低血量高机制**：初始生命仅 77，是所有角色中最低档之一，但凭借七形态体系和起源流转的转化机制，后期成长性极强。
- **七形态是核心**：七张形态牌是谱尼卡组的核心，每张对应一种元素，配合元素克制系统可针对不同敌人。起源流转将基础牌转化为先古任务牌，是长期成长的关键。

## 源码

- `Puni.cs`
