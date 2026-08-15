# 破黯穿穹

<img src="/images/cards/break_dark_pierce_sky.png" alt="破黯穿穹" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 事件牌
- **最大PP**: 1
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 衍生
- **目标**: 所有敌方
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害 | 7 |
| 回复 | 3 |
| PP | 1 |
| 最大PP | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 消耗所有<span style="color:#d4a017;font-weight:600">唱词</span>，每消耗一句，对所有敌人造成<span style="color:#3aa675;font-weight:600">7</span>点伤害，自身恢复<span style="color:#3aa675;font-weight:600">3</span>点体力。为随机对手附加[<span style="color:#9b59b6;font-weight:600">曝</span>](/powers/expose_power.md)。

## 小贴士

- **伤害和回复都按唱词数量线性放大**：实际伤害 = 7 × 消耗的唱词数，实际回复 = 3 × 消耗的唱词数。消耗 2 句唱词时，造成 14 点群体伤害 + 6 点自愈；消耗全部 4 句时，28 点群体伤害 + 12 点自愈。**所以这张牌的价值完全取决于你积累了多少唱词**——没唱词时打出来等于空过。
- **伤害是攻击伤害**：吃力量加成、吃暴击、可被格挡。配合力量 buff 或暴击能力，28 点群体伤害可以放大到 42+ 点。**注意是群体攻击**——对多敌人遭遇战的收益是单体伤害 × 敌人数量，3 个敌人时 28 点 ≈ 84 点总伤害。
- **唱词为 0 时空过**：没唱词时打出来等于空过，连"曝"都不会施加。所以这张牌不能空放——必须先有唱词才有意义。
- **曝是额外惩罚，不依赖唱词数量**：只要打出了这张牌（且有唱词），就给随机 1 个对手 1 层曝。曝让该敌人的异常状态施加成功率降 50% 且死亡后直接消逝——**对依赖异常 build 的玩家是 debuff，对普通敌人是辅助减益**。随机对手走战斗目标随机数，多人模式两端一致。
- **性价比**：0 费合理——唱词积累后爆发收尾，PP1 限制每次回收周期打 1 次。
- **无法升级**：摸到什么样就是什么样，强度完全靠唱词积累，不靠升级提升。

## 相关能力

- [唱词：舍麦什](/powers/chant_shamash_power.md)（消耗对象之一）
- [唱词：霍尔希德](/powers/chant_khorshid_power.md)（消耗对象之一）
- [唱词：拉](/powers/chant_ra_power.md)（消耗对象之一）
- [唱词：莎木斯](/powers/chant_shams_power.md)（消耗对象之一）
- [曝](/powers/expose_power.md)（对敌人施加的状态）

## 源码

- `SeerBreakDarkPierceSky.cs`
