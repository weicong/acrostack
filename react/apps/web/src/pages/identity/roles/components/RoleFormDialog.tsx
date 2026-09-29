import { Button } from "@acrostack/ui/components/button";
import { FormDialog } from "@acrostack/ui/dialog";

import type { RoleFormRole } from "../types/role";
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
  const isEdit = !!role;

  return (
    <FormDialog open={open} onOpenChange={onOpenChange} title={isEdit ? "编辑" : "新角色"}>
      <RoleForm
        key={role?.id ?? "create"}
        role={role}
        onSuccess={onSuccess}
        footer={
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            {"取消"}
          </Button>
        }
      />
    </FormDialog>
  );
}
