/**
 * 试卷管理页（/classroom/quizzes）。
 *
 * 功能：试卷 CRUD——从题库选题组卷，支持调整题目顺序
 * （questionIds 数组顺序即试卷题目顺序，后端 SetQuestions 按序编号）。
 *
 * 约束（与后端 QuizAppService 一致）：
 * - 试卷名必填（≤128 字）；描述选填（≤500 字）
 * - 至少包含 1 道题目；题目必须存在于题库
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Badge,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogBody,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Field,
  Input,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  Textarea,
  Title3,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { useToastController } from "@fluentui/react-components";
import {
  Add20Regular,
  ArrowUp20Regular,
  ArrowDown20Regular,
  Delete20Regular,
  Edit20Regular,
} from "@fluentui/react-icons";
import { questionGet } from "@/api/clients/question/questionGet";
import { questionGetList } from "@/api/clients/question/questionGetList";
import { quizCreate } from "@/api/clients/quiz/quizCreate";
import { quizDelete } from "@/api/clients/quiz/quizDelete";
import { quizGetList } from "@/api/clients/quiz/quizGetList";
import { quizUpdate } from "@/api/clients/quiz/quizUpdate";
import type { ClassroomDtosQuizDto } from "@/api/models/classroom/dtos/QuizDto";
import type { ClassroomDtosQuestionDto } from "@/api/models/classroom/dtos/QuestionDto";
import { teacherApiErrorMessage } from "@/pages/classroom/teacherApi";

const PAGE_SIZE = 20;
/** 选题器单次加载上限（题库较大时用关键字过滤）。 */
const PICKER_PAGE_SIZE = 50;

const questionTypeLabel: Record<number, string> = {
  1: "单选题",
  2: "多选题",
  3: "判断题",
  4: "简答题",
};

/** 已选题目条目（保持选择顺序）。 */
interface SelectedQuestion {
  id: string;
  type: number;
  stem: string;
}

interface QuizFormState {
  name: string;
  description: string;
  /** 选择顺序即试卷题目顺序。 */
  selected: SelectedQuestion[];
}

function emptyForm(): QuizFormState {
  return { name: "", description: "", selected: [] };
}

const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
    padding: tokens.spacingVerticalL + " " + tokens.spacingHorizontalL,
    maxWidth: "1080px",
    margin: "0 auto",
    width: "100%",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalM,
  },
  filters: { display: "flex", gap: tokens.spacingHorizontalS, alignItems: "center" },
  filterInput: { width: "240px" },
  empty: {
    textAlign: "center",
    padding: tokens.spacingVerticalXXL,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    minWidth: "560px",
    maxWidth: "680px",
  },
  dialogBody: { maxHeight: "75vh", overflowY: "auto" },
  picker: {
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusMedium,
    padding: tokens.spacingVerticalS + " " + tokens.spacingHorizontalS,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
    maxHeight: "260px",
    overflowY: "auto",
  },
  pickerRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
  },
  selectedList: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
  },
  selectedRow: {
    display: "grid",
    gridTemplateColumns: "28px 52px 1fr auto",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
  },
  actions: { display: "flex", gap: tokens.spacingHorizontalXS },
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
  pickerFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalS,
  },
});

