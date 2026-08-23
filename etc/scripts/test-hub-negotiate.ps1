# SignalR negotiate 冒烟测试（匿名 negotiate 应返回 401；课堂令牌应返回连接协商信息）
$base = 'https://localhost:44320'

# 1. 匿名 negotiate：应 401（Hub 要求课堂令牌或教师身份）
try {
    Invoke-RestMethod -Method Post -Uri "$base/signalr-hubs/classroom/negotiate?negotiateVersion=1" | Out-Null
    Write-Host "[FAIL] 匿名 negotiate 不应成功" -ForegroundColor Red
} catch {
    Write-Host "[OK] 匿名 negotiate 被拒 (HTTP $($_.Exception.Response.StatusCode.value__))" -ForegroundColor Green
}

# 2. 教师身份 negotiate（OpenIddict Bearer）：应成功
$t = Invoke-RestMethod -Method Post -Uri "$base/connect/token" -Body @{
    grant_type = 'password'; client_id = 'AcroStack_App'
    username   = 'admin'; password = '1q2w3E*'; scope = 'AcroStack'
}
$h = @{ Authorization = "Bearer $($t.access_token)" }
$neg = Invoke-RestMethod -Method Post -Uri "$base/signalr-hubs/classroom/negotiate?negotiateVersion=1" -Headers $h
Write-Host "[OK] 教师 negotiate 成功: connectionId=$($neg.connectionId) transports=$($neg.availableTransports.transport -join ',')" -ForegroundColor Green
