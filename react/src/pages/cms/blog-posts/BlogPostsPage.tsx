/**
 * 博客文章管理页（BlogPostsPage）。
 *
 * 本文件只负责编排：权限判定、列表查询、对话框开关状态与各子组件组装；
 * 样式见 styles/blogPosts，动作聚合见 hooks/useBlogPostActions，
 * 列定义见 hooks/useBlogPostColumns，工具栏见 components/BlogPostsToolbar。
 */
import { useCallback, useMemo, useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery } from "@/components/data-table/useDataTableQuery";
import { useDataTable } from "@/components/data-table/useDataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import { blogPostAdminGetListQueryOptions } from "@/api/hooks/blogPostAdmin/useBlogPostAdminGetList";
import { useBlogAdminGetAllList } from "@/api/hooks/blogAdmin/useBlogAdminGetAllList";
import type { VoloCmsKitAdminBlogsBlogPostListDto as BlogPostItem } from "@/api/models/volo/cmsKit/admin/blogs/BlogPostListDto";
import type { BlogPostListParams } from "./types/blogPosts";
import { useBlogPostActions } from "./hooks/useBlogPostActions";
import { useBlogPostColumns } from "./hooks/useBlogPostColumns";
import { BlogPostsToolbar } from "./components/BlogPostsToolbar";
import { BlogPostFormDialog } from "./BlogPostFormDialog";

export function BlogPostsPage() {
  const { isGranted } = usePermissions();

  // 动作聚合：删除/发布/转草稿（内含列表失效与统一错误提示）
  const { remove, removePending, publish, draft, invalidateList } = useBlogPostActions();
  const blogsQuery = useBlogAdminGetAllList();
  const blogs = useMemo(() => blogsQuery.data?.items ?? [], [blogsQuery.data]);

  const canCreate = isGranted("CmsKit.BlogPosts.Create");
  const canUpdate = isGranted("CmsKit.BlogPosts.Update");
  const canDelete = isGranted("CmsKit.BlogPosts.Delete");

  // 对话框开关与筛选状态
  const [formOpen, setFormOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPostItem | undefined>();
  const [deletePostId, setDeletePostId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string>("");

  const tableState = useDataTableState({
    sorting: [{ id: "title", desc: false }],
  });

  const query = useDataTableQuery<BlogPostItem, BlogPostListParams>({
    queryOptions: blogPostAdminGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
    extraParams: selectedBlogId ? { BlogId: selectedBlogId } : undefined,
  });

  const handleCreate = useCallback(() => {
    setEditingPost(undefined);
    setFormOpen(true);
  }, []);

  const handleEdit = useCallback((post: BlogPostItem) => {
    setEditingPost(post);
    setFormOpen(true);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setDeletePostId(id);
  }, []);

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    setEditingPost(undefined);
    invalidateList();
  }, [invalidateList]);

  // 发布/转草稿为异步动作，包装成 void 调用供列回调使用
  const handlePublish = useCallback(
    (id: string) => {
      void publish(id);
    },
    [publish],
  );

  const handleDraft = useCallback(
    (id: string) => {
      void draft(id);
    },
    [draft],
  );

  const columns = useBlogPostColumns({
    canUpdate,
    canDelete,
    onEdit: handleEdit,
    onDelete: handleDelete,
    onPublish: handlePublish,
    onDraft: handleDraft,
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
    <PageLayout title={"博客文章"}>
      <BlogPostsToolbar
        blogs={blogs}
        selectedBlogId={selectedBlogId}
        onSelectBlog={setSelectedBlogId}
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

      <BlogPostFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        blogPost={editingPost}
        onSuccess={handleFormSuccess}
      />

      <ConfirmDialog
        open={deletePostId !== null}
        onOpenChange={(open) => !open && setDeletePostId(null)}
        title={"你确定吗?"}
        description={"此项将被删除！"}
        confirmLabel={"删除"}
        variant="destructive"
        onConfirm={() => void remove(deletePostId).then((ok) => ok && setDeletePostId(null))}
        isPending={removePending}
      />
    </PageLayout>
  );
}