export function QuizzesPage() {
  const styles = useStyles();
  const { dispatchToast } = useToastController();

  // 试卷列表
  const [quizzes, setQuizzes] = useState<ClassroomDtosQuizDto[] | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [loadError, setLoadError] = useState<string | null>(null);

  // 新建/编辑对话框
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<QuizFormState>(emptyForm());
  const [formError, setFormError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // 题库选题器（按关键字检索）
  const [pickerKeyword, setPickerKeyword] = useState("");
  const [pickerQuestions, setPickerQuestions] = useState<ClassroomDtosQuestionDto[] | null>(null);
  const [pickerHasMore, setPickerHasMore] = useState(false);
  const [pickerLoading, setPickerLoading] = useState(false);

  // 删除确认
  const [deleting, setDeleting] = useState<ClassroomDtosQuizDto | null>(null);
  const [deleteBusy, setDeleteBusy] = useState(false);

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
        setLoadError(teacherApiErrorMessage(err));
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

  /** 选题器：按当前关键字拉取一页题目。 */
  const loadPickerQuestions = useCallback(
    async (filter: string, append: boolean) => {
      setPickerLoading(true);
      try {
        const res = await questionGetList({
          query: {
            SkipCount: append ? (pickerQuestions?.length ?? 0) : 0,
            MaxResultCount: PICKER_PAGE_SIZE,
            ...(filter.trim() ? { Filter: filter.trim() } : {}),
          },
        });
        const data = res.data ?? { items: [], totalCount: 0 };
        setPickerQuestions((prev) =>
          append ? [...(prev ?? []), ...(data.items ?? [])] : (data.items ?? []),
        );
        setPickerHasMore(
          (append ? (pickerQuestions?.length ?? 0) : 0) + (data.items?.length ?? 0) <
            (data.totalCount ?? 0),
        );
      } catch (err) {
        dispatchToast(`题库加载失败：${teacherApiErrorMessage(err)}`, { intent: "error" });
      } finally {
        setPickerLoading(false);
      }
    },
    [pickerQuestions, dispatchToast],
  );

  /** 打开新建：重置表单并预加载题库首页。 */
  function openCreate() {
    setEditingId(null);
    setForm(emptyForm());
    setFormError(null);
    setPickerKeyword("");
    setPickerQuestions(null);
    setDialogOpen(true);
    void loadPickerQuestions("", false);
  }

  /** 打开编辑：回填基本信息 + 按 questionIds 顺序重建已选列表。 */
  async function openEdit(quiz: ClassroomDtosQuizDto) {
    setEditingId(quiz.id ?? null);
    setForm({
      name: quiz.name ?? "",
      description: quiz.description ?? "",
      selected: [],
    });
    setFormError(null);
    setPickerKeyword("");
    setPickerQuestions(null);
    setDialogOpen(true);
    void loadPickerQuestions("", false);

    // 回填已选题目：按 id 逐个拉取（保持 questionIds 顺序）
    try {
      const ids = quiz.questionIds ?? [];
      const details = await Promise.all(
        ids.map(async (qid) => {
          const res = await questionGet({ path: { id: qid } });
          return res.data ?? null;
        }),
      );
      setForm((f) => ({
        ...f,
        selected: details
          .map((q) => (q && q.id ? { id: q.id, type: q.type ?? 1, stem: q.stem ?? "" } : null))
          .filter((s): s is SelectedQuestion => s !== null),
      }));
    } catch (err) {
      dispatchToast(`已选题回填失败：${teacherApiErrorMessage(err)}`, { intent: "error" });
    }
  }

  const selectedIds = useMemo(() => new Set(form.selected.map((s) => s.id)), [form.selected]);

  function toggleQuestion(q: ClassroomDtosQuestionDto, checked: boolean) {
    const id = q.id;
    if (!id) return;
    setForm((f) => ({
      ...f,
      selected: checked
        ? [...f.selected, { id, type: q.type ?? 1, stem: q.stem ?? "" }]
        : f.selected.filter((s) => s.id !== id),
    }));
  }

  function moveSelected(index: number, delta: -1 | 1) {
    setForm((f) => {
      const target = index + delta;
      if (target < 0 || target >= f.selected.length) return f;
      const next = [...f.selected];
      [next[index], next[target]] = [next[target], next[index]];
      return { ...f, selected: next };
    });
  }

  async function handleSave() {
    if (!form.name.trim()) {
      setFormError("请输入试卷名称");
      return;
    }
    if (form.selected.length === 0) {
      setFormError("试卷至少需要 1 道题目");
      return;
    }

    setSaving(true);
    setFormError(null);
    try {
      const body = {
        name: form.name.trim(),
        description: form.description.trim() || null,
        questionIds: form.selected.map((s) => s.id),
      };
      if (editingId) {
        await quizUpdate({ path: { id: editingId }, body });
        dispatchToast("试卷已更新", { intent: "success" });
      } else {
        await quizCreate({ body });
        dispatchToast("试卷已创建", { intent: "success" });
      }
      setDialogOpen(false);
      void refresh();
    } catch (err) {
      setFormError(teacherApiErrorMessage(err));
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!deleting?.id || deleteBusy) return;
    setDeleteBusy(true);
    try {
      await quizDelete({ path: { id: deleting.id } });
      dispatchToast("试卷已删除", { intent: "success" });
      setDeleting(null);
      const remaining = (quizzes?.length ?? 0) - 1;
      const targetPage = remaining === 0 && pageIndex > 0 ? pageIndex - 1 : pageIndex;
      setPageIndex(targetPage);
      void refresh(targetPage);
    } catch (err) {
      dispatchToast(`删除失败：${teacherApiErrorMessage(err)}`, { intent: "error" });
    } finally {
      setDeleteBusy(false);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Title3>试卷管理</Title3>
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
                        onClick={() => void openEdit(quiz)}
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
      <Dialog open={dialogOpen} onOpenChange={(_, d) => setDialogOpen(d.open)}>
        <DialogSurface>
          <DialogBody className={styles.dialogBody}>
            <DialogTitle>{editingId ? "编辑试卷" : "新建试卷"}</DialogTitle>
            <div className={styles.form}>
              <Field label="试卷名称" required>
                <Input
                  value={form.name}
                  onChange={(_, d) => setForm((f) => ({ ...f, name: d.value }))}
                  placeholder="输入试卷名称（最多 128 字）"
                  maxLength={128}
                />
              </Field>

              <Field label="描述">
                <Textarea
                  value={form.description}
                  onChange={(_, d) => setForm((f) => ({ ...f, description: d.value }))}
                  placeholder="输入描述（选填，最多 500 字）"
                  resize="vertical"
                  maxLength={500}
                />
              </Field>

              <Field label={`从题库选题（已选 ${form.selected.length} 题）`} required>
                <div className={styles.picker}>
                  {pickerQuestions === null ? (
                    <Spinner size="tiny" />
                  ) : pickerQuestions.length === 0 ? (
                    <Text size={300}>题库为空，请先到"题库管理"创建题目。</Text>
                  ) : (
                    pickerQuestions.map((q) => (
                      <div key={q.id} className={styles.pickerRow}>
                        <Checkbox
                          checked={selectedIds.has(q.id ?? "")}
                          onChange={(_, d) => toggleQuestion(q, d.checked === true)}
                        />
                        <Badge appearance="ghost">{questionTypeLabel[q.type ?? 1] ?? "未知"}</Badge>
                        <Text size={300} title={q.stem ?? ""}>
                          {(q.stem ?? "").length > 36 ? `${(q.stem ?? "").slice(0, 36)}…` : q.stem}
                        </Text>
                      </div>
                    ))
                  )}
                  {pickerLoading && <Spinner size="tiny" />}
                  <div className={styles.pickerFooter}>
                    <Input
                      size="small"
                      style={{ flex: 1 }}
                      placeholder="搜索题干关键字…"
                      value={pickerKeyword}
                      onChange={(_, d) => setPickerKeyword(d.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          setPickerQuestions(null);
                          void loadPickerQuestions(pickerKeyword, false);
                        }
                      }}
                    />
                    <Button
                      size="small"
                      appearance="secondary"
                      onClick={() => {
                        setPickerQuestions(null);
                        void loadPickerQuestions(pickerKeyword, false);
                      }}
                    >
                      搜索
                    </Button>
                    {pickerHasMore && !pickerLoading && (
                      <Button
                        size="small"
                        appearance="subtle"
                        onClick={() => void loadPickerQuestions(pickerKeyword, true)}
                      >
                        加载更多
                      </Button>
                    )}
                  </div>
                </div>
              </Field>

              {form.selected.length > 0 && (
                <Field label="题目顺序（试卷按此顺序出题）">
                  <div className={styles.selectedList}>
                    {form.selected.map((s, i) => (
                      <div key={s.id} className={styles.selectedRow}>
                        <Text size={300} weight="semibold">
                          {i + 1}.
                        </Text>
                        <Badge appearance="ghost">{questionTypeLabel[s.type] ?? "未知"}</Badge>
                        <Text size={300} title={s.stem}>
                          {s.stem.length > 30 ? `${s.stem.slice(0, 30)}…` : s.stem}
                        </Text>
                        <div className={styles.actions}>
                          <Button
                            size="small"
                            icon={<ArrowUp20Regular />}
                            disabled={i === 0}
                            onClick={() => moveSelected(i, -1)}
                          />
                          <Button
                            size="small"
                            icon={<ArrowDown20Regular />}
                            disabled={i === form.selected.length - 1}
                            onClick={() => moveSelected(i, 1)}
                          />
                          <Button
                            size="small"
                            icon={<Delete20Regular />}
                            onClick={() =>
                              setForm((f) => ({
                                ...f,
                                selected: f.selected.filter((x) => x.id !== s.id),
                              }))
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Field>
              )}

              {formError && (
                <Text size={300} style={{ color: tokens.colorPaletteRedForeground1 }}>
                  {formError}
                </Text>
              )}
            </div>
            <DialogActions>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">取消</Button>
              </DialogTrigger>
              <Button appearance="primary" disabled={saving} onClick={() => void handleSave()}>
                {saving ? <Spinner size="tiny" /> : editingId ? "保存" : "创建"}
              </Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>

      {/* 删除确认 */}
      <Dialog open={deleting !== null} onOpenChange={(_, d) => !d.open && setDeleting(null)}>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>删除试卷</DialogTitle>
            <Text>
              确定删除试卷"{deleting?.name}"吗？该操作不影响题库中的题目，已创建的课堂也不受影响。
            </Text>
            <DialogActions>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">取消</Button>
              </DialogTrigger>
              <Button
                appearance="primary"
                disabled={deleteBusy}
                onClick={() => void handleDelete()}
              >
                {deleteBusy ? <Spinner size="tiny" /> : "删除"}
              </Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </div>
  );
}
