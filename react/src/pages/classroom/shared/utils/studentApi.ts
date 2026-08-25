/**
 * 学员端/投屏端 API（课堂短期令牌认证）。
 *
 * 这些端点不使用 OIDC 会话：学员匿名加入后持课堂 JWT 调用
 * /api/student/* 与 /api/classroom-presentation/*。
 * 不走 Kubb 共享 client（其拦截器会附加 OIDC Bearer，与课堂令牌冲突），
 * 此处用 fetch 直连并显式携带 Authorization: Bearer <classroomToken>。
 */
import { getApiBaseUrl } from "@/lib/runtimeConfig";
import type { ClassroomDtosJoinResultDto } from "@/api/models/classroom/dtos/JoinResultDto";
import type { ClassroomDtosStudentSnapshotDto } from "@/api/models/classroom/dtos/StudentSnapshotDto";
import type { ClassroomDtosSubmitAnswerInputDto } from "@/api/models/classroom/dtos/SubmitAnswerInputDto";
import type { ClassroomDtosSubmitAnswerResultDto } from "@/api/models/classroom/dtos/SubmitAnswerResultDto";
import type { ClassroomDtosPresentationSnapshotDto } from "@/api/models/classroom/dtos/PresentationSnapshotDto";
import type { ClassroomDtosJoinClassroomInputDto } from "@/api/models/classroom/dtos/JoinClassroomInputDto";
import type { ClassroomDtosStudentAnswerHistoryDto } from "@/api/models/classroom/dtos/StudentAnswerHistoryDto";

export class ClassroomApiError extends Error {
  /** ABP 错误码（如 Classroom:ClassroomCodeNotFound）。 */
  code: string | null;
  status: number;

  constructor(message: string, code: string | null, status: number) {
    super(message);
    this.name = "ClassroomApiError";
    this.code = code;
    this.status = status;
  }
}

async function request<T>(
  method: "GET" | "POST",
  path: string,
  token: string | null,
  body?: unknown,
): Promise<T> {
  const headers: Record<string, string> = {};
  if (token) headers.Authorization = `Bearer ${token}`;
  if (body !== undefined) headers["Content-Type"] = "application/json";

  const res = await fetch(`${getApiBaseUrl()}${path}`, {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });

  if (!res.ok) {
    let message = `HTTP ${res.status}`;
    let code: string | null = null;
    try {
      const errorBody = (await res.json()) as {
        error?: { message?: string; code?: string | null };
      };
      if (errorBody?.error) {
        message = errorBody.error.message ?? message;
        code = errorBody.error.code ?? null;
      }
    } catch {
      // 非 JSON 错误体：保留 HTTP 状态信息
    }
    throw new ClassroomApiError(message, code, res.status);
  }

  return (await res.json()) as T;
}

/** 加入课堂（匿名）。返回课堂短期令牌。 */
export function joinClassroom(input: ClassroomDtosJoinClassroomInputDto) {
  return request<ClassroomDtosJoinResultDto>(
    "POST",
    "/api/public/class-sessions/join",
    null,
    input,
  );
}

/** 学员快照（断线重连 / 刷新恢复）。 */
export function getStudentSnapshot(sessionId: string, token: string) {
  return request<ClassroomDtosStudentSnapshotDto>(
    "GET",
    `/api/student/class-sessions/${sessionId}/snapshot`,
    token,
  );
}

/** 本人本课堂答题记录（逐题回顾；正确答案仅公布后下发）。 */
export function getMyAnswerHistory(sessionId: string, token: string) {
  return request<ClassroomDtosStudentAnswerHistoryDto>(
    "GET",
    `/api/student/class-sessions/${sessionId}/my-answers`,
    token,
  );
}

/** 提交/修改答案（幂等：相同 RequestId 返回首次结果）。 */
export function submitAnswer(
  sessionId: string,
  token: string,
  input: ClassroomDtosSubmitAnswerInputDto,
) {
  return request<ClassroomDtosSubmitAnswerResultDto>(
    "POST",
    `/api/student/class-sessions/${sessionId}/answers`,
    token,
    input,
  );
}

/** 投屏快照（只读匿名数据）。 */
export function getPresentationSnapshot(sessionId: string, token: string) {
  return request<ClassroomDtosPresentationSnapshotDto>(
    "GET",
    `/api/presentation/class-sessions/${sessionId}/snapshot`,
    token,
  );
}

/** 提取 ABP 错误码的用户可读消息（简单映射；详细文案由后端本地化下发）。 */
export function classroomErrorMessage(err: unknown): string {
  if (err instanceof ClassroomApiError) {
    return err.message;
  }
  if (err instanceof Error) return err.message;
  return String(err);
}
