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

const useStyles = makeStyles({
  destructive: {
    color: "var(--colorPaletteRedForeground3)",
  },
});

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
  variant = "default",
  onConfirm,
  isPending = false,
}: ConfirmDialogProps) {
  const dialogId = useId("confirm-");
  const styles = useStyles();

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`} aria-describedby={`${dialogId}-content`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>{title}</DialogTitle>
          {description && <DialogContent id={`${dialogId}-content`}>{description}</DialogContent>}
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button
                appearance="primary"
                disabled={isPending}
                onClick={onConfirm}
                className={variant === "destructive" ? styles.destructive : undefined}
              >
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
      </DialogSurface>
    </Dialog>
  );
}

export { ConfirmDialog };
export type { ConfirmDialogProps };
