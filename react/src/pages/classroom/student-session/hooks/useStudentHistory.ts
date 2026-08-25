/**
 * 学员答题记录聚合 hook：切到记录视图时拉取历史，供事件回调手动刷新。
 */
import { useCallback, useEffect, useState } from "react";
import type { ClassroomDtosStudentAnswerHistoryDto } from "@/api/models/classroom/dtos/StudentAnswerHistoryDto";
import { getMyAnswerHistory, classroomErrorMessage } from "../utils/studentApi";

interface UseStudentHistoryOptions {
  sessionId: string;
  token: string | null;
  view: "current" | "history";
}

export function useStudentHistory({ sessionId, token, view }: UseStudentHistoryOptions) {
  const [history, setHistory] = useState<ClassroomDtosStudentAnswerHistoryDto | null>(null);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [historyError, setHistoryError] = useState<string | null>(null);

  const refreshHistory = useCallback(async () => {
    if (!token) return;
    setHistoryLoading(true);
    try {
      const result = await getMyAnswerHistory(sessionId, token);
      setHistory(result);
      setHistoryError(null);
    } catch (err) {
      setHistoryError(classroomErrorMessage(err));
    } finally {
      setHistoryLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId, token]);

  useEffect(() => {
    if (view === "history") void refreshHistory();
  }, [view, refreshHistory]);

  return { history, historyLoading, historyError, refreshHistory };
}
