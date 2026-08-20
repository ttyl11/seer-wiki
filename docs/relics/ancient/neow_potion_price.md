# 等价坩埚

<img src="/images/relics/neow_potion_price.png" alt="等价坩埚" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 药水数量 | 2 |

## 描述

拾起时，获得<span style="color:#3aa675;font-weight:600">2</span>个随机 Seer 药水，移除牌组中<span style="color:#3aa675;font-weight:600">1</span>张随机牌。

- **药水筛选**：从所有已解锁的 Seer 药水中随机抽选，循环 2 次每次独立取 1 个——**可能抽到 2 瓶同种药水**。
- **牌组移除**：从当前牌组中完全随机取 1 张移除，**不做任何过滤**——诅咒、状态乃至[永恒](/mechanics/eternal.md)牌被抽中时同样照删不误（随机删牌不走可移除性检查）。

## 风味文字

<span style="color:#d44;font-weight:600">药水。</span>

## 小贴士

- **开局开箱的实际概率账**：Neow 奖励只能开局拿，此时被删的牌从初始 13 张牌组里随机抽——3 打击 + 3 防御 + 7 张特殊基础牌。**约 54% 概率（7/13）删到特殊基础牌**，约 46% 概率（6/13）只删到一张打击/防御。
- **7 张特殊基础牌张张有用**：[虚无](/cards/character/void_nothingness.md)（受伤攒缓冲）、[元素](/cards/character/element.md)（伤害+固伤）、[能量](/cards/character/energy.md)（伤害+先制+反伤）、[生命](/cards/character/life.md)（打牌回血）、[轮回](/cards/character/reincarnation.md)（按比例回血）、[永恒](/cards/character/eternity.md)（格挡+恢复全部 PP）、[圣洁](/cards/character/holiness.md)（格挡+清 debuff）——全是带 PP 的功能牌，删掉哪张都心疼；其中轮回和永恒（回血引擎 / 全体 PP 重置）丢了最伤。
- **运气好删到打击/防御就是纯赚**：基础打击/防御是平庸的燃料牌，2 瓶即战力药水白拿还顺手精简了牌组——这单交易最差结果也只是小亏，没有毁灭性风险。
- **2 瓶药水可能撞车**：两次抽选相互独立，可能拿到 2 瓶同种药水——效果不叠加的场合（如同名战斗药水）第二瓶价值打折，算是个隐藏折扣。
- **药水要当关键牌用**：随机 Seer 药水覆盖输出/防御/功能各类，拿到强救场药水（如 holy_blessing 类）别在杂鱼战随手喝——开局药水栏全空，2 瓶存着打精英/Boss 才是价值最大化。
- **随机结果多端一致**：药水选取和牌组移除都走同步随机源，多人模式下两端抽到的药水和被移除的牌完全一致。

## 源码

- `SeerNeowPotionPrice.cs`
