/**
 * 试卷新建/编辑对话框：自包含表单状态（名称、描述、题库选题与题目排序）。
 * 打开时按 editing 初始化，并预加载题库首页、按 questionIds 顺序回填已选题；
 * 保存经 useQuizActions 的 Kubb mutation 完成，成功后回调 onSaved 由父级刷新列表。
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
  Text,
  Textarea,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import { ArrowDown20Regular, ArrowUp20Regular, Delete20Regular } from "@fluentui/react-icons";
import { questionGet } from "@/api/clients/question/questionGet";
import { questionGetList } from "@/api/clients/question/questionGetList";
import type { ClassroomDtosQuestionDto } from "@/api/models/classroom/dtos/QuestionDto";
import type { ClassroomDtosQuizDto } from "@/api/models/classroom/dtos/QuizDto";
import { extractAbpErrorMessage } from "@/lib/http/error";
import { questionTypeLabel } from "../../shared/constants/question";
import type { QuizActions } from "../hooks/useQuizActions";
import { useQuizzesStyles } from "../styles/quizzes";
import type { QuizFormState, SelectedQuestion } from "../types/quiz";

/** 选题器单次加载上限（题库较大时用关键字过滤）。 */
const PICKER_PAGE_SIZE = 50;

function emptyForm(): QuizFormState {
  return { name: "", description: "", selected: [] };
}

interface QuizFormDialogProps {
  open: boolean;
  /** 非空表示编辑该试卷；null 表示新建。 */
  editing: ClassroomDtosQuizDto | null;
  actions: QuizActions;
  onClose: () => void;
  /** 保存成功后回调（父组件刷新列表）。 */
  onSaved: () => void;
}

export function QuizFormDialog({ open, editing, actions, onClose, onSaved }: QuizFormDialogProps) {
  const styles = useQuizzesStyles();
  const editingId = editing?.id ?? null;
  const { dispatchToast } = useToastController();

  const [form, setForm] = useState<QuizFormState>(emptyForm());
  const [formError, setFormError] = useState<string | null>(null);

  // 题库选题器（按关键字检索）
  const [pickerKeyword, setPickerKeyword] = useState("");
  const [pickerQuestions, setPickerQuestions] = useState<ClassroomDtosQuestionDto[] | null>(null);
  const [pickerHasMore, setPickerHasMore] = useState(false);
  const [pickerLoading, setPickerLoading] = useState(false);

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
        dispatchToast(`题库加载失败：${extractAbpErrorMessage(err)}`, { intent: "error" });
      } finally {
        setPickerLoading(false);
      }
    },
    [pickerQuestions, dispatchToast],
  );

  /** 回填已选题目：按 id 逐个拉取（保持 questionIds 顺序）。 */
  async function backfillSelected(quiz: ClassroomDtosQuizDto) {
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
      dispatchToast(`已选题回填失败：${extractAbpErrorMessage(err)}`, { intent: "error" });
    }
  }

  // 每次打开时初始化：重置表单与选题器，并预加载题库首页；编辑时回填已选题
  useEffect(() => {
    if (!open) return;
    setFormError(null);
    setPickerKeyword("");
    setPickerQuestions(null);
    if (editing) {
      // 打开编辑：回填基本信息 + 按 questionIds 顺序重建已选列表
      setForm({
        name: editing.name ?? "",
        description: editing.description ?? "",
        selected: [],
      });
      void backfillSelected(editing);
    } else {
      setForm(emptyForm());
    }
    void loadPickerQuestions("", false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, editing]);

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

    setFormError(null);
    const saveError = await actions.saveQuiz(editingId, {
      name: form.name.trim(),
      description: form.description.trim() || null,
      questionIds: form.selected.map((s) => s.id),
    });
    if (saveError === null) {
      onClose();
      onSaved();
    } else {
      setFormError(saveError);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(_, d) => {
        if (!d.open) onClose();
      }}
    >
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
                  <Text size={300}>题库为空，请先到"题库"创建题目。</Text>
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
            <Button
              appearance="primary"
              disabled={actions.saving}
              onClick={() => void handleSave()}
            >
              {actions.saving ? <Spinner size="tiny" /> : editingId ? "保存" : "创建"}
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
