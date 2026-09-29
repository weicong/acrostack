/**
 * 用户页动作聚合 hook：删除用户与模拟登录，
 * 内聚列表失效刷新；错误提示统一 extractAbpErrorMessage。
 */
import { useCallback } from "react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { userGetListQueryKey } from "@acrostack/api-client/hooks/user/useUserGetList";
import { useUserDelete } from "@acrostack/api-client/hooks/user/useUserDelete";
import { extractAbpErrorMessage, impersonateUser } from "@acrostack/core";

import type { UserItem } from "./useUsersTable";

export function useUserActions() {
  const queryClient = useQueryClient();
  const deleteMutation = useUserDelete();

  /** 失效用户列表查询。 */
  const invalidateList = useCallback(() => {
    void queryClient.invalidateQueries({ queryKey: userGetListQueryKey() });
  }, [queryClient]);

  /**
   * 删除用户；成功后失效用户列表并返回是否成功。
   * 失败时不弹提示（静默返回 false，由调用方保持对话框打开）。
   */
  const remove = useCallback(
    async (id: string | null): Promise<boolean> => {
      if (!id) return false;
      try {
        await deleteMutation.mutateAsync({ path: { id } });
      } catch {
        return false;
      }
      invalidateList();
      return true;
    },
    [deleteMutation, invalidateList],
  );

  /** 模拟登录指定用户；失败时记录日志并以 extractAbpErrorMessage 提示。 */
  const impersonate = useCallback((user: UserItem) => {
    if (!user.id) return;
    void impersonateUser(user.id).catch((err: unknown) => {
      console.error("[impersonation] failed:", err);
      toast.error(extractAbpErrorMessage(err));
    });
  }, []);

  return { remove, removePending: deleteMutation.isPending, impersonate, invalidateList };
}
