/**
 * 租户页动作聚合 hook：删除租户与模拟登录，
 * 内聚列表失效刷新；错误提示统一 extractAbpErrorMessage。
 */
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useToastController } from "@fluentui/react-components";
import { tenantGetListQueryKey } from "@/api/hooks/tenant/useTenantGetList";
import { useTenantDelete } from "@/api/hooks/tenant/useTenantDelete";
import { impersonateTenant } from "@/lib/auth/impersonation";
import { extractAbpErrorMessage } from "@/lib/http/error";
import type { TenantItem } from "./useTenantsTable";

export function useTenantActions() {
  const { dispatchToast } = useToastController();
  const queryClient = useQueryClient();
  const deleteMutation = useTenantDelete();

  /** 失效租户列表查询。 */
  const invalidateList = useCallback(() => {
    void queryClient.invalidateQueries({ queryKey: tenantGetListQueryKey() });
  }, [queryClient]);

  /**
   * 删除租户；成功后失效列表、提示并返回是否成功
   * （由调用方决定是否关闭确认框；id 缺失时静默返回 false，与原实现一致）。
   */
  const remove = useCallback(
    async (tenant: TenantItem | null): Promise<boolean> => {
      if (!tenant?.id) return false;
      try {
        await deleteMutation.mutateAsync({ path: { id: tenant.id } });
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

  /** 模拟登录指定租户；失败时记录日志并以 extractAbpErrorMessage 提示。 */
  const impersonate = useCallback(
    (tenant: TenantItem) => {
      if (!tenant.id) return;
      void impersonateTenant(tenant.id).catch((err: unknown) => {
        const message = extractAbpErrorMessage(err);
        console.error("[impersonation] failed:", err);
        dispatchToast(message, { intent: "error" });
      });
    },
    [dispatchToast],
  );

  return { remove, deletePending: deleteMutation.isPending, impersonate, invalidateList };
}
