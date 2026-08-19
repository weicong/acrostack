import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Field,
  Input,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import { Add20Regular, Delete20Regular, Edit20Regular, Save20Regular } from "@fluentui/react-icons";
import { identityUserClaimGetListQueryKey } from "@/api/hooks/identityUserClaim/useIdentityUserClaimGetList";
import { useIdentityUserClaimGetList } from "@/api/hooks/identityUserClaim/useIdentityUserClaimGetList";
import { useIdentityUserClaimCreate } from "@/api/hooks/identityUserClaim/useIdentityUserClaimCreate";
import { useIdentityUserClaimUpdate } from "@/api/hooks/identityUserClaim/useIdentityUserClaimUpdate";
import { useIdentityUserClaimDelete } from "@/api/hooks/identityUserClaim/useIdentityUserClaimDelete";
import { claimSchema } from "./claim-schemas";
import type { ClaimItem } from "./claim-types";

type UserClaimsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId?: string;
  userName?: string | null;
};

const useStyles = makeStyles({
  body: {
    minWidth: "560px",
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  addRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr auto",
    gap: tokens.spacingHorizontalS,
    alignItems: "flex-end",
  },
  table: {
    marginTop: tokens.spacingVerticalS,
  },
  actionsCell: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
});

function emptyValues() {
  return { claimType: "", claimValue: "" };
}

function validate(values: {
  claimType: string;
  claimValue: string;
}): Record<string, string> | null {
  const result = claimSchema.safeParse(values);
  if (result.success) return null;
  const errors: Record<string, string> = {};
  const fieldErrors = result.error.flatten().fieldErrors;
  if (fieldErrors.claimType) errors.claimType = fieldErrors.claimType[0];
  if (fieldErrors.claimValue) errors.claimValue = fieldErrors.claimValue[0];
  return errors;
}

