/**
 * 权限页共享工具：提供程序类型与权限树扁平化。
 */
import type { VoloAbpPermissionManagementPermissionGrantInfoDto } from "@/api/models/volo/abp/permissionManagement/PermissionGrantInfoDto";

/** 权限提供程序类型：R=角色，U=用户。 */
export type ProviderName = "R" | "U";

export interface FlatPermission {
  permission: VoloAbpPermissionManagementPermissionGrantInfoDto;
  depth: number;
}

/**
 * 将分组内权限按父子关系扁平化为有序列表：
 * 顶层权限（无 parentName）在前，其后紧跟各自的子权限。
 */
export function flattenPermissions(
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
