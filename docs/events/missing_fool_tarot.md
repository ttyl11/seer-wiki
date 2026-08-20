# 莱达宇宙：缺失的愚者塔罗

21 张塔罗牌齐聚于此，本该 22 张的塔罗唯独缺了最关键的「愚者」。角落里的创世魔盒正隐隐泛着只有你能看见的诡异光芒……

<a href="/events/">← 返回事件图鉴</a>

<img src="/images/events/seer_missing_fool_tarot.png" alt="莱达宇宙：缺失的愚者塔罗" style="max-width:360px;width:100%;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：剧情抉择事件
- **战斗**：否

## 选项一览

| 选项 | 代价 | 收益 |
|---|---|---|
| 认定魔盒故障，当场砸碎 | 每删 <span style="color:#3aa675;font-weight:600">1</span> 张牌扣 <span style="color:#d44;font-weight:600">15%</span> 当前生命 | 最多删除 <span style="color:#3aa675;font-weight:600">5</span> 张牌（可中途取消） |
| 远远观望，按兵不动 | — | 永久获得 <span style="color:#3aa675;font-weight:600">18</span> 点最大生命，并**回复 <span style="color:#3aa675;font-weight:600">18</span> 点当前生命** |
| 小心翼翼，伸手触碰魔盒 | — | 获得[创世魔盒](/relics/event/genesis_box.md)（每赢一场精英战斗获得 <span style="color:#3aa675;font-weight:600">1</span> 件塔罗遗物，优先未拥有） |

> ⚠️ 「观望」文案只写获得 18 点最大生命——实际加最大生命的同时会**回复等量当前生命**（上限加多少就回多少血）。残血时选它等于白嫖一次 18 点治疗。

## 小贴士

- **砸碎是"按次付费"的删牌，但永远不致死**：每删一张牌结算一次 <span style="color:#d44;font-weight:600">15%</span> **当前**生命（向下取整），且伤害是逐步结算的——生命值会越扣越少，后面的 <span style="color:#d44;font-weight:600">15%</span> 基数也随之变小。满血连删 <span style="color:#3aa675;font-weight:600">5</span> 张的总代价约为当前生命的 <span style="color:#d44;font-weight:600">55%</span>（0.85⁵ ≈ 44% 存活），并不是简单的 75%。由于 15% 向下取整，当前生命 <span style="color:#d44;font-weight:600">6</span> 点及以下时损失直接归零——扣血会在 6 血处自动"刹车"，这个选项不可能把你扣死。
- **残血反而是白嫖时机**：承接上一条——当前生命 ≤ <span style="color:#3aa675;font-weight:600">6</span> 时每删一张扣 0 血，等于免费删满 5 张。血线已经见底、下一场又有把握（或紧跟休息点）时，砸盒反而是收益最高的选择。
- **扣的是不可格挡的非攻击伤害**：每次扣血无视格挡、不吃任何增伤/减伤修正，也不会触发"被攻击受伤"类效果——身上挂着荆棘、护甲之类的战斗状态完全不影响结算（事件本身也发生在战斗外）。
- **可以中途反悔**：删牌界面每张都可取消，血线撑不住时删 <span style="color:#3aa675;font-weight:600">2</span>~<span style="color:#3aa675;font-weight:600">3</span> 张就停手完全可行；已付出的血按已删张数结算，不多扣。
- **观望是被低估的回复+上限**：<span style="color:#3aa675;font-weight:600">18</span> 最大生命 + 立即回复 <span style="color:#3aa675;font-weight:600">18</span> 当前生命，无任何风险。残血又没有治疗手段时，它就是一次免费的大休整；满血时只剩上限价值，优先级让位。
- **触碰魔盒是长线投资**：[创世魔盒](/relics/event/genesis_box.md)按"每赢一场精英战斗 +1 件塔罗遗物"累积，且优先送你还没拥有的（21 件集齐前不重复）。一局下来通常能打 <span style="color:#3aa675;font-weight:600">6</span>~<span style="color:#3aa675;font-weight:600">10</span> 场精英战，等于把本事件变成一座持续产出的遗物矿——前期（第一、二幕）遇到时收益最高，第三幕尾声才遇到则基本只能白拿一两件。
- **剧情彩蛋**：触碰后你会发现"缺失的愚者"就是你自己——这也解释了为什么只有你能看见魔盒的光。

## 源码

- `SeerMissingFoolTarot.cs`
