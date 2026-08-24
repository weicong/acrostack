/**
 * 教师端 API 封装（OIDC 认证，走 Kubb 共享 client）。
 *
 * 仅做两件事：
 * 1. 解包 RequestResult（throwOnError 模式下成功返回 { status, data }）
 * 2. 统一提取 ABP 错误消息（RemoteServiceErrorResponse.error.message）
 *
 * 控制类操作（start/next/close/publish/finish）服务端会再次校验状态机与权限，
 * 前端禁用只是体验优化，不作为安全边界。
 */
import { classSessionCloseQuestion } from "@/api/clients/classSession/classSessionCloseQuestion";
import { classSessionCreate } from "@/api/clients/classSession/classSessionCreate";
import { classSessionCreatePresentationToken } from "@/api/clients/classSession/classSessionCreatePresentationToken";
import { classSessionFinish } from "@/api/clients/classSession/classSessionFinish";
import { classSessionGetList } from "@/api/clients/classSession/classSessionGetList";
import { classSessionGetSnapshot } from "@/api/clients/classSession/classSessionGetSnapshot";
import { classSessionNextQuestion } from "@/api/clients/classSession/classSessionNextQuestion";
import { classSessionPublishAnswer } from "@/api/clients/classSession/classSessionPublishAnswer";
import { classSessionPublishStatistics } from "@/api/clients/classSession/classSessionPublishStatistics";
import { classSessionStart } from "@/api/clients/classSession/classSessionStart";
import { quizGetList } from "@/api/clients/quiz/quizGetList";
import type { ClassroomDtosClassSessionDto } from "@/api/models/classroom/dtos/ClassSessionDto";
import type { ClassroomDtosQuizDto } from "@/api/models/classroom/dtos/QuizDto";
import type { ClassroomDtosTeacherSnapshotDto } from "@/api/models/classroom/dtos/TeacherSnapshotDto";
import type { ClassroomPresentationTokenResultDto } from "@/api/models/classroom/PresentationTokenResultDto";

interface PagedResult<T> {
  items?: T[] | null;
  totalCount?: number;
}

/** 提取 ABP 错误消息（axios 错误 → RemoteServiceErrorResponse.error.message）。 */
export function teacherApiErrorMessage(err: unknown): string {
  if (err && typeof err === "object" && "response" in err) {
    const data = (err as { response?: { data?: { error?: { message?: string } } } })?.response
      ?.data;
    const message = data?.error?.message;
    if (message) return message;
  }
  if (err instanceof Error) return err.message;
  return String(err);
}

/** 课堂列表（分页）。 */
export async function getTeacherSessions(skipCount = 0, maxResultCount = 50) {
  const res = await classSessionGetList({
    query: { SkipCount: skipCount, MaxResultCount: maxResultCount },
  });
  return (res.data ?? {}) as PagedResult<ClassroomDtosClassSessionDto>;
}

/** 试卷列表（创建课堂时选择）。 */
export async function getQuizzes(skipCount = 0, maxResultCount = 100) {
  const res = await quizGetList({
    query: { SkipCount: skipCount, MaxResultCount: maxResultCount },
  });
  return (res.data ?? {}) as PagedResult<ClassroomDtosQuizDto>;
}

/** 创建课堂（复制试卷题目为 SessionQuestions）。 */
export async function createSession(quizId: string) {
  const res = await classSessionCreate({ body: { quizId } });
  return res.data as ClassroomDtosClassSessionDto;
}

/** 教师快照（断线重连 / 刷新恢复）。 */
export async function getTeacherSnapshot(sessionId: string) {
  const res = await classSessionGetSnapshot({ path: { id: sessionId } });
  return res.data as ClassroomDtosTeacherSnapshotDto;
}

/** 开始课堂（Preparing → Waiting）。 */
export async function startSession(sessionId: string) {
  const res = await classSessionStart({ path: { id: sessionId } });
  return res.data as ClassroomDtosClassSessionDto;
}

/** 下一题（定位 Order = 当前题号 + 1 的 Pending 题目并开放）。 */
export async function openNextQuestion(sessionId: string, durationSeconds?: number) {
  const res = await classSessionNextQuestion({
    path: { id: sessionId },
    body: { durationSeconds },
  });
  return res.data as ClassroomDtosClassSessionDto;
}

/** 截止当前题。 */
export async function closeQuestion(sessionId: string, questionId: string) {
  const res = await classSessionCloseQuestion({
    path: { id: sessionId, questionId },
  });
  return res.data as ClassroomDtosClassSessionDto;
}

/** 公布匿名统计。 */
export async function publishStatistics(sessionId: string, questionId: string) {
  const res = await classSessionPublishStatistics({
    path: { id: sessionId, questionId },
  });
  return res.data as ClassroomDtosClassSessionDto;
}

/** 公布正确答案与解析。 */
export async function publishAnswer(sessionId: string, questionId: string) {
  const res = await classSessionPublishAnswer({
    path: { id: sessionId, questionId },
  });
  return res.data as ClassroomDtosClassSessionDto;
}

/** 结束课堂。 */
export async function finishSession(sessionId: string) {
  const res = await classSessionFinish({ path: { id: sessionId } });
  return res.data as ClassroomDtosClassSessionDto;
}

/** 生成投屏令牌（只读、短期；由教师驾驶舱打开投屏窗口时携带）。 */
export async function createPresentationToken(sessionId: string) {
  const res = await classSessionCreatePresentationToken({ path: { id: sessionId } });
  return res.data as ClassroomPresentationTokenResultDto;
}
