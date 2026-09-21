import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  useId,
} from "@fluentui/react-components";
import { AccessibleDialogSurface } from "./AccessibleDialogSurface";

interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "default" | "destructive";
  onConfirm: () => void;
  isPending?: boolean;
}

function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  isPending = false,
}: ConfirmDialogProps) {
  const dialogId = useId("confirm-");

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <AccessibleDialogSurface
        aria-labelledby={`${dialogId}-title`}
        aria-describedby={`${dialogId}-content`}
      >
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>{title}</DialogTitle>
          {description && <DialogContent id={`${dialogId}-content`}>{description}</DialogContent>}
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="primary" disabled={isPending} onClick={onConfirm}>
                {confirmLabel}
              </Button>
            </DialogTrigger>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary" disabled={isPending}>
                {cancelLabel}
              </Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </AccessibleDialogSurface>
    </Dialog>
  );
}

export { ConfirmDialog };
export type { ConfirmDialogProps };
