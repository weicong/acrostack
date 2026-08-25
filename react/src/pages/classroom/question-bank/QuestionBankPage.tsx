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
 * 本文件只负责编排：列表查询状态、筛选/分页与子组件组装；
 * 样式见 styles/questionBank，表单助手见 utils/questionForm，
 * 动作聚合见 hooks/useQuestionActions，对话框见 components/。
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Badge,
  Button,
  Dropdown,
  Input,
  Option,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  Title3,
  tokens,
} from "@fluentui/react-components";
import { Add20Regular, Delete20Regular, Edit20Regular } from "@fluentui/react-icons";
import { questionGetList } from "@/api/clients/question/questionGetList";
import type { ClassroomDtosQuestionDto } from "@/api/models/classroom/dtos/QuestionDto";
import { extractAbpErrorMessage } from "@/lib/api/error";
import { questionTypeLabel } from "./constants/question";
import { useQuestionActions } from "./hooks/useQuestionActions";
import { QuestionFormDialog } from "./components/QuestionFormDialog";
import { QuestionDeleteDialog } from "./components/QuestionDeleteDialog";
import { useQuestionBankStyles } from "./styles/questionBank";

const PAGE_SIZE = 20;

export function QuestionBankPage() {
  const styles = useQuestionBankStyles();

  const [questions, setQuestions] = useState<ClassroomDtosQuestionDto[] | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [typeFilter, setTypeFilter] = useState<number | null>(null);
  const [keyword, setKeyword] = useState("");
  const [loadError, setLoadError] = useState<string | null>(null);

  // 编辑/新建对话框（editing 非空=编辑该题；null=新建）
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<ClassroomDtosQuestionDto | null>(null);

  // 删除确认
  const [deleting, setDeleting] = useState<ClassroomDtosQuestionDto | null>(null);

  // 题目创建/更新/删除动作（Kubb mutation + 提示）
  const questionActions = useQuestionActions();

  const refresh = useCallback(
    async (page = pageIndex, type = typeFilter, filter = keyword) => {
      try {
        const res = await questionGetList({
          query: {
            SkipCount: page * PAGE_SIZE,
            MaxResultCount: PAGE_SIZE,
            ...(type ? { Type: type } : {}),
            ...(filter.trim() ? { Filter: filter.trim() } : {}),
          },
        });
        const data = res.data ?? { items: [], totalCount: 0 };
        setQuestions(data.items ?? []);
        setTotalCount(Number(data.totalCount ?? 0));
        setLoadError(null);
      } catch (err) {
        setLoadError(extractAbpErrorMessage(err));
      }
    },
    [pageIndex, typeFilter, keyword],
  );

  useEffect(() => {
    setQuestions(null);
    void refresh(0, typeFilter, keyword);
    setPageIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeFilter]);

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  function openCreate() {
    setEditing(null);
    setDialogOpen(true);
  }

  function openEdit(q: ClassroomDtosQuestionDto) {
    setEditing(q);
    setDialogOpen(true);
  }

  /** 删除成功后：当前页只剩一条则回退一页并刷新。 */
  function handleDeleted() {
    const remaining = (questions?.length ?? 0) - 1;
    const targetPage = remaining === 0 && pageIndex > 0 ? pageIndex - 1 : pageIndex;
    setPageIndex(targetPage);
    void refresh(targetPage);
  }

  const typeBadgeColor = useMemo<Record<number, "brand" | "success" | "warning" | "severe">>(
    () => ({ 1: "brand", 2: "success", 3: "warning", 4: "severe" }),
    [],
  );

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
              setPageIndex(0);
              void refresh(0, typeFilter, keyword);
            }
          }}
        />
        <Button
          appearance="secondary"
          onClick={() => {
            setPageIndex(0);
            void refresh(0, typeFilter, keyword);
          }}
        >
          搜索
        </Button>
      </div>

      {loadError && <Text style={{ color: tokens.colorPaletteRedForeground1 }}>{loadError}</Text>}

      {questions === null ? (
        <div className={styles.empty}>
          <Spinner />
          <Text>正在加载题目…</Text>
        </div>
      ) : questions.length === 0 ? (
        <div className={styles.empty}>
          <Text>题库为空。点击"新建题目"创建第一道题。</Text>
        </div>
      ) : (
        <>
          <Table size="small">
            <TableHeader>
              <TableRow>
                <TableHeaderCell>题型</TableHeaderCell>
                <TableHeaderCell>题干</TableHeaderCell>
                <TableHeaderCell>选项数</TableHeaderCell>
                <TableHeaderCell>正确答案</TableHeaderCell>
                <TableHeaderCell>解析</TableHeaderCell>
                <TableHeaderCell>操作</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {questions.map((q) => (
                <TableRow key={q.id}>
                  <TableCell>
                    <Badge appearance="filled" color={typeBadgeColor[q.type ?? 1]}>
                      {questionTypeLabel[q.type ?? 1] ?? "未知"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Text title={q.stem ?? ""}>
                      {(q.stem ?? "").length > 40 ? `${(q.stem ?? "").slice(0, 40)}…` : q.stem}
                    </Text>
                  </TableCell>
                  <TableCell>{q.options?.length ?? 0}</TableCell>
                  <TableCell>
                    {q.type === 3
                      ? q.correctAnswer === "true"
                        ? "对"
                        : q.correctAnswer === "false"
                          ? "错"
                          : "—"
                      : (q.correctAnswer ?? "—")}
                  </TableCell>
                  <TableCell>{q.explanation ? "有" : "—"}</TableCell>
                  <TableCell>
                    <div className={styles.actions}>
                      <Button size="small" icon={<Edit20Regular />} onClick={() => openEdit(q)}>
                        编辑
                      </Button>
                      <Button
                        size="small"
                        icon={<Delete20Regular />}
                        onClick={() => setDeleting(q)}
                      >
                        删除
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className={styles.pagination}>
            <Button
              size="small"
              disabled={pageIndex === 0}
              onClick={() => {
                const p = pageIndex - 1;
                setPageIndex(p);
                void refresh(p);
              }}
            >
              上一页
            </Button>
            <Text size={300}>
              第 {pageIndex + 1} / {totalPages} 页（共 {totalCount} 题）
            </Text>
            <Button
              size="small"
              disabled={pageIndex + 1 >= totalPages}
              onClick={() => {
                const p = pageIndex + 1;
                setPageIndex(p);
                void refresh(p);
              }}
            >
              下一页
            </Button>
          </div>
        </>
      )}

      {/* 新建/编辑对话框 */}
      <QuestionFormDialog
        open={dialogOpen}
        editing={editing}
        actions={questionActions}
        onClose={() => setDialogOpen(false)}
        onSaved={() => void refresh()}
      />

      {/* 删除确认 */}
      <QuestionDeleteDialog
        question={deleting}
        actions={questionActions}
        onClose={() => setDeleting(null)}
        onDeleted={handleDeleted}
      />
    </div>
  );
}
