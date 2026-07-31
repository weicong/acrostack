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
import { pageGetListQueryOptions, pageGetListQueryKey } from "@/api/hooks/page/usePageGetList";
import { usePageDelete } from "@/api/hooks/page/usePageDelete";
import type { AcroStackServicesDtosCmsPageDto as PageDto } from "@/api/models/acroStack/services/dtos/cms/PageDto";
import { PageFormDialog } from "./PageFormDialog";

type PageItem = PageDto;

const DESCRIPTION_MAX = 60;

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

export function PagesPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { isGranted } = usePermissions();
  const { dispatchToast } = useToastController();
  const deleteMutation = usePageDelete();

  const canCreate = isGranted("AcroStack.Cms.Pages.Create");
  const canUpdate = isGranted("AcroStack.Cms.Pages.Update");
  const canDelete = isGranted("AcroStack.Cms.Pages.Delete");

  const [formOpen, setFormOpen] = useState(false);
  const [editingPage, setEditingPage] = useState<PageItem | undefined>();
  const [deletePageId, setDeletePageId] = useState<string | null>(null);

  const tableState = useDataTableState({
    sorting: [{ id: "title", desc: false }],
  });

  const query = useDataTableQuery<PageItem, AbpGridParams>({
    queryOptions: pageGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const handleCreate = useCallback(() => {
    setEditingPage(undefined);
    setFormOpen(true);
  }, []);

  const handleEdit = useCallback((page: PageItem) => {
    setEditingPage(page);
    setFormOpen(true);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setDeletePageId(id);
  }, []);

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    setEditingPage(undefined);
    void queryClient.invalidateQueries({
      queryKey: pageGetListQueryKey(),
    });
  }, [queryClient]);

  const handleDeleteConfirm = useCallback(() => {
    if (!deletePageId) return;
    deleteMutation.mutate(
      { id: deletePageId },
      {
        onSuccess: () => {
          setDeletePageId(null);
          void queryClient.invalidateQueries({
            queryKey: pageGetListQueryKey(),
          });
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [deletePageId, deleteMutation, queryClient, dispatchToast, t]);

  const columns = useMemo<ColumnDef<PageItem>[]>(
    () => [
      {
        id: "title",
        accessorKey: "title",
        header: t("Cms:Title"),
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "slug",
        accessorKey: "slug",
        header: t("Cms:Slug"),
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "description",
        accessorKey: "description",
        header: t("Cms:Description"),
        cell: (info) => {
          const desc = (info.getValue() as string | null | undefined) ?? "";
          if (!desc) return "-";
          return desc.length > DESCRIPTION_MAX ? `${desc.slice(0, DESCRIPTION_MAX)}…` : desc;
        },
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
    <PageLayout title={t("Cms:Pages")}>
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
              {t("Cms:NewPage")}
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

      <PageFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        page={editingPage}
        onSuccess={handleFormSuccess}
      />

      <ConfirmDialog
        open={deletePageId !== null}
        onOpenChange={(open) => !open && setDeletePageId(null)}
        title={t("AbpUi::AreYouSure")}
        description={t("AbpUi::ItemWillBeDeleted")}
        confirmLabel={t("AbpUi::Delete")}
        variant="destructive"
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
