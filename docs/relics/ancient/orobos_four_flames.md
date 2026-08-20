# 四象琉璃盏

<img src="/images/relics/orobos_four_flames.png" alt="四象琉璃盏" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

## 描述

每场战斗开始时，获得<span style="color:#9b59b6;font-weight:600">[金火](/powers/gold_fire_power.md)</span>、<span style="color:#9b59b6;font-weight:600">[蓝火](/powers/blue_fire_power.md)</span>、<span style="color:#9b59b6;font-weight:600">[绿火](/powers/green_fire_power.md)</span>、<span style="color:#9b59b6;font-weight:600">[紫火](/powers/purple_fire_power.md)</span>各 1 层。

- **触发时机**：战斗开始前自动施加，整场战斗持续。
- **金火与紫火是全场光环**：两者不看伤害归属——只要场上有金火存在，**任何**攻击伤害（不管谁打谁）都 ×<span style="color:#3aa675;font-weight:600">0.75</span>；紫火同理让一切攻击伤害 ×<span style="color:#3aa675;font-weight:600">1.25</span>。
- **蓝火**：己方回合结束时恢复 <span style="color:#3aa675;font-weight:600">2</span> 点体力（敌方回合结束不触发）。
- **绿火**：每 3 个己方回合开始时，[力量](/powers/strength_power.md)、[命中](/powers/accuracy_power.md)、[防御](/powers/defense_power.md)、[速度](/powers/speed_power.md)各 +<span style="color:#3aa675;font-weight:600">1</span>。

## 风味文字

<span style="color:#d44;font-weight:600">四火之力。</span>

## 小贴士

- **金紫火互叠后是"全局攻击降速 6.25%"**：金火 ×<span style="color:#3aa675;font-weight:600">0.75</span> 与紫火 ×<span style="color:#3aa675;font-weight:600">1.25</span> 同时生效，一切攻击伤害统一 ×<span style="color:#3aa675;font-weight:600">0.9375</span>——你打敌人 -6.25%，敌人打你也 -6.25%。单看这一对是中性效果，真正的价值在于**放缓攻击互换节奏**：你有蓝火每回合回 2 血、绿火每 3 回合属性成长，战斗拖得越久你的"时间收益"越厚，而多数敌人的输出是固定曲线——全局降速实质是偏防御方的慢胜利。
- **金紫火只管攻击伤害**：灼烧、中毒、[固定伤害](/powers/fixed_damage_power.md)等非攻击伤害**完全不受金紫火影响**（既不被金火减免、也不被紫火放大）。敌方是 DoT 输出型时金火的减伤形同虚设——此时场上只剩蓝火回血和绿火成长在干活。
- **金紫火不叠加层数收益**：遗物只给各 1 层；金火紫火也不随层数变强（减伤/增伤百分比固定 25%），多层的意义仅在于对抗消层效果。四火全部整场持续、不衰减，是"挂机型"被动。
- **绿火四属性的实际含金量**：[力量](/powers/strength_power.md) +1（攻击伤害 +1）和[防御](/powers/defense_power.md) +1（受到的攻击伤害 -1）是直接数值；[速度](/powers/speed_power.md)每 2 层才多抽 1 张（绿火每 3 回合 +1 层，需 6 回合凑满 2 层）；[命中](/powers/accuracy_power.md)正层数无直接收益，价值在抵消失明等负命中（每负 1 层攻击有 5% 概率 Miss）。长战斗里绿火是最肥的一条线——15 回合 Boss 战累计 5 次结算 = 力量/防御各 +5。
- **蓝火按"己方回合"结算**：敌方回合结束不回血，单回合收益就是稳定的 +2——10 回合战斗白嫖 20 点生命，配合金火的全局减攻，等效续航相当可观。
- **四火全为 Buff 类型**：可以被消 buff 类敌方效果清除，但开局自动获得意味着下场战斗照常重置——单场内被清了就是纯亏，遇到会清 buff 的敌人注意节奏。

## 源码

- `SeerOrobosFourFlames.cs`
