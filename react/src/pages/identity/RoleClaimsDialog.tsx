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
import { useIdentityRoleClaimGetList } from "@/api/hooks/identityRoleClaim/useIdentityRoleClaimGetList";
import { ClaimAddRow } from "./components/ClaimAddRow";
import { ClaimTable } from "./components/ClaimTable";
import type { ClaimItem } from "./claim-types";
import { useRoleClaimActions } from "./hooks/useRoleClaimActions";
import { useClaimsStyles } from "./styles/claims";
import { emptyValues, validate } from "./utils/claimsForm";

type RoleClaimsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  roleId?: string;
  roleName?: string | null;
};

/** 角色声明管理对话框：只负责查询编排与子组件组装。 */
export function RoleClaimsDialog({ open, onOpenChange, roleId, roleName }: RoleClaimsDialogProps) {
  const styles = useClaimsStyles();

  const claimsQuery = useIdentityRoleClaimGetList(
    open && roleId ? { query: { roleId } } : undefined,
    {
      query: { enabled: open && !!roleId },
    },
  );

  const { add, save, remove, isAddPending, isSavePending, deletePendingId } =
    useRoleClaimActions(roleId);

  const [addValues, setAddValues] = useState(emptyValues());
  const [addErrors, setAddErrors] = useState<Record<string, string> | null>(null);

  const claims: ClaimItem[] = useMemo(() => {
    const data = claimsQuery.data;
    if (!data) return [];
    return Array.isArray(data) ? data : [];
  }, [claimsQuery.data]);

  const handleAdd = async () => {
    if (!roleId) return;
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
            {roleName ? ` — ${roleName}` : ""}
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
                disabled={!roleId || isAddPending}
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
