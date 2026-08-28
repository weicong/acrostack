/**
 * 题库动作聚合 hook：封装题目创建/更新/删除三个 Kubb mutation、
 * busy 状态与成功/失败提示。
 *
 * 保存失败时返回错误消息由调用方在表单内展示；
 * 删除失败直接 toast（与拆分前行为一致）。错误提示统一走 extractAbpErrorMessage。
 */
import { useState } from "react";
import { useToastController } from "@fluentui/react-components";
import { useQuestionCreate } from "@/api/hooks/question/useQuestionCreate";
import { useQuestionUpdate } from "@/api/hooks/question/useQuestionUpdate";
import { useQuestionDelete } from "@/api/hooks/question/useQuestionDelete";
import { extractAbpErrorMessage } from "@/lib/http/error";
import type { ClassroomDtosCreateUpdateQuestionDto } from "@/api/models/classroom/dtos/CreateUpdateQuestionDto";

export function useQuestionActions() {
  const { dispatchToast } = useToastController();
  const [saving, setSaving] = useState(false);
  const [deleteBusy, setDeleteBusy] = useState(false);

  const createMutation = useQuestionCreate();
  const updateMutation = useQuestionUpdate();
  const deleteMutation = useQuestionDelete();

  /**
   * 创建或更新题目。成功提示并返回 null；失败返回错误消息（调用方在表单内展示）。
   */
  async function saveQuestion(
    editingId: string | null,
    body: ClassroomDtosCreateUpdateQuestionDto,
  ): Promise<string | null> {
    setSaving(true);
    try {
      if (editingId) {
        await updateMutation.mutateAsync({ path: { id: editingId }, body });
        dispatchToast("题目已更新", { intent: "success" });
      } else {
        await createMutation.mutateAsync({ body });
        dispatchToast("题目已创建", { intent: "success" });
      }
      return null;
    } catch (err) {
      return extractAbpErrorMessage(err);
    } finally {
      setSaving(false);
    }
  }

  /** 删除题目。成功提示并返回 true；失败 toast 错误并返回 false。 */
  async function deleteQuestion(id: string): Promise<boolean> {
    if (deleteBusy) return false;
    setDeleteBusy(true);
    try {
      await deleteMutation.mutateAsync({ path: { id } });
      dispatchToast("题目已删除", { intent: "success" });
      return true;
    } catch (err) {
      dispatchToast(`删除失败：${extractAbpErrorMessage(err)}`, { intent: "error" });
      return false;
    } finally {
      setDeleteBusy(false);
    }
  }

  return { saving, deleteBusy, saveQuestion, deleteQuestion };
}

/** useQuestionActions 的返回类型，供展示组件消费。 */
export type QuestionActions = ReturnType<typeof useQuestionActions>;
