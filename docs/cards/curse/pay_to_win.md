# 氪金

<img src="/images/cards/pay_to_win.png" alt="氪金" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **能量消耗**: 1
- **类型**: 诅咒
- **稀有度**: 诅咒
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 金币百分比上增加 | 6 |

## 描述

加入[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)时，失去当前<span style="color:#d4a017;font-weight:600">金币</span>的<span style="color:#3aa675;font-weight:600">6</span>%。打出时，自身附加99层[<span style="color:#d44;font-weight:600">易伤</span>](/powers/vulnerable_power.md)和[<span style="color:#d44;font-weight:600">虚弱</span>](/powers/weak_power.md)。

## 小贴士

- **触发时机**：加入[手牌](/mechanics/hand.md)时触发金币损失，打出时附加减益。
- **金币损失**：失去当前金币的 <span style="color:#3aa675;font-weight:600">6</span>%（向下取整）。
- **减益附加**：打出时对自身附加 <span style="color:#3aa675;font-weight:600">99</span> 层[易伤](/powers/vulnerable_power.md)和 <span style="color:#3aa675;font-weight:600">99</span> 层[虚弱](/powers/weak_power.md)。
- **不可升级**：本卡无法升级。
- **卡牌类型**：属于[诅咒牌](/mechanics/unplayable.md)，无法主动打出。

## 源码

- `SeerPayToWin.cs`
