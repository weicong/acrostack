/**
 * 标签表格列定义聚合：名称、实体类型与行内操作按钮（编辑/删除）。
 */
import { useMemo } from "react";
import { Button } from "@fluentui/react-components";
import { Delete20Regular, Edit20Regular } from "@fluentui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import type { AppTableFeatures } from "@/components/data-table/useDataTable";
import type { VoloCmsKitTagsTagDto as TagItem } from "@/api/models/volo/cmsKit/tags/TagDto";
import { useCmsListStyles } from "../../shared/styles/cmsList";

interface UseTagColumnsOptions {
  canUpdate: boolean;
  canDelete: boolean;
  onEdit: (tag: TagItem) => void;
  onDelete: (id: string) => void;
}

/** 构建标签列表的列定义（含权限控制的行内操作）。 */
export function useTagColumns({ canUpdate, canDelete, onEdit, onDelete }: UseTagColumnsOptions) {
  const styles = useCmsListStyles();

  return useMemo<ColumnDef<AppTableFeatures, TagItem>[]>(
    () => [
      {
        id: "name",
        accessorKey: "name",
        header: "名称",
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "entityType",
        accessorKey: "entityType",
        header: "实体类型",
        cell: (info) => (info.getValue() as string) || "-",
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
