# 真龙吐息

<img src="/images/cards/true_dragon_breath.png" alt="真龙吐息" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 5 | 8 |
| 每张手牌减伤 | 1 | 1 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 造成<span style="color:#3aa675;font-weight:600">5</span>点伤害，[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)每有<span style="color:#3aa675;font-weight:600">1</span>张伤害<span style="color:#3aa675;font-weight:600">-1</span>。未被[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)的伤害恢复自身体力。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 造成<span style="color:#3aa675;font-weight:600">8</span>点伤害，[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)每有<span style="color:#3aa675;font-weight:600">1</span>张伤害<span style="color:#3aa675;font-weight:600">-1</span>。未被[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)的伤害恢复自身体力。

## 小贴士

- **空手才疼**：伤害 = 基础值 - 打出时[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)里剩余的牌数（这张本身已离手）。把它留到最后一张打，才能吃满 <span style="color:#3aa675;font-weight:600">5</span>（升级 <span style="color:#3aa675;font-weight:600">8</span>）点；攥着一手牌先甩它，伤害会被削到 <span style="color:#3aa675;font-weight:600">1</span>～<span style="color:#3aa675;font-weight:600">2</span> 甚至归零。
- **吸血看穿透**：回血量等于本次实际未被[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)的伤害，不是面板数值。遇到高格挡敌人，伤害和回血会一起缩水——配易伤、破甲手段既能抬伤害又能抬回血。
- **手满会空转**：当手牌数 ≥ 基础伤害时，伤害直接算作 <span style="color:#3aa675;font-weight:600">0</span>，没有穿透就没有回血，整张牌白打。满手时千万别先动它。
- **升级抬高底线**：基础伤害 <span style="color:#3aa675;font-weight:600">5</span>→<span style="color:#3aa675;font-weight:600">8</span>，意味着手里多捏几张牌也不至于把伤害削没，出牌顺序的容错更高。
- **性价比**：1 费自带吸血的攻击牌，空手时收益最高，适合快攻清手或残血续航流派。

## 相关机制

- [手牌](/mechanics/hand.md)（影响伤害的手牌数判定）
- [格挡](/mechanics/block.md)（影响吸血的穿透结算）

## 源码

- `SeerTrueDragonBreath.cs`
