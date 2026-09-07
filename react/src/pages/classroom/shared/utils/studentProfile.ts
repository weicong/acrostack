/**
 * 学员档案（门户身份）持久化（localStorage）。
 *
 * 学员首次加入课堂时建立档案（姓名/电话/单位/职务），并获得门户长期令牌
 * （role=studentportal，设备绑定）。凭此令牌可：免填加入其他课堂、浏览
 * 我的课堂/答题记录、维护资料。与课堂短期令牌（studentSession.ts）分层：
 * 档案令牌 = 人，课堂令牌 = 人 + 具体课堂。
 */

export interface StoredStudentProfile {
  profileId: string;
  name: string;
  phone: string;
  unit?: string | null;
  position?: string | null;
  studentToken: string;
  expiresInSeconds: number;
  /** 本地存储时间（ms epoch），用于判断令牌是否已过期。 */
  storedAt: number;
}

const STORAGE_KEY = "classroom.profile";

export function saveStudentProfile(profile: StoredStudentProfile) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch {
    // localStorage 不可用（隐私模式等）：仅影响免填加入/门户，不影响当次课堂
  }
}

/** 返回未过期的档案；无档案或令牌已过期返回 null（过期需凭 手机号+姓名 重新认领）。 */
export function loadStudentProfile(): StoredStudentProfile | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredStudentProfile;
    if (!parsed?.profileId || !parsed.studentToken) return null;
    const expiresAt = parsed.storedAt + parsed.expiresInSeconds * 1000;
    if (Date.now() > expiresAt) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function clearStudentProfile() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

/** 手机号脱敏展示：保留前 3 后 4 位，如 138****1234。 */
export function maskPhone(phone: string): string {
  const digits = phone.replace(/\s|-/g, "");
  if (digits.length < 7) return digits;
  return `${digits.slice(0, 3)}****${digits.slice(-4)}`;
}
