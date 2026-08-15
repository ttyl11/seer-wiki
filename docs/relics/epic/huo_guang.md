# 霍光

<img src="/images/relics/huo_guang.png" alt="霍光" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 史诗（自定义稀有度）

### 数值参数

| 参数 | 数值 |
|---|---|
| VictoryCount（胜利计数，初始） | 0 |
| CritDamageBoost（暴击伤害增加，%） | 30 |
| MadBladeThreshold（狂刃阈值） | 5 |

## 描述

战斗开始时，获得<span style="color:#9b59b6;font-weight:600">[北冥之刃](/powers/north_sea_blade_power.md)</span>：所有攻击必定[暴击](/powers/critical_strike_power.md)，暴击伤害+<span style="color:#3aa675;font-weight:600">30</span>%。<br/>每结束一场战斗，胜利计数+1。<br/>当胜利计数达到<span style="color:#3aa675;font-weight:600">5</span>场后，<span style="color:#9b59b6;font-weight:600">[北冥之刃](/powers/north_sea_blade_power.md)</span>升级为<span style="color:#9b59b6;font-weight:600">[北冥狂刃](/powers/north_sea_mad_blade_power.md)</span>：暴击伤害+50%，且暴击后附加等量<span style="color:#d4a017;font-weight:600">[固定伤害](/powers/fixed_damage_power.md)</span>。

- **形态判定**：战斗开始前比较胜利计数与狂刃阈值，决定施加[北冥之刃](/powers/north_sea_blade_power.md)或[北冥狂刃](/powers/north_sea_mad_blade_power.md)。
- **动态数值**：战斗结束后胜利计数+1，达到阈值后暴击伤害增加从 <span style="color:#3aa675;font-weight:600">30</span>% 更新为 <span style="color:#3aa675;font-weight:600">50</span>%。

## 风味文字

<span style="color:#d44;font-weight:600">骁勇善战。</span>

## 小贴士

- **必定暴击是核弹级**：战斗开始自动获得北冥之刃，所有攻击必定暴击（1.5倍伤害），暴击伤害再+30%。一张10点伤害的攻击牌实际打 10×1.5×1.3=19.5 点——接近翻倍。无需堆暴击率，拿到这张遗物后每张攻击牌都是暴击。
- **5场战斗后质变升级**：每打赢一场战斗计数+1，达到5场后北冥之刃升级为北冥狂刃。暴击伤害从+30%提升到+50%，且每次暴击后对目标追加等量固定伤害——打20点暴击伤害就再追加20点固定伤害，相当于伤害再翻一倍。
- **核心矛盾：前期强，后期更强**：前期（前5场战斗）必定暴击+30%暴击伤害已经很猛，后期（5场后）升级为狂刃后伤害几乎再翻倍。越往后打越强，是典型的滚雪球遗物。
- **狂刃的固定伤害可被免疫**：北冥狂刃追加的固定伤害是施加固定伤害能力，可被免疫固定伤害的能力挡掉。面对有固定伤害免疫的敌人时，狂刃的追加效果会失效，但必定暴击+50%暴击伤害依然生效。
- **计数跨战斗保留**：胜利计数是持久化属性，跨战斗保存。打完5场战斗后永久升级为狂刃，之后的每场战斗都是狂刃形态。
- **适合攻击牌多的牌组**：必定暴击只对攻击牌生效。攻击牌越多、单次伤害越高，这张遗物的收益越大。纯技能牌组几乎无法发挥其价值。

## 源码

- `SeerHuoGuang.cs`
