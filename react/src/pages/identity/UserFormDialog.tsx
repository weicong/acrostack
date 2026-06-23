import { useTranslation } from "react-i18next";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  useId,
} from "@fluentui/react-components";
import type { UserFormUser } from "./user-types";
import { UserForm } from "./UserForm";

// ── Props ───────────────────────────────────────────────────────────

type UserFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user?: UserFormUser;
  onSuccess: () => void;
};

// ── Component ───────────────────────────────────────────────────────

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
              <UserForm
                key={user?.id ?? "create"}
                user={user}
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
