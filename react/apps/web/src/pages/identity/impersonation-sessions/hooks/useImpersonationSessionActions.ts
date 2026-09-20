/**
 * 模拟登录会话动作 hook：撤销进行中的会话，
 * 内聚列表失效刷新；错误提示统一 extractAbpErrorMessage。
 */
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useToastController } from "@fluentui/react-components";
import { impersonationSessionGetListQueryKey } from "@/api/hooks/impersonationSession/useImpersonationSessionGetList";
import { useImpersonationSessionRevoke } from "@/api/hooks/impersonationSession/useImpersonationSessionRevoke";
import { extractAbpErrorMessage } from "@/lib/http/error";

export function useImpersonationSessionActions() {
  const { dispatchToast } = useToastController();
  const queryClient = useQueryClient();

  const revokeMutation = useImpersonationSessionRevoke();

  /** 失效会话列表查询。 */
  const invalidateList = useCallback(() => {
    void queryClient.invalidateQueries({ queryKey: impersonationSessionGetListQueryKey() });
  }, [queryClient]);

  /**
   * 撤销会话；成功后失效列表并提示，返回是否成功
   * （由调用方决定是否关闭确认框）。
   */
  const revoke = useCallback(
    async (id: string): Promise<boolean> => {
      try {
        await revokeMutation.mutateAsync({ path: { id } });
      } catch (err) {
        dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
        return false;
      }
      invalidateList();
      dispatchToast("已撤销模拟会话", { intent: "success" });
      return true;
    },
    [revokeMutation, invalidateList, dispatchToast],
  );

  return { revoke, revokePending: revokeMutation.isPending };
}
