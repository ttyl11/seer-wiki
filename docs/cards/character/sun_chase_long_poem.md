# 逐日长诗

<img src="/images/cards/sun_chase_long_poem.png" alt="逐日长诗" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 所有敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 3 | 3 |
| 焚烬回合 | 2 | 3 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对所有敌人造成<span style="color:#3aa675;font-weight:600">3</span>点伤害。消除对手[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)提升，成功则[<span style="color:#d44;font-weight:600">焚烬</span>](/powers/ash_power.md)<span style="color:#3aa675;font-weight:600">2</span>回合。<br/><span style="color:#d4a017;font-weight:600">唱词：莎木斯</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对所有敌人造成<span style="color:#3aa675;font-weight:600">3</span>点伤害。消除对手[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)提升，成功则[<span style="color:#d44;font-weight:600">焚烬</span>](/powers/ash_power.md)<span style="color:#3aa675;font-weight:600">3</span>回合。<br/><span style="color:#d4a017;font-weight:600">唱词：莎木斯</span>。

## 小贴士

- **全体伤害 + 属性清除 + 焚烬的三连击**：先对所有敌人造成 <span style="color:#3aa675;font-weight:600">3</span> 点攻击伤害，再逐个敌人检查四项[全属性](/mechanics/all_attributes.md)——只要任一为正层数就移除，且只要移除了任意一项就追加[焚烬](/powers/ash_power.md)。清除属性是手段，焚烬才是真正的惩罚。
- **焚烬的双重惩罚**：[焚烬](/powers/ash_power.md)使目标攻击伤害降低 20%，且目标回合结束时获得 <span style="color:#3aa675;font-weight:600">2</span> 层[烧伤](/powers/burn_power.md)并减少 <span style="color:#3aa675;font-weight:600">1</span> 层焚烬。所以焚烬既是减攻又是延迟伤害，叠满后敌人既打不疼又被烧伤持续掉血。
- **唱词莎木斯的自激发**：打出后获得 <span style="color:#3aa675;font-weight:600">1</span> 层[唱词：莎木斯](/powers/chant_shams_power.md)——每回合结束时，若任意敌人处于[异常状态](/mechanics/abnormal-status.md)，自身全属性 +<span style="color:#3aa675;font-weight:600">1</span>。而焚烬本身就是异常状态，所以这张牌自带触发条件：打出后敌人有焚烬，下回合结束就能白嫖全属性。
- **升级延长焚烬而非加伤害**：升级后焚烬回合从 <span style="color:#3aa675;font-weight:600">2</span> 提升到 <span style="color:#3aa675;font-weight:600">3</span>，伤害不变（仍为 <span style="color:#3aa675;font-weight:600">3</span>）。多 <span style="color:#3aa675;font-weight:600">1</span> 回合意味着敌人多受一轮减攻加烧伤，也多 <span style="color:#3aa675;font-weight:600">1</span> 回合触发唱词增益。
- **性价比**：1 费合理——全体伤害加属性清除加焚烬加唱词四合一，PP 5 的占用也不算高，是清场加自增益的优质工具牌。

## 相关能力

- [焚烬](/powers/ash_power.md)（条件施加的异常状态）
- [唱词：莎木斯](/powers/chant_shams_power.md)（自身增益，异常状态触发）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（力量 / 命中 / 防御 / 速度）
- [异常状态](/mechanics/abnormal-status.md)

## 源码

- `SeerSunChaseLongPoem.cs`
