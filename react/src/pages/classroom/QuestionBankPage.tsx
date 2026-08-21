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
  Dropdown,
  Field,
  Input,
  Option,
  Radio,
  RadioGroup,
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
import { Add20Regular, Delete20Regular, Edit20Regular } from "@fluentui/react-icons";
import { questionCreate } from "@/api/clients/question/questionCreate";
import { questionDelete } from "@/api/clients/question/questionDelete";
import { questionGetList } from "@/api/clients/question/questionGetList";
import { questionUpdate } from "@/api/clients/question/questionUpdate";
import type { ClassroomDtosQuestionDto } from "@/api/models/classroom/dtos/QuestionDto";
import { teacherApiErrorMessage } from "@/lib/classroom/teacherApi";

const MAX_OPTIONS = 8;
const PAGE_SIZE = 20;
const OPTION_KEYS = ["A", "B", "C", "D", "E", "F", "G", "H"];

type QuestionTypeValue = 1 | 2 | 3 | 4;

const questionTypeLabel: Record<number, string> = {
  1: "单选题",
  2: "多选题",
  3: "判断题",
  4: "简答题",
};

interface OptionRow {
  key: string;
  text: string;
}

/** 编辑器表单状态（correctKeys 单选长度 1；判断题用 trueFalseAnswer）。 */
interface QuestionFormState {
  type: QuestionTypeValue;
  stem: string;
  options: OptionRow[];
  correctKeys: string[];
  trueFalseAnswer: "true" | "false";
  explanation: string;
}

function emptyForm(type: QuestionTypeValue = 1): QuestionFormState {
  return {
    type,
    stem: "",
    options:
      type === 3
        ? [
            { key: "A", text: "对" },
            { key: "B", text: "错" },
          ]
        : type === 4
          ? []
          : [
              { key: "A", text: "" },
              { key: "B", text: "" },
              { key: "C", text: "" },
              { key: "D", text: "" },
            ],
    correctKeys: [],
    trueFalseAnswer: "true",
    explanation: "",
  };
}

/** 从已有题目解析为表单状态。 */
function formFromQuestion(q: ClassroomDtosQuestionDto): QuestionFormState {
  const type = (q.type ?? 1) as QuestionTypeValue;
  const base = emptyForm(type);
  const options = (q.options ?? []).map((o) => ({ key: o.key ?? "", text: o.text ?? "" }));

  let correctKeys: string[] = [];
  let trueFalseAnswer: "true" | "false" = "true";
  if (type === 1 || type === 2) {
    correctKeys = (q.correctAnswer ?? "")
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean);
  } else if (type === 3) {
    trueFalseAnswer = q.correctAnswer === "false" ? "false" : "true";
  }

  return {
    type,
    stem: q.stem ?? "",
    options: type === 3 ? base.options : options,
    correctKeys,
    trueFalseAnswer,
    explanation: q.explanation ?? "",
  };
}

/** 表单 -> CreateUpdateQuestionDto body。 */
function formToBody(form: QuestionFormState) {
  const correctAnswer =
    form.type === 1
      ? (form.correctKeys[0] ?? null)
      : form.type === 2
        ? [...form.correctKeys].sort().join(",") || null
        : form.type === 3
          ? form.trueFalseAnswer
          : null;

  return {
    type: form.type,
    stem: form.stem.trim(),
    options:
      form.type === 3
        ? [
            { key: "A", text: "对" },
            { key: "B", text: "错" },
          ]
        : form.type === 4
          ? []
          : form.options.map((o) => ({ key: o.key, text: o.text.trim() })),
    correctAnswer,
    explanation: form.explanation.trim() || null,
  };
}

