# 七宗罪的试炼

硫磺与旧书卷的味道中，七座形态各异的神秘精灵环绕着你，眼中闪烁着贪婪、傲慢与嫉妒的光芒。来自灵魂深处的声音提出了无法拒绝的交易："拥抱罪孽，换取力量。"

<a href="/events/">← 返回事件图鉴</a>

<img src="/images/events/seer_seven_sins_trial.png" alt="七宗罪的试炼" style="max-width:360px;width:100%;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：功能事件
- **战斗**：否
- **机制**：三个选项都要求你吞下七宗罪诅咒作为代价，罪的类型随机（暴怒/懒惰/傲慢/贪婪/暴食/嫉妒/色欲七选一）

## 选项一览

| 选项 | 代价 | 收益 |
|---|---|---|
| 净化 | 随机 <span style="color:#3aa675;font-weight:600">1</span> 个七宗罪诅咒 | 指定移除最多 <span style="color:#3aa675;font-weight:600">2</span> 张牌 |
| 精进 | 随机 <span style="color:#3aa675;font-weight:600">2</span> 个七宗罪诅咒 | 指定升级最多 <span style="color:#3aa675;font-weight:600">5</span> 张牌 |
| 攫取 | 随机 <span style="color:#3aa675;font-weight:600">3</span> 个七宗罪诅咒 | 获得 <span style="color:#3aa675;font-weight:600">1</span> 件普通 + <span style="color:#3aa675;font-weight:600">1</span> 件罕见 + <span style="color:#3aa675;font-weight:600">1</span> 件稀有遗物 |

## 小贴士

- **七宗罪诅咒不可小觑**：[七宗罪](/cards/curse/)是七张各有负面效果的诅咒牌（[暴怒](/cards/curse/wrath.md)、[懒惰](/cards/curse/sloth.md)、[傲慢](/cards/curse/pride.md)、[贪婪](/cards/curse/greed.md)、[暴食](/cards/curse/gluttony.md)、[嫉妒](/cards/curse/envy.md)、[色欲](/cards/curse/lust.md)），会永久留在牌组里堵塞抽牌。三个选项的本质都是"用牌组纯度换即时资源"。抽取时**不放回**——同一选项拿到的多个罪互不重复（攫取的 3 罪必然是三种不同的罪）。
- **净化：1 罪换 2 删，兑换比最优**：删牌是全 mod 最稀缺的服务之一，用 <span style="color:#3aa675;font-weight:600">1</span> 张诅咒换 <span style="color:#3aa675;font-weight:600">2</span> 张指定移除——等于"牌组净减 1 张还顺手清了两张废牌"。没有特殊需求时的默认选项。
- **精进：2 罪换 5 升级，锻造车间**：一次指定升级 <span style="color:#3aa675;font-weight:600">5</span> 张，成型期牌组（核心牌明确）的收益极高；代价是牌组纯度下降更多。
- **攫取：3 罪换 3 遗物，资源爆炸但风险最大**：三件不同稀有度的遗物一次性到手，即时战力提升可观；但 <span style="color:#3aa675;font-weight:600">3</span> 张诅咒会在长跑局里持续恶心你。除非有诅咒消化手段（删牌服务、诅咒流构筑），否则慎选。
- **诅咒流的盛宴**：如果牌组围绕诅咒构筑（吃诅咒数量加成的卡/遗物），这里的"代价"直接变成燃料——攫取一口气白拿三件遗物。
- **性价比排序（通用场景）**：净化 ≥ 精进 > 攫取。牌组越臃肿、删牌需求越迫切，净化的价值越高；牌组已精简且核心牌未升级 → 精进。

## 源码

- `SeerSevenSinsTrial.cs`
