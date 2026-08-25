/**
 * 题库管理页（/classroom/questions）。
 *
 * 功能：题目 CRUD——四种题型（单选/多选/判断/简答），
 * 选项动态编辑（上限 8 项 MaxOptionCount），正确答案与解析。
 *
 * 答案格式约定（与后端 AnswerGrader 一致）：
 * - 单选：选项 key（如 "A"）
 * - 多选：key 逗号拼接（如 "A,B"，判分顺序无关）
 * - 判断："true" / "false"
 * - 简答：无正确答案，不自动判分
 *
 * 本文件只负责编排：筛选/搜索 + 表格（hooks/useQuestionsTable）+ 对话框（components/）。
 */
import { useCallback, useState } from "react";
import { Button, Dropdown, Input, Option, Text, Title3, tokens } from "@fluentui/react-components";
import { Add20Regular } from "@fluentui/react-icons";
import { DataTable } from "@/components/data-table/DataTable";
import type { ClassroomDtosQuestionDto } from "@/api/models/classroom/dtos/QuestionDto";
import { questionTypeLabel } from "../shared/constants/question";
import { useQuestionActions } from "./hooks/useQuestionActions";
import { useQuestionsTable } from "./hooks/useQuestionsTable";
import { QuestionFormDialog } from "./components/QuestionFormDialog";
import { QuestionDeleteDialog } from "./components/QuestionDeleteDialog";
import { useQuestionBankStyles } from "./styles/questionBank";

export function QuestionBankPage() {
  const styles = useQuestionBankStyles();

  const [typeFilter, setTypeFilter] = useState<number | null>(null);
  const [keyword, setKeyword] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<ClassroomDtosQuestionDto | null>(null);
  const [deleting, setDeleting] = useState<ClassroomDtosQuestionDto | null>(null);

  const questionActions = useQuestionActions();

  const handleEdit = useCallback((q: ClassroomDtosQuestionDto) => {
    setEditing(q);
    setDialogOpen(true);
  }, []);

  const handleDelete = useCallback((q: ClassroomDtosQuestionDto) => {
    setDeleting(q);
  }, []);

  const { table, query, tableState } = useQuestionsTable(
    handleEdit,
    handleDelete,
    typeFilter,
    keyword,
  );

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
        <Title3>题库管理</Title3>
        <Button appearance="primary" icon={<Add20Regular />} onClick={openCreate}>
          新建题目
        </Button>
      </div>

      <div className={styles.filters}>
        <Dropdown
          placeholder="全部题型"
          value={typeFilter ? questionTypeLabel[typeFilter] : ""}
          onOptionSelect={(_, d) => setTypeFilter(d.optionValue ? Number(d.optionValue) : null)}
          clearable
        >
          {[1, 2, 3, 4].map((t) => (
            <Option key={t} value={String(t)} text={questionTypeLabel[t]}>
              {questionTypeLabel[t]}
            </Option>
          ))}
        </Dropdown>
        <Input
          className={styles.filterInput}
          placeholder="搜索题干关键字…"
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
        emptyMessage={'题库为空。点击"新建题目"创建第一道题。'}
      />

      <QuestionFormDialog
        open={dialogOpen}
        editing={editing}
        actions={questionActions}
        onClose={() => setDialogOpen(false)}
        onSaved={handleSaved}
      />

      <QuestionDeleteDialog
        question={deleting}
        actions={questionActions}
        onClose={() => setDeleting(null)}
        onDeleted={handleDeleted}
      />
    </div>
  );
}
