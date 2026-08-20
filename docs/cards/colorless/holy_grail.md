# 圣杯

<img src="/images/cards/holy_grail.png" alt="圣杯" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 无
- **可升级**: 否
- **关键词**: [<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)

## 描述

抽到此牌时生成1个圣杯充能球。打出时获得<span style="color:#3aa675;font-weight:600">2</span>个[<span style="color:#d4a017;font-weight:600">充能球栏位</span>](/mechanics/orb.md)并随机生成<span style="color:#3aa675;font-weight:600">2</span>个[<span style="color:#d4a017;font-weight:600">充能球</span>](/mechanics/orb.md)。[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)。

## 小贴士

- **🔑 一牌三吃：抽到白嫖、打出扩容、随机爆球**：①抽到此牌的瞬间免费引导 <span style="color:#3aa675;font-weight:600">1</span> 个圣杯充能球（不打也有收益）；②打出后永久 +<span style="color:#3aa675;font-weight:600">2</span> 个[充能球栏位](/mechanics/orb.md)（本场战斗的上限扩容，充能球体系的基础设施）；③再随机引导 <span style="color:#3aa675;font-weight:600">2</span> 个充能球即刻投产。
- **[圣杯球](/orbs/holy_grail_orb.md)是治疗经济球**：被动每 <span style="color:#3aa675;font-weight:600">2</span> 个回合回 <span style="color:#3aa675;font-weight:600">5</span> 血（受[集中](/powers/focus_power.md)加成）；激发时回复**已损生命**的 <span style="color:#3aa675;font-weight:600">10</span>% + 每层集中额外 <span style="color:#3aa675;font-weight:600">5</span>%——残血时激发一枚 = 大口奶，高集中构筑里单球回血上千。
- **随机球池极大：原版全部 + 10 种 mod 球**：随机范围是原版所有充能球外加玻璃、圣杯、PP、火山、海洋、森林、塔、星、Oracle 等 mod 球——可能开出核心输出球也可能开出功能球，期望稳定但上限看脸；栏位扩容的价值不受随机影响，才是这张牌的保底收益。
- **栏位扩容对充能球构筑是质变**：+2 栏位 = 同屏多 2 球的被动产出与激发储备——依赖充能球循环的构筑（引导/激发/球转牌体系）几乎必拿，1 费换永久基础设施。
- **[消耗](/mechanics/exhaust.md)一次性 + 不可升级**：打出即离场，收益全部在当次结算；没有升级形态，拿到就用不亏。
- **抽到即触发，别急着打**：抽到瞬间圣杯球已入栏——可以选择先挂着，等你需要那 2 个随机球/2 格栏位的时机再打（例如激发链就绪、或空栏位较多时打出避免溢出）。

## 相关机制

- [充能球](/mechanics/orb.md)（栏位扩容与随机引导）
- [消耗](/mechanics/exhaust.md)（打出后离场）

## 源码

- `SeerHolyGrail.cs`
