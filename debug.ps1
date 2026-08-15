$file = 'd:\slay\seer-wiki\docs\powers\petrify_power.md'
$c = Get-Content $file -Raw -Encoding UTF8
if ($c -match '智能描述') {
    Write-Output 'MATCHED'
} else {
    Write-Output 'NOT MATCHED'
}
# Check encoding
$bytes = [System.IO.File]::ReadAllBytes($file)
Write-Output ("File size: " + $bytes.Length)
Write-Output ("First 3 bytes: " + $bytes[0].ToString() + " " + $bytes[1].ToString() + " " + $bytes[2].ToString())
# Show lines around 智能描述
$lines = Get-Content $file -Encoding UTF8
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match '智能描述') {
        Write-Output ("Line " + ($i+1) + ": " + $lines[$i])
    }
}
