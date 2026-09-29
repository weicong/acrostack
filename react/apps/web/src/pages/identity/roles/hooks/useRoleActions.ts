/**
 * 角色页动作聚合 hook：删除角色与表单保存后的统一处理，
 * 内聚列表失效刷新与统一错误提示（extractAbpErrorMessage）。
 * 删除返回是否成功，供调用方决定关闭确认框。
 */
import { useCallback } from "react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { roleGetListQueryKey } from "@workspace/api-client/hooks/role/useRoleGetList";
import { useRoleDelete } from "@workspace/api-client/hooks/role/useRoleDelete";
import { extractAbpErrorMessage } from "@workspace/core";

export function useRoleActions() {
  const queryClient = useQueryClient();
  const deleteMutation = useRoleDelete();

  /** 失效角色列表查询。 */
  const invalidateList = useCallback(() => {
    void queryClient.invalidateQueries({ queryKey: roleGetListQueryKey() });
  }, [queryClient]);

  /** 表单保存成功后的统一处理：失效列表并提示。 */
  const notifySaved = useCallback(() => {
    invalidateList();
    toast.success("保存成功");
  }, [invalidateList]);

  /** 删除角色；成功后失效列表并提示，失败时以 ABP 错误消息提示。 */
  const remove = useCallback(
    async (id: string | null): Promise<boolean> => {
      if (!id) return false;
      try {
        await deleteMutation.mutateAsync({ path: { id } });
      } catch (err) {
        toast.error(extractAbpErrorMessage(err));
        return false;
      }
      invalidateList();
      toast.success("删除成功");
      return true;
    },
    [deleteMutation, invalidateList],
  );

  return { remove, removePending: deleteMutation.isPending, notifySaved, invalidateList };
}
