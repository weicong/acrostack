import { useState } from "react";
import {
  Button,
  Field,
  Input,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@fluentui/react-components";
import { Delete20Regular, Edit20Regular, Save20Regular } from "@fluentui/react-icons";
import type { ClaimItem } from "../types/claim";
import { useClaimsStyles } from "../styles/claims";
import { emptyValues, validate } from "../utils/claimsForm";

type ClaimTableProps = {
  claims: ClaimItem[];
  isLoading?: boolean;
  errorText?: string | null;
  /** 保存行内编辑；返回是否成功（成功后自动退出编辑态）。 */
  onSave: (id: string, values: { claimType: string; claimValue: string }) => Promise<boolean>;
  onDelete: (claim: ClaimItem) => void;
  isSavePending?: boolean;
  deletePendingId?: string | null;
};

/** 声明列表表格：加载/错误/空态与行内编辑状态均内部化。 */
export function ClaimTable({
  claims,
  isLoading,
  errorText,
  onSave,
  onDelete,
  isSavePending,
  deletePendingId,
}: ClaimTableProps) {
  const styles = useClaimsStyles();

  const [editId, setEditId] = useState<string | null>(null);
  const [editValues, setEditValues] = useState(emptyValues());
  const [editErrors, setEditErrors] = useState<Record<string, string> | null>(null);

  const startEdit = (claim: ClaimItem) => {
    setEditId(claim.id ?? null);
    setEditValues({
      claimType: claim.claimType ?? "",
      claimValue: claim.claimValue ?? "",
    });
    setEditErrors(null);
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditValues(emptyValues());
    setEditErrors(null);
  };

  const saveEdit = async () => {
    if (!editId) return;
    const errors = validate(editValues);
    setEditErrors(errors);
    if (errors) return;
    if (await onSave(editId, editValues)) {
      cancelEdit();
    }
  };

  const editField = (field: "claimType" | "claimValue", value: string) => {
    setEditValues((v) => ({ ...v, [field]: value }));
    setEditErrors(null);
  };

  if (isLoading) {
    return <Spinner label={"加载中..."} />;
  }

  if (errorText !== null && errorText !== undefined && errorText !== "") {
    return <span>{errorText}</span>;
  }

  if (claims.length === 0) {
    return <span>{"暂无记录"}</span>;
  }

  return (
    <Table className={styles.table} size="small">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>{"声明类型"}</TableHeaderCell>
          <TableHeaderCell>{"声明值"}</TableHeaderCell>
          <TableHeaderCell>{""}</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {claims.map((claim) => {
          const isEditing = editId === claim.id;
          const isDeleting = deletePendingId === claim.id;
          return (
            <TableRow key={claim.id}>
              <TableCell>
                {isEditing ? (
                  <Field
                    validationState={editErrors?.claimType ? "error" : undefined}
                    validationMessage={editErrors?.claimType}
                  >
                    <Input
                      size="small"
                      value={editValues.claimType}
                      onChange={(_, d) => editField("claimType", d.value)}
                    />
                  </Field>
                ) : (
                  (claim.claimType ?? "-")
                )}
              </TableCell>
              <TableCell>
                {isEditing ? (
                  <Field
                    validationState={editErrors?.claimValue ? "error" : undefined}
                    validationMessage={editErrors?.claimValue}
                  >
                    <Input
                      size="small"
                      value={editValues.claimValue}
                      onChange={(_, d) => editField("claimValue", d.value)}
                    />
                  </Field>
                ) : (
                  (claim.claimValue ?? "-")
                )}
              </TableCell>
              <TableCell>
                <div className={styles.actionsCell}>
                  {isEditing ? (
                    <>
                      <Button
                        size="small"
                        appearance="subtle"
                        icon={<Save20Regular />}
                        onClick={() => void saveEdit()}
                        disabled={isSavePending}
                        aria-label={"保存"}
                      />
                      <Button
                        size="small"
                        appearance="subtle"
                        onClick={cancelEdit}
                        disabled={isSavePending}
                      >
                        {"取消"}
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        size="small"
                        appearance="subtle"
                        icon={<Edit20Regular />}
                        onClick={() => startEdit(claim)}
                        aria-label={"编辑"}
                        disabled={isDeleting}
                      />
                      <Button
                        size="small"
                        appearance="subtle"
                        icon={<Delete20Regular />}
                        onClick={() => onDelete(claim)}
                        aria-label={"删除"}
                        disabled={isDeleting}
                      />
                    </>
                  )}
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
