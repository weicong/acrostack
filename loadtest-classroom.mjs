#!/usr/bin/env node
/**
 * 课堂实时答题系统 — 100 人并发压测脚本（提示词十五节"并发测试"）。
 *
 * 场景：
 *   1. 模拟 N 名学员在 joinWindowSeconds 内集中加入（默认 100 人 / 10 秒）
 *   2. 模拟 N 名学员在 submitWindowSeconds 内集中提交（默认 100 人 / 2 秒）
 *   3. 模拟网络重试：部分学员用相同 RequestId 重复提交（验证幂等，不得产生重复记录）
 *   4. 教师仪表盘核对：totalParticipants == N，submittedCount == 去重后成功提交数
 *
 * 目标（提示词十五节）：
 *   - 提交确认尽量在 500ms 内返回
 *   - 重复请求不得产生重复记录
 *
 * 用法：
 *   node loadtest-classroom.mjs [--base https://localhost:44320] [--students 100]
 *       [--join-window 10] [--submit-window 2] [--retry-ratio 0.2]
 *       [--username admin] [--password 1q2w3E*]
 *
 * 注意：本地开发证书不受信，脚本内全局关闭 TLS 校验（仅限本地压测）。
 */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const args = processArgArgs(process.argv.slice(2));
const BASE = args.base ?? "https://localhost:44320";
const STUDENT_COUNT = Number(args.students ?? 100);
const JOIN_WINDOW_S = Number(args["join-window"] ?? 10);
const SUBMIT_WINDOW_S = Number(args["submit-window"] ?? 2);
const RETRY_RATIO = Number(args["retry-ratio"] ?? 0.2);
const USERNAME = args.username ?? "admin";
const PASSWORD = args.password ?? "1q2w3E*";

/** 百分位（线性插值） */
function percentile(sorted, p) {
  if (sorted.length === 0) return 0;
  const idx = (sorted.length - 1) * p;
  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  if (lo === hi) return sorted[lo];
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (idx - lo);
}

function stats(msValues) {
  const sorted = [...msValues].sort((a, b) => a - b);
  return {
    count: sorted.length,
    p50: Math.round(percentile(sorted, 0.5)),
    p90: Math.round(percentile(sorted, 0.9)),
    p99: Math.round(percentile(sorted, 0.99)),
    max: sorted.length ? Math.round(sorted[sorted.length - 1]) : 0,
  };
}

function printStats(label, s) {
  console.log(
    `  ${label}: n=${s.count} p50=${s.p50}ms p90=${s.p90}ms p99=${s.p99}ms max=${s.max}ms`,
  );
}

function processArgArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) {
      const key = argv[i].slice(2);
      if (i + 1 < argv.length && !argv[i + 1].startsWith("--")) {
        out[key] = argv[++i];
      } else {
        out[key] = "true";
      }
    }
  }
  return out;
}

async function api(method, path, { token, body } = {}) {
  const headers = {};
  if (token) headers.Authorization = `Bearer ${token}`;
  if (body !== undefined) headers["Content-Type"] = "application/json";
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) {
    const message = data?.error?.message ?? `HTTP ${res.status}`;
    throw new Error(message);
  }
  return data;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const rand = (min, max) => min + Math.random() * (max - min);