/** 表单校验：返回错误消息（null 表示通过）。 */
function validateForm(form: QuestionFormState): string | null {
  if (!form.stem.trim()) return "请输入题干";
  if (form.type === 1 || form.type === 2) {
    const filled = form.options.filter((o) => o.text.trim());
    if (filled.length < 2) return "至少需要 2 个非空选项";
    if (new Set(filled.map((o) => o.key)).size !== filled.length) return "选项 key 重复";
    if (form.type === 1 && form.correctKeys.length !== 1) return "请选择正确答案";
    if (form.type === 2 && form.correctKeys.length < 1) return "请至少选择一个正确答案";
    // 正确答案必须是已填写的选项
    const filledKeys = new Set(filled.map((o) => o.key));
    if (form.correctKeys.some((k) => !filledKeys.has(k))) return "正确答案不能指向空选项";
  }
  return null;
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
  filters: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
    alignItems: "center",
  },
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
    minWidth: "520px",
    maxWidth: "640px",
  },
  optionRow: {
    display: "grid",
    gridTemplateColumns: "32px 1fr auto",
    gap: tokens.spacingHorizontalXS,
    alignItems: "center",
  },
  optionKey: { fontWeight: tokens.fontWeightBold },
  actions: { display: "flex", gap: tokens.spacingHorizontalXS },
  dialogBody: { maxHeight: "70vh", overflowY: "auto" },
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
});

