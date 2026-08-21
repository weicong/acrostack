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
  const dialogId = useId("role-form-");
  const isEdit = !!role;

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>{isEdit ? "编辑" : "新角色"}</DialogTitle>
          <DialogContent>
            <RoleForm
              key={role?.id ?? "create"}
              role={role}
              onSuccess={onSuccess}
              footer={
                <DialogTrigger disableButtonEnhancement>
                  <Button appearance="secondary">{"取消"}</Button>
                </DialogTrigger>
              }
            />
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
