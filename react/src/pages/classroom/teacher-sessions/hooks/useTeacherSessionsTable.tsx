/**
 * 教师课堂列表页表格数据源 hook：
 * 走 Kubb hooks（普通 JWT 认证）拉取"我的课堂"列表，派生表格所需的行数据与加载状态。
 */
import { useClassSessionGetList } from "@/api/hooks/classSession/useClassSessionGetList";
import { extractAbpErrorMessage } from "@/lib/api/error";

/** 列表一次拉取的最大条数（保持原有分页参数不变）。 */
const MAX_RESULT_COUNT = 50;

export function useTeacherSessionsTable() {
  const sessionsQuery = useClassSessionGetList({
    query: { SkipCount: 0, MaxResultCount: MAX_RESULT_COUNT },
  });

  const sessions = sessionsQuery.data?.items ?? [];

  return {
    /** 课堂行数据。 */
    sessions,
    /** 首次加载中。 */
    isLoading: sessionsQuery.isLoading,
    /** 加载失败的错误信息（已转为用户可读文案）。 */
    errorMessage: sessionsQuery.error ? extractAbpErrorMessage(sessionsQuery.error) : undefined,
  };
}
