# 构建产物到 artifacts/（供 IIS/Azure/裸机部署）+ 保留原位产物（供 pack-docker.ps1 消费）
# -DynamicEnv <file>：部署期用指定 dynamic-env.json 覆盖产物（官方推荐：同一产物换配置部署到
#   不同环境，无需重新构建）。文件结构见 react/dynamic-env.json。
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

function Apply-DynamicEnvOverride {
    param([string]$TargetDir, [string]$SourceFile)
    if ([string]::IsNullOrWhiteSpace($SourceFile)) { return }
    if (-not (Test-Path $SourceFile)) {
        Write-Host "  [WARN] DynamicEnv 文件不存在，忽略: $SourceFile" -ForegroundColor Yellow
        return
    }
    $dest = Join-Path $TargetDir "dynamic-env.json"
    Copy-Item $SourceFile $dest -Force
    Write-Host "  dynamic-env.json 已覆盖: $dest" -ForegroundColor DarkGray
}

if (Test-Path $artifactsFolder) {
    Remove-Item $artifactsFolder -Recurse -Force
}
New-Item -ItemType Directory -Force -Path $webArtifacts | Out-Null
New-Item -ItemType Directory -Force -Path $apiArtifacts | Out-Null

Write-Host "********* BUILDING React Application *********" -ForegroundColor Green
Set-Location $reactAppFolder
vp install
if ($LASTEXITCODE -ne 0) { Set-Location $currentFolder; exit $LASTEXITCODE }
vp run build
if ($LASTEXITCODE -ne 0) { Set-Location $currentFolder; exit $LASTEXITCODE }
Copy-Item -Path (Join-Path $reactAppFolder "dist\*") -Destination $webArtifacts -Recurse -Force
Apply-DynamicEnvOverride -TargetDir $webArtifacts -SourceFile $DynamicEnv

Write-Host "********* BUILDING Api.Host Application *********" -ForegroundColor Green
Set-Location $appFolder
dotnet publish -c Release
if ($LASTEXITCODE -ne 0) { Set-Location $currentFolder; exit $LASTEXITCODE }
Copy-Item -Path (Join-Path $appFolder "bin\Release\net10.0\publish\*") -Destination $apiArtifacts -Recurse -Force

# 合并 React 产物到发布输出的 wwwroot（合并部署）。只写发布目录、不碰源码 wwwroot，
# 因此构建产物不会混入 git。
if (-not $SkipWwwrootDeploy) {
    $publishWwwroot = Join-Path $apiArtifacts "wwwroot"
    $viteAssets = Join-Path $publishWwwroot "assets"
    if (Test-Path $viteAssets) { Remove-Item $viteAssets -Recurse -Force }
    Copy-Item -Path (Join-Path $reactAppFolder "dist\*") -Destination $publishWwwroot -Recurse -Force
    Apply-DynamicEnvOverride -TargetDir $publishWwwroot -SourceFile $DynamicEnv
    Write-Host "  React 产物已合并到发布输出 $publishWwwroot (源码 wwwroot 未改动)" -ForegroundColor DarkGray
}

# 确保 artifacts/api 可直接运行：复制/生成开发签名证书 + 密码（仅本机测试用，非生产证书）
if (-not $SkipDevCert) {
    $certPassPhrase = "d2003818-3ce6-4ee9-bfb0-f6389f991977"
    $apiPfx = Join-Path $apiArtifacts "openiddict.pfx"
    $sourcePfx = Join-Path $appFolder "openiddict.pfx"
    if (-not (Test-Path $apiPfx)) {
        if (Test-Path $sourcePfx) {
            Copy-Item $sourcePfx $apiPfx -Force
        } else {
            Set-Location $apiArtifacts
            dotnet dev-certs https -v -ep openiddict.pfx -p $certPassPhrase
            Set-Location $appFolder
        }
    }
    $secretsPath = Join-Path $apiArtifacts "appsettings.secrets.json"
    if (-not (Test-Path $secretsPath)) {
        # 开发用 Classroom 签名密钥：>=32 字符且不在 ProductionSigningKeyValidator 黑名单
        $classroomDevKey = "local-artifacts-classroom-signing-key-do-not-use-in-production-0123456789abcdef"
        @{
            AuthServer = @{ CertificatePassPhrase = $certPassPhrase }
            Classroom  = @{ TokenSigningKey = $classroomDevKey }
        } | ConvertTo-Json -Depth 5 | Set-Content $secretsPath -Encoding UTF8
    }
    Write-Host "  Dev cert + appsettings.secrets.json (AuthServer + Classroom keys) placed in artifacts/api (local run only)" -ForegroundColor DarkGray
}

Write-Host "********* BUILD ARTIFACTS COMPLETED *********" -ForegroundColor Green
Write-Host "  Web: $webArtifacts"
Write-Host "  Api: $apiArtifacts"
Set-Location $currentFolder
exit 0