export function UserClaimsDialog({ open, onOpenChange, userId, userName }: UserClaimsDialogProps) {
  const { t } = useTranslation();
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();

  const claimsQuery = useIdentityUserClaimGetList(
    open && userId ? { query: { userId } } : undefined,
    {
      query: { enabled: open && !!userId },
    },
  );

  const createMutation = useIdentityUserClaimCreate();
  const updateMutation = useIdentityUserClaimUpdate();
  const deleteMutation = useIdentityUserClaimDelete();

  const [addValues, setAddValues] = useState(emptyValues());
  const [addErrors, setAddErrors] = useState<Record<string, string> | null>(null);
  const [editId, setEditId] = useState<string | null>(null);
  const [editValues, setEditValues] = useState(emptyValues());
  const [editErrors, setEditErrors] = useState<Record<string, string> | null>(null);

  const claims: ClaimItem[] = useMemo(() => {
    const data = claimsQuery.data;
    if (!data) return [];
    return Array.isArray(data) ? data : [];
  }, [claimsQuery.data]);

  const invalidate = () => {
    if (userId) {
      void queryClient.invalidateQueries({
        queryKey: identityUserClaimGetListQueryKey({ query: { userId } }),
      });
    }
  };

  const handleAdd = () => {
    if (!userId) return;
    const errors = validate(addValues);
    setAddErrors(errors);
    if (errors) return;

    createMutation.mutate(
      {
        body: {
          userId,
          claimType: addValues.claimType,
          claimValue: addValues.claimValue,
        },
      },
      {
        onSuccess: () => {
          setAddValues(emptyValues());
          setAddErrors(null);
          invalidate();
          dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  };

  const handleStartEdit = (claim: ClaimItem) => {
    setEditId(claim.id ?? null);
    setEditValues({
      claimType: claim.claimType ?? "",
      claimValue: claim.claimValue ?? "",
    });
    setEditErrors(null);
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditValues(emptyValues());
    setEditErrors(null);
  };

  const handleSaveEdit = () => {
    if (!editId) return;
    const errors = validate(editValues);
    setEditErrors(errors);
    if (errors) return;

    updateMutation.mutate(
      {
        path: { id: editId },
        body: {
          claimType: editValues.claimType,
          claimValue: editValues.claimValue,
        },
      },
      {
        onSuccess: () => {
          handleCancelEdit();
          invalidate();
          dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  };

  const handleDelete = (claim: ClaimItem) => {
    if (!claim.id) return;
    deleteMutation.mutate(
      { path: { id: claim.id } },
      {
        onSuccess: () => {
          invalidate();
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  };

  const isAddPending = createMutation.isPending;
  const isSavePending = updateMutation.isPending;
  const deletePendingId = deleteMutation.isPending ? deleteMutation.variables?.path?.id : null;

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>
            {t("AbpIdentity::Claims")}
            {userName ? ` — ${userName}` : ""}
          </DialogTitle>
          <DialogContent>
            <div className={styles.body}>
              {/* Add new claim */}
              <div className={styles.addRow}>
                <Field
                  label={t("AbpIdentity::ClaimType")}
                  validationState={addErrors?.claimType ? "error" : undefined}
                  validationMessage={addErrors?.claimType}
                >
                  <Input
                    value={addValues.claimType}
                    onChange={(_, d) => {
                      setAddValues((v) => ({ ...v, claimType: d.value }));
                      setAddErrors(null);
                    }}
                    placeholder={t("AbpIdentity::ClaimType")}
                  />
                </Field>
                <Field
                  label={t("AbpIdentity::ClaimValue")}
                  validationState={addErrors?.claimValue ? "error" : undefined}
                  validationMessage={addErrors?.claimValue}
                >
                  <Input
                    value={addValues.claimValue}
                    onChange={(_, d) => {
                      setAddValues((v) => ({ ...v, claimValue: d.value }));
                      setAddErrors(null);
                    }}
                    placeholder={t("AbpIdentity::ClaimValue")}
                  />
                </Field>
                <Button
                  appearance="primary"
                  icon={<Add20Regular />}
                  onClick={handleAdd}
                  disabled={!userId || isAddPending}
                >
                  {t("AbpUi::Add")}
                </Button>
              </div>

              {/* Claims list */}
              {claimsQuery.isLoading && <Spinner label={t("AbpUi::Loading")} />}
              {claimsQuery.isError && (
                <span>{claimsQuery.error ? String(claimsQuery.error) : ""}</span>
              )}

              {!claimsQuery.isLoading && claims.length === 0 && (
                <span>{t("AbpUi::NoRecords")}</span>
              )}

              {claims.length > 0 && (
                <Table className={styles.table} size="small">
                  <TableHeader>
                    <TableRow>
                      <TableHeaderCell>{t("AbpIdentity::ClaimType")}</TableHeaderCell>
                      <TableHeaderCell>{t("AbpIdentity::ClaimValue")}</TableHeaderCell>
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
                                  onChange={(_, d) => {
                                    setEditValues((v) => ({ ...v, claimType: d.value }));
                                    setEditErrors(null);
                                  }}
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
                                  onChange={(_, d) => {
                                    setEditValues((v) => ({ ...v, claimValue: d.value }));
                                    setEditErrors(null);
                                  }}
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
                                    onClick={handleSaveEdit}
                                    disabled={isSavePending}
                                    aria-label={t("AbpUi::Save")}
                                  />
                                  <Button
                                    size="small"
                                    appearance="subtle"
                                    onClick={handleCancelEdit}
                                    disabled={isSavePending}
                                  >
                                    {t("AbpUi::Cancel")}
                                  </Button>
                                </>
                              ) : (
                                <>
                                  <Button
                                    size="small"
                                    appearance="subtle"
                                    icon={<Edit20Regular />}
                                    onClick={() => handleStartEdit(claim)}
                                    aria-label={t("AbpUi::Edit")}
                                    disabled={isDeleting}
                                  />
                                  <Button
                                    size="small"
                                    appearance="subtle"
                                    icon={<Delete20Regular />}
                                    onClick={() => handleDelete(claim)}
                                    aria-label={t("AbpUi::Delete")}
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
              )}
            </div>
          </DialogContent>
          <DialogTrigger disableButtonEnhancement>
            <Button appearance="secondary" style={{ alignSelf: "flex-end" }}>
              {t("AbpUi::Close")}
            </Button>
          </DialogTrigger>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
