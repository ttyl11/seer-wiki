# 超算鲁比克

<img src="/images/relics/rubik_supercomputer.png" alt="超算鲁比克" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 稀有

### 数值参数

| 参数 | 数值 |
|---|---|
| 机器学习层数 | 1 |
| 基准卡牌数 | 4 |

## 描述

①在每场战斗开始时，检索整个牌组中所有拥有<span style="color:#d4a017;font-weight:600">[PP](/mechanics/pp-system.md)</span>值的卡牌。<br/>②若不足<span style="color:#3aa675;font-weight:600">4</span>张，获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#9b59b6;font-weight:600">[机器学习](/powers/machine_learning_power.md)</span>。<br/>③若≥<span style="color:#3aa675;font-weight:600">4</span>张：选取<span style="color:#3aa675;font-weight:600">4</span>张<span style="color:#d4a017;font-weight:600">PP牌</span>为基准（优先不同PP值），以(MaxPp-1)构成2×2矩阵计算秩：<br/>秩为0：获得<span style="color:#9b59b6;font-weight:600">[异常免疫（永久）](/powers/permanent_debuff_immune_power.md)</span>+<span style="color:#9b59b6;font-weight:600">[虚空形态](/powers/void_form_power.md)</span>；秩为1：<span style="color:#9b59b6;font-weight:600">[群蛇形态](/powers/serpent_form_power.md)</span>；秩为2：<span style="color:#9b59b6;font-weight:600">[恶魔形态](/powers/demon_form_power.md)</span>。<br/>④第一回合只抽选取的<span style="color:#3aa675;font-weight:600">4</span>张<span style="color:#d4a017;font-weight:600">PP牌</span>（不足则有几张抽几张）。

- **基准选取**：优先选不同PP值的牌，不足随机补齐至4张。
- **矩阵秩计算**：取4张牌的最大PP减1构成2×2矩阵，全零→秩0；行列式为零→秩1；否则秩2。
- **首回合抽牌**：第一回合不抽常规5张，改为把选取的PP牌加入手牌。

## 风味文字

<span style="color:#d44;font-weight:600">矩阵归一。</span>

## 小贴士

- **PP牌矩阵决定开局形态**：战斗开始检索全牌组PP牌，选4张按(MaxPp-1)构成2×2矩阵算秩。秩0给永久异常免疫+虚空形态，秩1给群蛇形态，秩2给恶魔形态。PP牌的PP值分布直接决定你拿到什么形态。
- **PP牌不足4张走机器学习**：牌组PP牌不到4张时不计算矩阵，改给1层机器学习。PP牌少的牌组走机器学习路线。
- **第一回合只抽PP牌**：第一回合不抽常规5张，而是把选中的4张PP牌加入手牌。开局直接拿到PP牌，节奏可控但手牌少。
- **矩阵秩怎么算**：4张牌的(MaxPp-1)排成2×2矩阵，全零（4张都是1PP）→秩0，行列式为零→秩1，否则→秩2。想要特定形态得控制PP牌的PP值分布。
- **性价比**：稀有稀有度合理——开局形态+定向抽牌是强力启动，强度看PP牌配置。

## 源码

- `SeerRubikSupercomputer.cs`
