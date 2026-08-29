import { useEffect, useMemo, type ReactNode } from "react";
import { makeStyles, tokens } from "@fluentui/react-components";
import { useAppForm, type ComboboxOption } from "@/components/ui/form";
import { useUserCreate } from "@/api/hooks/user/useUserCreate";
import { useUserUpdate } from "@/api/hooks/user/useUserUpdate";
import { useUserGetAssignableRoles } from "@/api/hooks/user/useUserGetAssignableRoles";
import { useUserGetRoles } from "@/api/hooks/user/useUserGetRoles";
import type { UserFormUser } from "../types/user";
import { createSchema, updateSchema } from "../schemas/user";

// ── Props ───────────────────────────────────────────────────────────

interface UserFormProps {
  user?: UserFormUser;
  onSuccess: () => void;
  /** Extra buttons rendered after the submit button (e.g. Cancel) */
  footer?: ReactNode;
}

// ── Styles ──────────────────────────────────────────────────────────

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
});

// ── Component ───────────────────────────────────────────────────────

export function UserForm({ user, onSuccess, footer }: UserFormProps) {
  const styles = useStyles();
  const isEdit = !!user;

  const createMutation = useUserCreate();
  const updateMutation = useUserUpdate();

  const assignableRolesQuery = useUserGetAssignableRoles();
  const userRolesQuery = useUserGetRoles(
    { path: { id: user?.id ?? "" } },
    { query: { enabled: isEdit && !!user?.id } },
  );

  const roleOptions: ComboboxOption[] = useMemo(
    () =>
      assignableRolesQuery.data?.items?.map((role) => ({
        value: role.name ?? "",
        label: role.name ?? "",
      })) ?? [],
    [assignableRolesQuery.data],
  );

  const currentRoleNames: string[] = useMemo(
    () => userRolesQuery.data?.items?.map((role) => role.name ?? "").filter(Boolean) ?? [],
    [userRolesQuery.data],
  );

  const form = useAppForm({
    defaultValues: {
      userName: user?.userName ?? "",
      name: user?.name ?? "",
      surname: user?.surname ?? "",
      email: user?.email ?? "",
      phoneNumber: user?.phoneNumber ?? "",
      isActive: user?.isActive ?? true,
      lockoutEnabled: user?.lockoutEnabled ?? false,
      roleNames: [] as string[],
      password: "",
      concurrencyStamp: user?.concurrencyStamp ?? "",
    },
    validators: {
      onChange: ({ value }) => {
        const result = isEdit ? updateSchema.safeParse(value) : createSchema.safeParse(value);
        if (result.error) return result.error.flatten().fieldErrors as Record<string, string[]>;
      },
    },
    onSubmit: ({ value }) => {
      // Convert empty strings back to null for nullable fields (ABP API contract).
      const base = {
        userName: value.userName,
        name: value.name || null,
        surname: value.surname || null,
        email: value.email,
        phoneNumber: value.phoneNumber || null,
        isActive: value.isActive,
        lockoutEnabled: value.lockoutEnabled,
        roleNames: value.roleNames,
      };

      if (isEdit && user?.id) {
        updateMutation.mutate(
          {
            path: { id: user.id },
            body: {
              ...base,
              password: value.password || undefined,
              concurrencyStamp: value.concurrencyStamp || undefined,
            },
          },
          { onSuccess },
        );
      } else {
        createMutation.mutate({ body: { ...base, password: value.password! } }, { onSuccess });
      }
    },
  });

  useEffect(() => {
    if (isEdit && currentRoleNames.length > 0) {
      form.setFieldValue("roleNames", currentRoleNames);
    }
  }, [isEdit, currentRoleNames]);

  return (
    <form.AppForm>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void form.handleSubmit();
        }}
        className={styles.form}
      >
        <form.AppField
          name="userName"
          children={(field) => <field.TextField label={"用户名称"} required />}
        />
        <form.AppField name="name" children={(field) => <field.TextField label={"显示名称"} />} />
        <form.AppField name="surname" children={(field) => <field.TextField label={"姓"} />} />
        <form.AppField
          name="email"
          children={(field) => <field.TextField label={"邮箱"} required />}
        />
        <form.AppField
          name="phoneNumber"
          children={(field) => <field.TextField label={"手机号"} />}
        />
        <form.AppField
          name="password"
          children={(field) => (
            <field.TextField label={"密码"} required={!isEdit} inputProps={{ type: "password" }} />
          )}
        />
        <form.AppField
          name="roleNames"
          children={(field) => (
            <field.ComboboxField
              label={"角色"}
              options={roleOptions}
              placeholder={"请选择角色"}
              comboboxProps={{ multiselect: true }}
            />
          )}
        />
        <form.AppField name="isActive" children={(field) => <field.SwitchField label={"激活"} />} />
        <form.AppField
          name="lockoutEnabled"
          children={(field) => <field.SwitchField label={"启用锁定"} />}
        />
        <div className={styles.actions}>
          <form.SubmitButton label={isEdit ? "保存" : "创建"} />
          {footer}
        </div>
      </form>
    </form.AppForm>
  );
}
