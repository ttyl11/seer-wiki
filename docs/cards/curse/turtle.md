# 开龟

<img src="/images/cards/turtle.png" alt="开龟" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **类型**: 诅咒
- **稀有度**: 诅咒
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害阈值 | 15 |

## 描述

此牌在[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中时，每回合当你造成大于等于<span style="color:#3aa675;font-weight:600">15</span>点伤害时，强制结束你的回合。

## 小贴士

- **触发时机**：当此牌进入[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)时，对自身施加不可见能力；离开手牌时移除。
- **伤害累计**：能力会累计每回合造成的未格挡伤害，当累计 ≥ <span style="color:#3aa675;font-weight:600">15</span> 时强制结束你的回合。
- **回合重置**：每回合结束时，伤害计数器重置为 <span style="color:#3aa675;font-weight:600">0</span>。
- **不可升级**：此牌无法升级。

## 源码

- `SeerTurtle.cs`
