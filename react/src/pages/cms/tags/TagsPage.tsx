/**
 * 标签管理页（TagsPage）。
 *
 * 本文件只负责编排：权限判定、列表查询、对话框开关状态与各子组件组装；
 * 样式见 styles/cmsList，动作聚合见 hooks/useTagActions，
 * 列定义见 hooks/useTagColumns，工具栏见 components/TagsToolbar。
 */
import { useCallback, useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable } from "@/components/data-table/useDataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import { tagAdminGetListQueryOptions } from "@/api/hooks/tagAdmin/useTagAdminGetList";
import type { VoloCmsKitTagsTagDto as TagItem } from "@/api/models/volo/cmsKit/tags/TagDto";
import { useTagActions } from "./hooks/useTagActions";
import { useTagColumns } from "./hooks/useTagColumns";
import { TagsToolbar } from "./components/TagsToolbar";
import { TagFormDialog } from "./components/TagFormDialog";

export function TagsPage() {
  const { isGranted } = usePermissions();

  // 动作聚合：删除（内含列表失效与统一错误提示）
  const { remove, removePending, invalidateList } = useTagActions();

  const canCreate = isGranted("CmsKit.Tags.Create");
  const canUpdate = isGranted("CmsKit.Tags.Update");
  const canDelete = isGranted("CmsKit.Tags.Delete");

  // 对话框开关与待删除 Id
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

  const columns = useTagColumns({
    canUpdate,
    canDelete,
    onEdit: handleEdit,
    onDelete: handleDelete,
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
    <PageLayout title={"标签"}>
      <TagsToolbar
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

      <TagFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        tag={editingTag}
        onSuccess={handleFormSuccess}
      />

      <ConfirmDialog
        open={deleteTagId !== null}
        onOpenChange={(open) => !open && setDeleteTagId(null)}
        title={"你确定吗?"}
        description={"此项将被删除！"}
        confirmLabel={"删除"}
        variant="destructive"
        onConfirm={() => void remove(deleteTagId).then((ok) => ok && setDeleteTagId(null))}
        isPending={removePending}
      />
    </PageLayout>
  );
}
