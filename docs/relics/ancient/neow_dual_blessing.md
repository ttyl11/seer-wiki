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

- **卡牌筛选**：从 Seer 卡池筛选罕见稀有度且非诅咒/状态的卡牌，等概率生成 3 张供选择。
- **永恒标记**：从牌组中分别随机选 1 张带"打击"标签的牌和 1 张带"防御"标签的牌（不限于基础打击/防御），附加[永恒](/mechanics/eternal.md)关键词。
- **选择界面**：弹出阻塞式选牌界面，可以选 0～2 张（不强制选满）。

## 风味文字

<span style="color:#d44;font-weight:600">罕见牌。</span>

## 小贴士

- **3 选 2 罕见卡 + 永恒标记双重收益**：拾起时从 3 张随机 Seer 罕见卡里至多挑 2 张加入牌组——相当于一次免费的高质量卡牌奖励（罕见卡池整体质量高于普通卡），再加上两张牌的永恒保护，一张遗物两份收益。
- **永恒标记的判定看标签不看牌名**：随机选取的范围是牌组里所有带"打击"标签/带"防御"标签的牌——不只是基础打击/防御，其它打击系牌（如各种打击变体）也算在池内；同名牌多张时随机命中其中 1 张。
- **永恒是保护也是枷锁**：被标记的牌局外**不可删除、不可变形**——既挡住了"随机移除卡牌"类事件代价和变形效果的误伤，也让你自己没法在火堆/商店把这两张牌删掉。走精简流派的玩家拿之前要想清楚：两张永恒的基础牌会一直占着牌组位。
- **与全牌组变形的绝配**：[熵变骰](/relics/ancient/darv_energy_and_transform.md)会把整个牌组变换一遍（普通牌、基础牌、诅咒统统换掉），唯一豁免的就是[永恒](/mechanics/eternal.md)牌——先拿双生印绶再拿熵变骰，两张基础牌就成了变换风暴里的定海神针。
- **SL 后标记自动重应用**：进入新房间、战斗结束、战斗开始等时机会自动给牌组重新打上永恒标记（标记通过存档属性记录），读档后基本不用担心丢失；仅存一个小窗口期——读档后原地不动直接去删牌服务，理论上仍可能误删，挪一步房间就恢复保护。
- **多人两端标记同一张牌**：选中的打击/防御牌通过保存属性两端持久化，多人模式下两端会标记同一张牌，不会出现分歧。

## 源码

- `SeerNeowDualBlessing.cs`
