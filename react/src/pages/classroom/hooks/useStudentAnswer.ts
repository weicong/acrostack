/**
 * 学员答题聚合 hook：选择/文本答案状态、提交与重置。
 */
import { useCallback, useState } from "react";
import type { useToastController } from "@fluentui/react-components";
import { submitAnswer } from "../utils/studentApi";
import { classroomErrorMessage } from "../utils/studentApi";

interface UseStudentAnswerOptions {
  sessionId: string;
  token: string | null;
  dispatchToast: ReturnType<typeof useToastController>["dispatchToast"];
}

export function useStudentAnswer({ sessionId, token, dispatchToast }: UseStudentAnswerOptions) {
  const [selected, setSelected] = useState("");
  const [textAnswer, setTextAnswer] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const submit = useCallback(
    async (sessionQuestionId: string, content: string) => {
      if (!token) return;
      setSubmitting(true);
      setSubmitError(null);
      try {
        await submitAnswer(sessionId, token, {
          sessionQuestionId,
          requestId: crypto.randomUUID(),
          answerContent: content,
          clientSubmittedAt: new Date().toISOString(),
        });
        setSubmitted(true);
        dispatchToast("提交成功", { intent: "success" });
      } catch (err) {
        setSubmitError(classroomErrorMessage(err));
        dispatchToast(`提交失败：${classroomErrorMessage(err)}`, { intent: "error" });
      } finally {
        setSubmitting(false);
      }
    },
    [sessionId, token, dispatchToast],
  );

  const resetAnswer = useCallback(() => {
    setSelected("");
    setTextAnswer("");
    setSubmitted(false);
    setSubmitError(null);
  }, []);

  const restoreAnswer = useCallback((content: string) => {
    setSubmitted(true);
    setSelected(content);
    setTextAnswer(content);
  }, []);

  return {
    selected,
    textAnswer,
    submitting,
    submitted,
    submitError,
    setSelected,
    setTextAnswer,
    submit,
    resetAnswer,
    restoreAnswer,
  };
}
