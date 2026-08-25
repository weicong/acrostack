import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Spinner,
  useId,
} from "@fluentui/react-components";
import { useUserGet } from "@/api/hooks/user/useUserGet";
import { toFormUserFromIdentity, type UserFormUser } from "./types/user";
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
  const dialogId = useId("user-form-");
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
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>{isEdit ? "编辑" : "新用户"}</DialogTitle>
          <DialogContent>
            {open && !showForm && <Spinner label={"加载中..."} />}
            {open && showForm && (
              <UserForm
                key={formUser?.id ?? "create"}
                user={formUser}
                onSuccess={onSuccess}
                footer={
                  <DialogTrigger disableButtonEnhancement>
                    <Button appearance="secondary">{"取消"}</Button>
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
