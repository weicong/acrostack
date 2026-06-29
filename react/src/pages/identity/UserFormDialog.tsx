import { useTranslation } from "react-i18next";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Spinner,
  useId,
} from "@fluentui/react-components";
import { useUserGet } from "@/api/hooks/user/useUserGet";
import { toFormUserFromIdentity, type UserFormUser } from "./user-types";
import { UserForm } from "./UserForm";

// ── Props ───────────────────────────────────────────────────────────

type UserFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Lightweight user from the list. When editing, full data is fetched via useUserGet. */
  user?: UserFormUser;
  onSuccess: () => void;
};

// ── Component ───────────────────────────────────────────────────────

export function UserFormDialog({ open, onOpenChange, user, onSuccess }: UserFormDialogProps) {
  const { t } = useTranslation();
  const dialogId = useId("user-form-");
  const isEdit = !!user;

  // Fetch the full IdentityUserDto (with concurrencyStamp / lockoutEnabled) when editing.
  // Enabled only while the dialog is open and we have a user id.
  const fullUserQuery = useUserGet(isEdit && open ? user?.id : undefined, {
    query: { enabled: isEdit && open && !!user?.id },
  });

  const formUser: UserFormUser | undefined = isEdit
    ? fullUserQuery.data
      ? toFormUserFromIdentity(fullUserQuery.data)
      : undefined
    : undefined;

  const showForm = !isEdit || !!formUser;

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>
            {isEdit ? t("AbpIdentity::Edit") : t("AbpIdentity::NewUser")}
          </DialogTitle>
          <DialogContent>
            {open && !showForm && <Spinner label={t("AbpUi::Loading")} />}
            {open && showForm && (
              <UserForm
                key={formUser?.id ?? "create"}
                user={formUser}
                onSuccess={onSuccess}
                footer={
                  <DialogTrigger disableButtonEnhancement>
                    <Button appearance="secondary">{t("AbpUi::Cancel")}</Button>
                  </DialogTrigger>
                }
              />
            )}
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
