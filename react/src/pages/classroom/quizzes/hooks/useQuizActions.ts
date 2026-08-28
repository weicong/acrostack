/**
 * 试卷动作聚合 hook：封装试卷创建/更新/删除三个 Kubb mutation、
 * busy 状态与成功/失败提示。
 *
 * 保存失败时返回错误消息由调用方在表单内展示；
 * 删除失败直接 toast（与拆分前行为一致）。错误提示统一走 extractAbpErrorMessage。
 */
import { useState } from "react";
import { useToastController } from "@fluentui/react-components";
import { useQuizCreate } from "@/api/hooks/quiz/useQuizCreate";
import { useQuizUpdate } from "@/api/hooks/quiz/useQuizUpdate";
import { useQuizDelete } from "@/api/hooks/quiz/useQuizDelete";
import { extractAbpErrorMessage } from "@/lib/http/error";
import type { ClassroomDtosCreateUpdateQuizDto } from "@/api/models/classroom/dtos/CreateUpdateQuizDto";

export function useQuizActions() {
  const { dispatchToast } = useToastController();
  const [saving, setSaving] = useState(false);
  const [deleteBusy, setDeleteBusy] = useState(false);

  const createMutation = useQuizCreate();
  const updateMutation = useQuizUpdate();
  const deleteMutation = useQuizDelete();

  /**
   * 创建或更新试卷。成功提示并返回 null；失败返回错误消息（调用方在表单内展示）。
   */
  async function saveQuiz(
    editingId: string | null,
    body: ClassroomDtosCreateUpdateQuizDto,
  ): Promise<string | null> {
    setSaving(true);
    try {
      if (editingId) {
        await updateMutation.mutateAsync({ path: { id: editingId }, body });
        dispatchToast("试卷已更新", { intent: "success" });
      } else {
        await createMutation.mutateAsync({ body });
        dispatchToast("试卷已创建", { intent: "success" });
      }
      return null;
    } catch (err) {
      return extractAbpErrorMessage(err);
    } finally {
      setSaving(false);
    }
  }

  /** 删除试卷。成功提示并返回 true；失败 toast 错误并返回 false。 */
  async function deleteQuiz(id: string): Promise<boolean> {
    if (deleteBusy) return false;
    setDeleteBusy(true);
    try {
      await deleteMutation.mutateAsync({ path: { id } });
      dispatchToast("试卷已删除", { intent: "success" });
      return true;
    } catch (err) {
      dispatchToast(`删除失败：${extractAbpErrorMessage(err)}`, { intent: "error" });
      return false;
    } finally {
      setDeleteBusy(false);
    }
  }

  return { saving, deleteBusy, saveQuiz, deleteQuiz };
}

/** useQuizActions 的返回类型，供展示组件消费。 */
export type QuizActions = ReturnType<typeof useQuizActions>;
