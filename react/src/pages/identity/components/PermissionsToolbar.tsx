/**
 * 权限工具栏：提供程序（角色/用户）与具体提供程序键两个下拉。
 * 选择状态由页面持有并驱动查询，本组件仅展示并通过回调写回。
 */
import { Dropdown, Field, Option } from "@fluentui/react-components";
import type { VoloAbpIdentityIdentityRoleDto } from "@/api/models/volo/abp/identity/IdentityRoleDto";
import type { ProviderName } from "../utils/permissions";
import { usePermissionsStyles } from "../styles/permissions";

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
  const styles = usePermissionsStyles();

  return (
    <div className={styles.toolbar}>
      <Field label={"提供程序"} className={styles.providerSelect}>
        <Dropdown
          value={providerName === "R" ? "角色" : "用户"}
          selectedOptions={[providerName]}
          onOptionSelect={(_, data) => {
            onSelectProviderName(data.optionValue as ProviderName);
          }}
        >
          <Option value="R">{"角色"}</Option>
          <Option value="U">{"用户"}</Option>
        </Dropdown>
      </Field>

      <Field label={providerName === "R" ? "角色" : "用户"} className={styles.providerSelect}>
        <Dropdown
          placeholder={"选择提供程序"}
          selectedOptions={providerKey ? [providerKey] : []}
          value={roles.find((r) => r.id === providerKey)?.name ?? ""}
          onOptionSelect={(_, data) => {
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
    </div>
  );
}
