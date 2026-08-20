# 起源流转

<img src="/images/relics/origin_shift.png" alt="起源流转" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 初始

### 数值参数

| 参数 | 数值 |
|---|---|
| 触发战斗房间数 | 7 |

## 描述

在每场战斗开始时，获得<span style="color:#9b59b6;font-weight:600">[神灵](/powers/divine_power.md)</span>属性。
每经过<span style="color:#3aa675;font-weight:600">7</span>个战斗房间（精英算2次，<span style="color:#d4a017;font-weight:600">Boss</span>算3次），随机将1张基础牌<span style="color:#d4a017;font-weight:600">转化</span>为对应的先古任务牌。

- **计数权重**：普通战斗+1、精英+2、Boss+3，非战斗房间不计；满 7 触发并清零重新计数。
- **转化映射**：基础牌按固定对应转为先古任务牌（生命→光荣之梦、虚无→圣灵悲魂曲、轮回→神圣复苏、元素→神灵之触、能量→神圣启示歌、永恒→圣光吟诵、圣洁→璨灵圣光）。

## 风味文字

<span style="color:#d44;font-weight:600">万物流转，归于一源。</span>

## 小贴士

- **每场战斗自带神灵属性**：战斗开始自动获得[神灵](/powers/divine_power.md)属性（克制草/水/火/电/冰/远古/邪灵/混沌，对机械/战斗/龙微弱），相当于免费的全属性克制优势，不用靠卡牌或能力堆。**关键联动**：神灵在战斗开始时施加，早于[群星的礼赠](/relics/starter/elemental_core.md)的随机属性检查——已有属性的生物不会再被随机分配，所以谱尼每场战斗的属性**固定是神灵**，不会吃随机属性的歪亏，也不会随机到神灵之外的东西。
- **每 7 个战斗房间转化 1 张基础牌**：普通战斗算 1 次、精英算 2 次、Boss 算 3 次，攒满 7 次随机把 1 张基础牌升级成对应的先古任务牌。精英和 Boss 加速进度，打完一个 Boss 等于快进近一半。若一次战斗后计数越过多个 7 的倍数（如攒到 14），会**连续转化多张**——憋一场大精英/Boss 再触发能一次拿好几张任务牌。
- **基础牌→任务牌固定对应**：生命→[光荣之梦](/cards/character/glorious_dream.md)、虚无→[圣灵悲魂曲](/cards/character/holy_requiem.md)、轮回→[神圣复苏](/cards/character/holy_revival.md)、元素→[神灵之触](/cards/ancient/divine_touch.md)、能量→[神圣启示歌](/cards/ancient/divine_revelation.md)、永恒→[圣光吟诵](/cards/character/holy_chant.md)、圣洁→[璨灵圣光](/cards/ancient/radiant_holy_light.md)。转化哪张基础牌是随机的，但结果固定——转化生命一定得到光荣之梦。
- **随机选牌无法定向**：从牌组里随机选一张基础牌，想定向转化特定基础牌做不到。牌组里基础牌越多，转化到想要的那张概率越低。转化是**永久的**（基础牌变任务牌后整局保持），任务牌本身不可再转化；若极小概率随机选中了一张当前不可转化的牌，本次触发作废（不重选、计数已扣）。
- **性价比**：初始遗物合理——神灵属性 + 基础牌升级双效果，长期跑图越转越强。7 张基础牌全部转化后此遗物的转化功能就"毕业"了（只剩神灵属性），所以前期多打战斗房间能更早吃满任务牌收益。

## 源码

- `SeerOriginShift.cs`
