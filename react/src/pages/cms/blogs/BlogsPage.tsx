/**
 * 博客管理页（BlogsPage）。
 *
 * 本文件只负责编排：权限判定、列表查询、对话框开关状态与各子组件组装；
 * 样式见 styles/cmsList，动作聚合见 hooks/useBlogActions，
 * 列定义见 hooks/useBlogColumns，工具栏见 components/BlogsToolbar。
 */
import { useCallback, useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/ui/data-table/DataTable";
import { useDataTableState } from "@/components/ui/data-table/useDataTableState";
import {
  useDataTableQuery,
  type AbpGridParams,
} from "@/components/ui/data-table/useDataTableQuery";
import { useDataTable } from "@/components/ui/data-table/useDataTable";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import { blogAdminGetListQueryOptions } from "@/api/hooks/blogAdmin/useBlogAdminGetList";
import type { VoloCmsKitAdminBlogsBlogDto as BlogItem } from "@/api/models/volo/cmsKit/admin/blogs/BlogDto";
import { useBlogActions } from "./hooks/useBlogActions";
import { useBlogColumns } from "./hooks/useBlogColumns";
import { BlogsToolbar } from "./components/BlogsToolbar";
import { BlogFormDialog } from "./components/BlogFormDialog";

export function BlogsPage() {
  const { isGranted } = usePermissions();

  // 动作聚合：删除（内含列表失效与统一错误提示）
  const { remove, removePending, invalidateList } = useBlogActions();

  const canCreate = isGranted("CmsKit.Blogs.Create");
  const canUpdate = isGranted("CmsKit.Blogs.Update");
  const canDelete = isGranted("CmsKit.Blogs.Delete");

  // 对话框开关与待删除 Id
  const [formOpen, setFormOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogItem | undefined>();
  const [deleteBlogId, setDeleteBlogId] = useState<string | null>(null);

  const tableState = useDataTableState({
    sorting: [{ id: "name", desc: false }],
  });

  const query = useDataTableQuery<BlogItem, AbpGridParams>({
    queryOptions: blogAdminGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const handleCreate = useCallback(() => {
    setEditingBlog(undefined);
    setFormOpen(true);
  }, []);

  const handleEdit = useCallback((blog: BlogItem) => {
    setEditingBlog(blog);
    setFormOpen(true);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setDeleteBlogId(id);
  }, []);

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    setEditingBlog(undefined);
    invalidateList();
  }, [invalidateList]);

  const columns = useBlogColumns({
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
    <PageLayout title={"博客"}>
      <BlogsToolbar
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

      <BlogFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        blog={editingBlog}
        onSuccess={handleFormSuccess}
      />

      <ConfirmDialog
        open={deleteBlogId !== null}
        onOpenChange={(open) => !open && setDeleteBlogId(null)}
        title={"你确定吗?"}
        description={"此项将被删除！"}
        confirmLabel={"删除"}
        variant="destructive"
        onConfirm={() => void remove(deleteBlogId).then((ok) => ok && setDeleteBlogId(null))}
        isPending={removePending}
      />
    </PageLayout>
  );
}
