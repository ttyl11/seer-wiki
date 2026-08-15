# 至序圣华

<img src="/images/relics/order_holy_hua.png" alt="至序圣华" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 传说（自定义稀有度）

### 数值参数

| 参数 | 数值 |
|---|---|
| ExecuteStacks（处决层数） | 3 |
| ReviveHpPercent（复活生命百分比） | 20 |
| CrownImmuneTurns（加冕免疫回合） | 1 |
| CrownPpFreeTurns（加冕免费PP回合） | 3 |

## 描述

①裁决：在每场战斗开始时，生命值最高的敌人获得<span style="color:#3aa675;font-weight:600">3</span>层<span style="color:#9b59b6;font-weight:600">[处决](/powers/execute_power.md)</span>。<br/>②圣铸：每消耗1点能量铸造1。累计铸造达到<span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">30</span>/<span style="color:#3aa675;font-weight:600">100</span>时，分别生成<span style="color:#d4a017;font-weight:600">圣剑一/二/三</span>（每场战斗各一次）。打出<span style="color:#d4a017;font-weight:600">君王之剑</span>后先制+1。首次死亡时回复到最大生命值的<span style="color:#3aa675;font-weight:600">20</span>%，此后永久失去圣铸与复活能力，改为：每场战斗开始时消耗所有攻击牌并清空其PP，每清空1点PP铸造1。<br/>③加冕：第<span style="color:#3aa675;font-weight:600">1</span>回合免疫异常状态与属性下降。前<span style="color:#3aa675;font-weight:600">3</span>回合打出牌不消耗PP。<br/>④秩序：在你的回合结束时，生命值高于<span style="color:#3aa675;font-weight:600">50%</span>的敌人使你先制+1；生命值等于或低于<span style="color:#3aa675;font-weight:600">50%</span>的敌人获得1层<span style="color:#9b59b6;font-weight:600">[处决](/powers/execute_power.md)</span>。

- **复活分支**：首次复活后已复活标记置真，每场战斗改为消耗所有攻击牌并清空其 PP，按清空 PP 数调用铸造接口铸造。
- **加冕回合控制**：第 1 回合施加[异常免疫](/powers/debuff_immune_power.md)与[属性下降免疫](/powers/attr_down_immune_turn_power.md)；前 3 回合施加[BOSS PP 免费](/powers/boss_pp_free_power.md)，第 3 回合结束移除。
- **秩序判定**：遍历所有敌人，生命高于 50% 给自己先制，否则给敌人处决。

## 风味文字

<span style="color:#d44;font-weight:600">至序圣华。</span>

## 小贴士

- **裁决目标**（战斗开始前）：取所有可击中敌人中最大生命最高者施加处决层数层处决。
- **圣铸代理**：圣铸计数与圣剑生成由圣铸计数器能力维护，遗物仅负责战斗开始时挂载该能力（复活分支则直接调用铸造接口）。
- **复活状态持久化**：已复活标记为跨战斗保存属性，跨战斗/跨局保留，永久切换为消耗攻击牌模式。

## 源码

- `SeerOrderHolyHua.cs`
