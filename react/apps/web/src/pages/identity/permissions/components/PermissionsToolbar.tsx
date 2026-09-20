/**
 * 权限工具栏：先选提供程序（角色/用户），再选具体对象。
 *
 * 「提供程序」一词过于抽象，这里用「授权对象」表达，
 * 并把两个下拉放进统一的工具栏排布中，与其它列表页保持一致。
 */
import { Dropdown, Field, Option } from "@fluentui/react-components";
import type { VoloAbpIdentityIdentityRoleDto } from "@/api/models/volo/abp/identity/IdentityRoleDto";
import { ListToolbar } from "@/components/ui/ListToolbar";
import type { ProviderName } from "../utils/permissions";

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
          <Field label="授权对象类型">
            <Dropdown
              value={isRole ? "角色" : "用户"}
              selectedOptions={[providerName]}
              onOptionSelect={(_event, data) => {
                onSelectProviderName(data.optionValue as ProviderName);
              }}
            >
              <Option value="R">角色</Option>
              <Option value="U">用户</Option>
            </Dropdown>
          </Field>

          <Field label={isRole ? "选择角色" : "用户 ID"}>
            <Dropdown
              placeholder={isRole ? "请选择角色" : "请输入用户 ID"}
              selectedOptions={providerKey ? [providerKey] : []}
              value={roles.find((role) => role.id === providerKey)?.name ?? ""}
              onOptionSelect={(_event, data) => {
                onSelectProviderKey(data.optionValue as string);
              }}
            >
              {roles.map((role) => (
                <Option key={role.id ?? ""} value={role.id ?? ""}>
                  {role.name ?? ""}
                </Option>
              ))}
            </Dropdown>
          </Field>
        </>
      }
    />
  );
}
