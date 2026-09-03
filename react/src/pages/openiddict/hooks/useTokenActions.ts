/**
 * OpenIddict Token 删除/撤销动作：内聚 mutation、缓存失效与提示。
 */
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useToastController } from "@fluentui/react-components";
import { useOpenIddictTokenDelete } from "@/api/hooks/openIddictToken/useOpenIddictTokenDelete";
import { openIddictTokenGetListQueryKey } from "@/api/hooks/openIddictToken/useOpenIddictTokenGetList";
import { useOpenIddictTokenRevoke } from "@/api/hooks/openIddictToken/useOpenIddictTokenRevoke";
import { extractAbpErrorMessage } from "@/lib/http/error";

export function useTokenActions() {
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();
  const deleteMutation = useOpenIddictTokenDelete();
  const revokeMutation = useOpenIddictTokenRevoke();

  const invalidate = useCallback(() => {
    void queryClient.invalidateQueries({ queryKey: openIddictTokenGetListQueryKey() });
  }, [queryClient]);

  const remove = useCallback(
    async (id: string): Promise<boolean> => {
      try {
        await deleteMutation.mutateAsync({ path: { id } });
        invalidate();
        dispatchToast("删除成功", { intent: "success" });
        return true;
      } catch (err) {
        dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
        return false;
      }
    },
    [deleteMutation, invalidate, dispatchToast],
  );

  const revoke = useCallback(
    async (id: string): Promise<boolean> => {
      try {
        await revokeMutation.mutateAsync({ path: { id } });
        invalidate();
        dispatchToast("已撤销", { intent: "success" });
        return true;
      } catch (err) {
        dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
        return false;
      }
    },
    [revokeMutation, invalidate, dispatchToast],
  );

  return {
    remove,
    revoke,
    isRemovePending: deleteMutation.isPending,
    isRevokePending: revokeMutation.isPending,
  };
}
