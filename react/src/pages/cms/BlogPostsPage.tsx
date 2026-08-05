import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
      { id: deletePostId },
      {
        onSuccess: () => {
          setDeletePostId(null);
          invalidateList();
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [deletePostId, deleteMutation, invalidateList, dispatchToast, t]);

  const handlePublish = useCallback(
    (id: string) => {
      publishMutation.mutate(
        { id },
        {
          onSuccess: () => {
            invalidateList();
            dispatchToast(t("Cms:BlogPostPublished"), { intent: "success" });
          },
          onError: (err) => {
            dispatchToast(String(err), { intent: "error" });
          },
        },
      );
    },
    [publishMutation, invalidateList, dispatchToast, t],
  );

  const handleDraft = useCallback(
    (id: string) => {
      draftMutation.mutate(
        { id },
        {
          onSuccess: () => {
            invalidateList();
            dispatchToast(t("Cms:BlogPostDrafted"), { intent: "success" });
          },
          onError: (err) => {
            dispatchToast(String(err), { intent: "error" });
          },
        },
      );
    },
    [draftMutation, invalidateList, dispatchToast, t],
  );

  const renderStatusBadge = useCallback(
    (status: number | undefined) => {
      switch (status) {
        case BlogPostStatus.Published:
          return (
            <Badge appearance="filled" color="success">
              {t("Cms:BlogPostStatusPublished")}
            </Badge>
          );
        case BlogPostStatus.SentToReview:
          return (
            <Badge appearance="filled" color="informative">
              {t("Cms:BlogPostStatusSentToReview")}
            </Badge>
          );
        case BlogPostStatus.Rejected:
          return (
            <Badge appearance="filled" color="danger">
              {t("Cms:BlogPostStatusRejected")}
            </Badge>
          );
        case BlogPostStatus.Draft:
        default:
          return (
            <Badge appearance="filled" color="warning">
              {t("Cms:BlogPostStatusDraft")}
            </Badge>
          );
      }
    },
    [t],
  );

  const columns = useMemo<ColumnDef<BlogPostItem>[]>(
    () => [
      {
        id: "title",
        accessorKey: "title",
        header: t("Cms:Title"),
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "blogName",
        accessorKey: "blogName",
        header: t("Cms:Blog"),
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "slug",
        accessorKey: "slug",
        header: t("Cms:Slug"),
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "status",
        accessorKey: "status",
        header: t("Cms:Status"),
        cell: (info) => renderStatusBadge(info.getValue() as number | undefined),
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
            {canUpdate && row.original.status !== BlogPostStatus.Published && row.original.id && (
              <Button
                size="small"
                appearance="subtle"
                icon={<DocumentCheckmark20Regular />}
                onClick={() => row.original.id && handlePublish(row.original.id)}
                aria-label={t("Cms:Publish")}
                title={t("Cms:Publish")}
              />
            )}
            {canUpdate && row.original.status !== BlogPostStatus.Draft && row.original.id && (
              <Button
                size="small"
                appearance="subtle"
                icon={<DocumentEdit20Regular />}
                onClick={() => row.original.id && handleDraft(row.original.id)}
                aria-label={t("Cms:RevertToDraft")}
                title={t("Cms:RevertToDraft")}
              />
            )}
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
    [
      t,
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
    <PageLayout title={t("Cms:BlogPosts")}>
      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <SearchBox
            className={styles.search}
            placeholder={t("AbpUi::Search")}
            value={searchValue}
            onChange={(_, data) => setSearchValue(data.value)}
            appearance="outline"
          />
          <Dropdown
            className={styles.blogFilter}
            placeholder={t("Cms:AllBlogs")}
            value={blogs.find((b) => b.id === selectedBlogId)?.name ?? ""}
            onOptionSelect={(_, data) =>
              setSelectedBlogId(data.optionValue === "" ? "" : String(data.optionValue))
            }
            clearable
          >
            <Option value="">{t("Cms:AllBlogs")}</Option>
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
              {t("Cms:NewBlogPost")}
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
