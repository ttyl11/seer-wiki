# 圣灵谱尼

<img src="/images/relics/specter.png" alt="圣灵谱尼" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 塔罗遗物
- **稀有度**: 传说（自定义稀有度）

### 数值参数

| 参数 | 数值 |
|---|---|
| 先制层数 | 2 |
| 回复数量 | 3 |
| PP回复 | 1 |
| 已损生命伤害百分比 | 10（%） |
| 复活生命百分比 | 50（%） |

## 描述

①<span style="color:#9b59b6;font-weight:600">虚无</span>：受到敌人攻击伤害后获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">[缓冲](/powers/buffer_power.md)</span>。<br/>②<span style="color:#9b59b6;font-weight:600">元素</span>：在你的回合开始时，随机生成<span style="color:#3aa675;font-weight:600">1</span>个<span style="color:#d4a017;font-weight:600">[充能球](/mechanics/orb.md)</span>。<br/>③<span style="color:#9b59b6;font-weight:600">能量</span>：在你的回合结束时，对随机敌人造成已损失生命<span style="color:#3aa675;font-weight:600">10</span>%的伤害。<br/>④<span style="color:#9b59b6;font-weight:600">生命</span>：在你的回合结束时，回复<span style="color:#3aa675;font-weight:600">3</span>点生命，为1张随机<span style="color:#d4a017;font-weight:600">PP牌</span>回复<span style="color:#3aa675;font-weight:600">1</span>点<span style="color:#d4a017;font-weight:600">[PP](/mechanics/pp-system.md)</span>。<br/>⑤<span style="color:#9b59b6;font-weight:600">轮回</span>：死亡时以<span style="color:#3aa675;font-weight:600">50</span>%生命[复活](/mechanics/revive.md)（整局游戏1次）。<br/>⑥<span style="color:#9b59b6;font-weight:600">永恒</span>：生命大于所有敌人时，在你的回合开始时<span style="color:#d4a017;font-weight:600">[先制](/powers/first_strike_power.md)</span>+<span style="color:#3aa675;font-weight:600">2</span>。<br/>⑦<span style="color:#9b59b6;font-weight:600">圣洁</span>：免疫<span style="color:#d44;font-weight:600">[异常状态](/mechanics/abnormal-status.md)</span>。

- **虚无触发**：仅响应敌人造成的攻击伤害，非攻击伤害不触发。
- **充能球池**：从原版充能球 + 9 种 mod 自定义充能球（圣杯、PP、Multi、火山、海洋、森林、塔、星辰、神谕）中随机一个。
- **能量伤害**：已损失生命 × 10%，对随机敌人造成非攻击伤害（非固定伤害）。
- **生命-PP**：从所有牌堆的 PP 牌中随机选 1 张回复 PP（不超过最大 PP）。
- **轮回**：死亡时以 50% 生命复活，整局游戏 1 次。复活期间完全无敌——伤害归零、能力施加无效。
- **永恒**：仅当生命值严格大于所有可击中敌人时才施加先制。
- **圣洁**：永久免疫异常状态；复活期间所有能力施加都被屏蔽。

## 风味文字

<span style="color:#d44;font-weight:600">圣灵谱尼。</span>

## 小贴士

- **七被动同时生效**：虚无/元素/能量/生命/轮回/永恒/圣洁七个效果同时存在，不是切换形态。一个遗物顶七个用——坦度、输出、续航、复活、先制、异常免疫全包，真正的六边形战士。
- **虚无：挨打叠缓冲**：受到敌人攻击伤害后获得1层缓冲（下次受到的伤害或固定伤害归零）。挨打越多缓冲越厚，面对高频攻击的敌人可以叠出多层缓冲形成无敌墙。注意只响应攻击伤害，非攻击伤害不触发。
- **元素+能量：免费充能球+残血反伤**：回合开始免费生成1个充能球（池子含原版+9种mod充能球），回合结束对随机敌人造成已损失生命10%的非攻击伤害。越残血伤害越高——血量越低输出越猛，配合虚无的缓冲可以安全保持低血线打输出。
- **生命：回合结束续航**：回合结束回复3点生命+为1张随机PP牌回复1点PP。每回合稳定续航，配合能量的残血反伤形成"低血高输出→回合结束回血"的循环。PP回复随机选牌，PP牌多的牌组更容易回关键牌。
- **永恒与能量的血线矛盾**：永恒需要生命大于所有敌人才给先制+2，能量需要已损失生命才有伤害——满血时永恒触发但能量伤害为零，残血时能量伤害高但永恒失效。需要权衡血线：开局满血抢先制压制，中后期残血打反伤，靠生命的回血在两者间切换。
- **轮回+圣洁：复活+异常免疫**：死亡时以50%生命复活（整局1次），复活期间完全无敌。圣洁永久免疫异常状态，不用管异常流敌人。复活是终极保命，留到关键战斗。
- **性价比**：传说稀有度合理——7被动同时生效的六边形战士，坦度/输出/续航/复活/先制/异常免疫全包，整局1次复活是顶级保险。

## 源码

- `SeerSpecter.cs`
