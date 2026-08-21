import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Button,
  SearchBox,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import { Add20Regular, Delete20Regular, Edit20Regular } from "@fluentui/react-icons";
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
  blogAdminGetListQueryOptions,
  blogAdminGetListQueryKey,
} from "@/api/hooks/blogAdmin/useBlogAdminGetList";
import { useBlogAdminDelete } from "@/api/hooks/blogAdmin/useBlogAdminDelete";
import type { VoloCmsKitAdminBlogsBlogDto as BlogDto } from "@/api/models/volo/cmsKit/admin/blogs/BlogDto";
import { BlogFormDialog } from "./BlogFormDialog";

type BlogItem = BlogDto;

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

export function BlogsPage() {
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { isGranted } = usePermissions();
  const { dispatchToast } = useToastController();
  const deleteMutation = useBlogAdminDelete();

  const canCreate = isGranted("CmsKit.Blogs.Create");
  const canUpdate = isGranted("CmsKit.Blogs.Update");
  const canDelete = isGranted("CmsKit.Blogs.Delete");

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
    void queryClient.invalidateQueries({
      queryKey: blogAdminGetListQueryKey(),
    });
  }, [queryClient]);

  const handleDeleteConfirm = useCallback(() => {
    if (!deleteBlogId) return;
    deleteMutation.mutate(
      { path: { id: deleteBlogId } },
      {
        onSuccess: () => {
          setDeleteBlogId(null);
          void queryClient.invalidateQueries({
            queryKey: blogAdminGetListQueryKey(),
          });
          dispatchToast("删除成功", { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [deleteBlogId, deleteMutation, queryClient, dispatchToast]);

  const columns = useMemo<ColumnDef<AppTableFeatures, BlogItem>[]>(
    () => [
      {
        id: "name",
        accessorKey: "name",
        header: "名称",
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "slug",
        accessorKey: "slug",
        header: "Slug",
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "blogPostCount",
        accessorKey: "blogPostCount",
        header: "文章数",
        cell: (info) => String((info.getValue() as number | null | undefined) ?? 0),
      },
      {
        id: "actions",
        header: "操作",
        cell: ({ row }) => (
          <div className={styles.actionsCell}>
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
    [styles.actionsCell, canUpdate, canDelete, handleEdit, handleDelete],
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
    <PageLayout title={"博客"}>
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
              {"新建博客"}
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
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
