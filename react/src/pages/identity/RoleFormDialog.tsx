import { useTranslation } from "react-i18next";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
} from "@fluentui/react-components";
import { useId } from "@fluentui/react-components";
import type { RoleFormRole } from "./role-types";
import { RoleForm } from "./RoleForm";

// ── Props ───────────────────────────────────────────────────────────

type RoleFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  role?: RoleFormRole;
  onSuccess: () => void;
};

// ── Component ───────────────────────────────────────────────────────

export function RoleFormDialog({ open, onOpenChange, role, onSuccess }: RoleFormDialogProps) {
  const { t } = useTranslation();
  const dialogId = useId("role-form-");
  const isEdit = !!role;

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>
            {isEdit ? t("AbpIdentity::Edit") : t("AbpIdentity::NewRole")}
          </DialogTitle>
          <DialogContent>
            <RoleForm
              key={role?.id ?? "create"}
              role={role}
              onSuccess={onSuccess}
              footer={
                <DialogTrigger disableButtonEnhancement>
                  <Button appearance="secondary">{t("AbpUi::Cancel")}</Button>
                </DialogTrigger>
              }
            />
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
