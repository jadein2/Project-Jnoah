param(
  [string]$VaultRoot = "C:\Jnoah\vault",
  [switch]$Execute
)

$ErrorActionPreference = "Stop"

$rawRoot = Join-Path $VaultRoot "Raw-Files"
$libraryRoot = Join-Path $rawRoot "_brand-library"
$runStamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

$categories = @(
  "01_brand",
  "02_programs",
  "03_content",
  "04_web",
  "05_clients",
  "06_media",
  "07_fonts",
  "08_merch",
  "99_archive"
)

$brands = @(
  @{
    Name = "Restart Fitness PH"
    Slug = "restart-fitness-ph"
    SourceFolders = @("restartfitnessph")
    Tokens = @("restart", "restartfitnessph", "restart fitness", "restart fitness ph")
  },
  @{
    Name = "URBN Athletics"
    Slug = "urbn-athletics"
    SourceFolders = @("URBN Athletics")
    Tokens = @("urbn", "urbanstrong", "urban strong", "urbn athletics")
  },
  @{
    Name = "6FIX"
    Slug = "6fix"
    SourceFolders = @("6FIX")
    Tokens = @("6fix", "6 fix")
  }
)

function Normalize-Text {
  param([string]$Text)
  if ([string]::IsNullOrWhiteSpace($Text)) { return "" }
  return $Text.ToLowerInvariant()
}

function Resolve-BrandFromPath {
  param([System.IO.FileInfo]$File)

  $candidate = Normalize-Text ($File.FullName)
  foreach ($brand in $brands) {
    foreach ($sourceFolder in $brand.SourceFolders) {
      $sourcePath = Join-Path $rawRoot $sourceFolder
      if ($File.FullName.StartsWith($sourcePath, [System.StringComparison]::OrdinalIgnoreCase)) {
        return $brand
      }
    }
  }

  foreach ($brand in $brands) {
    foreach ($token in $brand.Tokens) {
      if ($candidate.Contains((Normalize-Text $token))) {
        return $brand
      }
    }
  }

  return $null
}

function Resolve-Category {
  param([System.IO.FileInfo]$File)

  $path = Normalize-Text ($File.FullName)
  $name = Normalize-Text ($File.Name)

  if ($path -match "\\01_brand\\" -or $path -match "\\brand\\" -or $name -match "brand|logo|identity|palette|font-guide") { return "01_brand" }
  if ($path -match "\\02_programs\\" -or $name -match "program|offer|ladder|pricing|nutrition|wod|training|track") { return "02_programs" }
  if ($path -match "\\03_content\\" -or $name -match "content|caption|copy|post|social|campaign|story|reel") { return "03_content" }
  if ($path -match "\\04_web\\" -or $name -match "web|website|homepage|landing|funnel|domain") { return "04_web" }
  if ($path -match "\\05_clients\\" -or $name -match "client|profile|result|testimonial|handoff") { return "05_clients" }
  if ($path -match "\\06_media\\" -or $name -match "media|photo|image|video|broll|raw") { return "06_media" }
  if ($path -match "\\fonts?\\" -or $name -match "\.(ttf|otf|woff|woff2)$") { return "07_fonts" }
  if ($path -match "\\shirt design\\" -or $name -match "shirt|merch|clothes|apparel") { return "08_merch" }

  switch -Regex ($File.Extension.ToLowerInvariant()) {
    "\.(png|jpg|jpeg|webp|gif|mp4|mov|avi)$" { return "06_media" }
    "\.(ttf|otf|woff|woff2)$" { return "07_fonts" }
    default { return "99_archive" }
  }
}

