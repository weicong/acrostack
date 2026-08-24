/**
 * 学员课堂会话持久化（localStorage）。
 *
 * 学员无 OIDC 登录：加入课堂后获得课堂短期令牌 + ParticipantId，
 * 刷新页面 / 断线重连后凭此恢复（提示词九节：快照恢复）。
 * 存储按 sessionId 隔离，令牌过期后需重新加入。
 */

export interface StoredStudentSession {
  sessionId: string;
  participantId: string;
  nickname: string;
  accessToken: string;
  expiresInSeconds: number;
  /** 本地存储时间（ms epoch），用于粗略判断令牌是否临近过期。 */
  storedAt: number;
}

const STORAGE_PREFIX = "classroom.student.";

function key(sessionId: string) {
  return `${STORAGE_PREFIX}${sessionId}`;
}

export function saveStudentSession(session: StoredStudentSession) {
  try {
    localStorage.setItem(key(session.sessionId), JSON.stringify(session));
  } catch {
    // localStorage 不可用（隐私模式等）：仅影响刷新恢复，不影响当次会话
  }
}

export function loadStudentSession(sessionId: string): StoredStudentSession | null {
  try {
    const raw = localStorage.getItem(key(sessionId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredStudentSession;
    if (parsed?.sessionId !== sessionId || !parsed.accessToken) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function clearStudentSession(sessionId: string) {
  try {
    localStorage.removeItem(key(sessionId));
  } catch {
    // ignore
  }
}

/** 投屏令牌持久化（按 sessionId 隔离）。 */
const PRESENTATION_PREFIX = "classroom.presentation.";

export function savePresentationToken(
  sessionId: string,
  accessToken: string,
  expiresInSeconds: number,
) {
  try {
    localStorage.setItem(
      `${PRESENTATION_PREFIX}${sessionId}`,
      JSON.stringify({ accessToken, expiresInSeconds, storedAt: Date.now() }),
    );
  } catch {
    // ignore
  }
}

export function loadPresentationToken(sessionId: string): { accessToken: string } | null {
  try {
    const raw = localStorage.getItem(`${PRESENTATION_PREFIX}${sessionId}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { accessToken?: string };
    return parsed?.accessToken ? { accessToken: parsed.accessToken } : null;
  } catch {
    return null;
  }
}
