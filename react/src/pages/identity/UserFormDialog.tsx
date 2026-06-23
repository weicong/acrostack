import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  makeStyles,
  useId,
} from "@fluentui/react-components";
import { useAppForm, type ComboboxOption } from "@/components/form";
import { useUserCreate } from "@/api/hooks/user/useUserCreate";
import { useUserUpdate } from "@/api/hooks/user/useUserUpdate";
import { useUserGetAssignableRoles } from "@/api/hooks/user/useUserGetAssignableRoles";
import { useUserGetRoles } from "@/api/hooks/user/useUserGetRoles";
import type { AcroStackAppUsersAppUserDto } from "@/api/models/acroStack/appUsers/AppUserDto";
import { z } from "zod";

// ── Types ───────────────────────────────────────────────────────────

export type UserFormUser = Pick<
  AcroStackAppUsersAppUserDto,
  "id" | "userName" | "name" | "surname" | "email" | "phoneNumber" | "isActive"
>;

export function toFormUser(dto: AcroStackAppUsersAppUserDto): UserFormUser {
  return {
    id: dto.id,
    userName: dto.userName,
    name: dto.name,
    surname: dto.surname,
    email: dto.email,
    phoneNumber: dto.phoneNumber,
    isActive: dto.isActive,
  };
}

// ── Schemas ─────────────────────────────────────────────────────────

const baseFields = {
  userName: z.string().min(1).max(256),
  name: z.string().max(64).nullable(),
  surname: z.string().max(64).nullable(),
  email: z.string().min(1).max(256).email(),
  phoneNumber: z.string().max(16).nullable(),
  isActive: z.boolean(),
  lockoutEnabled: z.boolean(),
  roleNames: z.array(z.string()).nullable(),
};

const createSchema = z.object({
  ...baseFields,
  password: z.string().min(1).max(128),
});

const updateSchema = z.object({
  ...baseFields,
  password: z.string().max(128).nullable(),
  concurrencyStamp: z.string().nullable(),
});

// ── Styles ──────────────────────────────────────────────────────────

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--spacingVerticalM)",
  },
});

// ── Props ───────────────────────────────────────────────────────────

type UserFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user?: UserFormUser;
  onSuccess: () => void;
};

// ── Dialog Wrapper ──────────────────────────────────────────────────

export function UserFormDialog({ open, onOpenChange, user, onSuccess }: UserFormDialogProps) {
  const { t } = useTranslation();
  const dialogId = useId("user-form-");
  const isEdit = !!user;

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>
            {isEdit ? t("AbpIdentity::Edit") : t("AbpIdentity::NewUser")}
          </DialogTitle>
          <DialogContent>
            {open && (
              <UserFormContent key={user?.id ?? "create"} user={user} onSuccess={onSuccess} />
            )}
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}

// ── Form Content ────────────────────────────────────────────────────

function UserFormContent({ user, onSuccess }: { user?: UserFormUser; onSuccess: () => void }) {
  const { t } = useTranslation();
  const styles = useStyles();
  const isEdit = !!user;

  const createMutation = useUserCreate();
  const updateMutation = useUserUpdate();
  const isPending = createMutation.isPending || updateMutation.isPending;

  const assignableRolesQuery = useUserGetAssignableRoles();
  const userRolesQuery = useUserGetRoles(isEdit ? user.id : undefined);

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
      name: user?.name ?? null,
      surname: user?.surname ?? null,
      email: user?.email ?? "",
      phoneNumber: user?.phoneNumber ?? null,
      isActive: user?.isActive ?? true,
      lockoutEnabled: false,
      roleNames: null as string[] | null,
      password: "" as string | null,
      concurrencyStamp: null as string | null,
    },
    validators: {
      onChangeAsync: async ({ value }) => {
        const result = isEdit
          ? await updateSchema.safeParseAsync(value)
          : await createSchema.safeParseAsync(value);
        if (result.error) return result.error.flatten().fieldErrors as Record<string, string[]>;
      },
    },
    onSubmit: ({ value }) => {
      const base = {
        userName: value.userName,
        name: value.name,
        surname: value.surname,
        email: value.email,
        phoneNumber: value.phoneNumber,
        isActive: value.isActive,
        lockoutEnabled: value.lockoutEnabled,
        roleNames: value.roleNames,
      };

      if (isEdit && user?.id) {
        updateMutation.mutate(
          {
            id: user.id,
            data: {
              ...base,
              password: value.password || undefined,
              concurrencyStamp: value.concurrencyStamp ?? undefined,
            },
          },
          { onSuccess },
        );
      } else {
        createMutation.mutate({ data: { ...base, password: value.password! } }, { onSuccess });
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
          children={(field) => <field.TextField label={t("AbpIdentity::UserName")} required />}
        />
        <form.AppField
          name="name"
          children={(field) => <field.TextField label={t("AbpIdentity::DisplayName")} />}
        />
        <form.AppField
          name="surname"
          children={(field) => <field.TextField label={t("AbpIdentity::Surname")} />}
        />
        <form.AppField
          name="email"
          children={(field) => <field.TextField label={t("AbpIdentity::Email")} required />}
        />
        <form.AppField
          name="phoneNumber"
          children={(field) => <field.TextField label={t("AbpIdentity::PhoneNumber")} />}
        />
        <form.AppField
          name="password"
          children={(field) => (
            <field.TextField
              label={t("AbpIdentity::Password")}
              required={!isEdit}
              inputProps={{ type: "password" }}
            />
          )}
        />
        <form.AppField
          name="roleNames"
          children={(field) => (
            <field.ComboboxField
              label={t("AbpIdentity::Roles")}
              options={roleOptions}
              placeholder={t("AbpIdentity::SelectRole")}
              comboboxProps={{ multiselect: true }}
            />
          )}
        />
        <form.AppField
          name="isActive"
          children={(field) => <field.SwitchField label={t("AbpIdentity::Active")} />}
        />
        <form.AppField
          name="lockoutEnabled"
          children={(field) => <field.SwitchField label={t("AbpIdentity::LockoutEnabled")} />}
        />
        <DialogActions>
          <form.SubmitButton label={isEdit ? t("AbpUi::Save") : t("AbpUi::Create")} />
          <DialogTrigger disableButtonEnhancement>
            <Button appearance="secondary" disabled={isPending}>
              {t("AbpUi::Cancel")}
            </Button>
          </DialogTrigger>
        </DialogActions>
      </form>
    </form.AppForm>
  );
}
