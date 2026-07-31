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
  blogPostGetListQueryOptions,
  blogPostGetListQueryKey,
} from "@/api/hooks/blogPost/useBlogPostGetList";
import { useBlogPostDelete } from "@/api/hooks/blogPost/useBlogPostDelete";
import type { AcroStackServicesDtosCmsBlogPostDto as BlogPostDto } from "@/api/models/acroStack/services/dtos/cms/BlogPostDto";
import { BlogPostFormDialog } from "./BlogPostFormDialog";

type BlogPostItem = BlogPostDto;

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

export function BlogPostsPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { isGranted } = usePermissions();
  const { dispatchToast } = useToastController();
  const deleteMutation = useBlogPostDelete();

  const canCreate = isGranted("AcroStack.Cms.BlogPosts.Create");
  const canUpdate = isGranted("AcroStack.Cms.BlogPosts.Update");
  const canDelete = isGranted("AcroStack.Cms.BlogPosts.Delete");

  const [formOpen, setFormOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPostItem | undefined>();
  const [deletePostId, setDeletePostId] = useState<string | null>(null);

  const tableState = useDataTableState({
    sorting: [{ id: "title", desc: false }],
  });

  const query = useDataTableQuery<BlogPostItem, AbpGridParams>({
    queryOptions: blogPostGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
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
    void queryClient.invalidateQueries({
      queryKey: blogPostGetListQueryKey(),
    });
  }, [queryClient]);

  const handleDeleteConfirm = useCallback(() => {
    if (!deletePostId) return;
    deleteMutation.mutate(
      { id: deletePostId },
      {
        onSuccess: () => {
          setDeletePostId(null);
          void queryClient.invalidateQueries({
            queryKey: blogPostGetListQueryKey(),
          });
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [deletePostId, deleteMutation, queryClient, dispatchToast, t]);

  const columns = useMemo<ColumnDef<BlogPostItem>[]>(
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
        id: "tags",
        accessorKey: "tags",
        header: t("Cms:Tags"),
        cell: (info) => {
          const tags = info.getValue() as string[] | null | undefined;
          if (!tags || tags.length === 0) return "-";
          return tags.join(", ");
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
    <PageLayout title={t("Cms:BlogPosts")}>
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
