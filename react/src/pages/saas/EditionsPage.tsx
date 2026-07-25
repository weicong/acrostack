import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  SearchBox,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import { Add20Regular, Edit20Regular, Delete20Regular } from "@fluentui/react-icons";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { useQueryClient } from "@tanstack/react-query";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable } from "@/components/data-table/useDataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import {
  editionGetListQueryOptions,
  editionGetListQueryKey,
} from "@/api/hooks/edition/useEditionGetList";
import { useEditionDelete } from "@/api/hooks/edition/useEditionDelete";
import type { AcroStackServicesDtosSaaSEditionDto as EditionDto } from "@/api/models/acroStack/services/dtos/saaS/EditionDto";
import { EditionFormDialog } from "./EditionFormDialog";

type EditionItem = EditionDto;

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: tokens.spacingHorizontalM,
    marginBottom: tokens.spacingHorizontalM,
  },
  filters: {
    display: "flex",
    flex: 1,
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

export function EditionsPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { isGranted } = usePermissions();
  const { dispatchToast } = useToastController();
  const deleteMutation = useEditionDelete();

  const canCreate = isGranted("AcroStack.SaaS.Editions.Create");
  const canUpdate = isGranted("AcroStack.SaaS.Editions.Update");
  const canDelete = isGranted("AcroStack.SaaS.Editions.Delete");

  const [formOpen, setFormOpen] = useState(false);
  const [editingEdition, setEditingEdition] = useState<EditionItem | undefined>();
  const [deleteEditionId, setDeleteEditionId] = useState<string | null>(null);

  const tableState = useDataTableState({
    sorting: [{ id: "displayName", desc: false }],
  });

  const query = useDataTableQuery<EditionItem, AbpGridParams>({
    queryOptions: editionGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const handleCreate = useCallback(() => {
    setEditingEdition(undefined);
    setFormOpen(true);
  }, []);

  const handleEdit = useCallback((edition: EditionItem) => {
    setEditingEdition(edition);
    setFormOpen(true);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setDeleteEditionId(id);
  }, []);

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    setEditingEdition(undefined);
    void queryClient.invalidateQueries({
      queryKey: editionGetListQueryKey(),
    });
  }, [queryClient]);

  const handleDeleteConfirm = useCallback(() => {
    if (!deleteEditionId) return;
    deleteMutation.mutate(
      { id: deleteEditionId },
      {
        onSuccess: () => {
          setDeleteEditionId(null);
          void queryClient.invalidateQueries({
            queryKey: editionGetListQueryKey(),
          });
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [deleteEditionId, deleteMutation, queryClient, dispatchToast, t]);

  const columns = useMemo<ColumnDef<EditionItem>[]>(
    () => [
      {
        id: "displayName",
        accessorKey: "displayName",
        header: t("SaaS:EditionDisplayName"),
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "creationTime",
        accessorKey: "creationTime",
        header: t("AbpUi::CreationTime"),
        cell: (info) => {
          const date = info.getValue() as string | undefined;
          return date ? format(new Date(date), "yyyy-MM-dd HH:mm") : "-";
        },
      },
      {
        id: "actions",
        header: t("AbpUi::Actions"),
        cell: ({ row }) => (
          <div className={styles.actionsCell}>
            {canUpdate && (
              <Button
                size="small"
                appearance="subtle"
                icon={<Edit20Regular />}
                onClick={() => handleEdit(row.original)}
                aria-label={t("AbpUi::Edit")}
                title={t("AbpUi::Edit")}
              />
            )}
            {canDelete && (
              <Button
                size="small"
                appearance="subtle"
                icon={<Delete20Regular />}
                onClick={() => row.original.id && handleDelete(row.original.id)}
                aria-label={t("AbpUi::Delete")}
                title={t("AbpUi::Delete")}
              />
            )}
          </div>
        ),
      },
    ],
    [t, styles.actionsCell, canUpdate, canDelete, handleEdit, handleDelete],
  );

  const table = useDataTable({
    columns,
    data: query.data,
    rowCount: query.totalCount,
    getRowId: (row) => row.id ?? "",
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
  }, [searchValue, tableState.state]);

  return (
    <PageLayout title={t("SaaS:Editions")}>
      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <SearchBox
            placeholder={t("AbpUi::Search")}
            value={searchValue}
            onChange={(_, data) => setSearchValue(data.value)}
            appearance="outline"
          />
        </div>
        {canCreate && (
          <div className={styles.actionButtons}>
            <Button appearance="primary" icon={<Add20Regular />} onClick={handleCreate}>
              {t("SaaS:NewEdition")}
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

      <EditionFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        edition={editingEdition}
        onSuccess={handleFormSuccess}
      />

      <ConfirmDialog
        open={deleteEditionId !== null}
        onOpenChange={(open) => !open && setDeleteEditionId(null)}
        title={t("AbpUi::AreYouSure")}
        description={t("SaaS:EditionDeleteConfirmationMessage")}
        confirmLabel={t("AbpUi::Delete")}
        variant="destructive"
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
