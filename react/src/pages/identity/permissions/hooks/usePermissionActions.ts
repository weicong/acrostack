/**
 * 权限页动作聚合 hook：保存权限变更，
 * 内聚权限查询失效与统一错误提示（extractAbpErrorMessage）。
 */
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useToastController } from "@fluentui/react-components";
import { permissionsGetQueryKey } from "@/api/hooks/permissions/usePermissionsGet";
import { usePermissionsUpdate } from "@/api/hooks/permissions/usePermissionsUpdate";
import { extractAbpErrorMessage } from "@/lib/http/error";
import type { VoloAbpPermissionManagementPermissionGroupDto } from "@/api/models/volo/abp/permissionManagement/PermissionGroupDto";
import type { ProviderName } from "../utils/permissions";

/** 保存权限变更所需的输入。 */
export interface SavePermissionsInput {
  providerName: ProviderName;
  providerKey: string;
  /** 当前查询到的权限分组（用于与本地勾选状态比对变更）。 */
  groups: VoloAbpPermissionManagementPermissionGroupDto[];
  /** 本地勾选状态：permissionName -> 是否授予。 */
  grantedMap: Record<string, boolean>;
}

export function usePermissionActions() {
  const { dispatchToast } = useToastController();
  const queryClient = useQueryClient();
  const updateMutation = usePermissionsUpdate();

  /**
   * 保存权限变更：仅提交相对服务端有差异的项。
   * 未选择提供程序时静默返回；无变更时以 info 提示；
   * 成功后失效权限查询并以 success 提示；失败时以 ABP 错误消息（error intent）提示。
   */
  const save = useCallback(
    async ({
      providerName,
      providerKey,
      groups,
      grantedMap,
    }: SavePermissionsInput): Promise<void> => {
      if (!providerKey) return;

      const originalMap: Record<string, boolean> = {};
      for (const group of groups) {
        for (const perm of group.permissions ?? []) {
          if (perm.name) originalMap[perm.name] = perm.isGranted === true;
        }
      }

      // 仅提交发生变化的权限。
      const changedPermissions = Object.entries(grantedMap)
        .filter(([name, granted]) => originalMap[name] !== granted)
        .map(([name, isGranted]) => ({ name, isGranted }));

      if (changedPermissions.length === 0) {
        dispatchToast("保存成功", { intent: "info" });
        return;
      }

      try {
        await updateMutation.mutateAsync({
          query: { providerName, providerKey },
          body: { permissions: changedPermissions },
        });
      } catch (err) {
        dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
        return;
      }

      void queryClient.invalidateQueries({
        queryKey: permissionsGetQueryKey({ query: { providerName, providerKey } }),
      });
      dispatchToast("保存成功", { intent: "success" });
    },
    [updateMutation, queryClient, dispatchToast],
  );

  return { save, savePending: updateMutation.isPending };
}
