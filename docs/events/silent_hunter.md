# 静默猎手（职业导师）

穿过被暗影笼罩的林地时，后腰突然被什么又尖又冷的东西抵住了。一个影子贴在你身后——你甚至没听到她靠近的声音。

<a href="/events/">← 返回事件图鉴</a>

<img src="/images/events/seer_silent_hunter.png" alt="静默猎手（职业导师）" style="max-width:360px;width:100%;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：职业导师事件
- **战斗**：否
- **卡池主题**：[奇巧](/mechanics/sly.md)、丢弃、小刀、中毒相关的静默猎手卡牌

## 选项一览

| 选项 | 代价 | 收益 |
|---|---|---|
| 询问猎杀技艺 | — | 从所有奇巧/丢弃/小刀/中毒相关的静默猎手卡牌中最多选 <span style="color:#3aa675;font-weight:600">5</span> 张 |
| 观察她的装备 | — | 获得原版遗物「手里剑」和「苦无」 |
| 请她帮你精简牌组 | — | 移除 <span style="color:#3aa675;font-weight:600">2</span> 张牌 |

## 小贴士

- **奇巧与丢弃是一对**：[奇巧](/mechanics/sly.md)是原版关键词——回合中被弃牌效果从手牌丢弃时免费打出（回合结束的正常弃牌不触发）。它与"丢弃"主题天然联动：弃牌引擎转得越快，奇巧牌白嫖得越多，选卡时优先把这两类一起抓。
- **中毒/小刀是慢热引擎**：中毒流（叠加 DoT）和小刀流（高频低费攻击）都需要组件密度，<span style="color:#3aa675;font-weight:600">5</span> 张的选牌量足以把"雏形"补成"成型"。注意 DoT 伤害与[固定伤害](/mechanics/fixed-damage.md)是不同体系，别混算。
- **装备双件套偏攻击频率**：手里剑（每打出 <span style="color:#3aa675;font-weight:600">3</span> 张攻击牌获得 <span style="color:#3aa675;font-weight:600">1</span> 层[力量](/mechanics/all_attributes.md)）+ 苦无（同机制，给[敏捷](/mechanics/all_attributes.md)）。计数按回合重置、可连续触发——一回合打出 6 张攻击牌就是力量敏捷各 +2。如果你选了小刀流卡牌，顺手拿装备能形成闭环；不靠攻击牌堆输出的流派则收益平平。
- **精简牌组永不过时**：静默猎手的卡偏功能件，塞太多容易卡手。拿卡和删牌其实是一体两面——先想好要 <span style="color:#3aa675;font-weight:600">5</span> 张里的哪几张，还是先用删牌额度给牌组腾位置。

## 源码

- `SeerSilentHunter.cs`
