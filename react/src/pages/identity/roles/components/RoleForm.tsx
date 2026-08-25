import { type ReactNode } from "react";
import { makeStyles, tokens } from "@fluentui/react-components";
import { useAppForm } from "@/components/form";
import { useRoleCreate } from "@/api/hooks/role/useRoleCreate";
import { useRoleUpdate } from "@/api/hooks/role/useRoleUpdate";
import type { RoleFormRole } from "./types/role";
import { createSchema, updateSchema } from "./role-schemas";

// ── Props ───────────────────────────────────────────────────────────

interface RoleFormProps {
  role?: RoleFormRole;
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

export function RoleForm({ role, onSuccess, footer }: RoleFormProps) {
  const styles = useStyles();
  const isEdit = !!role;

  const createMutation = useRoleCreate();
  const updateMutation = useRoleUpdate();

  const form = useAppForm({
    defaultValues: {
      name: role?.name ?? "",
      isDefault: role?.isDefault ?? false,
      isPublic: role?.isPublic ?? true,
      concurrencyStamp: role?.concurrencyStamp ?? "",
    },
    validators: {
      onChange: ({ value }) => {
        const result = isEdit ? updateSchema.safeParse(value) : createSchema.safeParse(value);
        if (result.error) return result.error.flatten().fieldErrors as Record<string, string[]>;
      },
    },
    onSubmit: ({ value }) => {
      const base = {
        name: value.name,
        isDefault: value.isDefault,
        isPublic: value.isPublic,
      };

      if (isEdit && role?.id) {
        updateMutation.mutate(
          {
            path: { id: role.id },
            body: {
              ...base,
              concurrencyStamp: value.concurrencyStamp || undefined,
            },
          },
          { onSuccess },
        );
      } else {
        createMutation.mutate({ body: base }, { onSuccess });
      }
    },
  });

  const isStatic = role?.isStatic === true;

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
          name="name"
          children={(field) => (
            <field.TextField label={"角色名称"} required inputProps={{ disabled: isStatic }} />
          )}
        />
        <form.AppField
          name="isDefault"
          children={(field) => <field.SwitchField label={"默认"} />}
        />
        <form.AppField name="isPublic" children={(field) => <field.SwitchField label={"公开"} />} />
        <div className={styles.actions}>
          <form.SubmitButton label={isEdit ? "保存" : "创建"} />
          {footer}
        </div>
      </form>
    </form.AppForm>
  );
}
