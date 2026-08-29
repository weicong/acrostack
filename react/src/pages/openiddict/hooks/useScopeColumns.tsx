/**
 * OpenIddict Scope 列表列定义。
 */
import { useMemo } from "react";
import { Button } from "@fluentui/react-components";
import { Delete20Regular } from "@fluentui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import type { AppTableFeatures } from "@/components/ui/data-table/useDataTable";
import type { AcroStackOpenIddictManagementOpenIddictScopeDto as ScopeDto } from "@/api/models/acroStack/openIddictManagement/OpenIddictScopeDto";
import { useOpenIddictStyles } from "../styles/openiddict";

interface UseScopeColumnsOptions {
  onDelete: (id: string) => void;
}

export function useScopeColumns({ onDelete }: UseScopeColumnsOptions) {
  const styles = useOpenIddictStyles();

  return useMemo<ColumnDef<AppTableFeatures, ScopeDto>[]>(
    () => [
      {
        id: "name",
        header: "名称",
        cell: ({ row }) => <code>{row.original.name ?? "-"}</code>,
      },
      {
        id: "displayName",
        header: "显示名称",
        cell: ({ row }) => row.original.displayName ?? "-",
      },
      {
        id: "description",
        header: "描述",
        cell: ({ row }) => row.original.description ?? "-",
      },
      {
        id: "resources",
        header: "资源",
        cell: ({ row }) => row.original.resources?.length ?? 0,
      },
      {
        id: "creationTime",
        header: "创建时间",
        cell: ({ row }) =>
          row.original.creationTime ? new Date(row.original.creationTime).toLocaleString() : "-",
      },
      {
        id: "actions",
        header: "操作",
        cell: ({ row }) => (
          <div className={styles.actionsCell}>
            <Button
              size="small"
              appearance="subtle"
              icon={<Delete20Regular />}
              onClick={() => onDelete(row.original.id ?? "")}
              title={"删除"}
            />
          </div>
        ),
      },
    ],
    [styles.actionsCell, onDelete],
  );
}