export function QuestionBankPage() {
  const styles = useStyles();
  const { dispatchToast } = useToastController();

  const [questions, setQuestions] = useState<ClassroomDtosQuestionDto[] | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [typeFilter, setTypeFilter] = useState<number | null>(null);
  const [keyword, setKeyword] = useState("");
  const [loadError, setLoadError] = useState<string | null>(null);

  // 编辑/新建对话框
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null); // null = 新建
  const [form, setForm] = useState<QuestionFormState>(emptyForm());
  const [formError, setFormError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // 删除确认
  const [deleting, setDeleting] = useState<ClassroomDtosQuestionDto | null>(null);
  const [deleteBusy, setDeleteBusy] = useState(false);

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
        setLoadError(teacherApiErrorMessage(err));
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
    setEditingId(null);
    setForm(emptyForm());
    setFormError(null);
    setDialogOpen(true);
  }

  function openEdit(q: ClassroomDtosQuestionDto) {
    setEditingId(q.id ?? null);
    setForm(formFromQuestion(q));
    setFormError(null);
    setDialogOpen(true);
  }

  /** 切换题型：重置选项与正确答案结构。 */
  function changeType(type: QuestionTypeValue) {
    if (type === form.type) return;
    const next = emptyForm(type);
    // 单选 <-> 多选保留已填选项
    if ((form.type === 1 && type === 2) || (form.type === 2 && type === 1)) {
      next.options = form.options;
    }
    setForm({ ...next, stem: form.stem, explanation: form.explanation });
  }

  function updateOption(index: number, patch: Partial<OptionRow>) {
    setForm((f) => ({
      ...f,
      options: f.options.map((o, i) => (i === index ? { ...o, ...patch } : o)),
    }));
  }

  function addOption() {
    setForm((f) => {
      if (f.options.length >= MAX_OPTIONS) return f;
      const key = OPTION_KEYS[f.options.length] ?? String(f.options.length + 1);
      return { ...f, options: [...f.options, { key, text: "" }] };
    });
  }

  function removeOption(index: number) {
    setForm((f) => {
      const removedKey = f.options[index]?.key;
      const options = f.options
        .filter((_, i) => i !== index)
        .map((o, i) => ({ ...o, key: OPTION_KEYS[i] ?? o.key })); // 重新编号 key
      return {
        ...f,
        options,
        correctKeys: f.correctKeys
          .filter((k) => k !== removedKey)
          .map((k) => {
            const oldIndex = OPTION_KEYS.indexOf(k);
            return oldIndex > index ? (OPTION_KEYS[oldIndex - 1] ?? k) : k;
          }),
      };
    });
  }

  function toggleCorrectKey(key: string, checked: boolean) {
    setForm((f) => ({
      ...f,
      correctKeys: checked ? [...f.correctKeys, key] : f.correctKeys.filter((k) => k !== key),
    }));
  }

  async function handleSave() {
    const error = validateForm(form);
    if (error) {
      setFormError(error);
      return;
    }

    setSaving(true);
    setFormError(null);
    try {
      const body = formToBody(form);
      if (editingId) {
        await questionUpdate({ path: { id: editingId }, body });
        dispatchToast("题目已更新", { intent: "success" });
      } else {
        await questionCreate({ body });
        dispatchToast("题目已创建", { intent: "success" });
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
      await questionDelete({ path: { id: deleting.id } });
      dispatchToast("题目已删除", { intent: "success" });
      setDeleting(null);
      // 删除后若当前页只剩一条则回退一页
      const remaining = (questions?.length ?? 0) - 1;
      const targetPage = remaining === 0 && pageIndex > 0 ? pageIndex - 1 : pageIndex;
      setPageIndex(targetPage);
      void refresh(targetPage);
    } catch (err) {
      dispatchToast(`删除失败：${teacherApiErrorMessage(err)}`, { intent: "error" });
    } finally {
      setDeleteBusy(false);
    }
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
      <Dialog open={dialogOpen} onOpenChange={(_, d) => setDialogOpen(d.open)}>
        <DialogSurface>
          <DialogBody className={styles.dialogBody}>
            <DialogTitle>{editingId ? "编辑题目" : "新建题目"}</DialogTitle>
            <div className={styles.form}>
              <Field label="题型">
                <Dropdown
                  value={questionTypeLabel[form.type]}
                  onOptionSelect={(_, d) => changeType(Number(d.optionValue) as QuestionTypeValue)}
                  disabled={Boolean(editingId)} // 编辑时不允许换题型（选项/答案结构变化过大）
                >
                  {[1, 2, 3, 4].map((t) => (
                    <Option key={t} value={String(t)} text={questionTypeLabel[t]}>
                      {questionTypeLabel[t]}
                    </Option>
                  ))}
                </Dropdown>
              </Field>

              <Field label="题干" required>
                <Textarea
                  value={form.stem}
                  onChange={(_, d) => setForm((f) => ({ ...f, stem: d.value }))}
                  placeholder="输入题干（最多 2000 字）"
                  resize="vertical"
                />
              </Field>

              {(form.type === 1 || form.type === 2) && (
                <Field label={`选项（勾选正确答案${form.type === 2 ? "，可多选" : ""}）`}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {form.options.map((opt, i) => (
                      <div key={i} className={styles.optionRow}>
                        {form.type === 1 ? (
                          <Radio
                            label={opt.key}
                            checked={form.correctKeys[0] === opt.key}
                            onChange={() => setForm((f) => ({ ...f, correctKeys: [opt.key] }))}
                          />
                        ) : (
                          <Checkbox
                            label={opt.key}
                            checked={form.correctKeys.includes(opt.key)}
                            onChange={(_, d) => toggleCorrectKey(opt.key, d.checked === true)}
                          />
                        )}
                        <Input
                          value={opt.text}
                          onChange={(_, d) => updateOption(i, { text: d.value })}
                          placeholder={`选项 ${opt.key} 内容`}
                        />
                        <Button
                          size="small"
                          icon={<Delete20Regular />}
                          disabled={form.options.length <= 2}
                          onClick={() => removeOption(i)}
                        />
                      </div>
                    ))}
                    <Button
                      size="small"
                      appearance="secondary"
                      disabled={form.options.length >= MAX_OPTIONS}
                      onClick={addOption}
                    >
                      添加选项
                    </Button>
                  </div>
                </Field>
              )}

              {form.type === 3 && (
                <Field label="正确答案" required>
                  <RadioGroup
                    value={form.trueFalseAnswer}
                    onChange={(_, d) =>
                      setForm((f) => ({ ...f, trueFalseAnswer: d.value as "true" | "false" }))
                    }
                    layout="horizontal"
                  >
                    <Radio value="true" label="对" />
                    <Radio value="false" label="错" />
                  </RadioGroup>
                </Field>
              )}

              {form.type === 4 && (
                <Text size={300}>简答题为客观作答不自动判分，学员提交后由教师在课堂中讲评。</Text>
              )}

              <Field label="解析（公布答案后对学员可见）">
                <Textarea
                  value={form.explanation}
                  onChange={(_, d) => setForm((f) => ({ ...f, explanation: d.value }))}
                  placeholder="输入解析（选填，最多 4000 字）"
                  resize="vertical"
                />
              </Field>

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
            <DialogTitle>删除题目</DialogTitle>
            <Text>
              确定删除该题目吗？已在试卷中引用此题的试卷会失去该题（课堂已复制的题目不受影响）。
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
