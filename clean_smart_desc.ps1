$files = Get-ChildItem -Path 'd:\slay\seer-wiki\docs\powers\*.md'
$count = 0
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    if ($content -match '## 智能描述') {
        $newContent = $content -replace '(?s)\r?\n## 智能描述.*?(?=\r?\n## |\Z)', ''
        [System.IO.File]::WriteAllText($file.FullName, $newContent, [System.Text.UTF8Encoding]::new($false))
        $count++
        Write-Output ("Cleaned: " + $file.Name)
    }
}
Write-Output ("Total cleaned: " + $count)
