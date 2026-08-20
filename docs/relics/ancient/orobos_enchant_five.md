# 淬灵五芒石

<img src="/images/relics/orobos_enchant_five.png" alt="淬灵五芒石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 附魔数量 | 5 |

## 描述

拾起时，为牌组中至多<span style="color:#3aa675;font-weight:600">5</span>张未附魔的卡牌附加随机Seer<span style="color:#9b59b6;font-weight:600">[附魔](/mechanics/enchantment.md)</span>。

- **目标筛选**：收集牌组中所有未附魔的卡（含诅咒/状态牌），按牌组顺序取前 <span style="color:#3aa675;font-weight:600">5</span> 张逐张处理。
- **名额先占后判**：5 个名额按顺序取满后才逐张判定可附魔性——诅咒/状态/任务牌**占名额但附不上魔**（所有 Seer 附魔只认攻击/技能/能力牌），牌组不干净时实际附魔数可能不足 5 张。
- **附魔池来源**：从 Seer 全部 <span style="color:#3aa675;font-weight:600">30</span> 种[附魔](/mechanics/enchantment.md)中随机分配——22 种状态宝石 + 冷却时间、星皇之怒、永耀、五音系列（仐囙乂册卩）8 种特殊附魔；注能不在池内。
- **附魔等级**：一律 1 级（状态宝石 = 打出时施加 3 回合对应异常状态）。

## 风味文字

<span style="color:#d44;font-weight:600">附魔五连。</span>

## 小贴士

- **5 个免费附魔槽是实打实的牌质强化**：附魔服务在局内属于稀缺资源，这个遗物拾起瞬间直接给 5 张牌各白送一个附魔，等于把开局牌组的数值和功能性同时拉高一档。对比[拣选者手札](/relics/ancient/orobos_card_pool.md)（15 选 5 加新牌），它是强化现有牌而非扩充牌组，两个方向互补。
- **七成概率是状态宝石**：附魔池 30 种里 22 种是状态宝石——打出时对目标施加 3 回合异常（[灼烧](/powers/burn_power.md)、[中毒](/powers/poison_power.md)、[麻痹](/powers/paralysis_power.md)等），期望上大概率抽到的是"白送异常附加值"的稳健型附魔；冷却时间、[星皇之怒](/enchantments/star_emperor_wrath.md)、[永耀](/enchantments/eternal_radiance_enchantment.md)、五音系列这类特殊附魔合计只有 8/30，抽到属于赚。
- **狂暴/超频宝石是对自身施加的**：[狂暴宝石](/enchantments/fury_gem.md)和[超频宝石](/enchantments/overclock_gem.md)是唯二施加给自身的宝石——狂暴每层攻击伤害 +25%，附在核心输出牌上等于免费的爆发增幅。
- **卩是彩蛋级成长**：五音附魔[卩](/enchantments/five_tone_seal.md)以此牌击败对手后永久 +10% 攻击伤害、-5% 受伤（可叠加）——随机附到高伤攻击牌上时，长线局能滚成显著加成，代价是每次触发最大生命 -20。
- **诅咒牌会吃名额**：名额按牌组顺序取满 5 张后才逐张判定——若前 5 张未附魔卡里混着诅咒/状态牌，它们附不上任何魔却已占用名额，实际附魔数缩水。拾起前牌组越干净（无诅咒/状态牌），5 连附魔越足额。
- **纯随机不可控**：每张卡附什么全凭运气——可能给核心输出牌配上[狂暴宝石](/enchantments/fury_gem.md)起飞，也可能把成长型的[卩](/enchantments/five_tone_seal.md)附在低伤害功能性牌上难以触发击杀。没有选择权是这个遗物相对商店/事件附魔服务的唯一折扣。
- **随机结果多端一致**：抽选走同步随机源，多人模式下两端看到的附魔分配完全相同。

## 源码

- `SeerOrobosEnchantFive.cs`