async function main() {
  console.log(`=== 课堂并发压测 ===`);
  console.log(`目标: ${BASE}  学员数: ${STUDENT_COUNT}`);
  console.log(
    `加入窗口: ${JOIN_WINDOW_S}s  提交窗口: ${SUBMIT_WINDOW_S}s  重试比例: ${RETRY_RATIO}\n`,
  );

  // ---------- 教师准备 ----------
  console.log("[1/6] 教师登录并准备课堂…");
  const form = new URLSearchParams({
    grant_type: "password",
    client_id: "AcroStack_App",
    username: USERNAME,
    password: PASSWORD,
    scope: "AcroStack",
  });
  const tokenRes = await fetch(`${BASE}/connect/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
  });
  if (!tokenRes.ok) throw new Error(`教师登录失败: HTTP ${tokenRes.status}`);
  const teacherToken = (await tokenRes.json()).access_token;
  const T = { token: teacherToken };

  const stamp = Date.now();
  const question = await api("POST", "/api/app/question", {
    token: teacherToken,
    body: {
      type: 1,
      stem: `压测题：以下哪项是 ABP 框架的模块化机制？（${stamp}）`,
      options: [
        { key: "A", text: "Module 类与依赖注入" },
        { key: "B", text: "存储过程" },
        { key: "C", text: "触发器" },
      ],
      correctAnswer: "A",
      explanation: "ABP 通过 Module 类组织功能并通过 DI 装配。",
    },
  });
  const quiz = await api("POST", "/api/app/quiz", {
    token: teacherToken,
    body: { name: `压测试卷 ${stamp}`, questionIds: [question.id] },
  });
  const session = await api("POST", "/api/app/class-session", {
    token: teacherToken,
    body: { quizId: quiz.id },
  });
  await api("POST", `/api/app/class-session/${session.id}/start`, T);
  await api("POST", `/api/app/class-session/${session.id}/next-question`, {
    ...T,
    body: { durationSeconds: 180 },
  });
  console.log(`  课堂码=${session.classroomCode} sessionId=${session.id}`);

  // ---------- 学员集中加入 ----------
  console.log(`[2/6] ${STUDENT_COUNT} 名学员在 ${JOIN_WINDOW_S}s 内加入…`);
  const joinStart = Date.now();
  const joinTasks = Array.from({ length: STUDENT_COUNT }, (_, i) =>
    (async () => {
      await sleep(rand(0, JOIN_WINDOW_S * 1000));
      const t0 = performance.now();
      try {
        const result = await api("POST", "/api/public/class-sessions/join", {
          body: { classroomCode: session.classroomCode, nickname: `压测学员${i + 1}` },
        });
        return { ok: true, ms: performance.now() - t0, token: result.accessToken, index: i };
      } catch (err) {
        return { ok: false, ms: performance.now() - t0, error: String(err.message), index: i };
      }
    })(),
  );
  const joinResults = await Promise.all(joinTasks);
  const joinOk = joinResults.filter((r) => r.ok);
  const joinFail = joinResults.filter((r) => !r.ok);
  printStats(`加入延迟（成功 ${joinOk.length}/${STUDENT_COUNT}）`, stats(joinOk.map((r) => r.ms)));
  joinFail.slice(0, 5).forEach((f) => console.log(`  加入失败示例: ${f.error}`));
  const joinElapsed = Date.now() - joinStart;

  if (joinOk.length === 0) throw new Error("全部学员加入失败，终止压测");

  // ---------- 学员取快照（拿 sessionQuestionId） ----------
  console.log("[3/6] 学员并行获取快照…");
  const snapshotSample = await api(
    "GET",
    `/api/student/class-sessions/${session.id}/snapshot`,
    { token: joinOk[0].token },
  );
  const sessionQuestionId = snapshotSample.currentQuestion?.question?.sessionQuestionId;
  if (!sessionQuestionId) throw new Error("快照中无开放题目，终止压测");
  console.log(`  sessionQuestionId=${sessionQuestionId}`);

  // ---------- 学员集中提交（含重复 RequestId 重试） ----------
  console.log(`[4/6] ${joinOk.length} 名学员在 ${SUBMIT_WINDOW_S}s 内提交（${RETRY_RATIO * 100}% 模拟重试）…`);
  const submitTasks = joinOk.map((s, i) =>
    (async () => {
      await sleep(rand(0, SUBMIT_WINDOW_S * 1000));
      const answer = ["A", "B", "C"][i % 3];
      const requestId = crypto.randomUUID();
      const submit = async (rid) => {
        const t0 = performance.now();
        const result = await api("POST", `/api/student/class-sessions/${session.id}/answers`, {
          token: s.token,
          body: {
            sessionQuestionId,
            requestId: rid,
            answerContent: answer,
            clientSubmittedAt: new Date().toISOString(),
          },
        });
        return { ms: performance.now() - t0, result };
      };
      try {
        const first = await submit(requestId);
        // 网络重试模拟：固定比例学员用同一 requestId 再提交一次
        let retry = null;
        if (i % Math.max(1, Math.round(1 / RETRY_RATIO)) === 0) {
          retry = await submit(requestId);
        }
        return {
          ok: true,
          firstMs: first.ms,
          firstRecordId: first.result.answerRecordId,
          firstRevision: first.result.revision,
          retryRecordId: retry?.result.answerRecordId ?? null,
          retryRevision: retry?.result.revision ?? null,
        };
      } catch (err) {
        return { ok: false, error: String(err.message) };
      }
    })(),
  );
  const submitResults = await Promise.all(submitTasks);
  const submitOk = submitResults.filter((r) => r.ok);
  const submitFail = submitResults.filter((r) => !r.ok);
  printStats(
    `提交延迟（成功 ${submitOk.length}/${joinOk.length}）`,
    stats(submitOk.map((r) => r.firstMs)),
  );
  submitFail.slice(0, 5).forEach((f) => console.log(`  提交失败示例: ${f.error}`));

  // ---------- 幂等核对：重复 RequestId 必须返回同一记录 ----------
  console.log("[5/6] 幂等核对（重复 RequestId 不产生重复记录）…");
  const retried = submitOk.filter((r) => r.retryRecordId !== null);
  const dupViolations = retried.filter((r) => r.retryRecordId !== r.firstRecordId);
  if (retried.length === 0) {
    console.log("  无重试样本（调整 --retry-ratio）");
  } else if (dupViolations.length > 0) {
    console.log(`  [FAIL] ${dupViolations.length} 条重复请求产生了新记录！`);
  } else {
    console.log(`  [OK] ${retried.length} 次重试均返回同一 AnswerRecordId（幂等成立）`);
  }

  // ---------- 教师仪表盘核对 ----------
  console.log("[6/6] 教师仪表盘核对…");
  const dash = await api("GET", `/api/app/class-session/${session.id}/dashboard`, T);
  const submitted = dash.statistics?.submittedCount ?? 0;
  const total = dash.totalParticipants ?? 0;
  const joinCorrect = total === joinOk.length;
  const submitCorrect = submitted === submitOk.length;
  console.log(`  totalParticipants=${total}（期望 ${joinOk.length}）${joinCorrect ? "[OK]" : "[FAIL]"}`);
  console.log(`  submittedCount=${submitted}（期望 ${submitOk.length}）${submitCorrect ? "[OK]" : "[FAIL]"}`);

  // ---------- 收尾：截止并结束课堂 ----------
  await api("POST", `/api/app/class-session/${session.id}/close-question/${question.id}`, T);
  await api("POST", `/api/app/class-session/${session.id}/finish`, T);

  // ---------- 汇总 ----------
  const submitStats = stats(submitOk.map((r) => r.firstMs));
  console.log("\n=== 压测汇总 ===");
  console.log(`加入阶段: ${joinOk.length}/${STUDENT_COUNT} 成功，实际耗时 ${(joinElapsed / 1000).toFixed(1)}s`);
  printStats("加入延迟", stats(joinOk.map((r) => r.ms)));
  printStats("提交延迟", submitStats);
  const within500 = submitOk.filter((r) => r.firstMs <= 500).length;
  console.log(
    `提交 500ms 内返回: ${within500}/${submitOk.length}（${Math.round((within500 / Math.max(1, submitOk.length)) * 100)}%）`,
  );
  console.log(
    `幂等: ${retried.length > 0 && dupViolations.length === 0 ? "通过" : "无样本/失败"}`,
  );
  const pass =
    joinFail.length === 0 &&
    submitFail.length === 0 &&
    dupViolations.length === 0 &&
    joinCorrect &&
    submitCorrect;
  console.log(`\n结果: ${pass ? "PASS ✅" : "FAIL ❌"}`);
  process.exitCode = pass ? 0 : 1;
}

main().catch((err) => {
  console.error(`压测异常终止: ${err.message ?? err}`);
  process.exitCode = 1;
});
