# 涅奥的猩红牌盒

<img src="/images/relics/neow_blood_tarot.png" alt="涅奥的猩红牌盒" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 塔罗数量 | 2 |

## 描述

拾起时，获得<span style="color:#3aa675;font-weight:600">2</span>个随机<span style="color:#d4a017;font-weight:600">塔罗遗物</span>。

- **塔罗池**：全套 22 张大阿卡纳（愚者到世界）全部在池内，洗牌后取前 2 张——同一次拾起抽到的 2 张必定不重复。
- **逐张入栏**：抽到的塔罗逐张走正常获得流程加入遗物栏，占用遗物位、效果各自独立生效。

## 风味文字

<span style="color:#d44;font-weight:600">塔罗。</span>

## 小贴士

- **22 选 2 的塔罗抽奖**：塔罗遗物是 Seer 的特色内容——22 张全部注册在共享遗物池（普通稀有度），常规奖励也会自然掉落，但一件一件攒很慢。牌盒一次直接入手 2 张，等于把两次常规塔罗掉落的运气打包兑现，先古稀有度的定价主要就贵在这里。
- **同一次抽到的两张必不重复**：抽选方式是把 22 张塔罗整体洗牌后取前 2 张，不存在"一次抽到俩同名"的情况。
- **抽到愚者会滚成 4 张**：牌盒的池子里包含[愚者](/relics/common/tarot_fool.md)，而愚者入手时自己还会再给 2 张随机塔罗（从除愚者外的 21 张里**优先挑你没有的**）。一次拾起抽到愚者（概率 2/22 ≈ 9%），最终到手 4 件塔罗——愚者 + 愚者附赠的 2 张 + 牌盒自己抽的第二张。
- **不避开你已有的塔罗**：牌盒抽选不检查你当前拥有什么——如果事先从常规掉落里拿到过某张塔罗，再抽到同名就是两件并存、效果各自独立触发。对比之下，愚者附赠塔罗时会优先避开你已拥有的那张。
- **随机结果多端一致**：洗牌走的是同步随机源，多人模式下两端抽到的塔罗完全相同，不会出现分歧。
- **22 张塔罗效果速览**（按功能分组）：
  - **数值增益**：[教皇](/relics/common/tarot_hierophant.md)（高血量攻击增伤）、[战车](/relics/common/tarot_chariot.md)（连打攻击牌伤害递增）、[力量](/relics/common/tarot_strength.md)（战斗开始获得仪式）、[正义](/relics/common/tarot_justice.md)（损血换增伤/减伤）、[女皇](/relics/common/tarot_empress.md)（每回合首次造成伤害后回血+格挡）、[皇帝](/relics/common/tarot_emperor.md)（高血量时单次受伤封顶）。
  - **充能球供给**：[星星](/relics/common/tarot_star.md)（每 2 回合获得神谕球）、[高塔](/relics/common/tarot_tower.md)（每 2 回合获得高塔球）、[恋人](/relics/common/tarot_lovers.md)（回合结束按剩余手牌奇偶触发烧伤/冻伤或随机充能球）。
  - **出牌行为联动**：[月亮](/relics/common/tarot_moon.md)（连打同类型牌触发随机伤害）、[节制](/relics/common/tarot_temperance.md)（回合开始从消耗堆回收 1 张牌、PP 牌回满）、[死神](/relics/common/tarot_death.md)（回合结束按剩余手牌数给全体敌人灾厄）、[倒吊人](/relics/common/tarot_hanged_man.md)（自伤换必定暴击+造成伤害吸血）、[隐者](/relics/common/tarot_hermit.md)（空过回合换双方无实体）、[命运之轮](/relics/common/tarot_wheel_of_fortune.md)（回合结束对全体敌人随机伤害）。
  - **压制 / 反制敌方**：[女祭司](/relics/common/tarot_high_priestess.md)（将冻伤敌人的意图替换为无效化）、[魔术师](/relics/common/tarot_magician.md)（异常状态敌人全属性削减）、[审判](/relics/common/tarot_judgement.md)（按自身有无异常状态吸取全属性或上异常）、[太阳](/relics/common/tarot_sun.md)（自身属性被移除时反制全体敌人）、[恶魔](/relics/common/tarot_devil.md)（伤害达标无效化敌方攻击意图）、[世界](/relics/common/tarot_world.md)（濒死时随机无效 1 个敌人意图）、[愚者](/relics/common/tarot_fool.md)（入手再附赠 2 张塔罗）。
- **性价比**：2 张随机塔罗的期望价值高于常规先古遗物——大部分塔罗是无条件增益，抽到愚者、恋人、死神这类体系牌更是直接补强构筑方向；但也有少数带代价的（[倒吊人](/relics/common/tarot_hanged_man.md)每回合自伤、[隐者](/relics/common/tarot_hermit.md)要空过回合才有收益），脸黑时会拿到不契合牌组的组合。缺点是结果不可控，无法按牌组需求定向补强。

## 源码

- `SeerNeowBloodTarot.cs`
