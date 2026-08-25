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
 * 本文件只负责编排：列表查询状态、筛选/分页与子组件组装；
 * 样式见 styles/quizzes，选题/排序对话框见 components/QuizFormDialog，
 * 动作聚合见 hooks/useQuizActions。
 */
import { useCallback, useEffect, useState } from "react";
import {
  Button,
  Input,
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
import { quizGetList } from "@/api/clients/quiz/quizGetList";
import type { ClassroomDtosQuizDto } from "@/api/models/classroom/dtos/QuizDto";
import { extractAbpErrorMessage } from "@/lib/api/error";
import { useQuizActions } from "./hooks/useQuizActions";
import { QuizFormDialog } from "./components/QuizFormDialog";
import { QuizDeleteDialog } from "./components/QuizDeleteDialog";
import { useQuizzesStyles } from "./styles/quizzes";

const PAGE_SIZE = 20;

export function QuizzesPage() {
  const styles = useQuizzesStyles();

  // 试卷列表
  const [quizzes, setQuizzes] = useState<ClassroomDtosQuizDto[] | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [loadError, setLoadError] = useState<string | null>(null);

  // 新建/编辑对话框（editing 非空=编辑该卷；null=新建）
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<ClassroomDtosQuizDto | null>(null);

  // 删除确认
  const [deleting, setDeleting] = useState<ClassroomDtosQuizDto | null>(null);

  // 试卷创建/更新/删除动作（Kubb mutation + 提示）
  const quizActions = useQuizActions();

  const refresh = useCallback(
    async (page = pageIndex, filter = keyword) => {
      try {
        const res = await quizGetList({
          query: {
            SkipCount: page * PAGE_SIZE,
            MaxResultCount: PAGE_SIZE,
            ...(filter.trim() ? { Filter: filter.trim() } : {}),
          },
        });
        const data = res.data ?? { items: [], totalCount: 0 };
        setQuizzes(data.items ?? []);
        setTotalCount(Number(data.totalCount ?? 0));
        setLoadError(null);
      } catch (err) {
        setLoadError(extractAbpErrorMessage(err));
      }
    },
    [pageIndex, keyword],
  );

  useEffect(() => {
    setQuizzes(null);
    void refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  /** 删除成功后：当前页只剩一份则回退一页并刷新。 */
  function handleDeleted() {
    const remaining = (quizzes?.length ?? 0) - 1;
    const targetPage = remaining === 0 && pageIndex > 0 ? pageIndex - 1 : pageIndex;
    setPageIndex(targetPage);
    void refresh(targetPage);
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Title3>试卷管理</Title3>
        <Button
          appearance="primary"
          icon={<Add20Regular />}
          onClick={() => {
            setEditing(null);
            setDialogOpen(true);
          }}
        >
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
              setPageIndex(0);
              void refresh(0, keyword);
            }
          }}
        />
        <Button
          appearance="secondary"
          onClick={() => {
            setPageIndex(0);
            void refresh(0, keyword);
          }}
        >
          搜索
        </Button>
      </div>

      {loadError && <Text style={{ color: tokens.colorPaletteRedForeground1 }}>{loadError}</Text>}

      {quizzes === null ? (
        <div className={styles.empty}>
          <Spinner />
          <Text>正在加载试卷…</Text>
        </div>
      ) : quizzes.length === 0 ? (
        <div className={styles.empty}>
          <Text>暂无试卷。点击"新建试卷"，从题库选题组卷。</Text>
        </div>
      ) : (
        <>
          <Table size="small">
            <TableHeader>
              <TableRow>
                <TableHeaderCell>试卷名称</TableHeaderCell>
                <TableHeaderCell>题数</TableHeaderCell>
                <TableHeaderCell>描述</TableHeaderCell>
                <TableHeaderCell>创建时间</TableHeaderCell>
                <TableHeaderCell>操作</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quizzes.map((quiz) => (
                <TableRow key={quiz.id}>
                  <TableCell>{quiz.name ?? "—"}</TableCell>
                  <TableCell>{quiz.questionCount ?? 0}</TableCell>
                  <TableCell>
                    <Text title={quiz.description ?? ""}>
                      {(quiz.description ?? "").length > 30
                        ? `${(quiz.description ?? "").slice(0, 30)}…`
                        : (quiz.description ?? "—")}
                    </Text>
                  </TableCell>
                  <TableCell>
                    {quiz.creationTime
                      ? new Date(quiz.creationTime).toLocaleString("zh-CN", { hour12: false })
                      : "—"}
                  </TableCell>
                  <TableCell>
                    <div className={styles.actions}>
                      <Button
                        size="small"
                        icon={<Edit20Regular />}
                        onClick={() => {
                          setEditing(quiz);
                          setDialogOpen(true);
                        }}
                      >
                        编辑
                      </Button>
                      <Button
                        size="small"
                        icon={<Delete20Regular />}
                        onClick={() => setDeleting(quiz)}
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
              第 {pageIndex + 1} / {totalPages} 页（共 {totalCount} 份试卷）
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
      <QuizFormDialog
        open={dialogOpen}
        editing={editing}
        actions={quizActions}
        onClose={() => setDialogOpen(false)}
        onSaved={() => void refresh()}
      />

      {/* 删除确认 */}
      <QuizDeleteDialog
        quiz={deleting}
        actions={quizActions}
        onClose={() => setDeleting(null)}
        onDeleted={handleDeleted}
      />
    </div>
  );
}
