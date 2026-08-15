# 炼·死镜冥啼

<img src="/images/cards/refining_death_mirror_dark_cry.png" alt="炼·死镜冥啼" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 3
- **能量消耗**: 9
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 所有敌方
- **关键词**: [炼狱](/mechanics/purgatory.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 14 | 14 |
| 生命流失每层 | 3 | 3 |
| PP | 3 | 3 |
| 最大PP | 3 | 3 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 对所有敌人造成<span style="color:#3aa675;font-weight:600">14</span>点伤害。场上每有<span style="color:#3aa675;font-weight:600">1</span>种[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)耗能<span style="color:#3aa675;font-weight:600">-1</span>。转移对手[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)到自身，每层使所有敌人流失<span style="color:#3aa675;font-weight:600">3</span>点生命。

## 升级后

[<span style="color:#d4a017;font-weight:600">奇巧</span>](/mechanics/sly.md)。PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 对所有敌人造成<span style="color:#3aa675;font-weight:600">14</span>点伤害。场上每有<span style="color:#3aa675;font-weight:600">1</span>种[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)耗能<span style="color:#3aa675;font-weight:600">-1</span>。转移对手[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)到自身，每层使所有敌人流失<span style="color:#3aa675;font-weight:600">3</span>点生命。

## 小贴士

- **9 费但异常状态减费——场上异常越多越便宜**：场上（己方 + 敌方）每有 <span style="color:#3aa675;font-weight:600">1</span> 种[异常状态](/mechanics/abnormal-status.md)（去重），耗能 <span style="color:#3aa675;font-weight:600">-1</span>，最低 <span style="color:#3aa675;font-weight:600">0</span>。基础 <span style="color:#3aa675;font-weight:600">9</span> 费，异常状态多的战斗中几乎免费。
- **全体 14 伤 + 炼狱翻倍 = 28 伤**：对所有敌人造成 <span style="color:#3aa675;font-weight:600">14</span> 点攻击伤害，[炼狱](/mechanics/purgatory.md)关键词自动将伤害翻倍为 <span style="color:#3aa675;font-weight:600">28</span> 点。
- **转移对手异常到自身——清敌 + 蓄力**：移除所有敌人的异常状态并转移到自身（取绝对值层数）。既清除敌人的异常增益（如冰封、臣服等），又为后续的生命流失蓄力。
- **每层异常让所有敌人流失 3 点生命——正循环引擎**：转移后自身每有 <span style="color:#3aa675;font-weight:600">1</span> 层异常状态，所有敌人流失 <span style="color:#3aa675;font-weight:600">3</span> 点不可格挡的生命。转移的异常越多，伤害越高——敌人异常越多 → 转移越多 → 伤害越高。
- **升级加奇巧**：升级后获得[奇巧](/mechanics/sly.md)关键词。
- **性价比**：<span style="color:#3aa675;font-weight:600">9</span> 费换全体 <span style="color:#3aa675;font-weight:600">28</span> 伤 + 异常转移 + 生命流失，异常状态多时费用大降；升级加奇巧增加灵活性。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)：耗能减免依据、转移对象、生命流失计数依据
- [炼狱](/mechanics/purgatory.md)：伤害翻倍关键词
- [奇巧](/mechanics/sly.md)：升级后获得的关键词
- [格挡](/mechanics/block.md)：生命流失伤害不可格挡

## 源码

- `SeerRefiningDeathMirrorDarkCry.cs`
