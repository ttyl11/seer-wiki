# 蒸汽能源

<img src="/images/cards/steam_energy.png" alt="蒸汽能源" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 能量获取 | 3 | 4 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。向[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)加入一张<span style="color:#9b59b6;font-weight:600">灼伤</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">4</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。向[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)加入一张<span style="color:#9b59b6;font-weight:600">灼伤</span>。

## 小贴士

- **零费换三费的延迟代价**：0 费获得 <span style="color:#3aa675;font-weight:600">3</span> 点能量，净赚 3 费——但向[弃牌堆](/mechanics/discard_pile.md)塞一张灼伤。灼伤是原版状态牌：**不可打出**，回合结束时若还在手牌中，受到 <span style="color:#3aa675;font-weight:600">2</span> 点不受力量影响的伤害。
- **灼伤进弃牌堆而非手牌**：灼伤直接加入弃牌堆，本回合不受影响。风险在于后续洗牌把它抽进手牌——由于打不出去，只能靠消耗类效果（如[纯净能量](./pure_energy.md)消耗状态牌换能量）处理，否则回合结束时留在手里就会被烫。
- **升级只加能量不改变风险**：升级后能量获取从 <span style="color:#3aa675;font-weight:600">3</span> 提升到 <span style="color:#3aa675;font-weight:600">4</span>，灼伤惩罚不变。升级纯粹拉大收益，风险结构完全一致。
- **性价比**：0 费合理——3 点能量是强力的费用引擎，灼伤是可控的延迟代价，配合消耗机制或回复手段即可化解。

## 相关机制

- [能量](/mechanics/energy.md)
- [弃牌堆](/mechanics/discard_pile.md)

## 源码

- `SeerSteamEnergy.cs`
