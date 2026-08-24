/**
 * 题库编辑器表单助手：空表单构造、题目回填、提交体构造与表单校验。
 */
import type { ClassroomDtosQuestionDto } from "@/api/models/classroom/dtos/QuestionDto";
import type { QuestionFormState, QuestionTypeValue } from "../types/question";

export function emptyForm(type: QuestionTypeValue = 1): QuestionFormState {
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
export function formFromQuestion(q: ClassroomDtosQuestionDto): QuestionFormState {
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
export function formToBody(form: QuestionFormState) {
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
export function validateForm(form: QuestionFormState): string | null {
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
