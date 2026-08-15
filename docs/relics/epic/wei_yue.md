# 卫岳

<img src="/images/relics/wei_yue.png" alt="卫岳" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 史诗（自定义稀有度）

## 描述

①回合开始时，[力量](/powers/strength_power.md)与[防御](/powers/defense_power.md)较低的一项提高到较高的一项。<br/>提升力量则开启<span style="color:#9b59b6;font-weight:600">[拥君之盾](/powers/sovereign_shield_power.md)</span>，提升防御则开启<span style="color:#9b59b6;font-weight:600">[绝缘之罩](/powers/insulation_cover_power.md)</span>。<br/>②首次回合结束两者均开启时，向[手牌](/mechanics/hand.md)加入<span style="color:#d4a017;font-weight:600">[岳·命寻星叹](/cards/event/yue_fate_star_sigh.md)</span>（每场战斗限一次）。

- **对齐规则**：回合开始时比较力量与防御，较低的一项提升到较高项。力量较低则补力量并开启[拥君之盾](/powers/sovereign_shield_power.md)，防御较低则补防御并开启[绝缘之罩](/powers/insulation_cover_power.md)，两者相等时不操作。
- **每场限一次**：每场战斗首次满足"两者均开启"条件时向[手牌](/mechanics/hand.md)加入[岳·命寻星叹](/cards/event/yue_fate_star_sigh.md)，战斗结束后重置。

## 风味文字

<span style="color:#d44;font-weight:600">卫岳。</span>

## 小贴士

- **回合开始力量防御对齐**：力量与防御较低的一项提升到较高项，相当于白嫖差额。力量低则补力量并开启[拥君之盾](/powers/sovereign_shield_power.md)，防御低则补防御并开启[绝缘之罩](/powers/insulation_cover_power.md)，两者相等时不操作。
- **拥君之盾：输出+承伤**：开启时获得6层[覆甲](/powers/plating_power.md)，持有时免疫[臣服](/powers/subjugation_power.md)、造成伤害+25%。适合力量流输出型卡组，臣服免疫对抗控制型敌人。
- **绝缘之罩：续航+非攻击伤害**：开启时获得5层再生，持有时免疫[瘫痪](/powers/paralysis_power.md)、造成非攻击伤害+50%。适合烧伤、中毒等非攻击伤害流派。
- **双开需要外部波动**：每回合只补较低的一项，补完后两者相等，下回合若仍相等则不操作。想要双开需要外部力量/防御变化（如受击掉防御、其他效果加力量）让两者再次拉开差距。
- **双开触发岳·命寻星叹**：两者均开启时，回合结束向[手牌](/mechanics/hand.md)加入[岳·命寻星叹](/cards/event/yue_fate_star_sigh.md)（每场战斗限1次）。该牌使下回合所有牌多打出一次，是强力爆发手段。
- **性价比**：史诗稀有度合理——力量防御对齐+双护盾+命寻星叹四合一，全能型遗物。需要规划力量/防御波动才能最大化收益，操作上限高。

## 源码

- `SeerWeiYue.cs`
