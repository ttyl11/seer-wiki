Add-Type -AssemblyName System.Drawing

function Create-RedPlaceholder {
    param([string]$filename, [string]$label)
    
    $outPath = Join-Path 'd:\slay\seer-wiki\docs\public\images\monsters' $filename
    $bmp = New-Object System.Drawing.Bitmap(500, 335)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.Clear([System.Drawing.Color]::FromArgb(204, 0, 0))
    $font = New-Object System.Drawing.Font('Arial', 48, [System.Drawing.FontStyle]::Bold)
    $brush = [System.Drawing.Brushes]::White
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = 'center'
    $sf.LineAlignment = 'center'
    $rect = New-Object System.Drawing.RectangleF(0, 0, 500, 335)
    $g.DrawString($label, $font, $brush, $rect, $sf)
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Host "Created: $filename (500x335)"
}

Create-RedPlaceholder 'puni_monster.png' 'PUNI (谱尼)'
Create-RedPlaceholder 'soulson_monster.png' 'SOULSON (索伦森)'
