# 课堂实时答题系统 - SessionQuestions 复制修复验证脚本
$ErrorActionPreference = 'Stop'
$base = 'https://localhost:44320'

# 1. 教师登录（OpenIddict password flow）
$tokenBody = @{
    grant_type    = 'password'
    client_id     = 'AcroStack_App'
    username      = 'admin'
    password      = '1q2w3E*'
    scope         = 'AcroStack'
}
$tokenResp = Invoke-RestMethod -Method Post -Uri "$base/connect/token" -Body $tokenBody
$headers = @{ Authorization = "Bearer $($tokenResp.access_token)" }
Write-Host "[OK] 教师登录成功" -ForegroundColor Green

# 2. 创建题目 A（单选）
$q1Body = @'
{
  "type": 0,
  "stem": "验证题1：1+1=?",
  "options": [
    {"key": "A", "text": "1"},
    {"key": "B", "text": "2"},
    {"key": "C", "text": "3"}
  ],
  "correctAnswer": "B",
  "explanation": "基础加法"
}
'@ | ConvertFrom-Json
$q1 = Invoke-RestMethod -Method Post -Uri "$base/api/app/question" -Headers $headers -ContentType 'application/json' -Body ($q1Body | ConvertTo-Json -Depth 5)
Write-Host "[OK] 题目1创建: $($q1.id)"

# 3. 创建题目 B（判断）
$q2Body = @'
{
  "type": 1,
  "stem": "验证题2：地球是圆的",
  "options": [
    {"key": "A", "text": "对"},
    {"key": "B", "text": "错"}
  ],
  "correctAnswer": "A",
  "explanation": "常识"
}
'@ | ConvertFrom-Json
$q2 = Invoke-RestMethod -Method Post -Uri "$base/api/app/question" -Headers $headers -ContentType 'application/json' -Body ($q2Body | ConvertTo-Json -Depth 5)
Write-Host "[OK] 题目2创建: $($q2.id)"

# 4. 创建试卷（含 2 题）
$quizBody = @{
    name        = "修复验证试卷 $(Get-Date -Format HHmmss)"
    description = "SessionQuestions 复制修复验证"
    questionIds = @($q1.id, $q2.id)
}
$quiz = Invoke-RestMethod -Method Post -Uri "$base/api/app/quiz" -Headers $headers -ContentType 'application/json' -Body ($quizBody | ConvertTo-Json -Depth 5)
Write-Host "[OK] 试卷创建: $($quiz.id) 题目数=$($quiz.questionIds.Count)"
if ($quiz.questionIds.Count -ne 2) { throw "试卷应包含 2 题，实际 $($quiz.questionIds.Count)" }

# 5. 创建课堂（核心验证点：题目应复制为 SessionQuestions）
$sessionBody = @{ quizId = $quiz.id }
$session = Invoke-RestMethod -Method Post -Uri "$base/api/app/class-session" -Headers $headers -ContentType 'application/json' -Body ($sessionBody | ConvertTo-Json)
Write-Host "[OK] 课堂创建: $($session.id) 课堂码=$($session.classroomCode)"
Write-Host "     QuestionCount=$($session.questionCount) Status=$($session.status)"

if ($session.questionCount -eq 2) {
    Write-Host "[PASS] SessionQuestions 复制修复生效！课堂包含 $($session.questionCount) 道题目" -ForegroundColor Green
} else {
    Write-Host "[FAIL] 课堂题目数=$($session.questionCount)，应为 2" -ForegroundColor Red
    throw "SessionQuestions 复制仍然失败"
}

# 6. 开始课堂 + 开放第一题（验证状态机流转）
$started = Invoke-RestMethod -Method Post -Uri "$base/api/app/class-session/$($session.id)/start" -Headers $headers
Write-Host "[OK] 课堂开始: Status=$($started.status)"

$openBody = @{ durationSeconds = 60 }
$openQ = Invoke-RestMethod -Method Post -Uri "$base/api/app/class-session/$($session.id)/start-question/$($q1.id)" -Headers $headers -ContentType 'application/json' -Body ($openBody | ConvertTo-Json)
Write-Host "[OK] 开放题目1: Status=$($openQ.status) 当前题号=$($openQ.currentQuestionNumber)"

Write-Host "`n=== 验证完成 ===" -ForegroundColor Cyan
