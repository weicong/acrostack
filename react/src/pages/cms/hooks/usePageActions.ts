/**
 * 页面管理动作聚合 hook：删除页面与设为首页，
 * 内聚列表失效刷新与统一错误提示（extractAbpErrorMessage）。
 * 删除返回是否成功，供调用方决定关闭确认框。
 */
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useToastController } from "@fluentui/react-components";
import { pageAdminGetListQueryKey } from "@/api/hooks/pageAdmin/usePageAdminGetList";
import { usePageAdminDelete } from "@/api/hooks/pageAdmin/usePageAdminDelete";
import { usePageAdminSetAsHomePage } from "@/api/hooks/pageAdmin/usePageAdminSetAsHomePage";
import { extractAbpErrorMessage } from "@/lib/api/error";

export function usePageActions() {
  const { dispatchToast } = useToastController();
  const queryClient = useQueryClient();

  const deleteMutation = usePageAdminDelete();
  const setHomePageMutation = usePageAdminSetAsHomePage();

  /** 失效页面列表查询。 */
  const invalidateList = useCallback(() => {
    void queryClient.invalidateQueries({
      queryKey: pageAdminGetListQueryKey(),
    });
  }, [queryClient]);

  const fail = useCallback(
    (err: unknown) => {
      dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
    },
    [dispatchToast],
  );

  /** 删除页面；成功后失效列表并提示。 */
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

  /** 设为首页；成功后失效列表并提示。 */
  const setAsHomePage = useCallback(
    async (id: string): Promise<void> => {
      try {
        await setHomePageMutation.mutateAsync({ path: { id } });
      } catch (err) {
        fail(err);
        return;
      }
      invalidateList();
      dispatchToast("保存成功", { intent: "success" });
    },
    [setHomePageMutation, invalidateList, dispatchToast, fail],
  );

  return {
    remove,
    removePending: deleteMutation.isPending,
    setAsHomePage,
    invalidateList,
  };
}
