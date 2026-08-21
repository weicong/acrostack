import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Badge,
  Button,
  Dropdown,
  Option,
  SearchBox,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import {
  Add20Regular,
  Delete20Regular,
  Edit20Regular,
  DocumentCheckmark20Regular,
  DocumentEdit20Regular,
} from "@fluentui/react-icons";
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
  blogPostAdminGetListQueryOptions,
  blogPostAdminGetListQueryKey,
} from "@/api/hooks/blogPostAdmin/useBlogPostAdminGetList";
import { useBlogPostAdminDelete } from "@/api/hooks/blogPostAdmin/useBlogPostAdminDelete";
import { useBlogPostAdminPublish } from "@/api/hooks/blogPostAdmin/useBlogPostAdminPublish";
import { useBlogPostAdminDraft } from "@/api/hooks/blogPostAdmin/useBlogPostAdminDraft";
import { useBlogAdminGetAllList } from "@/api/hooks/blogAdmin/useBlogAdminGetAllList";
import type { VoloCmsKitAdminBlogsBlogPostListDto as BlogPostItem } from "@/api/models/volo/cmsKit/admin/blogs/BlogPostListDto";
import { BlogPostFormDialog } from "./BlogPostFormDialog";

type BlogPostListParams = AbpGridParams & {
  BlogId?: string;
};

// ABP BlogPostStatus enum (Volo.CmsKit.Blogs.BlogPostStatus)
const BlogPostStatus = {
  Draft: 0,
  Published: 1,
  SentToReview: 2,
  Rejected: 3,
} as const;

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
    gap: tokens.spacingHorizontalS,
  },
  search: {
    flex: 1,
    minWidth: 0,
  },
  blogFilter: {
    minWidth: "200px",
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

export function BlogPostsPage() {
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { isGranted } = usePermissions();
  const { dispatchToast } = useToastController();
  const deleteMutation = useBlogPostAdminDelete();
  const publishMutation = useBlogPostAdminPublish();
  const draftMutation = useBlogPostAdminDraft();
  const blogsQuery = useBlogAdminGetAllList();
  const blogs = useMemo(() => blogsQuery.data?.items ?? [], [blogsQuery.data]);

  const canCreate = isGranted("CmsKit.BlogPosts.Create");
  const canUpdate = isGranted("CmsKit.BlogPosts.Update");
  const canDelete = isGranted("CmsKit.BlogPosts.Delete");

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

  const invalidateList = useCallback(() => {
    void queryClient.invalidateQueries({
      queryKey: blogPostAdminGetListQueryKey(),
    });
  }, [queryClient]);

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

  const handleDeleteConfirm = useCallback(() => {
    if (!deletePostId) return;
    deleteMutation.mutate(
      { path: { id: deletePostId } },
      {
        onSuccess: () => {
          setDeletePostId(null);
          invalidateList();
          dispatchToast("删除成功", { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [deletePostId, deleteMutation, invalidateList, dispatchToast]);

  const handlePublish = useCallback(
    (id: string) => {
      publishMutation.mutate(
        { path: { id } },
        {
          onSuccess: () => {
            invalidateList();
            dispatchToast("博客文章已发布", { intent: "success" });
          },
          onError: (err) => {
            dispatchToast(String(err), { intent: "error" });
          },
        },
      );
    },
    [publishMutation, invalidateList, dispatchToast],
  );

  const handleDraft = useCallback(
    (id: string) => {
      draftMutation.mutate(
        { path: { id } },
        {
          onSuccess: () => {
            invalidateList();
            dispatchToast("博客文章已转为草稿", { intent: "success" });
          },
          onError: (err) => {
            dispatchToast(String(err), { intent: "error" });
          },
        },
      );
    },
    [draftMutation, invalidateList, dispatchToast],
  );

  const renderStatusBadge = useCallback((status: number | undefined) => {
    switch (status) {
      case BlogPostStatus.Published:
        return (
          <Badge appearance="filled" color="success">
            {"已发布"}
          </Badge>
        );
      case BlogPostStatus.SentToReview:
        return (
          <Badge appearance="filled" color="informative">
            {"待审核"}
          </Badge>
        );
      case BlogPostStatus.Rejected:
        return (
          <Badge appearance="filled" color="danger">
            {"已拒绝"}
          </Badge>
        );
      case BlogPostStatus.Draft:
      default:
        return (
          <Badge appearance="filled" color="warning">
            {"草稿"}
          </Badge>
        );
    }
  }, []);

  const columns = useMemo<ColumnDef<AppTableFeatures, BlogPostItem>[]>(
    () => [
      {
        id: "title",
        accessorKey: "title",
        header: "标题",
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "blogName",
        accessorKey: "blogName",
        header: "博客",
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "slug",
        accessorKey: "slug",
        header: "Slug",
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "status",
        accessorKey: "status",
        header: "状态",
        cell: (info) => renderStatusBadge(info.getValue() as number | undefined),
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
            {canUpdate && row.original.status !== BlogPostStatus.Published && row.original.id && (
              <Button
                size="small"
                appearance="subtle"
                icon={<DocumentCheckmark20Regular />}
                onClick={() => row.original.id && handlePublish(row.original.id)}
                aria-label={"发布"}
                title={"发布"}
              />
            )}
            {canUpdate && row.original.status !== BlogPostStatus.Draft && row.original.id && (
              <Button
                size="small"
                appearance="subtle"
                icon={<DocumentEdit20Regular />}
                onClick={() => row.original.id && handleDraft(row.original.id)}
                aria-label={"转为草稿"}
                title={"转为草稿"}
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
    [
      styles.actionsCell,
      canUpdate,
      canDelete,
      renderStatusBadge,
      handleEdit,
      handleDelete,
      handlePublish,
      handleDraft,
    ],
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
    <PageLayout title={"博客文章"}>
      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <SearchBox
            className={styles.search}
            placeholder={"搜索"}
            value={searchValue}
            onChange={(_, data) => setSearchValue(data.value)}
            appearance="outline"
          />
          <Dropdown
            className={styles.blogFilter}
            placeholder={"全部博客"}
            value={blogs.find((b) => b.id === selectedBlogId)?.name ?? ""}
            onOptionSelect={(_, data) =>
              setSelectedBlogId(data.optionValue === "" ? "" : String(data.optionValue))
            }
            clearable
          >
            <Option value="">{"全部博客"}</Option>
            {blogs.map((b) => (
              <Option key={b.id} value={b.id ?? ""}>
                {b.name ?? ""}
              </Option>
            ))}
          </Dropdown>
        </div>
        {canCreate && (
          <div className={styles.actionButtons}>
            <Button appearance="primary" icon={<Add20Regular />} onClick={handleCreate}>
              {"新建博客文章"}
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
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
