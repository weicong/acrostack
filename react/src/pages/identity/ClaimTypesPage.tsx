import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import {
  Badge,
  Button,
  SearchBox,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import { Add20Regular, Edit20Regular, Delete20Regular } from "@fluentui/react-icons";
import type { ColumnDef } from "@tanstack/react-table";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable } from "@/components/data-table/useDataTable";
import {
  identityClaimTypeGetListQueryOptions,
  identityClaimTypeGetListQueryKey,
} from "@/api/hooks/identityClaimType/useIdentityClaimTypeGetList";
import { useIdentityClaimTypeDelete } from "@/api/hooks/identityClaimType/useIdentityClaimTypeDelete";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import { ClaimTypeFormDialog } from "./ClaimTypeFormDialog";
import { toFormSeed, type ClaimTypeItem } from "./claim-type-types";

type ClaimTypeRow = ClaimTypeItem;

const VALUE_TYPE_LABEL_KEYS: Record<number, string> = {
  0: "AcroStack::ClaimValueType:String",
  1: "AcroStack::ClaimValueType:Int",
  2: "AcroStack::ClaimValueType:Boolean",
  3: "AcroStack::ClaimValueType:DateTime",
};

function valueTypeLabel(valueType: number | undefined, t: (key: string) => string): string {
  if (valueType === undefined || valueType === null) return "-";
  return t(VALUE_TYPE_LABEL_KEYS[valueType] ?? "AcroStack::ClaimValueType:String");
}

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: tokens.spacingHorizontalM,
  },
  filters: {
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    minWidth: 0,
  },
  actionButtons: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  actionsCell: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
  description: {
    maxWidth: "320px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

export function ClaimTypesPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();
  const { isGranted } = usePermissions();
  const canManage = isGranted("AcroStack.IdentityClaims.ClaimTypes");
  const deleteMutation = useIdentityClaimTypeDelete();

  const [formOpen, setFormOpen] = useState(false);
  const [formSeed, setFormSeed] = useState<ReturnType<typeof toFormSeed> | undefined>();
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const tableState = useDataTableState({
    sorting: [{ id: "name", desc: false }],
  });

  const query = useDataTableQuery<ClaimTypeRow, AbpGridParams>({
    queryOptions: identityClaimTypeGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const handleCreate = useCallback(() => {
    setFormSeed(undefined);
    setFormOpen(true);
  }, []);

  const handleEdit = useCallback((row: ClaimTypeRow) => {
    setFormSeed(toFormSeed(row));
    setFormOpen(true);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setDeleteId(id);
  }, []);

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    void queryClient.invalidateQueries({ queryKey: identityClaimTypeGetListQueryKey() });
  }, [queryClient]);

  const handleDeleteConfirm = useCallback(() => {
    if (!deleteId) return;
    deleteMutation.mutate(
      { id: deleteId },
      {
        onSuccess: () => {
          setDeleteId(null);
          void queryClient.invalidateQueries({ queryKey: identityClaimTypeGetListQueryKey() });
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [deleteId, deleteMutation, queryClient, dispatchToast, t]);

  const columns = useMemo<ColumnDef<ClaimTypeRow>[]>(() => {
    const base: ColumnDef<ClaimTypeRow>[] = [
      {
        id: "name",
        accessorKey: "name",
        header: t("AbpIdentity::Name"),
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "description",
        header: t("AbpIdentity::Description"),
        cell: ({ row }) => (
          <span className={styles.description} title={row.original.description ?? undefined}>
            {row.original.description || "-"}
          </span>
        ),
      },
      {
        id: "valueType",
        header: t("AcroStack::ClaimValueType"),
        cell: ({ row }) => valueTypeLabel(row.original.valueType, t),
      },
      {
        id: "isRequired",
        accessorKey: "isRequired",
        header: t("AbpIdentity::IsRequired"),
        cell: (info) =>
          info.getValue() ? (
            <Badge appearance="filled" color="brand" size="small">
              {t("AbpIdentity::True")}
            </Badge>
          ) : (
            "-"
          ),
      },
      {
        id: "isStatic",
        accessorKey: "isStatic",
        header: t("AbpIdentity::IsStatic"),
        cell: (info) =>
          info.getValue() ? (
            <Badge appearance="filled" color="warning" size="small">
              {t("AbpIdentity::True")}
            </Badge>
          ) : (
            "-"
          ),
      },
    ];

    if (canManage) {
      base.push({
        id: "actions",
        header: "",
        cell: (info) => {
          const row = info.row.original;
          const isStatic = row.isStatic === true;
          return (
            <div className={styles.actionsCell}>
              <Button
                size="small"
                appearance="subtle"
                icon={<Edit20Regular />}
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(row);
                }}
                aria-label={t("AbpUi::Edit")}
              />
              <Button
                size="small"
                appearance="subtle"
                icon={<Delete20Regular />}
                disabled={isStatic}
                onClick={(e) => {
                  e.stopPropagation();
                  if (row.id) handleDelete(row.id);
                }}
                aria-label={t("AbpUi::Delete")}
              />
            </div>
          );
        },
      });
    }

    return base;
  }, [t, styles.description, styles.actionsCell, canManage, handleEdit, handleDelete]);

  const table = useDataTable({
    data: query.data,
    columns,
    rowCount: query.totalCount,
    getRowId: (row) => row.id!,
    state: tableState.state,
    manualPagination: true,
    manualSorting: true,
    pageCount: query.pageCount,
  });

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      tableState.state.onGlobalFilterChange(searchValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <PageLayout title={t("AcroStack::ClaimTypes")}>
      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <SearchBox
            placeholder={t("AbpUi::Search")}
            value={searchValue}
            onChange={(_, data) => setSearchValue(data.value)}
            appearance="outline"
          />
        </div>
        {canManage && (
          <div className={styles.actionButtons}>
            <Button appearance="primary" icon={<Add20Regular />} onClick={handleCreate}>
              {t("AcroStack::NewClaimType")}
            </Button>
          </div>
        )}
      </div>

      <DataTable
        table={table}
        isLoading={query.isLoading}
        isError={query.isError}
        errorMessage={query.error ? String(query.error) : undefined}
      />

      <ClaimTypeFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        seed={formSeed}
        onSuccess={handleFormSuccess}
      />

      <ConfirmDialog
        open={deleteId !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteId(null);
        }}
        title={t("AbpUi::AreYouSure")}
        description={t("AcroStack::ClaimTypeDeleteConfirmation")}
        confirmLabel={t("AbpUi::Delete")}
        variant="destructive"
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
