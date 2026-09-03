/**
 * OpenIddict Authorization 列表列定义。
 */
import { useMemo } from "react";
import { Badge, Button } from "@fluentui/react-components";
import { Delete20Regular, Dismiss20Regular } from "@fluentui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import type { AppTableFeatures } from "@/components/ui/data-table/useDataTable";
import type { AcroStackOpenIddictManagementDtosOpenIddictAuthorizationDto as AuthorizationDto } from "@/api/models/acroStack/openIddictManagement/dtos/OpenIddictAuthorizationDto";
import { useOpenIddictStyles } from "../styles/openiddict";

interface UseAuthorizationColumnsOptions {
  onDelete: (id: string) => void;
  onRevoke: (id: string) => void;
}

function formatDateTime(value?: string | null): string {
  return value ? new Date(value).toLocaleString() : "-";
}

function renderStatus(status?: string | null) {
  if (status === "valid" || status === "admitted") {
    return (
      <Badge appearance="filled" color="success">
        {"有效"}
      </Badge>
    );
  }
  if (status === "revoked") {
    return (
      <Badge appearance="filled" color="danger">
        {"已撤销"}
      </Badge>
    );
  }
  if (status === "rejected") {
    return (
      <Badge appearance="filled" color="severe">
        {"已拒绝"}
      </Badge>
    );
  }
  return <Badge appearance="filled">{status ?? "-"}</Badge>;
}

export function useAuthorizationColumns({ onDelete, onRevoke }: UseAuthorizationColumnsOptions) {
  const styles = useOpenIddictStyles();

  return useMemo<ColumnDef<AppTableFeatures, AuthorizationDto>[]>(
    () => [
      {
        id: "subject",
        header: "用户标识",
        cell: ({ row }) => <code>{row.original.subject ?? "-"}</code>,
      },
      {
        id: "type",
        header: "类型",
        cell: ({ row }) => row.original.type ?? "-",
      },
      {
        id: "status",
        header: "状态",
        cell: ({ row }) => renderStatus(row.original.status),
      },
      {
        id: "applicationId",
        header: "应用",
        cell: ({ row }) => {
          const id = row.original.applicationId;
          return id ? <code>{id.slice(0, 8)}</code> : "-";
        },
      },
      {
        id: "creationDate",
        header: "授权时间",
        cell: ({ row }) => formatDateTime(row.original.creationDate),
      },
      {
        id: "actions",
        header: "操作",
        cell: ({ row }) => {
          const id = row.original.id ?? "";
          const revocable = row.original.status !== "revoked";
          return (
            <div className={styles.actionsCell}>
              {revocable && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<Dismiss20Regular />}
                  onClick={() => onRevoke(id)}
                  title={"撤销"}
                  aria-label={"撤销"}
                />
              )}
              <Button
                size="small"
                appearance="subtle"
                icon={<Delete20Regular />}
                onClick={() => onDelete(id)}
                title={"删除"}
                aria-label={"删除"}
              />
            </div>
          );
        },
      },
    ],
    [styles.actionsCell, onDelete, onRevoke],
  );
}
