/**
 * OpenIddict Scope 删除动作：内聚删除 mutation、缓存失效与成功/失败提示。
 */
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useToastController } from "@fluentui/react-components";
import { useOpenIddictScopeDelete } from "@/api/hooks/openIddictScope/useOpenIddictScopeDelete";
import { openIddictScopeGetListQueryKey } from "@/api/hooks/openIddictScope/useOpenIddictScopeGetList";
import { extractAbpErrorMessage } from "@/lib/http/error";

export function useScopeActions() {
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();
  const deleteMutation = useOpenIddictScopeDelete();

  const invalidate = useCallback(() => {
    void queryClient.invalidateQueries({ queryKey: openIddictScopeGetListQueryKey() });
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

  return {
    remove,
    isRemovePending: deleteMutation.isPending,
    removingId: deleteMutation.isPending ? (deleteMutation.variables?.path?.id ?? null) : null,
  };
}
