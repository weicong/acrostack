import { Spinner } from "@workspace/ui/components/spinner";
import { Button } from "@workspace/ui/components/button";
import { FormDialog } from "@workspace/ui/dialog";
import { useUserGet } from "@workspace/api-client/hooks/user/useUserGet";

import { toFormUserFromIdentity, type UserFormUser } from "../types/user";
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
  const isEdit = !!user;

  // Fetch the full IdentityUserDto (with concurrencyStamp / lockoutEnabled) when editing.
  // Enabled only while the dialog is open and we have a user id.
  const fullUserQuery = useUserGet(
    { path: { id: user?.id ?? "" } },
    {
      query: { enabled: isEdit && open && !!user?.id },
    },
  );

  const formUser: UserFormUser | undefined = isEdit
    ? fullUserQuery.data
      ? toFormUserFromIdentity(fullUserQuery.data)
      : undefined
    : undefined;

  const showForm = !isEdit || !!formUser;

  return (
    <FormDialog
      open={open}
      onOpenChange={onOpenChange}
      title={isEdit ? "编辑" : "新用户"}
      size="lg"
    >
      {open && !showForm && (
        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Spinner />
          {"加载中..."}
        </span>
      )}
      {open && showForm && (
        <UserForm
          key={formUser?.id ?? "create"}
          user={formUser}
          onSuccess={onSuccess}
          footer={
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              {"取消"}
            </Button>
          }
        />
      )}
    </FormDialog>
  );
}
