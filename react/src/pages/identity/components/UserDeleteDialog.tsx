import { useTranslation } from "react-i18next";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
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

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      title={t("AbpIdentity::Delete")}
      description={`Are you sure you want to delete the user '${user?.userName ?? ""}'?`}
      confirmLabel={t("AbpIdentity::Delete")}
      cancelLabel={t("AbpUi::Cancel")}
      variant="destructive"
      onConfirm={onConfirm}
      isPending={isPending}
    />
  );
}
