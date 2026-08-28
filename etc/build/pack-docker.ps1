# 消费 build-artifacts.ps1 产物打 Docker 镜像（仅 Docker 部署时调用）
param (
    [string]$Version = "latest"
)

$currentFolder = $PSScriptRoot
$slnFolder = Join-Path $currentFolder "../../"
$appFolder = Join-Path $slnFolder "main/AcroStack"
$reactAppFolder = Join-Path $slnFolder "react"

$apiPublishDir = Join-Path $appFolder "bin\Release\net10.0\publish"
if (-not (Test-Path $apiPublishDir)) {
    Write-Host "[FAIL] API publish 产物不存在: $apiPublishDir" -ForegroundColor Red
    Write-Host "       请先运行 build-artifacts.ps1" -ForegroundColor Yellow
    exit 1
}

Write-Host "********* PACKING React Docker Image *********" -ForegroundColor Green
Set-Location $reactAppFolder
docker build -f Dockerfile -t acrostack-web:$Version .
if ($LASTEXITCODE -ne 0) { Set-Location $currentFolder; exit $LASTEXITCODE }

Write-Host "********* PACKING Api.Host Docker Image *********" -ForegroundColor Green
Set-Location $appFolder
docker build -f Dockerfile.local -t acrostack-api:$Version .
if ($LASTEXITCODE -ne 0) { Set-Location $currentFolder; exit $LASTEXITCODE }

Write-Host "********* DOCKER IMAGES COMPLETED *********" -ForegroundColor Green
Write-Host "  acrostack-web:$Version"
Write-Host "  acrostack-api:$Version"
Set-Location $currentFolder
exit 0