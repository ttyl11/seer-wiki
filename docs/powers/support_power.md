# 支援

<img src="/images/powers/support_power.png" alt="支援" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无（不属于增益/减益，不可被清除）
- **叠加方式**: 计数器叠加
- **可见**: 是

## 数值参数

| 参数 | 数值 | 翻倍后 |
|---|---|---|
| 暴击额外乘数 | ×1.5 | ×3 |
| 击杀恢复生命 | 5 | 10 |
| 受异常获得格挡 | 7 | 14 |
| 低伤阈值（攻击伤害） | 5 | 5 |
| 无效化意图数 | 1 | 2 |
| 触发获得命运晨星 | 1（上限 5） | 1 |
| 触发获得支援庇护 | 2 | 2 |

## 描述

满足任一条件时触发支援，每次触发消耗 <span style="color:#3aa675;font-weight:600">1</span> 层：<br/>暴击时：本次伤害再×<span style="color:#3aa675;font-weight:600">1.5</span>。<br/>击杀敌人时：恢复 <span style="color:#3aa675;font-weight:600">5</span> 生命。<br/>受到[<span style="color:#d4a017;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)时：获得 <span style="color:#3aa675;font-weight:600">7</span> 点格挡。<br/>攻击牌伤害低于 <span style="color:#3aa675;font-weight:600">5</span> 时：附加等同牌面伤害的[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。<br/>回合开始时有敌人携带连击[<span style="color:#d4a017;font-weight:600">意图</span>](/mechanics/intent.md)：随机无效化该敌人 <span style="color:#3aa675;font-weight:600">1</span> 个意图。<br/>每次支援成功：获得 <span style="color:#3aa675;font-weight:600">1</span> 层[<span style="color:#9b59b6;font-weight:600">命运晨星</span>](/powers/fate_morning_star_power.md)和 <span style="color:#3aa675;font-weight:600">2</span> 层[<span style="color:#9b59b6;font-weight:600">支援庇护</span>](/powers/support_immune_count_power.md)。

## 详细机制

- **五种触发条件**（天命之耀·暴击 / 终命之璨·击杀 / 宿命之佑·受异常 / 逆命之曙·低伤 / 星命之愿·连击意图）：任意一条满足即触发一次支援，触发后消耗 1 层。**没有每场一次的限制**——同一个条件可以反复触发，只要支援层数还有剩余。
- **天命之耀（暴击）**：自身攻击[暴击](/powers/critical_strike_power.md)时，本次伤害在暴击 ×1.5 的基础上**再 ×1.5**（合计 ×2.25）。翻倍状态下再 ×3（合计 ×4.5）。只对攻击伤害生效，固定伤害等非攻击伤害暴击不受加成。
- **终命之璨（击杀）**：每击杀一个敌方单位恢复 5 生命（翻倍 10）。**按击杀数逐个结算**——群体攻击一次清掉 3 个敌人就是 3 次独立触发（回 3 次血、消耗 3 层支援），AoE 清场是烧支援层数最快的方式。
- **宿命之佑（受异常）**：自身受到[异常状态](/mechanics/abnormal-status.md)实际施加后，获得 7 点格挡（翻倍 14）。被[支援庇护](/powers/support_immune_count_power.md)免疫掉的异常**不算受到**，不会触发本条件。
- **逆命之曙（低伤）**：自身打出的攻击牌对某个目标**实际造成的伤害低于 5**（含 0 伤、被格挡、被闪避）时，对目标附加等同这张牌**牌面伤害数值**的[固定伤害](/powers/fixed_damage_power.md)（翻倍 ×2）。牌面伤害取当前牌面显示值（含升级加成），与实际打出的伤害无关——0 伤命中照样按牌面全额附加。
- **星命之愿（连击意图）**：自己回合开始时（敌人新意图已生成、你尚未出牌的时点），若场上有敌人携带连击意图，随机选其中一个敌人，随机无效化其 1 个意图（翻倍 2 个）。连击意图的判定口径是**多段攻击（段数 > 1）**——无论是原版怪的多段攻击还是带自定义技能名的连击技（如提亚斯"螺旋烈风"、钢颚鲨"火箭头槌"）都算。无效化的意图不限于连击意图本身——是该敌人的意图中随机一个。
- **支援成功的固定收尾**：每次触发（无论哪个条件）都会执行：支援 -1 → 消耗 1 层[支援效果翻倍](/powers/support_double_power.md)（若有）→ 获得 1 层[命运晨星](/powers/fate_morning_star_power.md)（上限 5 层）→ 获得 2 层[支援庇护](/powers/support_immune_count_power.md)。
- **判定顺序按"每个受击目标"独立进行**：暴击 → 击杀 → 低伤，对单个目标命中哪个就结算哪个并结束（一次暴击同时击杀了该目标，按暴击结算，击杀条件不再对同一目标重复触发）。但**群体攻击的每个受击目标各自判定**——AoE 暴击命中 3 个敌人可触发 3 次支援；多段攻击的每段命中也各自判定。
- **层数耗尽即沉默**：支援为 0 层时所有条件全部休眠，直到再次获得层数（[终末·赫星黎明（技能）](/cards/character/final_star_dawn_skill.md)或其它补层手段）。

## 相关遗物

- [奥菲利娅](/relics/legendary/ophelia.md)（每场战斗开始时获得 5 层）

## 相关卡牌

- [终末·赫星黎明（技能）](/cards/character/final_star_dawn_skill.md)（无支援时获得 3 层）
- [终末·赫星黎明（攻击）](/cards/token/final_star_dawn_attack.md)（获得 3 层支援 + 施加 3 次翻倍）

## 源码

- `SeerSupportPower.cs`
