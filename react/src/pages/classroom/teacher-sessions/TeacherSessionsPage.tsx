/**
 * 教师课堂列表页（/classroom）。
 *
 * 功能：
 * - 列出我的课堂（状态、课堂码、题数、当前题号）
 * - 选择试卷创建新课堂，创建成功后进入教师驾驶舱
 *
 * 本文件只负责编排：顶部创建入口见 components/TeacherSessionsToolbar，
 * 表格数据源见 hooks/useTeacherSessionsTable，样式见 styles/teacherSessions。
 */
import { useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import { DataTable } from "@/components/ui/data-table/DataTable";
import { usePageTitle } from "@/lib/usePageTitle";
import { useTeacherSessionsStyles } from "./styles/teacherSessions";
import { TeacherSessionsToolbar } from "./components/TeacherSessionsToolbar";
import { useTeacherSessionsTable } from "./hooks/useTeacherSessionsTable";

export function TeacherSessionsPage() {
  const styles = useTeacherSessionsStyles();
  const navigate = useNavigate();
  usePageTitle("我的课堂");

  const handleEnterDashboard = useCallback(
    (sessionId: string) => {
      void navigate({ to: "/classroom/$sessionId", params: { sessionId } });
    },
    [navigate],
  );

  const { table, query } = useTeacherSessionsTable(handleEnterDashboard);

  return (
    <div className={styles.page}>
      <TeacherSessionsToolbar />
      <DataTable
        table={table}
        showPagination={false}
        isLoading={query.isLoading}
        isError={query.isError}
        errorMessage={query.error ? String(query.error) : undefined}
        emptyMessage={'还没有课堂。点击"创建课堂"选择试卷开始。'}
      />
    </div>
  );
}
