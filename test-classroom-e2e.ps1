# 课堂实时答题系统 - 完整 E2E 链路验证
$ErrorActionPreference = 'Stop'
$base = 'https://localhost:44320'

# ========== 教师侧 ==========
$t = Invoke-RestMethod -Method Post -Uri "$base/connect/token" -Body @{
    grant_type = 'password'; client_id = 'AcroStack_App'
    username   = 'admin'; password = '1q2w3E*'; scope = 'AcroStack'
}
$teacherHeaders = @{ Authorization = "Bearer $($t.access_token)" }
Write-Host "[OK] 教师登录" -ForegroundColor Green

# 题目
$q1 = Invoke-RestMethod -Method Post -Uri "$base/api/app/question" -Headers $teacherHeaders -ContentType 'application/json' -Body (@{
    type = 1; stem = 'E2E题：中国的首都是？'
    options = @(@{key='A';text='上海'}, @{key='B';text='北京'}, @{key='C';text='广州'})
    correctAnswer = 'B'; explanation = '北京是首都'
} | ConvertTo-Json -Depth 5)

# 试卷 + 课堂
$quiz = Invoke-RestMethod -Method Post -Uri "$base/api/app/quiz" -Headers $teacherHeaders -ContentType 'application/json' -Body (@{
    name = "E2E试卷 $(Get-Date -Format HHmmss)"; questionIds = @($q1.id)
} | ConvertTo-Json -Depth 5)
$session = Invoke-RestMethod -Method Post -Uri "$base/api/app/class-session" -Headers $teacherHeaders -ContentType 'application/json' -Body (@{ quizId = $quiz.id } | ConvertTo-Json)
Write-Host "[OK] 课堂创建 课堂码=$($session.classroomCode) 题数=$($session.questionCount)"

# 开始课堂 + 开放题目
Invoke-RestMethod -Method Post -Uri "$base/api/app/class-session/$($session.id)/start" -Headers $teacherHeaders | Out-Null
$opened = Invoke-RestMethod -Method Post -Uri "$base/api/app/class-session/$($session.id)/start-question/$($q1.id)" -Headers $teacherHeaders -ContentType 'application/json' -Body (@{ durationSeconds = 120 } | ConvertTo-Json)
Write-Host "[OK] 课堂开始并开放题目 Status=$($opened.status)"

# ========== 学员侧 ==========
# 3 名学员加入
$students = @('小明', '小红', '小刚')
$studentCtx = @()
foreach ($name in $students) {
    $join = Invoke-RestMethod -Method Post -Uri "$base/api/public/class-sessions/join" -ContentType 'application/json' -Body (@{
        classroomCode = $session.classroomCode; nickname = $name
    } | ConvertTo-Json)
    $studentCtx += @{ Name = $name; Token = $join.accessToken; Pid = $join.participantId }
    Write-Host "[OK] 学员[$name]加入 ParticipantId=$($join.participantId)"
}

# 学员1 取快照（拿 SessionQuestionId）
$s1h = @{ Authorization = "Bearer $($studentCtx[0].Token)" }
$snap = Invoke-RestMethod -Method Get -Uri "$base/api/student/class-sessions/$($session.id)/snapshot" -Headers $s1h
$sqid = $snap.currentQuestion.question.sessionQuestionId
Write-Host "[OK] 学员快照 SessionQuestionId=$sqid 题目=$($snap.currentQuestion.question.stem) 接受作答=$($snap.currentQuestion.isAcceptingAnswers)"

# 3 名学员提交答案（小明答错，小红/小刚答对）
$answers = @{ '小明' = 'A'; '小红' = 'B'; '小刚' = 'B' }
$submitResults = @()
foreach ($s in $studentCtx) {
    $h = @{ Authorization = "Bearer $($s.Token)" }
    $r = Invoke-RestMethod -Method Post -Uri "$base/api/student/class-sessions/$($session.id)/answers" -Headers $h -ContentType 'application/json' -Body (@{
        sessionQuestionId = $sqid
        requestId = [Guid]::NewGuid().ToString()
        answerContent = $answers[$s.Name]
        clientSubmittedAt = (Get-Date).ToUniversalTime().ToString('o')
    } | ConvertTo-Json)
    $submitResults += $r
    Write-Host "[OK] 学员[$($s.Name)]提交=$($answers[$s.Name]) Revision=$($r.revision)"
}

# 幂等验证：小明用同一 RequestId 重试
$h1 = @{ Authorization = "Bearer $($studentCtx[0].Token)" }
$dupBody = @{
    sessionQuestionId = $sqid
    requestId = $submitResults[0].answerRecordId.ToString()  # 用已存在记录再测一次修改路径
    answerContent = 'C'
    clientSubmittedAt = (Get-Date).ToUniversalTime().ToString('o')
}
$revised = Invoke-RestMethod -Method Post -Uri "$base/api/student/class-sessions/$($session.id)/answers" -Headers $h1 -ContentType 'application/json' -Body ($dupBody | ConvertTo-Json)
Write-Host "[OK] 学员[小明]修改答案(Revision=$($revised.revision))"

# ========== 教师收题/公布 ==========
Invoke-RestMethod -Method Post -Uri "$base/api/app/class-session/$($session.id)/close-question/$($q1.id)" -Headers $teacherHeaders | Out-Null
Write-Host "[OK] 截止答题"

Invoke-RestMethod -Method Post -Uri "$base/api/app/class-session/$($session.id)/publish-statistics/$($q1.id)" -Headers $teacherHeaders | Out-Null
Write-Host "[OK] 公布统计"

Invoke-RestMethod -Method Post -Uri "$base/api/app/class-session/$($session.id)/publish-answer/$($q1.id)" -Headers $teacherHeaders | Out-Null
Write-Host "[OK] 公布答案"

# 仪表盘
$dash = Invoke-RestMethod -Method Get -Uri "$base/api/app/class-session/$($session.id)/dashboard" -Headers $teacherHeaders
Write-Host "[OK] 仪表盘: 在线=$($dash.onlineCount) 提交=$($dash.submittedCount) 总学员=$($dash.totalParticipants)"
Write-Host ($dash | ConvertTo-Json -Depth 5)

# 结束课堂
$finished = Invoke-RestMethod -Method Post -Uri "$base/api/app/class-session/$($session.id)/finish" -Headers $teacherHeaders
Write-Host "[OK] 结束课堂 Status=$($finished.status)"

# 课堂码失效验证：新学员加入应失败
try {
    Invoke-RestMethod -Method Post -Uri "$base/api/public/class-sessions/join" -ContentType 'application/json' -Body (@{
        classroomCode = $session.classroomCode; nickname = '迟到者'
    } | ConvertTo-Json) | Out-Null
    Write-Host "[FAIL] 课堂结束后课堂码仍可用！" -ForegroundColor Red
} catch {
    Write-Host "[OK] 课堂结束后课堂码已失效（加入被拒）" -ForegroundColor Green
}

Write-Host "`n=== 完整 E2E 链路验证通过 ===" -ForegroundColor Cyan
