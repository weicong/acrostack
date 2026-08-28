/**
 * 后台任务动作聚合 hook：删除/重新排队/放弃，
 * 内聚列表失效刷新；错误提示统一 extractAbpErrorMessage。
 */
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useToastController } from "@fluentui/react-components";
import { backgroundJobGetListQueryKey } from "@/api/hooks/backgroundJob/useBackgroundJobGetList";
import { useBackgroundJobDelete } from "@/api/hooks/backgroundJob/useBackgroundJobDelete";
import { useBackgroundJobRequeue } from "@/api/hooks/backgroundJob/useBackgroundJobRequeue";
import { useBackgroundJobAbandon } from "@/api/hooks/backgroundJob/useBackgroundJobAbandon";
import { extractAbpErrorMessage } from "@/lib/http/error";

/** 确认对话框承载的操作类型（删除/重新排队/放弃）。 */
export type ConfirmAction =
  | { kind: "delete"; id: string }
  | { kind: "requeue"; id: string }
  | { kind: "abandon"; id: string };

export function useBackgroundJobActions() {
  const { dispatchToast } = useToastController();
  const queryClient = useQueryClient();

  const deleteMutation = useBackgroundJobDelete();
  const requeueMutation = useBackgroundJobRequeue();
  const abandonMutation = useBackgroundJobAbandon();

  /** 失效后台任务列表查询。 */
  const invalidateList = useCallback(() => {
    void queryClient.invalidateQueries({ queryKey: backgroundJobGetListQueryKey() });
  }, [queryClient]);

  /**
   * 执行确认操作；成功后失效列表、按操作类型提示并返回是否成功
   * （由调用方决定是否关闭确认框）。
   */
  const runConfirm = useCallback(
    async (action: ConfirmAction | null): Promise<boolean> => {
      if (!action) return false;
      try {
        if (action.kind === "delete") {
          await deleteMutation.mutateAsync({ path: { id: action.id } });
        } else if (action.kind === "requeue") {
          await requeueMutation.mutateAsync({ path: { id: action.id } });
        } else {
          await abandonMutation.mutateAsync({ path: { id: action.id } });
        }
      } catch (err) {
        dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
        return false;
      }
      invalidateList();
      const toastMessage =
        action.kind === "delete" ? "删除成功" : action.kind === "requeue" ? "已重新排队" : "已放弃";
      dispatchToast(toastMessage, { intent: "success" });
      return true;
    },
    [deleteMutation, requeueMutation, abandonMutation, invalidateList, dispatchToast],
  );

  /** 任一动作请求进行中。 */
  const actionPending =
    deleteMutation.isPending || requeueMutation.isPending || abandonMutation.isPending;

  return { runConfirm, actionPending };
}
