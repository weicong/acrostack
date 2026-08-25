/**
 * 题目新建/编辑对话框：自包含表单状态（题型切换、选项编辑、正确答案与解析），
 * 打开时按 editing 初始化；保存经 useQuestionActions 的 Kubb mutation 完成，
 * 成功后回调 onSaved 由父级刷新列表。
 */
import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Dropdown,
  Field,
  Option,
  Radio,
  RadioGroup,
  Spinner,
  Text,
  Textarea,
  tokens,
} from "@fluentui/react-components";
import type { ClassroomDtosQuestionDto } from "@/api/models/classroom/dtos/QuestionDto";
import { questionTypeLabel } from "../constants/question";
import type { QuestionActions } from "../hooks/useQuestionActions";
import { useQuestionBankStyles } from "../styles/questionBank";
import { emptyForm, formFromQuestion, formToBody, validateForm } from "../utils/questionForm";
import type { QuestionFormState, QuestionTypeValue } from "../types/question";
import { OptionEditor } from "./OptionEditor";

interface QuestionFormDialogProps {
  open: boolean;
  /** 非空表示编辑该题（不允许换题型）；null 表示新建。 */
  editing: ClassroomDtosQuestionDto | null;
  actions: QuestionActions;
  onClose: () => void;
  /** 保存成功后回调（父组件刷新列表）。 */
  onSaved: () => void;
}

export function QuestionFormDialog({
  open,
  editing,
  actions,
  onClose,
  onSaved,
}: QuestionFormDialogProps) {
  const styles = useQuestionBankStyles();
  const editingId = editing?.id ?? null;

  const [form, setForm] = useState<QuestionFormState>(emptyForm());
  const [formError, setFormError] = useState<string | null>(null);

  // 每次打开时初始化表单：新建用空表单，编辑从题目回填
  useEffect(() => {
    if (!open) return;
    setForm(editing ? formFromQuestion(editing) : emptyForm());
    setFormError(null);
  }, [open, editing]);

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

  async function handleSave() {
    const error = validateForm(form);
    if (error) {
      setFormError(error);
      return;
    }
    setFormError(null);
    const saveError = await actions.saveQuestion(editingId, formToBody(form));
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
                <OptionEditor
                  multiple={form.type === 2}
                  options={form.options}
                  correctKeys={form.correctKeys}
                  onChange={(next) => setForm((f) => ({ ...f, ...next }))}
                />
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
