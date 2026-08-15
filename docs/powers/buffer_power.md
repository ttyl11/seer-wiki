# 缓冲

<img src="/images/powers/buffer_power.png" alt="缓冲" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **允许负值**: 否

## 描述

阻止下一次你受到的生命值损伤。

## 详细机制

- **伤害抵消**：当自身即将受到生命值损失时，完全抵消本次损失。
  - 比其他减伤效果更晚触发
  - 让其他减伤效果先触发，如果其他效果已将伤害降为 0，则不消耗缓冲层数
- **消耗层数**：每次抵消后层数 -1。
- **多层叠加**：每层独立抵消一次伤害，<span style="color:#3aa675;font-weight:600">3</span> 层缓冲可抵消 <span style="color:#3aa675;font-weight:600">3</span> 次伤害。
- **多人缩放**：多人模式下层数会同步，2 人游戏 ×3，3 人游戏 ×5，4 人游戏 ×7。

## 相关卡牌

- [禁术·契灭](/cards/character/contract_destruction.md)（消耗 PP 超过阈值时获得 <span style="color:#3aa675;font-weight:600">1</span> 层缓冲）

## 源码

- `BufferPower.cs`（原版能力）
