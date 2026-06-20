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
  useId,
} from "@fluentui/react-components";
import type { AcroStackAppUsersAppUserDto } from "@/api/models/acroStack/appUsers/AppUserDto";

type UserDeleteDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: AcroStackAppUsersAppUserDto | undefined;
  onConfirm: () => void;
  isPending?: boolean;
};

export function UserDeleteDialog({
  open,
  onOpenChange,
  user,
  onConfirm,
  isPending,
}: UserDeleteDialogProps) {
  const { t } = useTranslation();
  const dialogId = useId("user-delete-");

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`} aria-describedby={`${dialogId}-content`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>{t("AbpIdentity::Delete")}</DialogTitle>
          <DialogContent id={`${dialogId}-content`}>
            {`Are you sure you want to delete the user '${user?.userName ?? ""}'?`}
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button
                appearance="primary"
                style={{ color: "var(--colorPaletteRedForeground3)" }}
                onClick={onConfirm}
                disabled={isPending}
              >
                {t("AbpIdentity::Delete")}
              </Button>
            </DialogTrigger>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary" disabled={isPending}>
                {t("AbpUi::Cancel")}
              </Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
