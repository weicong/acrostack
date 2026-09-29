/**
 * 权限管理页（PermissionsPage）。
 *
 * 本文件只负责编排：提供程序选择状态、本地勾选状态与各子组件组装；
 * 动作聚合见 hooks/usePermissionActions，
 * 工具栏见 components/PermissionsToolbar，权限扁平化见 utils/permission-tree。
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import { PageHeader } from "@workspace/layout";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { Spinner } from "@workspace/ui/components/spinner";
import { usePermissionsGet } from "@workspace/api-client/hooks/permissions/usePermissionsGet";
import { useRoleGetAllList } from "@workspace/api-client/hooks/role/useRoleGetAllList";
import type { VoloAbpPermissionManagementPermissionGroupDto } from "@workspace/api-client/models/volo/abp/permissionManagement/PermissionGroupDto";
import { type ProviderName, flattenPermissions } from "./utils/permission-tree";
import { usePermissionActions } from "./hooks/usePermissionActions";
import { PermissionsToolbar } from "./components/PermissionsToolbar";

export function PermissionsPage() {
  // 提供程序选择状态（驱动角色列表与权限两个查询）
  const [providerName, setProviderName] = useState<ProviderName>("R");
  const [providerKey, setProviderKey] = useState<string>("");

  const rolesQuery = useRoleGetAllList({
    query: { enabled: providerName === "R" },
  });

  const roles = rolesQuery.data?.items ?? [];

  const permissionsQuery = usePermissionsGet(
    providerKey ? { query: { providerName, providerKey } } : undefined,
    {
      query: { enabled: !!providerKey },
    },
  );

  // 本地勾选状态：允许用户在保存前自由切换
  const [grantedMap, setGrantedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const groups = permissionsQuery.data?.groups ?? [];
    const map: Record<string, boolean> = {};
    for (const group of groups) {
      for (const perm of group.permissions ?? []) {
        if (perm.name) map[perm.name] = perm.isGranted === true;
      }
    }
    setGrantedMap(map);
  }, [permissionsQuery.data]);

  const flatPermissionsByGroup = useMemo(() => {
    const groups = permissionsQuery.data?.groups ?? [];
    return groups.map((group) => ({
      group,
      flat: flattenPermissions(group.permissions),
    }));
  }, [permissionsQuery.data]);

  // 动作聚合：保存权限变更（内含查询失效与统一错误提示）
  const { save, savePending } = usePermissionActions();

  const handleToggle = (permissionName: string, isGranted: boolean, isEditable?: boolean) => {
    if (isEditable === false) return;
    setGrantedMap((prev) => ({ ...prev, [permissionName]: isGranted }));
  };

  const handleSelectAllInGroup = (
    group: VoloAbpPermissionManagementPermissionGroupDto,
    checked: boolean,
  ) => {
    setGrantedMap((prev) => {
      const next = { ...prev };
      for (const perm of group.permissions ?? []) {
        if (perm.name && perm.isEditable !== false) {
          next[perm.name] = checked;
        }
      }
      return next;
    });
  };

  const handleSave = () => {
    void save({
      providerName,
      providerKey,
      groups: permissionsQuery.data?.groups ?? [],
      grantedMap,
    });
  };

  const handleSelectProviderName = useCallback((name: ProviderName) => {
    setProviderName(name);
    setProviderKey("");
  }, []);

  const handleSelectProviderKey = useCallback((key: string) => {
    setProviderKey(key);
  }, []);

  return (
    <>
      <PageHeader
        title={"权限"}
        description="先选择授权对象（角色或用户），再逐项开启或关闭其权限。"
      />

      <Card>
        <CardContent>
          <PermissionsToolbar
            providerName={providerName}
            providerKey={providerKey}
            roles={roles}
            onSelectProviderName={handleSelectProviderName}
            onSelectProviderKey={handleSelectProviderKey}
          />
        </CardContent>
      </Card>

      {!providerKey && <p className="text-sm text-muted-foreground">{"请选择提供程序和权限"}</p>}

      {providerKey && permissionsQuery.isLoading && (
        <span className="inline-flex items-center gap-2 text-muted-foreground">
          <Spinner />
          {"加载中..."}
        </span>
      )}

      {providerKey && permissionsQuery.isError && (
        <p className="text-sm text-destructive">{"加载权限时出错"}</p>
      )}

      {providerKey && permissionsQuery.data && (
        <>
          {flatPermissionsByGroup.length === 0 && (
            <p className="text-sm text-muted-foreground">{"未定义任何权限。"}</p>
          )}
          {flatPermissionsByGroup.map(({ group, flat }) => {
            const allGranted = (group.permissions ?? []).every(
              (p) => p.name && grantedMap[p.name] === true,
            );
            const groupLabel = group.displayName || group.name || "";
            return (
              <Card key={group.name ?? groupLabel}>
                <CardHeader>
                  <CardTitle>{groupLabel}</CardTitle>
                  <CardAction>
                    <Checkbox
                      checked={allGranted}
                      onCheckedChange={(checked) => handleSelectAllInGroup(group, checked)}
                    />
                  </CardAction>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  {flat.map(({ permission, depth }) => (
                    <div key={permission.name} className="flex items-center gap-2">
                      <Checkbox
                        checked={grantedMap[permission.name ?? ""] === true}
                        disabled={permission.isEditable === false}
                        onCheckedChange={(checked) =>
                          handleToggle(permission.name ?? "", checked, permission.isEditable)
                        }
                      />
                      <span>
                        {/* 层级用文本前缀表达，避免自定义缩进样式 */}
                        {depth > 0 ? "└ " : ""}
                        {permission.displayName || permission.name}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
          <div>
            <Button onClick={handleSave} disabled={savePending}>
              {"保存"}
            </Button>
          </div>
        </>
      )}
    </>
  );
}
