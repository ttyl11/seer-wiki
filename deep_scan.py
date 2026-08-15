import os
import re

docs_dir = r'd:\slay\seer-wiki\docs'

# 更全面的检查
results = {}

for r, d, fs in os.walk(docs_dir):
    for f in fs:
        if not f.endswith('.md'):
            continue
        filepath = os.path.join(r, f)
        rel_path = os.path.relpath(filepath, docs_dir)
        with open(filepath, 'r', encoding='utf-8') as fh:
            content = fh.read()
        
        found_issues = []
        
        # 1. 检查所有未翻译的代码术语（更全面）
        code_terms = [
            'AbstractCard', 'AbstractModel', 'AbstractRelic', 'AbstractPower',
            'MakeAction', 'AddTo', 'SpriteRenderer', 'Texture2D',
            'ICard', 'IRelic', 'IPower', 'IMonster',
            'CreatureCmd', 'PowerCmd', 'CardCmd', 'RelicCmd',
            'GameAction', 'PlayerChoiceContext', 'ThrowingPlayerChoice',
            'SavedProperty', 'DynamicVars', 'HarmonyPatch', 'HarmonyID',
            'ModInitializer', 'AssetProfile', 'ContentAssetProfiles',
            'MonsterVisualsPathPatch', 'DeepCloneFields',
            'RngNiche', 'runState.Rng',
            'PowerType.None', 'PowerType.Buff', 'PowerType.Debuff',
            'CardType.Power', 'CardType.Attack', 'CardType.Skill',
            'Rarity', 'CardRarity',
        ]
        for term in code_terms:
            if term in content:
                found_issues.append(f'代码术语:{term}')
        
        # 2. 检查 C# 代码模式
        if re.search(r'\bpublic\s+(static\s+)?(void|bool|int|float|string)\s+\w+\s*\(', content):
            found_issues.append('C#方法签名')
        if re.search(r'\bprivate\s+(static\s+)?(void|bool|int|float|string)\s+\w+\s*\(', content):
            found_issues.append('C#方法签名')
        if re.search(r'\boverride\s+(void|bool|int|float|string)\s+\w+\s*\(', content):
            found_issues.append('C#override')
        
        # 3. 检查 .cs 文件引用（除源码部分外）
        # 排除 ## 源码 部分的内容
        non_source = re.sub(r'## 源码.*?(?=## |\Z)', '', content, flags=re.DOTALL)
        cs_refs = re.findall(r'(\w+\.cs)', non_source)
        if cs_refs:
            found_issues.append(f'.cs引用({set(cs_refs)})')
        
        # 4. 检查 PascalCase 英文标识符（可能是代码泄露）
        # 排除常见合法词
        pascal_cases = re.findall(r'\b([A-Z][a-z]+(?:[A-Z][a-z]+)+)\b', non_source)
        pascal_cases = [p for p in pascal_cases if p not in [
            'DynamicVars', 'SeerMod', 'PowerType', 'CardType', 'ModInitializer',
            'PlayerCreatures', 'AbstractCard', 'AbstractModel', 'AbstractPower',
            'AbstractRelic', 'GameAction', 'CardCmd', 'CreatureCmd', 'PowerCmd',
            'RelicCmd', 'SavedProperty', 'AssetProfile', 'ContentAssetProfiles',
            'MonsterVisualsPathPatch', 'DeepCloneFields', 'ThrowingPlayerChoice',
            'PlayerChoiceContext', 'CombatManager', 'RngNiche',
        ]]
        if pascal_cases:
            unique = set(pascal_cases)
            if len(unique) <= 3:
                found_issues.append(f'PascalCase({unique})')
        
        # 5. 检查断裂句子（缺失主语）
        broken_patterns = [
            r'从\s+[,，.]',
            r'将\s+从',
            r'使用\s+[,，.]',
            r'施加\s+[,，.]',
        ]
        for pat in broken_patterns:
            if re.search(pat, content):
                found_issues.append(f'断裂句子')
                break
        
        # 6. 检查空标签
        if re.search(r'\*\*[:：]\s*\n', content):
            found_issues.append('空标签')
        
        # 7. 检查重复标点
        if re.search(r'[，。！？]{2,}', content):
            found_issues.append('重复标点')
        
        if found_issues:
            results[rel_path] = found_issues

print(f'有问题的文件总数: {len(results)}')
sorted_results = sorted(results.items(), key=lambda x: -len(x[1]))
for path, issues in sorted_results[:50]:
    print(f'  {path}: {", ".join(issues[:5])}')
