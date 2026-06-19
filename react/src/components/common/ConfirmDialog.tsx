import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogSurface,
  DialogTitle,
} from "@fluentui/react-components";

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
  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>{title}</DialogTitle>
          {description && (
            <p style={{ fontSize: "0.875rem", color: "var(--colorNeutralForeground3)" }}>
              {description}
            </p>
          )}
          <DialogActions>
            <Button appearance="secondary" onClick={() => onOpenChange(false)} disabled={isPending}>
              {cancelLabel}
            </Button>
            <Button
              appearance={variant === "destructive" ? "primary" : "primary"}
              style={
                variant === "destructive"
                  ? { color: "var(--colorPaletteRedForeground3)" }
                  : undefined
              }
              onClick={onConfirm}
              disabled={isPending}
            >
              {confirmLabel}
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}

export { ConfirmDialog };
export type { ConfirmDialogProps };
