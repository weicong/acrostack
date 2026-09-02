# 构建产物到 artifacts/（供 IIS/Azure/裸机部署）+ 保留原位产物（供 pack-docker.ps1 消费）
# -DynamicEnv <file>：部署期用指定 dynamic-env.json 覆盖产物（官方推荐：同一产物换配置部署到
#   不同环境，无需重新构建）。文件结构见 react/dynamic-env.json。
# -SkipDevCert：跳过开发证书/secrets 注入（生产部署用，凭据必须经环境变量提供）。
# -SkipWwwrootDeploy：不把 React 产物合并进 API wwwroot（前后端分离部署时用）。
param (
    [string]$OutputDir = "artifacts",
    [switch]$SkipDevCert,
    [switch]$SkipWwwrootDeploy,
    [string]$DynamicEnv = ""
)

$currentFolder = $PSScriptRoot
$slnFolder = Join-Path $currentFolder "../../"
$appFolder = Join-Path $slnFolder "main/AcroStack"
$reactAppFolder = Join-Path $slnFolder "react"
$artifactsFolder = Join-Path $currentFolder $OutputDir
$webArtifacts = Join-Path $artifactsFolder "web"
$apiArtifacts = Join-Path $artifactsFolder "api"

# 失败即停：透传原生命令退出码（供 CI / build-images-locally.ps1 感知），并恢复工作目录
function Assert-LastExit {
    param([string]$Step)
    if ($LASTEXITCODE -eq 0) { return }
    Write-Host "[FAIL] $Step (exit $LASTEXITCODE)" -ForegroundColor Red
    Set-Location $currentFolder
    exit $LASTEXITCODE
}

# dynamic-env.json 覆盖（同一产物换配置部署多环境）
function Copy-DynamicEnv {
    param([string]$TargetDir)
    if ([string]::IsNullOrWhiteSpace($DynamicEnv)) { return }
    if (-not (Test-Path $DynamicEnv)) {
        Write-Host "  [WARN] DynamicEnv 文件不存在，忽略: $DynamicEnv" -ForegroundColor Yellow
        return
    }
    Copy-Item $DynamicEnv (Join-Path $TargetDir "dynamic-env.json") -Force
    Write-Host "  dynamic-env.json 已覆盖: $TargetDir" -ForegroundColor DarkGray
}

# 每次全量重建：先清空产物目录，避免陈旧文件（证书/secrets/历史前端资产）混入本次部署
if (Test-Path $artifactsFolder) {
    Remove-Item $artifactsFolder -Recurse -Force
}
New-Item -ItemType Directory -Force -Path $webArtifacts | Out-Null
New-Item -ItemType Directory -Force -Path $apiArtifacts | Out-Null

# ── 1. React 前端 ──────────────────────────────────────────────
Write-Host "********* BUILDING React Application *********" -ForegroundColor Green
Set-Location $reactAppFolder
vp install
Assert-LastExit "vp install"
vp run build
Assert-LastExit "vp run build"

$reactDist = Join-Path $reactAppFolder "dist"
if (-not (Test-Path (Join-Path $reactDist "index.html"))) {
    Write-Host "[FAIL] React 构建产物缺失（dist/index.html 不存在）: $reactDist" -ForegroundColor Red
    Set-Location $currentFolder
    exit 1
}
Copy-Item (Join-Path $reactDist "*") $webArtifacts -Recurse -Force
Copy-DynamicEnv $webArtifacts

# ── 2. API Host ────────────────────────────────────────────────
Write-Host "********* BUILDING Api.Host Application *********" -ForegroundColor Green
Set-Location $appFolder
# dotnet publish 是增量操作、从不清空输出目录：历史残留（如旧版 wwwroot 前端产物）
# 会被 Copy-Item 原样带进部署包。发布前先清空，保证产物 = 本次构建。
$apiPublish = Join-Path $appFolder "bin\Release\net10.0\publish"
if (Test-Path $apiPublish) { Remove-Item $apiPublish -Recurse -Force }
dotnet publish -c Release
Assert-LastExit "dotnet publish"

if (-not (Test-Path (Join-Path $apiPublish "AcroStack.dll"))) {
    Write-Host "[FAIL] API 发布产物缺失（AcroStack.dll 不存在）: $apiPublish" -ForegroundColor Red
    Set-Location $currentFolder
    exit 1
}
Copy-Item (Join-Path $apiPublish "*") $apiArtifacts -Recurse -Force

# ── 3. 合并部署（React 产物 → API wwwroot）────────────────────
# 只写产物目录、不碰源码 wwwroot，因此构建产物不会混入 git。
if (-not $SkipWwwrootDeploy) {
    $publishWwwroot = Join-Path $apiArtifacts "wwwroot"
    New-Item -ItemType Directory -Force -Path $publishWwwroot | Out-Null
    # Vite 产物按内容哈希命名：清空旧 assets，避免历史版本堆积
    $viteAssets = Join-Path $publishWwwroot "assets"
    if (Test-Path $viteAssets) { Remove-Item $viteAssets -Recurse -Force }
    Copy-Item (Join-Path $reactDist "*") $publishWwwroot -Recurse -Force
    Copy-DynamicEnv $publishWwwroot
    Write-Host "  React 产物已合并到 $publishWwwroot（源码 wwwroot 未改动）" -ForegroundColor DarkGray
}

# ── 4. 本地运行凭据（仅本机测试；生产凭据必须经环境变量注入）──
if (-not $SkipDevCert) {
    # 开发签名证书：优先复用本机已有 openiddict.pfx，否则现场生成；
    # -ep 直接输出绝对路径，无需切换工作目录。
    $certPassPhrase = "d2003818-3ce6-4ee9-bfb0-f6389f991977"
    $apiPfx = Join-Path $apiArtifacts "openiddict.pfx"
    $sourcePfx = Join-Path $appFolder "openiddict.pfx"
    if (Test-Path $sourcePfx) {
        Copy-Item $sourcePfx $apiPfx -Force
    } else {
        dotnet dev-certs https -v -ep $apiPfx -p $certPassPhrase
        Assert-LastExit "dotnet dev-certs"
    }

    # Classroom 签名密钥：每次构建随机生成——不落仓库、非固定值，
    # 从根上杜绝"已知默认密钥逃逸 ProductionSigningKeyValidator 校验"的缺口；
    # 代价是重建产物后已签发的课堂令牌失效，本地测试可接受。
    $classroomKey = [Convert]::ToBase64String(
        [System.Security.Cryptography.RandomNumberGenerator]::GetBytes(48))
    @{
        AuthServer = @{ CertificatePassPhrase = $certPassPhrase }
        Classroom  = @{ TokenSigningKey = $classroomKey }
    } | ConvertTo-Json -Depth 5 | Set-Content (Join-Path $apiArtifacts "appsettings.secrets.json") -Encoding UTF8
    Write-Host "  Dev cert + appsettings.secrets.json (random Classroom key) placed in artifacts/api (local run only)" -ForegroundColor DarkGray
}

Write-Host "********* BUILD ARTIFACTS COMPLETED *********" -ForegroundColor Green
Write-Host "  Web: $webArtifacts"
Write-Host "  Api: $apiArtifacts"
Set-Location $currentFolder
exit 0
