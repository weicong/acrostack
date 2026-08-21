import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Button,
  SearchBox,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import { Add20Regular, Delete20Regular, Edit20Regular, Home20Regular } from "@fluentui/react-icons";
import { format } from "date-fns";
import { type ColumnDef } from "@tanstack/react-table";
import { useQueryClient } from "@tanstack/react-query";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/data-table/useDataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import {
  pageAdminGetListQueryOptions,
  pageAdminGetListQueryKey,
} from "@/api/hooks/pageAdmin/usePageAdminGetList";
import { usePageAdminDelete } from "@/api/hooks/pageAdmin/usePageAdminDelete";
import { usePageAdminSetAsHomePage } from "@/api/hooks/pageAdmin/usePageAdminSetAsHomePage";
import type { VoloCmsKitAdminPagesPageDto as PageDto } from "@/api/models/volo/cmsKit/admin/pages/PageDto";
import { PageFormDialog } from "./PageFormDialog";

type PageItem = PageDto;

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
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { isGranted } = usePermissions();
  const { dispatchToast } = useToastController();
  const deleteMutation = usePageAdminDelete();
  const setHomePageMutation = usePageAdminSetAsHomePage();

  const canCreate = isGranted("CmsKit.Pages.Create");
  const canUpdate = isGranted("CmsKit.Pages.Update");
  const canDelete = isGranted("CmsKit.Pages.Delete");

  const [formOpen, setFormOpen] = useState(false);
  const [editingPage, setEditingPage] = useState<PageItem | undefined>();
  const [deletePageId, setDeletePageId] = useState<string | null>(null);

  const tableState = useDataTableState({
    sorting: [{ id: "title", desc: false }],
  });

  const query = useDataTableQuery<PageItem, AbpGridParams>({
    queryOptions: pageAdminGetListQueryOptions,
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

  const handleSetAsHomePage = useCallback(
    (id: string) => {
      setHomePageMutation.mutate(
        { path: { id } },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries({
              queryKey: pageAdminGetListQueryKey(),
            });
            dispatchToast("保存成功", { intent: "success" });
          },
          onError: (err) => {
            dispatchToast(String(err), { intent: "error" });
          },
        },
      );
    },
    [setHomePageMutation, queryClient, dispatchToast],
  );

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    setEditingPage(undefined);
    void queryClient.invalidateQueries({
      queryKey: pageAdminGetListQueryKey(),
    });
  }, [queryClient]);

  const handleDeleteConfirm = useCallback(() => {
    if (!deletePageId) return;
    deleteMutation.mutate(
      { path: { id: deletePageId } },
      {
        onSuccess: () => {
          setDeletePageId(null);
          void queryClient.invalidateQueries({
            queryKey: pageAdminGetListQueryKey(),
          });
          dispatchToast("删除成功", { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [deletePageId, deleteMutation, queryClient, dispatchToast]);

  const columns = useMemo<ColumnDef<AppTableFeatures, PageItem>[]>(
    () => [
      {
        id: "title",
        accessorKey: "title",
        header: "标题",
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "slug",
        accessorKey: "slug",
        header: "Slug",
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "isHomePage",
        accessorKey: "isHomePage",
        header: "首页",
        cell: (info) => (info.getValue() ? "是" : "否"),
      },
      {
        id: "creationTime",
        accessorKey: "creationTime",
        header: "创建时间",
        cell: (info) => {
          const date = info.getValue() as string | undefined;
          return date ? format(new Date(date), "yyyy-MM-dd HH:mm") : "-";
        },
      },
      {
        id: "actions",
        header: "操作",
        cell: ({ row }) => (
          <div className={styles.actionsCell}>
            {canUpdate && !row.original.isHomePage && (
              <Button
                size="small"
                appearance="subtle"
                icon={<Home20Regular />}
                onClick={() => row.original.id && handleSetAsHomePage(row.original.id)}
                aria-label={"设为首页"}
                title={"设为首页"}
              />
            )}
            {canUpdate && (
              <Button
                size="small"
                appearance="subtle"
                icon={<Edit20Regular />}
                onClick={() => handleEdit(row.original)}
                aria-label={"编辑"}
                title={"编辑"}
              />
            )}
            {canDelete && (
              <Button
                size="small"
                appearance="subtle"
                icon={<Delete20Regular />}
                onClick={() => row.original.id && handleDelete(row.original.id)}
                aria-label={"删除"}
                title={"删除"}
              />
            )}
          </div>
        ),
      },
    ],
    [styles.actionsCell, canUpdate, canDelete, handleEdit, handleDelete, handleSetAsHomePage],
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
    <PageLayout title={"页面"}>
      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <SearchBox
            placeholder={"搜索"}
            value={searchValue}
            onChange={(_, data) => setSearchValue(data.value)}
            appearance="outline"
          />
        </div>
        {canCreate && (
          <div className={styles.actionButtons}>
            <Button appearance="primary" icon={<Add20Regular />} onClick={handleCreate}>
              {"新建页面"}
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
        title={"你确定吗?"}
        description={"此项将被删除！"}
        confirmLabel={"删除"}
        variant="destructive"
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
