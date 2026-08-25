/**
 * 页面表格列定义聚合：标题、Slug、首页标记、创建时间与行内操作按钮（设为首页/编辑/删除）。
 */
import { useMemo } from "react";
import { Button } from "@fluentui/react-components";
import { Delete20Regular, Edit20Regular, Home20Regular } from "@fluentui/react-icons";
import { format } from "date-fns";
import { type ColumnDef } from "@tanstack/react-table";
import type { AppTableFeatures } from "@/components/data-table/useDataTable";
import type { VoloCmsKitAdminPagesPageDto as PageItem } from "@/api/models/volo/cmsKit/admin/pages/PageDto";
import { useCmsListStyles } from "../../shared/styles/cmsList";

interface UsePageColumnsOptions {
  canUpdate: boolean;
  canDelete: boolean;
  onEdit: (page: PageItem) => void;
  onDelete: (id: string) => void;
  /** 设为首页为异步动作，由调用方包装成 void 调用。 */
  onSetAsHomePage: (id: string) => void;
}

/** 构建页面列表的列定义（含权限控制的行内操作）。 */
export function usePageColumns({
  canUpdate,
  canDelete,
  onEdit,
  onDelete,
  onSetAsHomePage,
}: UsePageColumnsOptions) {
  const styles = useCmsListStyles();

  return useMemo<ColumnDef<AppTableFeatures, PageItem>[]>(
    () => [
      {
        id: "title",
        accessorKey: "title",
        header: "标题",
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "slug",
        accessorKey: "slug",
        header: "Slug",
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "isHomePage",
        accessorKey: "isHomePage",
        header: "首页",
        cell: (info) => (info.getValue() ? "是" : "否"),
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
            {canUpdate && !row.original.isHomePage && (
              <Button
                size="small"
                appearance="subtle"
                icon={<Home20Regular />}
                onClick={() => row.original.id && onSetAsHomePage(row.original.id)}
                aria-label={"设为首页"}
                title={"设为首页"}
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
    [styles.actionsCell, canUpdate, canDelete, onEdit, onDelete, onSetAsHomePage],
  );
}
