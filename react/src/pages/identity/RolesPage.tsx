import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Badge,
  SearchBox,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import { Add20Regular, Edit20Regular, Delete20Regular, Tag20Regular } from "@fluentui/react-icons";
import { PageLayout } from "@/components/layout/PageLayout";
import { type ColumnDef } from "@tanstack/react-table";
import { roleGetListQueryOptions, roleGetListQueryKey } from "@/api/hooks/role/useRoleGetList";
import { useRoleDelete } from "@/api/hooks/role/useRoleDelete";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/data-table/useDataTable";
import { DataTable } from "@/components/data-table/DataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import { RoleFormDialog } from "./RoleFormDialog";
import { RoleClaimsDialog } from "./RoleClaimsDialog";
import { toFormRole, type RoleFormRole, type RoleItem } from "./role-types";

type RoleItemRow = RoleItem;

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
});

function useRolesTable(
  onEdit: (role: RoleItemRow) => void,
  onDelete: (id: string) => void,
  onManageClaims: (role: RoleItemRow) => void,
  canManageClaims: boolean,
) {
  const { t } = useTranslation();
  const styles = useStyles();

  const tableState = useDataTableState({
    sorting: [{ id: "name", desc: false }],
  });

  const query = useDataTableQuery<RoleItemRow, AbpGridParams>({
    queryOptions: roleGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const columns = useMemo<ColumnDef<AppTableFeatures, RoleItemRow>[]>(
    () => [
      {
        id: "name",
        accessorKey: "name",
        header: t("AbpIdentity::RoleName"),
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "isDefault",
        accessorKey: "isDefault",
        header: t("AbpIdentity::Default"),
        cell: (info) =>
          info.getValue() ? (
            <Badge appearance="filled" color="brand" size="small">
              {t("AbpIdentity::Default")}
            </Badge>
          ) : (
            "-"
          ),
      },
      {
        id: "isPublic",
        accessorKey: "isPublic",
        header: t("AbpIdentity::Public"),
        cell: (info) =>
          info.getValue() ? (
            <Badge appearance="filled" color="success" size="small">
              {t("AbpIdentity::Public")}
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
      {
        id: "actions",
        header: "",
        cell: (info) => {
          const row = info.row.original;
          const isStatic = row.isStatic === true;
          const canManageClaimsRow = canManageClaims && !!row.id;
          return (
            <div className={styles.actionsCell}>
              <Button
                size="small"
                appearance="subtle"
                icon={<Edit20Regular />}
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(row);
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
                  onDelete(row.id!);
                }}
                aria-label={t("AbpUi::Delete")}
              />
              {canManageClaimsRow && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<Tag20Regular />}
                  onClick={(e) => {
                    e.stopPropagation();
                    onManageClaims(row);
                  }}
                  aria-label={t("AbpIdentity::Claims")}
                  title={t("AbpIdentity::Claims")}
                />
              )}
            </div>
          );
        },
      },
    ],
    [t, styles.actionsCell, onEdit, onDelete, onManageClaims, canManageClaims],
  );

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

  return { table, query, tableState };
}

export function RolesPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const queryClient = useQueryClient();
  const deleteMutation = useRoleDelete();
  const { dispatchToast } = useToastController();
  const { isGranted } = usePermissions();
  const canManageRoleClaims = isGranted("AcroStack.IdentityClaims.RoleClaims");

  const [formOpen, setFormOpen] = useState(false);
  const [formRole, setFormRole] = useState<RoleFormRole | undefined>();
  const [deleteRoleId, setDeleteRoleId] = useState<string | null>(null);
  const [claimsRole, setClaimsRole] = useState<RoleItemRow | null>(null);

  const handleCreate = useCallback(() => {
    setFormRole(undefined);
    setFormOpen(true);
  }, []);

  const handleEdit = useCallback((role: RoleItemRow) => {
    setFormRole(toFormRole(role));
    setFormOpen(true);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setDeleteRoleId(id);
  }, []);

  const handleManageClaims = useCallback((role: RoleItemRow) => {
    setClaimsRole(role);
  }, []);

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    void queryClient.invalidateQueries({ queryKey: roleGetListQueryKey() });
    dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "success" });
  }, [queryClient, dispatchToast, t]);

  const handleDeleteConfirm = useCallback(() => {
    if (!deleteRoleId) return;
    deleteMutation.mutate(
      { path: { id: deleteRoleId } },
      {
        onSuccess: () => {
          setDeleteRoleId(null);
          void queryClient.invalidateQueries({ queryKey: roleGetListQueryKey() });
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [deleteRoleId, deleteMutation, queryClient, dispatchToast, t]);

  const { table, query, tableState } = useRolesTable(
    handleEdit,
    handleDelete,
    handleManageClaims,
    canManageRoleClaims,
  );

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      tableState.state.onGlobalFilterChange(searchValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <PageLayout title={t("AbpIdentity::Roles")}>
      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <SearchBox
            placeholder={t("AbpUi::Search")}
            value={searchValue}
            onChange={(_, data) => setSearchValue(data.value)}
            appearance="outline"
          />
        </div>
        <div className={styles.actionButtons}>
          <Button appearance="primary" icon={<Add20Regular />} onClick={handleCreate}>
            {t("AbpIdentity::NewRole")}
          </Button>
        </div>
      </div>

      <DataTable
        table={table}
        isLoading={query.isLoading}
        isError={query.isError}
        errorMessage={query.error ? String(query.error) : undefined}
      />

      <RoleFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        role={formRole}
        onSuccess={handleFormSuccess}
      />

      <RoleClaimsDialog
        open={claimsRole !== null}
        onOpenChange={(open) => {
          if (!open) setClaimsRole(null);
        }}
        roleId={claimsRole?.id}
        roleName={claimsRole?.name}
      />

      <ConfirmDialog
        open={deleteRoleId !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteRoleId(null);
        }}
        title={t("AbpUi::AreYouSure")}
        description={t("AbpIdentity::RoleDeleteConfirmationMessage")}
        confirmLabel={t("AbpUi::Delete")}
        variant="destructive"
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
