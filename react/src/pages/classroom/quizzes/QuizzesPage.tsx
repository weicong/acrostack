/**
 * 试卷管理页（/classroom/quizzes）。
 *
 * 功能：试卷 CRUD——从题库选题组卷，支持调整题目顺序
 * （questionIds 数组顺序即试卷题目顺序，后端 SetQuestions 按序编号）。
 *
 * 约束（与后端 QuizAppService 一致）：
 * - 试卷名必填（≤128 字）；描述选填（≤500 字）
 * - 至少包含 1 道题目；题目必须存在于题库
 *
 * 本文件只负责编排：搜索 + 表格（hooks/useQuizzesTable）+ 对话框（components/）。
 */
import { useCallback, useState } from "react";
import { Button, Input, Text, Title3, tokens } from "@fluentui/react-components";
import { Add20Regular } from "@fluentui/react-icons";
import { DataTable } from "@/components/ui/data-table/DataTable";
import type { ClassroomDtosQuizDto } from "@/api/models/classroom/dtos/QuizDto";
import { usePageTitle } from "@/lib/usePageTitle";
import { useQuizActions } from "./hooks/useQuizActions";
import { useQuizzesTable } from "./hooks/useQuizzesTable";
import { QuizFormDialog } from "./components/QuizFormDialog";
import { QuizDeleteDialog } from "./components/QuizDeleteDialog";
import { useQuizzesStyles } from "./styles/quizzes";

export function QuizzesPage() {
  const styles = useQuizzesStyles();
  usePageTitle("试卷管理");

  const [keyword, setKeyword] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<ClassroomDtosQuizDto | null>(null);
  const [deleting, setDeleting] = useState<ClassroomDtosQuizDto | null>(null);

  const quizActions = useQuizActions();

  const handleEdit = useCallback((quiz: ClassroomDtosQuizDto) => {
    setEditing(quiz);
    setDialogOpen(true);
  }, []);

  const handleDelete = useCallback((quiz: ClassroomDtosQuizDto) => {
    setDeleting(quiz);
  }, []);

  const { table, query, tableState } = useQuizzesTable(handleEdit, handleDelete, keyword);

  function openCreate() {
    setEditing(null);
    setDialogOpen(true);
  }

  function handleSaved() {
    void query.refetch();
  }

  function handleDeleted() {
    const currentPage = tableState.snapshot.pagination.pageIndex;
    const currentData = query.data;
    const remaining = currentData.length - 1;
    const targetPage = remaining === 0 && currentPage > 0 ? currentPage - 1 : currentPage;
    tableState.state.onPaginationChange({ pageIndex: targetPage, pageSize: 20 });
    void query.refetch();
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Title3>试卷</Title3>
        <Button appearance="primary" icon={<Add20Regular />} onClick={openCreate}>
          新建试卷
        </Button>
      </div>

      <div className={styles.filters}>
        <Input
          className={styles.filterInput}
          placeholder="搜索试卷名称…"
          value={keyword}
          onChange={(_, d) => setKeyword(d.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              tableState.state.onPaginationChange({ pageIndex: 0, pageSize: 20 });
            }
          }}
        />
        <Button
          appearance="secondary"
          onClick={() => tableState.state.onPaginationChange({ pageIndex: 0, pageSize: 20 })}
        >
          搜索
        </Button>
      </div>

      {query.isError && (
        <Text style={{ color: tokens.colorPaletteRedForeground1 }}>
          {query.error ? String(query.error) : "加载失败"}
        </Text>
      )}

      <DataTable
        table={table}
        isLoading={query.isLoading}
        emptyMessage={'暂无试卷。点击"新建试卷"，从题库选题组卷。'}
      />

      <QuizFormDialog
        open={dialogOpen}
        editing={editing}
        actions={quizActions}
        onClose={() => setDialogOpen(false)}
        onSaved={handleSaved}
      />

      <QuizDeleteDialog
        quiz={deleting}
        actions={quizActions}
        onClose={() => setDeleting(null)}
        onDeleted={handleDeleted}
      />
    </div>
  );
}
