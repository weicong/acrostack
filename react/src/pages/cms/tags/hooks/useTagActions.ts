/**
 * 标签管理动作聚合 hook：删除标签，
 * 内聚列表失效刷新与统一错误提示（extractAbpErrorMessage）。
 * 删除返回是否成功，供调用方决定关闭确认框。
 */
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useToastController } from "@fluentui/react-components";
import { tagAdminGetListQueryKey } from "@/api/hooks/tagAdmin/useTagAdminGetList";
import { useTagAdminDelete } from "@/api/hooks/tagAdmin/useTagAdminDelete";
import { extractAbpErrorMessage } from "@/lib/api/error";

export function useTagActions() {
  const { dispatchToast } = useToastController();
  const queryClient = useQueryClient();

  const deleteMutation = useTagAdminDelete();

  /** 失效标签列表查询。 */
  const invalidateList = useCallback(() => {
    void queryClient.invalidateQueries({
      queryKey: tagAdminGetListQueryKey(),
    });
  }, [queryClient]);

  const fail = useCallback(
    (err: unknown) => {
      dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
    },
    [dispatchToast],
  );

  /** 删除标签；成功后失效列表并提示。 */
  const remove = useCallback(
    async (id: string | null): Promise<boolean> => {
      if (!id) return false;
      try {
        await deleteMutation.mutateAsync({ path: { id } });
      } catch (err) {
        fail(err);
        return false;
      }
      invalidateList();
      dispatchToast("删除成功", { intent: "success" });
      return true;
    },
    [deleteMutation, invalidateList, dispatchToast, fail],
  );

  return {
    remove,
    removePending: deleteMutation.isPending,
    invalidateList,
  };
}
