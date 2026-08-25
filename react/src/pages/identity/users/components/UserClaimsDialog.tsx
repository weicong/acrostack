import { useMemo, useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
} from "@fluentui/react-components";
import { useIdentityUserClaimGetList } from "@/api/hooks/identityUserClaim/useIdentityUserClaimGetList";
import { ClaimAddRow } from "../../shared/components/ClaimAddRow";
import { ClaimTable } from "../../shared/components/ClaimTable";
import type { ClaimItem } from "../../shared/types/claim";
import { useUserClaimActions } from "../hooks/useUserClaimActions";
import { useClaimsStyles } from "../../shared/styles/claims";
import { emptyValues, validate } from "../../shared/utils/claimsForm";

type UserClaimsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId?: string;
  userName?: string | null;
};

/** 用户声明管理对话框：只负责查询编排与子组件组装。 */
export function UserClaimsDialog({ open, onOpenChange, userId, userName }: UserClaimsDialogProps) {
  const styles = useClaimsStyles();

  const claimsQuery = useIdentityUserClaimGetList(
    open && userId ? { query: { userId } } : undefined,
    {
      query: { enabled: open && !!userId },
    },
  );

  const { add, save, remove, isAddPending, isSavePending, deletePendingId } =
    useUserClaimActions(userId);

  const [addValues, setAddValues] = useState(emptyValues());
  const [addErrors, setAddErrors] = useState<Record<string, string> | null>(null);

  const claims: ClaimItem[] = useMemo(() => {
    const data = claimsQuery.data;
    if (!data) return [];
    return Array.isArray(data) ? data : [];
  }, [claimsQuery.data]);

  const handleAdd = async () => {
    if (!userId) return;
    const errors = validate(addValues);
    setAddErrors(errors);
    if (errors) return;
    if (await add(addValues)) {
      setAddValues(emptyValues());
      setAddErrors(null);
    }
  };

  const handleDelete = (claim: ClaimItem) => {
    if (claim.id) void remove(claim.id);
  };

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>
            {"声明"}
            {userName ? ` — ${userName}` : ""}
          </DialogTitle>
          <DialogContent>
            <div className={styles.body}>
              <ClaimAddRow
                values={addValues}
                errors={addErrors}
                onChange={(field, value) => {
                  setAddValues((v) => ({ ...v, [field]: value }));
                  setAddErrors(null);
                }}
                onAdd={() => void handleAdd()}
                disabled={!userId || isAddPending}
              />
              <ClaimTable
                claims={claims}
                isLoading={claimsQuery.isLoading}
                errorText={claimsQuery.isError ? String(claimsQuery.error ?? "") : null}
                onSave={save}
                onDelete={handleDelete}
                isSavePending={isSavePending}
                deletePendingId={deletePendingId}
              />
            </div>
          </DialogContent>
          <DialogTrigger disableButtonEnhancement>
            <Button appearance="secondary" style={{ alignSelf: "flex-end" }}>
              {"关闭"}
            </Button>
          </DialogTrigger>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
