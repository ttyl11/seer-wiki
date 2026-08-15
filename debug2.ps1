$file = 'd:\slay\seer-wiki\docs\powers\petrify_power.md'
$c = [System.IO.File]::ReadAllText($file, [System.Text.UTF8Encoding]::new($false))
if ($c -match '智能描述') {
    Write-Output 'MATCHED'
} else {
    Write-Output 'NOT MATCHED'
}
# Show content
Write-Output "---CONTENT START---"
Write-Output $c
Write-Output "---CONTENT END---"
