/**
 * 权限管理页（PermissionsPage）。
 *
 * 本文件只负责编排：提供程序选择状态、本地勾选状态与各子组件组装；
 * 样式见 styles/permissions，动作聚合见 hooks/usePermissionActions，
 * 工具栏见 components/PermissionsToolbar，权限扁平化见 utils/permissions。
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Card, Checkbox, Spinner, Text } from "@fluentui/react-components";
import { PageLayout } from "@/components/layout/PageLayout";
import { usePermissionsGet } from "@/api/hooks/permissions/usePermissionsGet";
import { useRoleGetAllList } from "@/api/hooks/role/useRoleGetAllList";
import type { VoloAbpPermissionManagementPermissionGroupDto } from "@/api/models/volo/abp/permissionManagement/PermissionGroupDto";
import { type ProviderName, flattenPermissions } from "./utils/permissions";
import { usePermissionActions } from "./hooks/usePermissionActions";
import { PermissionsToolbar } from "./components/PermissionsToolbar";
import { usePermissionsStyles } from "./styles/permissions";

export function PermissionsPage() {
  const styles = usePermissionsStyles();

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
    <PageLayout title={"权限"}>
      <PermissionsToolbar
        providerName={providerName}
        providerKey={providerKey}
        roles={roles}
        onSelectProviderName={handleSelectProviderName}
        onSelectProviderKey={handleSelectProviderKey}
      />

      {!providerKey && <Text>{"请选择提供程序和权限"}</Text>}

      {providerKey && permissionsQuery.isLoading && <Spinner label={"加载中..."} />}

      {providerKey && permissionsQuery.isError && <Text>{"加载权限时出错"}</Text>}

      {providerKey && permissionsQuery.data && (
        <>
          {flatPermissionsByGroup.length === 0 && <Text>{"未定义任何权限。"}</Text>}
          <div className={styles.groups}>
            {flatPermissionsByGroup.map(({ group, flat }) => {
              const allGranted = (group.permissions ?? []).every(
                (p) => p.name && grantedMap[p.name] === true,
              );
              const groupLabel = group.displayName || group.name || "";
              return (
                <Card key={group.name ?? groupLabel} className={styles.groupCard}>
                  <div className={styles.permissionRow}>
                    <Checkbox
                      checked={allGranted}
                      onChange={(_, data) => handleSelectAllInGroup(group, data.checked === true)}
                    />
                    <Text weight="semibold">{groupLabel}</Text>
                  </div>
                  {flat.map(({ permission, depth }) => (
                    <div
                      key={permission.name}
                      className={styles.permissionRow}
                      style={{ marginLeft: depth * 24 }}
                    >
                      <Checkbox
                        checked={grantedMap[permission.name ?? ""] === true}
                        disabled={permission.isEditable === false}
                        onChange={(_, data) =>
                          handleToggle(
                            permission.name ?? "",
                            data.checked === true,
                            permission.isEditable,
                          )
                        }
                      />
                      <Text>{permission.displayName || permission.name}</Text>
                    </div>
                  ))}
                </Card>
              );
            })}
          </div>
          <div className={styles.actions}>
            <Button appearance="primary" onClick={handleSave} disabled={savePending}>
              {"保存"}
            </Button>
          </div>
        </>
      )}
    </PageLayout>
  );
}
