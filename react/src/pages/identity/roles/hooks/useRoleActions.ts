/**
 * 角色页动作聚合 hook：删除角色与表单保存后的统一处理，
 * 内聚列表失效刷新与统一错误提示（extractAbpErrorMessage）。
 * 删除返回是否成功，供调用方决定关闭确认框。
 */
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useToastController } from "@fluentui/react-components";
import { roleGetListQueryKey } from "@/api/hooks/role/useRoleGetList";
import { useRoleDelete } from "@/api/hooks/role/useRoleDelete";
import { extractAbpErrorMessage } from "@/lib/http/error";

export function useRoleActions() {
  const { dispatchToast } = useToastController();
  const queryClient = useQueryClient();
  const deleteMutation = useRoleDelete();

  /** 失效角色列表查询。 */
  const invalidateList = useCallback(() => {
    void queryClient.invalidateQueries({ queryKey: roleGetListQueryKey() });
  }, [queryClient]);

  /** 表单保存成功后的统一处理：失效列表并提示。 */
  const notifySaved = useCallback(() => {
    invalidateList();
    dispatchToast("保存成功", { intent: "success" });
  }, [invalidateList, dispatchToast]);

  /** 删除角色；成功后失效列表并提示，失败时以 ABP 错误消息提示。 */
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

  return { remove, removePending: deleteMutation.isPending, notifySaved, invalidateList };
}
