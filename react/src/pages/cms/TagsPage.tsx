import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  SearchBox,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import { Add20Regular, Delete20Regular, Edit20Regular } from "@fluentui/react-icons";
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
  tagAdminGetListQueryOptions,
  tagAdminGetListQueryKey,
} from "@/api/hooks/tagAdmin/useTagAdminGetList";
import { useTagAdminDelete } from "@/api/hooks/tagAdmin/useTagAdminDelete";
import type { VoloCmsKitTagsTagDto as TagItem } from "@/api/models/volo/cmsKit/tags/TagDto";
import { TagFormDialog } from "./TagFormDialog";

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

export function TagsPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { isGranted } = usePermissions();
  const { dispatchToast } = useToastController();
  const deleteMutation = useTagAdminDelete();

  const canCreate = isGranted("CmsKit.Tags.Create");
  const canUpdate = isGranted("CmsKit.Tags.Update");
  const canDelete = isGranted("CmsKit.Tags.Delete");

  const [formOpen, setFormOpen] = useState(false);
  const [editingTag, setEditingTag] = useState<TagItem | undefined>();
  const [deleteTagId, setDeleteTagId] = useState<string | null>(null);

  const tableState = useDataTableState({
    sorting: [{ id: "name", desc: false }],
  });

  const query = useDataTableQuery<TagItem, AbpGridParams>({
    queryOptions: tagAdminGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const invalidateList = useCallback(() => {
    void queryClient.invalidateQueries({
      queryKey: tagAdminGetListQueryKey(),
    });
  }, [queryClient]);

  const handleCreate = useCallback(() => {
    setEditingTag(undefined);
    setFormOpen(true);
  }, []);

  const handleEdit = useCallback((tag: TagItem) => {
    setEditingTag(tag);
    setFormOpen(true);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setDeleteTagId(id);
  }, []);

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    setEditingTag(undefined);
    invalidateList();
  }, [invalidateList]);

  const handleDeleteConfirm = useCallback(() => {
    if (!deleteTagId) return;
    deleteMutation.mutate(
      { id: deleteTagId },
      {
        onSuccess: () => {
          setDeleteTagId(null);
          invalidateList();
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [deleteTagId, deleteMutation, invalidateList, dispatchToast, t]);

  const columns = useMemo<ColumnDef<TagItem>[]>(
    () => [
      {
        id: "name",
        accessorKey: "name",
        header: t("Cms:Name"),
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "entityType",
        accessorKey: "entityType",
        header: t("Cms:EntityType"),
        cell: (info) => (info.getValue() as string) || "-",
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
    <PageLayout title={t("Cms:Tags")}>
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
              {t("Cms:NewTag")}
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

      <TagFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        tag={editingTag}
        onSuccess={handleFormSuccess}
      />

      <ConfirmDialog
        open={deleteTagId !== null}
        onOpenChange={(open) => !open && setDeleteTagId(null)}
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
