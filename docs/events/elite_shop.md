# 赛尔豆商店

击败精英敌人后自动出现的隐蔽商店，货架上有 4 张卡牌、4 项服务和 6 件遗物，全部用[赛尔豆](/mechanics/currency.md)结算。

<a href="/events/">← 返回事件图鉴</a>

<img src="/images/events/seer_elite_shop.png" alt="赛尔豆商店" style="max-width:360px;width:100%;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：特殊商店（不占事件格）
- **触发时机**：每场精英战斗胜利后
- **货币**：赛尔豆（单位：万）
- **刷新费用**：<span style="color:#3aa675;font-weight:600">20</span> 万赛尔豆

## 商品与价格

### 卡牌（4 张，各随机 1 张）

| 商品 | 价格（万赛尔豆） |
|---|---|
| 无色卡 | <span style="color:#3aa675;font-weight:600">600</span> |
| 普通卡 | <span style="color:#3aa675;font-weight:600">300</span> |
| 罕见卡 | <span style="color:#3aa675;font-weight:600">500</span> |
| 稀有卡 | <span style="color:#3aa675;font-weight:600">700</span> |

### 服务（4 项）

| 服务 | 价格（万赛尔豆） | 内容 |
|---|---|---|
| 抽奖 | <span style="color:#3aa675;font-weight:600">200</span> | 全卡池随机三选一 |
| 升级 | <span style="color:#3aa675;font-weight:600">300</span> | 升级牌组中一张牌 |
| 打怪 | <span style="color:#3aa675;font-weight:600">500</span> | 进入子地图，一路怪物与宝藏 |
| 删除 | <span style="color:#3aa675;font-weight:600">400</span> | 移除牌组中一张牌 |

### 遗物（6 件：普通/罕见/稀有/商店专属/史诗/传说各 1）

| 稀有度 | 价格（万赛尔豆） |
|---|---|
| 普通 | <span style="color:#3aa675;font-weight:600">600</span> |
| 罕见 | <span style="color:#3aa675;font-weight:600">800</span> |
| 稀有 | <span style="color:#3aa675;font-weight:600">1200</span> |
| 商店专属 | <span style="color:#3aa675;font-weight:600">1500</span> |
| 史诗 | <span style="color:#3aa675;font-weight:600">1600</span> |
| 传说 | <span style="color:#3aa675;font-weight:600">2500</span> |

## 小贴士

- **每场精英战必来，是赛尔豆的第一消费场景**：这个商店不占地图事件格，每次打完精英自动弹出——赛尔豆攒着不放的玩家会错过大量成长机会。反过来，它也让"打精英"从风险投资变成了稳定收入来源。
- **删牌服务 400 万是全游戏最便宜的稳定删牌渠道之一**：对比[！？商店？！](/events/weird_shop.md)的 50 金币删牌（金币更稀缺），这里用可再生的赛尔豆换删牌，精简牌组的成本大幅降低，几乎每次都值得买。
- **打怪服务是"商店里的商店"**：花 500 万进入一个怪物与宝藏并存的子地图，相当于用赛尔豆购买了额外的一场战斗及其全部战利品。注意在打怪子地图里再次进入精英商店时，打怪服务会自动售罄，防止无限嵌套。
- **抽奖 200 万赌的是上限**：全卡池随机三选一意味着可能出稀有卡也可能出普通卡，期望值约等于 500~600 万的直接购买价，欧皇赚非酋亏，追求稳定的玩家直接买货架上的稀有卡更划算。
- **刷新只要 20 万，货不好就大胆刷**：刷新费用远低于任何一件商品，遗物货架没有心仪货色时多刷几轮的成本可以忽略；但刷新会重置全部货架（4 张卡 + 4 项服务 + 遗物栏），已看中的商品要先买再刷。
- **史诗/传说遗物明码标价是最大亮点**：1600 万/2500 万的价格不低，但相比[泰坦之灵商店](/events/boss_shop.md)抽金蛋 0.9%/0.1% 的概率，这里是确定性地获取最高稀有度遗物的唯一渠道——赛尔豆充裕时优先清空。

## 相关机制

- [赛尔豆与泰坦之灵](/mechanics/currency.md)
- [自定义遗物稀有度](/mechanics/custom-rarity.md)（史诗/传说为 Mod 专属稀有度）

## 源码

- `SeerEliteShop.cs`
- `SeerShopEntry.cs`
