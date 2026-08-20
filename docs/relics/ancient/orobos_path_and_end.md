# 诅咒传说

<img src="/images/relics/orobos_path_and_end.png" alt="诅咒传说" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

## 描述

拾起时，获得1个随机<span style="color:#d4a017;font-weight:600">传说遗物</span>，将1张随机<span style="color:#d44;font-weight:600">赛尔诅咒牌</span>加入牌组。

- **传说遗物池**：从 Seer 的传说稀有度非塔罗遗物中随机发放一个（**不含原版传说遗物**），已拥有的会被排除。
- **代价**：从赛尔诅咒牌池（<span style="color:#3aa675;font-weight:600">17</span> 张）随机取一张加入牌组主牌堆。
- **多端一致**：传说遗物和诅咒牌均用同步随机源选取，多人模式两端结果一致。

## 风味文字

<span style="color:#d44;font-weight:600">传说的代价。</span>

## 小贴士

- **白送一个 Seer 传说遗物**：拾起瞬间直接从 Seer 传说池随机发放一个（排除已拥有）——[天启帝君](/relics/ancient/nonupeipe_apocalypse_and_worlds.md)、[镇世·乔特鲁德](/relics/legendary/world_suppressor_jortrud.md)这个级别的核弹级效果就在候选池里，等同免费抽一次传说奖池，单这一项就值回票价。
- **17 张诅咒两极分化**：代价轻重天差地别——[懒惰](/cards/curse/sloth.md)在手牌中时你造成的攻击伤害直接归零、[云玩家](/cards/curse/cloud_gamer.md)在手牌中封锁所有 PP 卡（打出后才解除）、[暴怒](/cards/curse/wrath.md)在手牌中必须最先打出且打出后对**所有生物**（含自己和队友）造成伤害、[氪金](/cards/curse/pay_to_win.md)加入手牌瞬间扣当前金币一定比例且打出时给自己挂 99 层易伤+虚弱、[傲慢](/cards/curse/pride.md)回合结束还攥在手里就掉血——抽到哪张直接决定这波是赚是亏。
- **诅咒牌是永久牌组负担**：进牌组后每场战斗都可能抽到，不是一次性代价。没有删牌/消耗诅咒的手段时，它会拖累整个后续跑图——懒惰卡在手里的一回合可能直接葬送一场关键战斗。
- **先备消化手段再拾起**：跑图中有删牌服务（商店/篝火事件）或能消耗诅咒牌的手段时，这个遗物接近纯赚；完全没消化手段时谨慎评估——传说遗物虽强，一张重度诅咒的负面贯穿整个残局。
- **性价比**：一换一是"核弹换地雷"的交换——传说遗物的强度下限很高，诅咒的惩罚上限也很高，期望收益为正但方差极大。

## 源码

- `SeerOrobosPathAndEnd.cs`
