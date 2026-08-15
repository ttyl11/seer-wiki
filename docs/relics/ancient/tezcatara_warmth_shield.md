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

- **卡牌获取**：获得 1 张[余温之辰](/cards/event/residual_warmth_star.md)，永久加入牌组。
- **战斗能量**：每场战斗开始时获得 2 点[能量](/mechanics/energy.md)。

## 风味文字

<span style="color:#d44;font-weight:600">守护。</span>

## 小贴士

- **能量完美喂给余温之辰**：[余温之辰](/cards/event/residual_warmth_star.md)是 X 耗能卡，回合开始时若在[抽牌堆](/mechanics/draw_pile.md)则自动打出并消耗当前所有[能量](/mechanics/energy.md)。遗物提供的 2 点能量直接转化为额外 4 张「[温](/cards/status/warmth.md)」（每张提供 4 点[格挡](/mechanics/block.md)），相当于每场战斗多 16 点格挡。
- **温辰循环引擎**：「[温](/cards/status/warmth.md)」加入[消耗牌堆](/mechanics/exhaust_pile.md)时提供格挡，牌堆洗牌时转化为「[辰](/cards/status/morning_star.md)」回到[抽牌堆](/mechanics/draw_pile.md)——抽到「辰」时获得[辉星](/mechanics/star.md)、[能量](/mechanics/energy.md)和储君卡。遗物的额外能量加速了这个攻防循环。
- **自动打出吃掉所有能量**：余温之辰自动打出会消耗当前全部[能量](/mechanics/energy.md)（含遗物给的 2 点），第 1 回合可能没有剩余能量打其他牌。但换来的是海量[格挡](/mechanics/block.md)，防守端极其扎实。
- **升级提升收益**：余温之辰升级后每 X 生成 3 张温（原 2 张），配合遗物的 2 点能量，多产出 2 张温 = 8 点额外格挡。
- **性价比**：2 点能量加一张高质量 X 耗能卡，每场战斗免费提供大量格挡和后续资源。先古稀有度配得上这个持续收益。

## 源码

- `SeerTezcataraWarmthShield.cs`
