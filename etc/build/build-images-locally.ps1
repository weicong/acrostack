# 便捷入口：等价于 build-artifacts.ps1 + pack-docker.ps1（向后兼容）
param ($version='latest')

$currentFolder = $PSScriptRoot

& (Join-Path $currentFolder "build-artifacts.ps1")
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

& (Join-Path $currentFolder "pack-docker.ps1") -Version $version
exit $LASTEXITCODE