function Get-RelativeToRaw {
  param([System.IO.FileInfo]$File)
  return $File.FullName.Substring($rawRoot.Length).TrimStart("\")
}

function Get-DestinationPath {
  param(
    [System.IO.FileInfo]$File,
    [hashtable]$Brand,
    [string]$Category
  )

  $relative = Get-RelativeToRaw $File
  foreach ($sourceFolder in $Brand.SourceFolders) {
    $prefix = "$sourceFolder\"
    if ($relative.StartsWith($prefix, [System.StringComparison]::OrdinalIgnoreCase)) {
      $relative = $relative.Substring($prefix.Length)
      break
    }
  }

  return Join-Path (Join-Path (Join-Path $libraryRoot $Brand.Slug) $Category) $relative
}

function Ensure-BrandFolders {
  foreach ($brand in $brands) {
    $brandRoot = Join-Path $libraryRoot $brand.Slug
    New-Item -ItemType Directory -Force -Path $brandRoot | Out-Null
    foreach ($category in $categories) {
      New-Item -ItemType Directory -Force -Path (Join-Path $brandRoot $category) | Out-Null
    }
  }
}

function Write-Manifest {
  param(
    [hashtable]$Brand,
    [array]$Rows
  )

  $manifestPath = Join-Path (Join-Path $libraryRoot $Brand.Slug) "00_manifest.md"
  $lines = @()
  $lines += "# $($Brand.Name) Brand Library Manifest"
  $lines += ""
  $lines += "Generated: $runStamp"
  $lines += "Mode: $(if ($Execute) { "EXECUTE" } else { "DRY RUN" })"
  $lines += ""
  $lines += "| Status | Category | Source | Destination | Size MB | Modified |"
  $lines += "|---|---|---|---|---:|---|"

  foreach ($row in $Rows | Sort-Object Category, Source) {
    $lines += "| $($row.Status) | $($row.Category) | $($row.Source) | $($row.Destination) | $($row.SizeMB) | $($row.Modified) |"
  }

  Set-Content -Path $manifestPath -Value $lines -Encoding UTF8
}

if (-not (Test-Path $rawRoot)) {
  throw "Raw-Files folder not found: $rawRoot"
}

Ensure-BrandFolders

$allFiles = Get-ChildItem -Path $rawRoot -Recurse -File -Force |
  Where-Object { $_.FullName -notlike "$libraryRoot*" }

$brandRows = @{}
foreach ($brand in $brands) {
  $brandRows[$brand.Slug] = @()
}

$unassigned = @()
$copyCount = 0
$skipCount = 0

foreach ($file in $allFiles) {
  $brand = Resolve-BrandFromPath $file
  if ($null -eq $brand) {
    $unassigned += $file
    continue
  }

  $category = Resolve-Category $file
  $destination = Get-DestinationPath -File $file -Brand $brand -Category $category
  $destinationParent = Split-Path -Parent $destination
  $status = "planned"

  if (Test-Path $destination) {
    $status = "exists"
    $skipCount++
  } elseif ($Execute) {
    New-Item -ItemType Directory -Force -Path $destinationParent | Out-Null
    Copy-Item -LiteralPath $file.FullName -Destination $destination
    $status = "copied"
    $copyCount++
  } else {
    $copyCount++
  }

  $brandRows[$brand.Slug] += [pscustomobject]@{
    Status = $status
    Category = $category
    Source = Get-RelativeToRaw $file
    Destination = $destination.Substring($rawRoot.Length).TrimStart("\")
    SizeMB = [math]::Round($file.Length / 1MB, 2)
    Modified = $file.LastWriteTime.ToString("yyyy-MM-dd HH:mm:ss")
  }
}

foreach ($brand in $brands) {
  Write-Manifest -Brand $brand -Rows $brandRows[$brand.Slug]
}

$unassignedPath = Join-Path $libraryRoot "00_unassigned-files.md"
$unassignedLines = @()
$unassignedLines += "# Brand Library Unassigned Files"
$unassignedLines += ""
$unassignedLines += "Generated: $runStamp"
$unassignedLines += ""
$unassignedLines += "| Source | Size MB | Modified |"
$unassignedLines += "|---|---:|---|"
foreach ($file in $unassigned | Sort-Object FullName) {
  $unassignedLines += "| $(Get-RelativeToRaw $file) | $([math]::Round($file.Length / 1MB, 2)) | $($file.LastWriteTime.ToString("yyyy-MM-dd HH:mm:ss")) |"
}
Set-Content -Path $unassignedPath -Value $unassignedLines -Encoding UTF8

[pscustomobject]@{
  Mode = $(if ($Execute) { "EXECUTE" } else { "DRY RUN" })
  LibraryRoot = $libraryRoot
  Brands = $brands.Count
  FilesMatchedToBrands = ($brandRows.Values | ForEach-Object { $_.Count } | Measure-Object -Sum).Sum
  FilesPlannedOrCopied = $copyCount
  ExistingDestinationFiles = $skipCount
  UnassignedFiles = $unassigned.Count
}
