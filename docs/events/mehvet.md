# 梅赫维特

被永恒日光笼罩的殿堂，光芒的源头是端坐于穹顶之下的涅达洛太阳神、万民之母——梅赫维特。"我的合奏，需要你的共鸣。"

<a href="/events/">← 返回事件图鉴</a>

<img src="/images/events/seer_mehvet.png" alt="梅赫维特" style="max-width:360px;width:100%;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：剧情抉择事件
- **战斗**：是（可选）
- **机制**：试炼战斗失败不会死亡，只会拿不到遗物

## 选项一览

| 选项 | 代价 | 收益 |
|---|---|---|
| 接受合奏 | — | 获得能力牌[合奏·常昼大诰](/cards/character/ensemble_eternal_edict.md) |
| 请求光之赐福 | — | 为 <span style="color:#3aa675;font-weight:600">2</span> 张牌附魔[永耀](/enchantments/eternal_radiance_enchantment.md) |
| 接受试炼 | 一场试炼史莱姆战斗（战败回复 <span style="color:#3aa675;font-weight:600">15</span> 点生命） | 胜利获得梅赫维特专属遗物（[梅赫维特](/relics/legendary/mehrwert.md)） |

## 小贴士

- **合奏线：白拿一张高稀有能力牌**：[合奏·常昼大诰](/cards/character/ensemble_eternal_edict.md)是角色专属能力牌，零风险直接入手，缺核心能力牌时优先考虑。
- **赐福线：两张牌变身"0 费保留牌"**：[永耀](/enchantments/eternal_radiance_enchantment.md)附魔让卡牌**耗能降为 0**并获得[保留](/mechanics/retain.md)（留手不弃），代价是所有永耀牌**每回合只能打出一张**。指定 <span style="color:#3aa675;font-weight:600">2</span> 张未附魔的牌——把永耀打在高费核心牌上收益最大（5 费变 0 费等于每回合白赚 5 能量），是三选一里构筑上限最高的选项。
- **试炼线：唯一的战斗选项，也是唯一的失败保护**：对手是一只试炼史莱姆，赢了拿传说级专属遗物；**战败（HP 归 0）不掉命、不结束跑局**——太阳神会把你救回并回复 <span style="color:#3aa675;font-weight:600">15</span> 点生命放你离开（注意是回复 15 点而非保留原血量，满血局打输反而亏）；史莱姆提前逃跑则无奖励无惩罚。等于"免费抽一次奖"，只是赢了才有大奖。
- **试炼是本事件的隐藏默认解**：因为失败代价几乎为零，只要血量允许，先打试炼永远是值得的——最差也就是白打一场拿 <span style="color:#3aa675;font-weight:600">15</span> 点回复。
- **注意试炼奖励是一次性的**：胜利后事件结束，另外两个选项（合奏/赐福）本轮将无法再选；三个选项只能拿一个，按牌组需求排序：缺能力牌 → 合奏；高费核心牌多 → 赐福；想要传说遗物或白嫖回复 → 试炼。

## 源码

- `SeerMehvet.cs`
