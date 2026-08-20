# 群生俯首

<img src="/images/cards/all_life_submit.png" alt="群生俯首" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 3
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 所有敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 臣服回合 | 3 | 4 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 令所有敌人[<span style="color:#9b59b6;font-weight:600">臣服</span>](/powers/subjugation_power.md)<span style="color:#3aa675;font-weight:600">3</span>回合。若所有敌人已有[<span style="color:#9b59b6;font-weight:600">臣服</span>](/powers/subjugation_power.md)，则[<span style="color:#d4a017;font-weight:600">击晕</span>](/mechanics/stun.md)所有敌方。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 令所有敌人[<span style="color:#9b59b6;font-weight:600">臣服</span>](/powers/subjugation_power.md)<span style="color:#3aa675;font-weight:600">4</span>回合。若所有敌人已有[<span style="color:#9b59b6;font-weight:600">臣服</span>](/powers/subjugation_power.md)，则[<span style="color:#d4a017;font-weight:600">击晕</span>](/mechanics/stun.md)所有敌方。

## 小贴士

- **双重价值**：这张牌有两个用途——一是给所有未臣服的敌人施加臣服（控制），二是当所有敌人已被臣服时改为击晕全部敌人（群体跳过回合）。实际是"控制叠满后升级为硬控"的设计。
- **臣服的真实代价**：臣服的敌人造成的攻击伤害减少 70%，**但臣服移除时有副作用**——臣服的持有者若是玩家，玩家获得 2 张免费随从牌（从仆从打击/仆从捐躯/仆从俯冲中随机）；若是怪物，怪物获得 3 层力量作为"挣脱奖励"。**所以给敌人挂臣服后，3-4 回合后它会带着 3 层力量回来打你**——必须在臣服期间把它解决掉，否则反而帮它叠力量。
- **臣服减伤只对攻击伤害生效**：**只减少敌人造成的攻击伤害**，非攻击伤害（如某些 Boss 的固定伤害能力）不受臣服影响。所以臣服不是万能盾，遇到纯能力伤害的 Boss 仍需谨慎。
- **击晕是硬控，无视意图**：击晕比臣服更强——直接跳过敌人整回合行动，无视意图锁定。但需要先用其他手段给所有敌人挂上臣服才能触发。**注意"所有"是严格条件**：哪怕只有一个敌人没臣服，这张牌也会给他施加臣服而不是击晕全体。
- **击晕条件只看存活敌人，与击杀顺序无关**：判定是"当前所有存活敌人都已臣服"——先杀谁后杀谁没有任何区别，已死亡的敌人自然退出判定。唯一会卡住击晕的是**免疫异常的敌人**——它永远挂不上臣服，只要它活着，这张牌就一直走"补臣服"分支而无法击晕，只能先把它击杀。
- **升级只加回合数，不加击晕**：升级后臣服 3→4 回合，给玩家更多输出窗口。**但升级不改变击晕触发条件**——击晕依然需要"所有敌人已臣服"。所以升级的价值是"更长的控制时间"，不是"更容易触发击晕"。
- **性价比**：3 费换群体控制（未臣服者挂 70% 减攻的臣服，已臣服则全员击晕）。牌打出后进弃牌堆、洗牌后可反复使用，PP5 支撑单场多次打出。与其它能施加臣服的牌（如[蔑天行·残虐](./despise_heaven_cruelty.md)）配合时，先把臣服挂满，再抽到这张牌就能直接转群体击晕——越到后期越强。

## 相关能力

- [臣服](/powers/subjugation_power.md)（核心授予能力）

## 相关机制

- [击晕](/mechanics/stun.md)（原版状态，条件触发效果）

## 源码

- `SeerAllLifeSubmit.cs`
