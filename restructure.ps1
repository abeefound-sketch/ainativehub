$ErrorActionPreference = "Continue"

$base = "D:\5Projects\ainativehub"
Set-Location $base

# Create directories
$dirs = @(
    "1_Business_Operations\Philosophy",
    "1_Business_Operations\Sales_And_CRM",
    "2_Coaching_Academy\Templates_Syllabus",
    "2_Coaching_Academy\K12_Students\Tung_Linh_Lop9",
    "2_Coaching_Academy\Univ_Students",
    "2_Coaching_Academy\Professionals",
    "3_Tech_And_Automations\Website_Source",
    "3_Tech_And_Automations\Automations",
    "4_Media_And_Content\Assets_And_Images",
    "4_Media_And_Content\Website_Content",
    "4_Media_And_Content\Facebook_Posts",
    "4_Media_And_Content\YouTube_Scripts",
    "5_Knowledge_Base\Prompt_Library",
    "5_Knowledge_Base\Tools_And_Links"
)
foreach ($d in $dirs) {
    if (-not (Test-Path $d)) {
        New-Item -ItemType Directory -Path $d -Force | Out-Null
    }
}

# Move Root files
Move-Item -Path "app.js" -Destination "3_Tech_And_Automations\Website_Source\" -ErrorAction SilentlyContinue
Move-Item -Path "index.html" -Destination "3_Tech_And_Automations\Website_Source\" -ErrorAction SilentlyContinue
Move-Item -Path "style.css" -Destination "3_Tech_And_Automations\Website_Source\" -ErrorAction SilentlyContinue
Move-Item -Path "sync_leads.py" -Destination "3_Tech_And_Automations\Automations\" -ErrorAction SilentlyContinue
Move-Item -Path "Deep_Interview_Phu_Huynh_Private_AI_VibeCode_THCS.md" -Destination "2_Coaching_Academy\Templates_Syllabus\" -ErrorAction SilentlyContinue

# Move 1docs files
Move-Item "1docs\Bao_Gia_AI_Creator.md" "1_Business_Operations\Sales_And_CRM\" -ErrorAction SilentlyContinue
Move-Item "1docs\Bo_Tai_Lieu_Chao_Hang_Bespoke.md" "1_Business_Operations\Sales_And_CRM\" -ErrorAction SilentlyContinue
Move-Item "1docs\Chien_Luoc_Thu_Thap_Du_Lieu.md" "1_Business_Operations\Philosophy\" -ErrorAction SilentlyContinue
Move-Item "1docs\Doi_Chieu_Nguon_vs_Web.md" "3_Tech_And_Automations\Website_Source\" -ErrorAction SilentlyContinue
Move-Item "1docs\Khao_sat_Phu_huynh_Hoc_sinh.md" "2_Coaching_Academy\Templates_Syllabus\" -ErrorAction SilentlyContinue
Move-Item "1docs\Kich_Ban_Nhan_Tin_Nho_Gioi_Thieu.md" "1_Business_Operations\Sales_And_CRM\" -ErrorAction SilentlyContinue
Move-Item "1docs\LINKS.md" "5_Knowledge_Base\Tools_And_Links\" -ErrorAction SilentlyContinue
Move-Item "1docs\Lo_Trinh_30_Buoi_Tung_Linh.md" "2_Coaching_Academy\K12_Students\Tung_Linh_Lop9\" -ErrorAction SilentlyContinue
Move-Item "1docs\README.md" ".\" -ErrorAction SilentlyContinue
Move-Item "1docs\Sales_Kit_Phu_Huynh_Hoc_Sinh_THCS_THPT.md" "1_Business_Operations\Sales_And_CRM\" -ErrorAction SilentlyContinue
Move-Item "1docs\tuoc.md" "1_Business_Operations\Philosophy\" -ErrorAction SilentlyContinue

# Move 2data files
if (Test-Path "2data") {
    Get-ChildItem -Path "2data" -File | ForEach-Object {
        $f = $_.Name
        if ($f -match "Tung_Linh|T.*ng.*Linh") {
            Move-Item -LiteralPath $_.FullName -Destination "2_Coaching_Academy\K12_Students\Tung_Linh_Lop9\" -Force
        } elseif ($f -match "Google_Apps_Script") {
            Move-Item -LiteralPath $_.FullName -Destination "3_Tech_And_Automations\Automations\" -Force
        } elseif ($f -match "Sales_Packages") {
            Move-Item -LiteralPath $_.FullName -Destination "1_Business_Operations\Sales_And_CRM\" -Force
        } elseif ($f -match "tuoc_methodology") {
            Move-Item -LiteralPath $_.FullName -Destination "1_Business_Operations\Philosophy\" -Force
        } elseif ($f -match "Quan_Ly_Links") {
            Move-Item -LiteralPath $_.FullName -Destination "5_Knowledge_Base\Tools_And_Links\" -Force
        } elseif ($f -match "\.(png|jpg|jpeg|gif)$") {
            Move-Item -LiteralPath $_.FullName -Destination "4_Media_And_Content\Assets_And_Images\" -Force
        } else {
            Move-Item -LiteralPath $_.FullName -Destination "2_Coaching_Academy\Templates_Syllabus\" -Force
        }
    }
}

# Move img and assets
if (Test-Path "img") { 
    Get-ChildItem "img" -File | ForEach-Object { Move-Item -LiteralPath $_.FullName -Destination "4_Media_And_Content\Assets_And_Images\" -Force } 
}
if (Test-Path "assets") { 
    Get-ChildItem "assets" -File | ForEach-Object { Move-Item -LiteralPath $_.FullName -Destination "4_Media_And_Content\Assets_And_Images\" -Force } 
}

Write-Output "Restructure Complete."
tree /A /F
