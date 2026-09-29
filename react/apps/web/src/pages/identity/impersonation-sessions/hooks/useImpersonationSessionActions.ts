/**
 * 模拟登录会话动作 hook：撤销进行中的会话，
 * 内聚列表失效刷新；错误提示统一 extractAbpErrorMessage。
 */
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { impersonationSessionGetListQueryKey } from "@workspace/api-client/hooks/impersonationSession/useImpersonationSessionGetList";
import { useImpersonationSessionRevoke } from "@workspace/api-client/hooks/impersonationSession/useImpersonationSessionRevoke";
import { extractAbpErrorMessage } from "@workspace/core";

export function useImpersonationSessionActions() {
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
        toast.error(extractAbpErrorMessage(err));
        return false;
      }
      invalidateList();
      toast.success("已撤销模拟会话");
      return true;
    },
    [revokeMutation, invalidateList],
  );

  return { revoke, revokePending: revokeMutation.isPending };
}
