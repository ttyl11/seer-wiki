Add-Type -AssemblyName System.Drawing

function Crop-Transparent {
    param([string]$inputPath, [string]$outputPath, [int]$padding = 30)
    
    $bmp = [System.Drawing.Bitmap]::FromFile($inputPath)
    $width = $bmp.Width
    $height = $bmp.Height
    
    $minX = $width
    $minY = $height
    $maxX = -1
    $maxY = -1
    
    for ($x = 0; $x -lt $width; $x++) {
        for ($y = 0; $y -lt $height; $y++) {
            $pixel = $bmp.GetPixel($x, $y)
            if ($pixel.A -gt 10) {
                if ($x -lt $minX) { $minX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -gt $maxY) { $maxY = $y }
            }
        }
    }
    
    $minX = [Math]::Max(0, $minX - $padding)
    $minY = [Math]::Max(0, $minY - $padding)
    $maxX = [Math]::Min($width - 1, $maxX + $padding)
    $maxY = [Math]::Min($height - 1, $maxY + $padding)
    
    $cropWidth = $maxX - $minX + 1
    $cropHeight = $maxY - $minY + 1
    
    Write-Host "Processing: $(Split-Path $inputPath -Leaf): Original ${width}x${height}, Crop ${cropWidth}x${cropHeight}"
    
    $cropped = New-Object System.Drawing.Bitmap($cropWidth, $cropHeight)
    $g = [System.Drawing.Graphics]::FromImage($cropped)
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($bmp, (New-Object System.Drawing.Rectangle(0, 0, $cropWidth, $cropHeight)), 
                 (New-Object System.Drawing.Rectangle($minX, $minY, $cropWidth, $cropHeight)), 
                 [System.Drawing.GraphicsUnit]::Pixel)
    
    $cropped.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $cropped.Dispose()
    $bmp.Dispose()
}

# Kunge egg (tough_egg) from reference mod
Copy-Item "d:\slay\其它mod参考\7\TheQueen\images\card_portraits\monsters\tough_egg.png" "d:\slay\seer-wiki\docs\public\images\monsters\kunge_egg.png" -Force
Crop-Transparent "d:\slay\seer-wiki\docs\public\images\monsters\kunge_egg.png" "d:\slay\seer-wiki\docs\public\images\monsters\kunge_egg.png"

Write-Host "Done!"
