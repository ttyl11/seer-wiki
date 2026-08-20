# 保留1血

> **归属**：玩家可施加
> **施加来源**：玩家获得——[傳馥明王最胜语](/cards/character/fragrant_king_supreme_word.md)（卡牌）

<img src="/images/powers/retain_one_hp_power.png" alt="保留1血" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（层数始终为 1，不叠加）
- **可见**: 是

## 描述

下一次受到致死伤害时不死亡，恢复<span style="color:#3aa675;font-weight:600">1</span>点生命后移除自身。

## 详细机制

- **触发时机**：当拥有者受到致死伤害时触发
- **死亡阻止**：未复活过时阻止死亡
- **伤害免疫**：复活过程中完全免疫伤害
- **复活流程**：
  1. 进入复活状态，阻止战斗结束
  2. 标记已复活，确保只复活一次
  3. 恢复 <span style="color:#3aa675;font-weight:600">1</span> 点生命
  4. 结束复活状态
  5. 移除自身
- **能力接收限制**：复活过程中不接受新的能力施加
- **死亡后保留**：拥有者死亡后此能力不会被移除（用于复活机制）

## 相关卡牌

- [傳馥明王最胜语](/cards/character/fragrant_king_supreme_word.md)（怀生菩怜态时获得保留1血）

## 源码

- `SeerRetainOneHpPower.cs`
