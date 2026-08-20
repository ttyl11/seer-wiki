# 孑峰天璨

<img src="/images/cards/peak_sky_brilliance.png" alt="孑峰天璨" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 3
- **能量消耗**: 3
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 |
|---|---|
| 基础格挡 | 20 |
| 升级后格挡 | 30 |
| 击晕阈值 | 10 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 获得<span style="color:#3aa675;font-weight:600">20</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。本回合你的格挡不消失。消除所有生物的增益和减益，超过<span style="color:#3aa675;font-weight:600">10</span>个则[<span style="color:#d4a017;font-weight:600">击晕</span>](/mechanics/stun.md)所有敌人。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 获得<span style="color:#3aa675;font-weight:600">30</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。本回合你的格挡不消失。消除所有生物的增益和减益，超过<span style="color:#3aa675;font-weight:600">10</span>个则[<span style="color:#d4a017;font-weight:600">击晕</span>](/mechanics/stun.md)所有敌人。

## 小贴士

- **公平清除+保留格挡的防御核弹**：获得20格挡（升级30）且本回合格挡不消失（原版"残影"效果），同时清除所有生物（含自身）的增益和减益。等于一回合获得巨额保留格挡+清场buff。
- **超过10个则击晕全体敌人**：清除前先统计所有生物（敌方+自身）的增益/减益总数，严格超过 <span style="color:#3aa675;font-weight:600">10</span> 个（即 <span style="color:#3aa675;font-weight:600">11</span> 个起）才击晕**所有**敌人——不是只击晕带 buff 的那些。面对多buff敌人时既是清除又是控制，10个阈值在Boss战中容易达到。
- **公平清除含自身，格挡和残影不受影响**：清除时会移除自身buff和debuff，所以打出前要规划好——自身关键buff会被清掉。但有两样东西安全：**格挡**本身不是增益、不受清除影响；**残影**是在清除完成之后才施加的，也不会被自己清掉。
- **PP3+3费重消耗**：双重高消耗，但20格挡+保留+清场+击晕的四效合一，是罕见稀有度的顶级防御件。适合关键回合作为保命+清场的转折点。

## 源码

- `SeerPeakSkyBrilliance.cs`
