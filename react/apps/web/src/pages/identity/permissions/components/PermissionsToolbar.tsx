/**
 * 权限工具栏：先选提供程序（角色/用户），再选具体对象。
 *
 * 「提供程序」一词过于抽象，这里用「授权对象」表达，
 * 并把两个下拉放进统一的工具栏排布中，与其它列表页保持一致。
 */
import type { VoloAbpIdentityIdentityRoleDto } from "@workspace/api-client/models/volo/abp/identity/IdentityRoleDto";
import { ListToolbar } from "@workspace/ui/data-table";
import { Field, FieldLabel } from "@workspace/ui/components/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import type { ProviderName } from "../utils/permission-tree";

interface PermissionsToolbarProps {
  providerName: ProviderName;
  providerKey: string;
  /** 提供程序为角色时的可选项列表。 */
  roles: VoloAbpIdentityIdentityRoleDto[];
  onSelectProviderName: (name: ProviderName) => void;
  onSelectProviderKey: (key: string) => void;
}

export function PermissionsToolbar({
  providerName,
  providerKey,
  roles,
  onSelectProviderName,
  onSelectProviderKey,
}: PermissionsToolbarProps) {
  const isRole = providerName === "R";

  return (
    <ListToolbar
      label="权限筛选"
      filters={
        <>
          <Field>
            <FieldLabel>授权对象类型</FieldLabel>
            <Select
              value={providerName}
              onValueChange={(value) => onSelectProviderName(value as ProviderName)}
              items={[
                { value: "R", label: "角色" },
                { value: "U", label: "用户" },
              ]}
            >
              <SelectTrigger aria-label="授权对象类型">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="R">角色</SelectItem>
                <SelectItem value="U">用户</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel>{isRole ? "选择角色" : "用户 ID"}</FieldLabel>
            <Select
              value={providerKey || null}
              onValueChange={(value) => onSelectProviderKey(value ?? "")}
              items={roles.map((role) => ({ value: role.id ?? "", label: role.name ?? "" }))}
            >
              <SelectTrigger aria-label={isRole ? "选择角色" : "用户 ID"}>
                <SelectValue placeholder={isRole ? "请选择角色" : "请输入用户 ID"} />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role.id ?? ""} value={role.id ?? ""}>
                    {role.name ?? ""}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </>
      }
    />
  );
}
