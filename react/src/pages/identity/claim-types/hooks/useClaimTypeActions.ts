/**
 * 声明类型页动作聚合 hook：删除声明类型，
 * 内聚列表失效刷新与统一错误提示（extractAbpErrorMessage）。
 * 删除返回是否成功，供调用方决定关闭确认框。
 */
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useToastController } from "@fluentui/react-components";
import { identityClaimTypeGetListQueryKey } from "@/api/hooks/identityClaimType/useIdentityClaimTypeGetList";
import { useIdentityClaimTypeDelete } from "@/api/hooks/identityClaimType/useIdentityClaimTypeDelete";
import { extractAbpErrorMessage } from "@/lib/api/error";

export function useClaimTypeActions() {
  const { dispatchToast } = useToastController();
  const queryClient = useQueryClient();
  const deleteMutation = useIdentityClaimTypeDelete();

  /** 失效声明类型列表查询。 */
  const invalidateList = useCallback(() => {
    void queryClient.invalidateQueries({ queryKey: identityClaimTypeGetListQueryKey() });
  }, [queryClient]);

  /** 删除声明类型；成功后失效列表并提示，失败时以 ABP 错误消息提示。 */
  const remove = useCallback(
    async (id: string | null): Promise<boolean> => {
      if (!id) return false;
      try {
        await deleteMutation.mutateAsync({ path: { id } });
      } catch (err) {
        dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
        return false;
      }
      invalidateList();
      dispatchToast("删除成功", { intent: "success" });
      return true;
    },
    [deleteMutation, invalidateList, dispatchToast],
  );

  return { remove, removePending: deleteMutation.isPending, invalidateList };
}
