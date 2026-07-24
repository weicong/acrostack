import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Card,
  Checkbox,
  Dropdown,
  Option,
  Spinner,
  Text,
  makeStyles,
  tokens,
  useToastController,
  Field,
} from "@fluentui/react-components";
import { PageLayout } from "@/components/layout/PageLayout";
import {
  usePermissionsGet,
  permissionsGetQueryKey,
} from "@/api/hooks/permissions/usePermissionsGet";
import { usePermissionsUpdate } from "@/api/hooks/permissions/usePermissionsUpdate";
import { useRoleGetAllList } from "@/api/hooks/role/useRoleGetAllList";
import type { VoloAbpPermissionManagementPermissionGrantInfoDto } from "@/api/models/volo/abp/permissionManagement/PermissionGrantInfoDto";
import type { VoloAbpPermissionManagementPermissionGroupDto } from "@/api/models/volo/abp/permissionManagement/PermissionGroupDto";

type ProviderName = "R" | "U";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-end",
    gap: tokens.spacingHorizontalM,
  },
  providerSelect: {
    minWidth: "200px",
  },
  groups: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  groupCard: {
    padding: tokens.spacingHorizontalM,
  },
  permissionRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    paddingBlock: tokens.spacingVerticalXXS,
  },
  childPermission: {
    marginLeft: tokens.spacingHorizontalXL,
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
    marginTop: tokens.spacingVerticalM,
  },
});

interface FlatPermission {
  permission: VoloAbpPermissionManagementPermissionGrantInfoDto;
  depth: number;
}

/**
 * Flatten a group's permissions into a list respecting parent/child relations.
 * Top-level permissions (no parentName) come first, then their children.
 */
function flattenPermissions(
  permissions: VoloAbpPermissionManagementPermissionGrantInfoDto[] | null | undefined,
): FlatPermission[] {
  if (!permissions || permissions.length === 0) return [];
  const byParent = new Map<string | null, VoloAbpPermissionManagementPermissionGrantInfoDto[]>();
  for (const p of permissions) {
    const key = p.parentName ?? null;
    const arr = byParent.get(key) ?? [];
    arr.push(p);
    byParent.set(key, arr);
  }

  const result: FlatPermission[] = [];
  const visit = (parent: string | null, depth: number) => {
    const children = byParent.get(parent) ?? [];
    for (const child of children) {
      result.push({ permission: child, depth });
      visit(child.name ?? null, depth + 1);
    }
  };
  visit(null, 0);
  return result;
}

export function PermissionsPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();
  const updateMutation = usePermissionsUpdate();

  const [providerName, setProviderName] = useState<ProviderName>("R");
  const [providerKey, setProviderKey] = useState<string>("");

  const rolesQuery = useRoleGetAllList({
    query: { enabled: providerName === "R" },
  });

  const roles = rolesQuery.data?.items ?? [];

  const permissionsQuery = usePermissionsGet(
    providerKey ? { providerName, providerKey } : undefined,
    {
      query: { enabled: !!providerKey },
    },
  );

  // Track local permission state so users can toggle before saving.
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
    if (!providerKey) return;
    const originalMap: Record<string, boolean> = {};
    for (const group of permissionsQuery.data?.groups ?? []) {
      for (const perm of group.permissions ?? []) {
        if (perm.name) originalMap[perm.name] = perm.isGranted === true;
      }
    }

    // Only send permissions that changed.
    const changedPermissions = Object.entries(grantedMap)
      .filter(([name, granted]) => originalMap[name] !== granted)
      .map(([name, isGranted]) => ({ name, isGranted }));

    if (changedPermissions.length === 0) {
      dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "info" });
      return;
    }

    updateMutation.mutate(
      {
        params: { providerName, providerKey },
        data: { permissions: changedPermissions },
      },
      {
        onSuccess: () => {
          void queryClient.invalidateQueries({
            queryKey: permissionsGetQueryKey({ providerName, providerKey }),
          });
          dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  };

  return (
    <PageLayout title={t("AbpPermissionManagement::Permissions")}>
      <div className={styles.toolbar}>
        <Field label={t("AbpPermissionManagement::Provider")} className={styles.providerSelect}>
          <Dropdown
            value={
              providerName === "R"
                ? t("AbpIdentity::Role")
                : t("AbpIdentity::UserResourcePermissionProviderKeyLookupService")
            }
            selectedOptions={[providerName]}
            onOptionSelect={(_, data) => {
              const next = data.optionValue as ProviderName;
              setProviderName(next);
              setProviderKey("");
            }}
          >
            <Option value="R">{t("AbpIdentity::Role")}</Option>
            <Option value="U">
              {t("AbpIdentity::UserResourcePermissionProviderKeyLookupService")}
            </Option>
          </Dropdown>
        </Field>

        <Field
          label={
            providerName === "R"
              ? t("AbpIdentity::Role")
              : t("AbpIdentity::UserResourcePermissionProviderKeyLookupService")
          }
          className={styles.providerSelect}
        >
          <Dropdown
            placeholder={t("AbpPermissionManagement::SelectProvider")}
            selectedOptions={providerKey ? [providerKey] : []}
            value={roles.find((r) => r.id === providerKey)?.name ?? ""}
            onOptionSelect={(_, data) => {
              setProviderKey(data.optionValue as string);
            }}
          >
            {roles.map((role) => (
              <Option key={role.id ?? ""} value={role.id ?? ""}>
                {role.name ?? ""}
              </Option>
            ))}
          </Dropdown>
        </Field>
      </div>

      {!providerKey && (
        <Text>{t("AbpPermissionManagement::PleaseSelectProviderAndPermissions")}</Text>
      )}

      {providerKey && permissionsQuery.isLoading && (
        <Spinner label={t("AbpUi::LoadingWithThreeDot")} />
      )}

      {providerKey && permissionsQuery.isError && (
        <Text>{t("AbpPermissionManagement::ErrorLoadingPermissions")}</Text>
      )}

      {providerKey && permissionsQuery.data && (
        <>
          {flatPermissionsByGroup.length === 0 && (
            <Text>{t("AbpPermissionManagement::NoResourcePermissionFound")}</Text>
          )}
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
            <Button appearance="primary" onClick={handleSave} disabled={updateMutation.isPending}>
              {t("AbpUi::Save")}
            </Button>
          </div>
        </>
      )}
    </PageLayout>
  );
}
