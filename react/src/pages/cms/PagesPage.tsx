/**
 * 页面管理页（PagesPage）。
 *
 * 本文件只负责编排：权限判定、列表查询、对话框开关状态与各子组件组装；
 * 样式见 styles/cmsList，动作聚合见 hooks/usePageActions，
 * 列定义见 hooks/usePageColumns，工具栏见 components/PagesToolbar。
 */
import { useCallback, useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable } from "@/components/data-table/useDataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import { pageAdminGetListQueryOptions } from "@/api/hooks/pageAdmin/usePageAdminGetList";
import type { VoloCmsKitAdminPagesPageDto as PageItem } from "@/api/models/volo/cmsKit/admin/pages/PageDto";
import { usePageActions } from "./hooks/usePageActions";
import { usePageColumns } from "./hooks/usePageColumns";
import { PagesToolbar } from "./components/PagesToolbar";
import { PageFormDialog } from "./PageFormDialog";

export function PagesPage() {
  const { isGranted } = usePermissions();

  // 动作聚合：删除/设为首页（内含列表失效与统一错误提示）
  const { remove, removePending, setAsHomePage, invalidateList } = usePageActions();

  const canCreate = isGranted("CmsKit.Pages.Create");
  const canUpdate = isGranted("CmsKit.Pages.Update");
  const canDelete = isGranted("CmsKit.Pages.Delete");

  // 对话框开关与待删除 Id
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
      void setAsHomePage(id);
    },
    [setAsHomePage],
  );

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    setEditingPage(undefined);
    invalidateList();
  }, [invalidateList]);

  const columns = usePageColumns({
    canUpdate,
    canDelete,
    onEdit: handleEdit,
    onDelete: handleDelete,
    onSetAsHomePage: handleSetAsHomePage,
  });

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

  return (
    <PageLayout title={"页面"}>
      <PagesToolbar
        canCreate={canCreate}
        onCreate={handleCreate}
        onGlobalFilterChange={tableState.state.onGlobalFilterChange}
      />

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
        onConfirm={() => void remove(deletePageId).then((ok) => ok && setDeletePageId(null))}
        isPending={removePending}
      />
    </PageLayout>
  );
}
