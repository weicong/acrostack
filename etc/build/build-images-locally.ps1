param ($version='latest')

$currentFolder = $PSScriptRoot
$slnFolder = Join-Path $currentFolder "../../"
$appFolder = Join-Path $slnFolder "AcroStack"

$reactAppFolder = Join-Path $appFolder "../react"

Write-Host "********* BUILDING React Application *********" -ForegroundColor Green
Set-Location $reactAppFolder
npm install
npm run build
docker build -f Dockerfile -t acrostack-web:$version .

Write-Host "********* BUILDING Api.Host Application *********" -ForegroundColor Green
Set-Location $appFolder
dotnet publish -c Release
docker build -f Dockerfile.local -t acrostack-api:$version .


### ALL COMPLETED
Write-Host "********* COMPLETED *********" -ForegroundColor Green
Set-Location $currentFolder
exit $LASTEXITCODE
