# ！？商店？！

坐落于乡村的破旧茅草房，闪着刺眼的乱码招牌。戴着墨镜、身形像史莱姆一样不稳定的店主热情招手："瞧一瞧看一看了啊，全是尖塔里见不着的好东西！"

<a href="/events/">← 返回事件图鉴</a>

<img src="/images/events/seer_weird_shop.png" alt="！？商店？！" style="max-width:360px;width:100%;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：功能事件（一次性商店）
- **战斗**：否
- **机制**：三个商品**只能买一件**，交易（或钱货不足）后摊位立刻消失

## 商品一览

| 商品 | 价格 | 内容 |
|---|---|---|
| 老板的珍藏 | <span style="color:#3aa675;font-weight:600">200</span> 金币 | 从**未拥有**的赛尔商店遗物中随机获得 <span style="color:#3aa675;font-weight:600">1</span> 件 |
| 无色能量包 | <span style="color:#3aa675;font-weight:600">100</span> 金币 | 从 <span style="color:#3aa675;font-weight:600">5</span> 张随机无色卡中**至多选 2 张** |
| "清洁"服务 | <span style="color:#3aa675;font-weight:600">50</span> 金币 | 移除 <span style="color:#3aa675;font-weight:600">1</span> 张牌 |

## 小贴士

- **只能买一件，买不起也别乱点**：每个选项的终点都是"摊位消失"——包括钱不够的时候。金币不足时点了任何一件，只会弹出"钱不够"的提示然后**事件直接结束**，另外两件也买不成了。掏钱（或点选项）之前先想清楚要哪件。
- **先扣钱、后选牌，两个选牌服务都是**：<span style="color:#3aa675;font-weight:600">50</span> 金/<span style="color:#3aa675;font-weight:600">100</span> 金在选择界面弹出**之前**就已扣除。删牌界面虽然可以取消——但取消不退钱（50 金打水漂、一张没删）；无色包最多选 2 张、最少可以 0 张——空手点确认等于 100 金白送，至少挑 1 张回本。
- **"清洁"服务是全场最便宜的删牌，还不推价**：常规商店首次删牌 <span style="color:#3aa675;font-weight:600">75</span> 金（进阶通胀 <span style="color:#3aa675;font-weight:600">100</span>），之后每删一次涨价 <span style="color:#3aa675;font-weight:600">25</span> 金（通胀 <span style="color:#3aa675;font-weight:600">50</span>）；这里固定 <span style="color:#3aa675;font-weight:600">50</span> 金，而且**不走商店删牌计数**——用过之后常规商店的删牌价一分不涨。牌组有明确要清的废牌/诅咒时，这是全事件确定性最高的购买。
- **老板的珍藏不重复、但纯随机**：只从你**还没拥有**的赛尔商店遗物（`SEER_` 前缀、商店稀有度）里随机抽 1 件——已拥有的不会再出，但出什么全看脸。金币充裕且想要遗物加成时可赌；追求确定性则优先选另外两件。商店遗物已集齐时点它不扣钱、白看一条"没货"提示（事件也就此结束）。
- **无色能量包 = 五选二抽卡**：随机 5 张无色卡里挑 2 张（均匀概率，多端一致）。无色池里有[千里击涛](/cards/colorless/thousand_miles_wave.md)、[圣杯](/cards/colorless/holy_grail.md)等高强度卡，也有凑数牌——期望收益中等偏上，缺补强卡时值得开。
- **多人模式有门槛**：本事件只在**全员**金币 ≥ <span style="color:#3aa675;font-weight:600">50</span> 时出现——队友破产时你们整队都遇不到这位乱码店主。
- **决策树**：牌组有废牌 → 清洁服务（全场最低价删牌+不推价）；缺补强卡 → 无色能量包；啥都缺、金币多 → 珍藏抽奖。

## 源码

- `SeerWeirdShop.cs`
