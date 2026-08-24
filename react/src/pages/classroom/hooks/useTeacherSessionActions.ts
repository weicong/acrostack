/**
 * 教师课堂动作 hook：选择试卷创建新课堂。
 * 使用 mutateAsync + try/catch：成功后提示课堂码并跳转教师驾驶舱；失败提示 ABP 错误消息。
 */
import { useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useToastController } from "@fluentui/react-components";
import { useClassSessionCreate } from "@/api/hooks/classSession/useClassSessionCreate";
import { extractAbpErrorMessage } from "@/lib/api/error";

interface UseTeacherSessionActionsOptions {
  /** 当前选中的试卷 id；为空时不执行创建。 */
  selectedQuizId: string | null;
  /** 创建成功后的回调（如关闭对话框）。 */
  onCreated?: () => void;
}

export function useTeacherSessionActions(options: UseTeacherSessionActionsOptions) {
  const { selectedQuizId, onCreated } = options;
  const navigate = useNavigate();
  const { dispatchToast } = useToastController();
  const createMutation = useClassSessionCreate();

  /** 创建课堂：成功后关闭对话框、提示课堂码并进入教师驾驶舱。 */
  const createSession = useCallback(async (): Promise<void> => {
    if (!selectedQuizId || createMutation.isPending) return;
    try {
      const session = await createMutation.mutateAsync({
        body: { quizId: selectedQuizId },
      });
      onCreated?.();
      dispatchToast(`课堂已创建，课堂码 ${session.classroomCode ?? ""}`, { intent: "success" });
      void navigate({ to: "/classroom/$sessionId", params: { sessionId: session.id! } });
    } catch (err) {
      dispatchToast(`创建失败：${extractAbpErrorMessage(err)}`, { intent: "error" });
    }
  }, [selectedQuizId, createMutation, onCreated, navigate, dispatchToast]);

  return {
    /** 创建课堂动作（供对话框确认按钮调用）。 */
    createSession,
    /** 创建请求进行中。 */
    isCreating: createMutation.isPending,
  };
}
