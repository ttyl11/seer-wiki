# 圣谕邪魇

<img src="/images/relics/holy_edict_evil_nightmare.png" alt="圣谕邪魇" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 传说（自定义稀有度）

### 数值参数

| 参数 | 数值 |
|---|---|
| FirstStrikeStacks（先制层数） | 1 |
| RetainCount（保留卡数） | 1 |
| TransformThreshold（变换阈值） | 12 |

## 描述

①战斗开始时，获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">[先制](/powers/first_strike_power.md)</span>，进入<span style="color:#9b59b6;font-weight:600">[圣谕形态](/powers/divine_form_power.md)</span>。<br/>②每打出<span style="color:#3aa675;font-weight:600">12</span>张牌变换形态，变换时获得1层<span style="color:#d4a017;font-weight:600">[先制](/powers/first_strike_power.md)</span>。<br/>③回合结束时，随机为<span style="color:#3aa675;font-weight:600">1</span>张手牌附加<span style="color:#d4a017;font-weight:600">[保留](/mechanics/retain.md)</span>。

- **形态变换**：每打出变换阈值张牌，在[圣谕形态](/powers/divine_form_power.md)与[邪形态](/powers/evil_form_power.md)间切换，变换逻辑由形态能力自身处理（含变换时+1层[先制](/powers/first_strike_power.md)）。
- **随机保留**：回合结束时从手牌中排除已保留的牌，用战斗卡牌选取随机源洗牌后取前保留卡数张附加单回合[保留](/mechanics/retain.md)。

## 风味文字

<span style="color:#d44;font-weight:600">圣谕邪魇。</span>

## 小贴士

- **稀有度机制**：原版稀有度设为先古（让掉落池过滤掉，不进正常掉落池），自定义稀有度设为传说（红色描边，传说级）。
- **计数重置**：打出牌计数在战斗开始前与变换后归零，战斗结束也重置，不跨战斗保留。
- **形态初始化**：战斗开始时施加[先制](/powers/first_strike_power.md)与[圣谕形态](/powers/divine_form_power.md)各1层。

## 源码

- `SeerHolyEdictEvilNightmare.cs`
