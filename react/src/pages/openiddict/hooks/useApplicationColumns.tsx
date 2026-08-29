/**
 * OpenIddict 应用列表列定义。
 */
import { useMemo } from "react";
import { Badge, Button } from "@fluentui/react-components";
import { Delete20Regular } from "@fluentui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import type { AppTableFeatures } from "@/components/ui/data-table/useDataTable";
import type { AcroStackOpenIddictManagementOpenIddictApplicationDto as AppDto } from "@/api/models/acroStack/openIddictManagement/OpenIddictApplicationDto";
import { useOpenIddictStyles } from "../styles/openiddict";

interface UseApplicationColumnsOptions {
  onDelete: (id: string) => void;
}

export function useApplicationColumns({ onDelete }: UseApplicationColumnsOptions) {
  const styles = useOpenIddictStyles();

  return useMemo<ColumnDef<AppTableFeatures, AppDto>[]>(
    () => [
      {
        id: "clientId",
        header: "客户端 ID",
        cell: ({ row }) => <code>{row.original.clientId ?? "-"}</code>,
      },
      {
        id: "displayName",
        header: "显示名称",
        cell: ({ row }) => row.original.displayName ?? "-",
      },
      {
        id: "clientType",
        header: "客户端类型",
        cell: ({ row }) => (
          <Badge
            appearance="filled"
            color={row.original.clientType === "confidential" ? "brand" : "informative"}
          >
            {row.original.clientType ?? "-"}
          </Badge>
        ),
      },
      {
        id: "consentType",
        header: "授权类型",
        cell: ({ row }) => row.original.consentType ?? "-",
      },
      {
        id: "permissions",
        header: "权限",
        cell: ({ row }) => row.original.permissions?.length ?? 0,
      },
      {
        id: "redirectUris",
        header: "重定向 URI",
        cell: ({ row }) => row.original.redirectUris?.length ?? 0,
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
