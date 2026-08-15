# 天灵净野

<img src="/images/cards/heaven_spirit_pure_field.png" alt="天灵净野" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 烧伤层数 | 3 | 4 |
| 回复生命 | 5 | 7 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对所有人施加<span style="color:#3aa675;font-weight:600">3</span>层<span style="color:#d4a017;font-weight:600">烧伤</span>。未触发则获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">缓冲</span>。自身有<span style="color:#d4a017;font-weight:600">烧伤</span>时回复<span style="color:#3aa675;font-weight:600">5</span>点生命。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对所有人施加<span style="color:#3aa675;font-weight:600">4</span>层<span style="color:#d4a017;font-weight:600">烧伤</span>。未触发则获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">缓冲</span>。自身有<span style="color:#d4a017;font-weight:600">烧伤</span>时回复<span style="color:#3aa675;font-weight:600">7</span>点生命。

## 小贴士

- **双向烧伤**：对所有生物（包括自己）施加 3 层[烧伤](/powers/burn_power.md)。烧伤在回合开始时造成伤害并降低攻击伤害，每回合 -1 层。自身也会受到烧伤伤害——但自身有烧伤时回复 5 点生命（升级后 7），部分抵消烧伤代价。
- **缓冲兜底**：如果任何生物烧伤施加失败（免疫烧伤），自身获得 1 层[缓冲](/powers/buffer_power.md)——阻止下一次受到的生命值损伤。
- **烧伤机制**：烧伤在回合开始时造成 3 点非攻击伤害 + 降低自身攻击伤害 1 点，然后减 1 层。3 层烧伤对敌人是持续威胁，对自身需配合回血抵消代价。
- **配合建议**：配合烧伤免疫或烧伤体系使用。配合回血能力抵消自身烧伤代价。对烧伤免疫的敌人会触发缓冲兜底。
- **升级的关键性**：烧伤层数从 3 提升至 4，回血从 5 提升至 7。升级优先级中等——对敌人伤害增加，对自身回血也增加。
- **性价比**：1 费全体烧伤 3 层+回血兜底，稀有稀有度配得上这个范围伤害。双刃剑设计需配合回血卡组才能最大化收益。

## 相关能力

- [烧伤](/powers/burn_power.md)（回合开始受到伤害，攻击伤害降低，每回合 -1 层）
- [缓冲](/powers/buffer_power.md)（阻止下一次生命值损伤，烧伤失败时获得）

## 源码

- `SeerHeavenSpiritPureField.cs`
