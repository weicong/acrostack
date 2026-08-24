/**
 * 博客文章表格列定义聚合：状态徽标与行内操作按钮（发布/转草稿/编辑/删除）。
 */
import { useMemo } from "react";
import { Badge, Button } from "@fluentui/react-components";
import {
  Delete20Regular,
  Edit20Regular,
  DocumentCheckmark20Regular,
  DocumentEdit20Regular,
} from "@fluentui/react-icons";
import { format } from "date-fns";
import { type ColumnDef } from "@tanstack/react-table";
import type { AppTableFeatures } from "@/components/data-table/useDataTable";
import type { VoloCmsKitAdminBlogsBlogPostListDto as BlogPostItem } from "@/api/models/volo/cmsKit/admin/blogs/BlogPostListDto";
import { BlogPostStatus } from "../types/blogPosts";
import { useBlogPostsStyles } from "../styles/blogPosts";

interface UseBlogPostColumnsOptions {
  canUpdate: boolean;
  canDelete: boolean;
  onEdit: (post: BlogPostItem) => void;
  onDelete: (id: string) => void;
  onPublish: (id: string) => void;
  onDraft: (id: string) => void;
}

/** 状态值 → 徽标。 */
function renderStatusBadge(status: number | undefined) {
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
}

/** 构建博客文章列表的列定义（含权限控制的行内操作）。 */
export function useBlogPostColumns({
  canUpdate,
  canDelete,
  onEdit,
  onDelete,
  onPublish,
  onDraft,
}: UseBlogPostColumnsOptions) {
  const styles = useBlogPostsStyles();

  return useMemo<ColumnDef<AppTableFeatures, BlogPostItem>[]>(
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
                onClick={() => row.original.id && onPublish(row.original.id)}
                aria-label={"发布"}
                title={"发布"}
              />
            )}
            {canUpdate && row.original.status !== BlogPostStatus.Draft && row.original.id && (
              <Button
                size="small"
                appearance="subtle"
                icon={<DocumentEdit20Regular />}
                onClick={() => row.original.id && onDraft(row.original.id)}
                aria-label={"转为草稿"}
                title={"转为草稿"}
              />
            )}
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
    [styles.actionsCell, canUpdate, canDelete, onEdit, onDelete, onPublish, onDraft],
  );
}
