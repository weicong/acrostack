import { useEffect } from "react";
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
import type { VoloAbpIdentityIdentityUserDto } from "@/api/models/volo/abp/identity/IdentityUserDto";
import { z } from "zod";

type UserFormUser = Pick<
  VoloAbpIdentityIdentityUserDto,
  | "id"
  | "userName"
  | "name"
  | "surname"
  | "email"
  | "phoneNumber"
  | "isActive"
  | "lockoutEnabled"
  | "concurrencyStamp"
>;

type UserFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user?: UserFormUser | undefined;
  onSuccess: () => void;
};

const createSchema = z.object({
  userName: z.string().min(1).max(256),
  name: z.string().max(64).nullable(),
  surname: z.string().max(64).nullable(),
  email: z.string().min(1).max(256).email(),
  phoneNumber: z.string().max(16).nullable(),
  isActive: z.boolean(),
  lockoutEnabled: z.boolean(),
  roleNames: z.array(z.string()).nullable(),
  password: z.string().min(1).max(128),
});

const updateSchema = z.object({
  userName: z.string().min(1).max(256),
  name: z.string().max(64).nullable(),
  surname: z.string().max(64).nullable(),
  email: z.string().min(1).max(256).email(),
  phoneNumber: z.string().max(16).nullable(),
  isActive: z.boolean(),
  lockoutEnabled: z.boolean(),
  roleNames: z.array(z.string()).nullable(),
  password: z.string().max(128).nullable(),
  concurrencyStamp: z.string().nullable(),
});

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--spacingHorizontalM)",
  },
});

export function UserFormDialog({ open, onOpenChange, user, onSuccess }: UserFormDialogProps) {
  const { t } = useTranslation();
  const dialogId = useId("user-form-");
  const styles = useStyles();
  const isEdit = !!user;

  const createMutation = useUserCreate();
  const updateMutation = useUserUpdate();

  const assignableRolesQuery = useUserGetAssignableRoles();
  const userRolesQuery = useUserGetRoles(isEdit ? user.id : undefined);

  const roleOptions: ComboboxOption[] =
    assignableRolesQuery.data?.items?.map((role) => ({
      value: role.name ?? "",
      label: role.name ?? "",
    })) ?? [];

  const currentRoleNames: string[] =
    userRolesQuery.data?.items?.map((role) => role.name ?? "").filter(Boolean) ?? [];

  const form = useAppForm({
    defaultValues: {
      userName: "",
      name: "" as string | null,
      surname: "" as string | null,
      email: "",
      phoneNumber: "" as string | null,
      isActive: true,
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
      if (isEdit && user?.id) {
        updateMutation.mutate(
          {
            id: user.id,
            data: {
              userName: value.userName,
              name: value.name,
              surname: value.surname,
              email: value.email,
              phoneNumber: value.phoneNumber,
              isActive: value.isActive,
              lockoutEnabled: value.lockoutEnabled,
              roleNames: value.roleNames,
              password: value.password || undefined,
              concurrencyStamp: value.concurrencyStamp ?? undefined,
            },
          },
          { onSuccess },
        );
      } else {
        createMutation.mutate(
          {
            data: {
              userName: value.userName,
              name: value.name,
              surname: value.surname,
              email: value.email,
              phoneNumber: value.phoneNumber,
              isActive: value.isActive,
              lockoutEnabled: value.lockoutEnabled,
              roleNames: value.roleNames,
              password: value.password!,
            },
          },
          { onSuccess },
        );
      }
    },
  });

  const isPending = createMutation.isPending || updateMutation.isPending;

  useEffect(() => {
    if (!open) return;
    form.reset();
    if (user) {
      form.setFieldValue("userName", user.userName ?? "");
      form.setFieldValue("name", user.name ?? null);
      form.setFieldValue("surname", user.surname ?? null);
      form.setFieldValue("email", user.email ?? "");
      form.setFieldValue("phoneNumber", user.phoneNumber ?? null);
      form.setFieldValue("isActive", user.isActive ?? true);
      form.setFieldValue("lockoutEnabled", user.lockoutEnabled ?? false);
      form.setFieldValue("concurrencyStamp", user.concurrencyStamp ?? null);
      form.setFieldValue("password", null);
    } else {
      form.setFieldValue("userName", "");
      form.setFieldValue("name", null);
      form.setFieldValue("surname", null);
      form.setFieldValue("email", "");
      form.setFieldValue("phoneNumber", null);
      form.setFieldValue("isActive", true);
      form.setFieldValue("lockoutEnabled", false);
      form.setFieldValue("roleNames", null);
      form.setFieldValue("password", "");
      form.setFieldValue("concurrencyStamp", null);
    }
  }, [open, user]);

  useEffect(() => {
    if (open && isEdit && currentRoleNames.length > 0) {
      form.setFieldValue("roleNames", currentRoleNames);
    }
  }, [open, isEdit, currentRoleNames]);

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>
            {isEdit ? t("AbpIdentity::Edit") : t("AbpIdentity::NewUser")}
          </DialogTitle>
          <DialogContent>
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
                  children={(field) => (
                    <field.TextField label={t("AbpIdentity::UserName")} required />
                  )}
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
                  children={(field) => (
                    <field.SwitchField label={t("AbpIdentity::LockoutEnabled")} />
                  )}
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
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
