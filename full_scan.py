import os
import re

docs_dir = r'd:\slay\seer-wiki\docs'

# 定义所有需要检查的问题模式
checks = {
    '模板变量': r'\{[A-Za-z_]+\}',
    'BBCode蓝': r'\[blue\]',
    'BBCode红': r'\[red\]',
    'BBCode金': r'\[gold\]',
    'BBCode绿': r'\[green\]',
    '路径泄露': r'(杀戮尖塔源码|mymod\\seer001|[A-Z]:\\|\.trae)',
    '智能描述': r'## 智能描述',
    'MaxHp': r'\bMaxHp\b',
    'MaxUpgradeLevel': r'\bMaxUpgradeLevel\b',
    'AutoPlayType': r'\bAutoPlayType\b',
    'ShouldPlay': r'\bShouldPlay\b',
    'TargetingAll': r'\bTargetingAll',
    'PlayerCreatures': r'\bPlayerCreatures\b',
    'DynamicVar': r'\bDynamicVar\b',
    'Single类型': r'Single 类型',
    'Bound affliction': r'Bound affliction',
    'Counter 叠加': r'Counter 叠加',
    '源码不符': r'源码不符',
    '源码为准': r'源码为准',
    '源码行为': r'源码行为',
    '源码实际': r'源码实际',
    '源码中': r'源码中',
    '专属随机源': r'专属随机源',
    '本地化文本': r'本地化文本',
    '本地化未包含': r'本地化未包含',
    '本地化 未': r'本地化 未',
    '方法为空': r'方法为空',
    '调用 进行': r'调用 进行',
    '此方法': r'此方法',
    '空标签XX': r'XX ',
    # 更多代码术语
    'AbstractCard': r'\bAbstractCard\b',
    'AbstractModel': r'\bAbstractModel\b',
    'AbstractRelic': r'\bAbstractRelic\b',
    'AbstractPower': r'\bAbstractPower\b',
    'MakeAction': r'\bMakeAction\b',
    'AddTo': r'\bAddTo\b',
    'SpriteRenderer': r'\bSpriteRenderer\b',
    'Texture2D': r'\bTexture2D\b',
    # C# 关键字
    'public_void': r'\bpublic\s+(static\s+)?void\b',
    'private_void': r'\bprivate\s+(static\s+)?void\b',
    'override_void': r'\boverride\s+void\b',
    'return_semicolon': r'\breturn;\b',
    'this_dot': r'\bthis\.',
    # HTML未闭合
    '未闭合img': r'<img[^>]+(?<!/)>',
    # 断裂句子
    '空括号': r'（）|\(\s*\)',
    '双逗号': r',,',
    '空冒号': r'：\s*[，。]',
    # 英文残留（连续4个以上英文单词，排除代码块）
    # 在主循环中单独处理
}

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
        for issue_name, pattern in checks.items():
            matches = re.findall(pattern, content)
            if matches:
                found_issues.append(f'{issue_name}({len(matches)})')
        
        # 英文残留检查
        text = re.sub(r'```.*?```', '', content, flags=re.DOTALL)
        text = re.sub(r'\[.*?\]\(.*?\)', '', text)
        text = re.sub(r'<[^>]+>', '', text)
        text = re.sub(r'[A-Za-z_]+\.(md|cs|png|tscn|gd)', '', text)
        text = re.sub(r'https?://\S+', '', text)
        text = re.sub(r'[A-Z_]{3,}', '', text)  # 常量
        eng_sequences = re.findall(r'[A-Za-z]+\s+[A-Za-z]+\s+[A-Za-z]+\s+[A-Za-z]+', text)
        if eng_sequences:
            found_issues.append(f'英文残留({len(eng_sequences)}处)')
        
        if found_issues:
            results[rel_path] = found_issues

print(f'有问题的文件总数: {len(results)}')
# 按问题数排序
sorted_results = sorted(results.items(), key=lambda x: -len(x[1]))
for path, issues in sorted_results:
    print(f'  {path}: {", ".join(issues)}')
