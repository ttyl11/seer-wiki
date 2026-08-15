Add-Type -AssemblyName System.Drawing

function Crop-Transparent {
    param([string]$inputPath, [string]$outputPath, [int]$padding = 30)
    
    $bmp = [System.Drawing.Bitmap]::FromFile($inputPath)
    $width = $bmp.Width
    $height = $bmp.Height
    
    # Find non-transparent bounds
    $minX = $width
    $minY = $height
    $maxX = -1
    $maxY = -1
    
    for ($x = 0; $x -lt $width; $x++) {
        for ($y = 0; $y -lt $height; $y++) {
            $pixel = $bmp.GetPixel($x, $y)
            if ($pixel.A -gt 10) {  # Not fully transparent
                if ($x -lt $minX) { $minX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -gt $maxY) { $maxY = $y }
            }
        }
    }
    
    # Add padding
    $minX = [Math]::Max(0, $minX - $padding)
    $minY = [Math]::Max(0, $minY - $padding)
    $maxX = [Math]::Min($width - 1, $maxX + $padding)
    $maxY = [Math]::Min($height - 1, $maxY + $padding)
    
    $cropWidth = $maxX - $minX + 1
    $cropHeight = $maxY - $minY + 1
    
    Write-Host "Original: ${width}x${height}, Crop region: ($minX,$minY) to ($maxX,$maxY), Size: ${cropWidth}x${cropHeight}"
    
    # Create cropped bitmap
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
    Write-Host "Saved cropped image to: $outputPath"
}

# Process both monsters
Crop-Transparent "d:\slay\mymod\seer001\seer\images\monsters\seer_puni\idle\1.png" "d:\slay\seer-wiki\docs\public\images\monsters\puni_monster.png"
Crop-Transparent "d:\slay\mymod\seer001\seer\images\monsters\soulson\idle\1.png" "d:\slay\seer-wiki\docs\public\images\monsters\soulson_monster.png"
