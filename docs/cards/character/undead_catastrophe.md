# 沦·亡灵天灾

<img src="/images/cards/undead_catastrophe.png" alt="沦·亡灵天灾" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 4 | 4 |
| 保留 | 否 | 是 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">4</span>点伤害。伤害高于<span style="color:#3aa675;font-weight:600">5</span>获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">人工制品</span>](/powers/artifact_power.md)，低于<span style="color:#3aa675;font-weight:600">5</span>获得<span style="color:#d4a017;font-weight:600">灾祸</span>。

## 升级后

[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">4</span>点伤害。伤害高于<span style="color:#3aa675;font-weight:600">5</span>获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">人工制品</span>](/powers/artifact_power.md)，低于<span style="color:#3aa675;font-weight:600">5</span>获得<span style="color:#d4a017;font-weight:600">灾祸</span>。

## 小贴士

- **默认走灾祸分支**：基础伤害 4 点，本身低于阈值 5。不加任何增益直接打出，必定获得灾祸而非人工制品。想稳定拿到人工制品，得靠力量/易伤等把总伤害顶到 6 以上。
- **判定看总伤害，不看扣血**：高低比较基于敌人受到的"总伤害"（含被[格挡](/mechanics/block.md)的部分），不是实际扣血量。所以格挡不影响判定——只要面板伤害（含力量/易伤）>5，即便被格挡全额吸收，依然走人工制品分支。打高甲敌人也能稳定拿人工制品。
- **恰好 5 点是真空区**：总伤害刚好等于 5 时既不给人工制品也不给灾祸，白板收场。这个边界很容易踩到——基础 4 加 1 点力量是 5（啥都没有），加 2 点力量才是 6（人工制品）。
- **灾祸是攻击牌引擎**：灾祸每次你打出攻击牌就往[手牌](/mechanics/hand.md)塞随机攻击牌（数量等于灾祸层数），层数可叠加。走灾祸流时这张牌是稳定启动器，配合多段攻击能滚雪球；但塞进来的随机攻击牌不可控，可能稀释关键牌。
- **人工制品是减益盾**：1 层人工制品挡下一次可见减益（如[虚弱](/powers/weak_power.md)、[易伤](/powers/vulnerable_power.md)等），适合对抗爱挂减益的精英/Boss。但它只挡减益，不挡直接伤害。
- **升级只加保留**：升级后伤害、阈值都不变，仅添加[保留](/mechanics/retain.md)关键词。保留让这张牌能攒在手里等时机——比如等力量叠够再打去拿人工制品，对灾祸流也方便留住启动器。升级价值在于"留牌灵活性"，不提升单次强度。
- **性价比**：1 费 4 点伤害本身偏弱，价值全在分支奖励上。需要围绕"顶伤害拿人工制品"或"吃灾祸滚攻击牌"做构筑才划算，单挂一般。

## 相关能力

- [人工制品](/powers/artifact_power.md)（高伤分支授予的减益盾）
- 灾祸（低伤分支授予的攻击牌生成能力）

## 相关机制

- [保留](/mechanics/retain.md)（升级后获得的关键词）

## 源码

- `SeerUndeadCatastrophe.cs`
