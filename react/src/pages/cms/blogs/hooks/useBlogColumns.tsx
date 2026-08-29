/**
 * 博客表格列定义聚合：名称、Slug、文章数与行内操作按钮（编辑/删除）。
 */
import { useMemo } from "react";
import { Button } from "@fluentui/react-components";
import { Delete20Regular, Edit20Regular } from "@fluentui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import type { AppTableFeatures } from "@/components/ui/data-table/useDataTable";
import type { VoloCmsKitAdminBlogsBlogDto as BlogItem } from "@/api/models/volo/cmsKit/admin/blogs/BlogDto";
import { useCmsListStyles } from "../../shared/styles/cmsList";

interface UseBlogColumnsOptions {
  canUpdate: boolean;
  canDelete: boolean;
  onEdit: (blog: BlogItem) => void;
  onDelete: (id: string) => void;
}

/** 构建博客列表的列定义（含权限控制的行内操作）。 */
export function useBlogColumns({ canUpdate, canDelete, onEdit, onDelete }: UseBlogColumnsOptions) {
  const styles = useCmsListStyles();

  return useMemo<ColumnDef<AppTableFeatures, BlogItem>[]>(
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
                onClick={() => onEdit(row.original)}
                aria-label={"编辑"}
                title={"编辑"}
              />
            )}
            {canDelete && (
              <Button
                size="small"
                appearance="subtle"
                icon={<Delete20Regular />}
                onClick={() => row.original.id && onDelete(row.original.id)}
                aria-label={"删除"}
                title={"删除"}
              />
            )}
          </div>
        ),
      },
    ],
    [styles.actionsCell, canUpdate, canDelete, onEdit, onDelete],
  );
}
