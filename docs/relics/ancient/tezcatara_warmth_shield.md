# 余烬星核

<img src="/images/relics/tezcatara_warmth_shield.png" alt="余烬星核" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 能量数量 | 2 |

## 描述

拾起时，获得1张<span style="color:#9b59b6;font-weight:600">余温之辰</span>卡牌，每场战斗开始时获得<span style="color:#3aa675;font-weight:600">2</span>点<span style="color:#d4a017;font-weight:600">[能量](/mechanics/energy.md)</span>。

- **卡牌获取**：获得 1 张[余温之辰](/cards/event/residual_warmth_star.md)，永久加入牌组（主牌堆顶部）。
- **战斗能量**：每场战斗第 1 回合开始时获得 2 点[能量](/mechanics/energy.md)，供当回合正常打牌使用。

## 风味文字

<span style="color:#d44;font-weight:600">守护。</span>

## 小贴士

- **先看清余温之辰的自动打出**：[余温之辰](/cards/event/residual_warmth_star.md)是 X 费卡——战斗第 1 回合开始时若它在[抽牌堆](/mechanics/draw_pile.md)，会自动打出并吃掉当时全部基础[能量](/mechanics/energy.md)，按每点能量生成 2 张「[温](/cards/status/warmth.md)」到[消耗牌堆](/mechanics/exhaust_pile.md)，每张温生成时 +4 [格挡](/mechanics/block.md)——3 能量开局即得 6 温 = 24 点即时格挡，防守端极其扎实。
- **+2 能量的真实去向**：自动打出（Power 钩子）先于遗物给能量（Relic 钩子）结算，所以 X 只吃基础能量；遗物补的 2 点能量在自动打完后到手，**留给你手动打牌**——第 1 回合等于"基础能量换格挡 + 白送 2 点能量出牌"，攻防两不误。
- **温辰循环引擎**：「温」堆在消耗牌堆（若被其他效果消耗，还能再 +4 格挡）；第一次洗牌时，余温之辰本体离场，所有温转化为「[辰](/cards/status/morning_star.md)」回到抽牌堆——抽到辰时每张 +2 [辉星](/mechanics/star.md) +1 能量，把防守资源转化回进攻资源。
- **升级提升收益**：余温之辰升级后每点能量生成 3 张温（原 2 张），同样的 X 直接多 50% 格挡产出——有升级机会时优先升它。
- **性价比**：一张高质量 X 费防御引擎 + 每场战斗首回合 2 点白送能量，先古稀有度配得上这个持续收益。防御型卡组的定海神针。

## 源码

- `SeerTezcataraWarmthShield.cs`
