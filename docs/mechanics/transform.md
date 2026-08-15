# 转化

> 原版卡牌机制

## 基本信息

- **类型**: 原版卡牌命令
- **命令接口**: `CardCmd.TransformTo<T>` / `CardCmd.TransformToRandom`
- **前置条件**: 卡牌的 `IsTransformable` 标记为 true

## 描述

转化是将一张卡牌变为另一张卡牌的机制。转化后，原卡被替换为新卡，新卡继承原卡的作用域（CardScope）和拥有者（Owner）。

## 详细机制

### 转化类型

| 类型 | 命令 | 说明 |
| --- | --- | --- |
| 指定转化 | `CardCmd.TransformTo<T>` | 转化为指定的卡牌类型 T |
| 随机转化 | `CardCmd.TransformToRandom` | 从卡池中随机选取一张卡转化 |

### 可转化标记

- 卡牌必须具有 `IsTransformable = true` 标记才能被转化
- 不可转化的卡牌（如部分诅咒牌、状态牌）会抛出异常
- 转化后的新卡同样继承可转化标记

### 转化流程

1. 检查原卡的 `IsTransformable` 标记
2. 创建新卡实例（继承原卡的作用域和拥有者）
3. 在原卡所在的牌堆中替换：移除原卡，添加新卡
4. 显示转化预览动画

## Mod 中的转化应用

### 起源流转遗物

[起源流转](/relics/starter/origin_shift)（谱尼初始遗物）每经过 7 个战斗房间（精英算 2 次，Boss 算 3 次），随机将 1 张基础牌转化为对应的先古任务牌：

| 基础牌 | 转化为 |
| --- | --- |
| 生命 | 光荣之梦 |
| 虚无 | 圣灵悲魂曲 |
| 轮回 | 神圣复苏 |
| 元素 | 神灵之触 |
| 能量 | 神圣启示歌 |
| 永恒 | 圣光吟诵 |
| 圣洁 | 璨灵圣光 |

- **随机选取**：多人模式两端结果一致
- **只转化基础牌**：从牌组中筛选可转化的基础牌，随机选一张转化

### 尘封之书

尘封之书的先古牌获取也涉及转化机制，详见 [卡牌池扩展](./card-pool-extension)。

## 相关机制

- [卡牌池扩展](./card-pool-extension)（尘封之书的先古牌支持）
- [游戏流程改造](./game-flow)（起源流转的战斗房间计数）

## 源码

- `CardCmd.cs`（原版转化命令——TransformTo/TransformToRandom）
- `CardTransformation.cs`（原版转化数据结构）
- `CardModel.cs`（IsTransformable 属性）
- `SeerOriginShift.cs`（起源流转遗物——基础牌转化为先古任务牌）
