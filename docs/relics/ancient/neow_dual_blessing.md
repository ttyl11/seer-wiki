# 双生印绶

<img src="/images/relics/neow_dual_blessing.png" alt="双生印绶" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 展示数量 | 3 |
| 选择数量 | 2 |

## 描述

拾起时，从<span style="color:#3aa675;font-weight:600">3</span>张随机 Seer <span style="color:#d4a017;font-weight:600">罕见卡牌</span>中选择至多<span style="color:#3aa675;font-weight:600">2</span>张加入牌组。随机<span style="color:#3aa675;font-weight:600">1</span>张<span style="color:#d4a017;font-weight:600">打击牌</span>和<span style="color:#3aa675;font-weight:600">1</span>张<span style="color:#d4a017;font-weight:600">防御牌</span>获得<span style="color:#d4a017;font-weight:600">[永恒](/mechanics/eternal.md)</span>。

- **卡牌筛选**：从 Seer 卡池筛选罕见稀有度且非诅咒/状态的卡牌，生成 3 张供选择。
- **永恒标记**：从牌组分别随机选 1 张打击牌和 1 张防御牌，附加[永恒](/mechanics/eternal.md)关键词。
- **选择界面**：弹出阻塞式选牌界面，玩家至多选 2 张。

## 风味文字

<span style="color:#d44;font-weight:600">罕见牌。</span>

## 小贴士

- **3 选 2 罕见卡 + 永恒标记双重收益**：拾起时从 3 张随机 Seer 罕见卡里至多选 2 张加入牌组（相当于一次免费稀有卡奖励），同时给牌组里随机的 1 张打击牌和 1 张防御牌附加 [永恒](/mechanics/eternal.md) 关键词。一张遗物两份收益。
- **永恒标记保护基础牌**：被永恒标记的打击/防御牌无法从牌组移除或变形（详见 [永恒机制](/mechanics/eternal.md)），相当于锁定两张核心基础牌，避免被删牌服务或变形效果误伤。
- **SL 后永恒会自动重应用**：存档/读档后永恒标记会通过进入房间、战斗结束、战斗开始等时机自动重新应用，不用担心读档后标记丢失。
- **多人两端标记同一张牌**：选中的打击/防御牌通过保存属性两端持久化，多人模式下两端会标记同一张牌，不会出现分歧。
- **性价比**：先古稀有度合理——3 选 2 罕见卡 + 永恒保护双重收益，价值稳定且无副作用。

## 源码

- `SeerNeowDualBlessing.cs`
