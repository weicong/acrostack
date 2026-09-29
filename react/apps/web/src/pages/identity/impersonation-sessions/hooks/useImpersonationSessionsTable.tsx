/**
 * 模拟登录会话列表表格聚合 hook：数据查询、列定义与表格实例。
 *
 * 后端查询输入不含自由文本 Filter，工具栏仅提供状态筛选
 * （通过 extraParams.IsActive 透传）。
 */
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { type ColumnDef } from "@tanstack/react-table";
import { Badge } from "@acrostack/ui/components/badge";
import { Button } from "@acrostack/ui/components/button";
import { impersonationSessionGetListQueryOptions } from "@acrostack/api-client/hooks/impersonationSession/useImpersonationSessionGetList";
import type { AcroStackImpersonationImpersonationSessionDto as ImpersonationSessionDto } from "@acrostack/api-client/models/acroStack/impersonation/ImpersonationSessionDto";
import { useDataTableState } from "@acrostack/ui/data-table";
import { useDataTableQuery, type GridQueryParams } from "@/lib/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@acrostack/ui/data-table";

export type SessionItem = ImpersonationSessionDto;

/** 状态筛选值：全部 / 仅进行中 / 仅已结束。 */
export type SessionStatusFilter = "all" | "active" | "ended";

export interface ImpersonationSessionsTableOptions {
  /** 是否显示操作列（页面权限即撤销权限）。 */
  canRevoke: boolean;
  /** 撤销按钮点击回调。 */
  onRevoke: (id: string) => void;
}

function formatDateTime(value?: string | null): string {
  return value ? new Date(value).toLocaleString() : "-";
}

export function useImpersonationSessionsTable({
  canRevoke,
  onRevoke,
}: ImpersonationSessionsTableOptions) {
  const [statusFilter, setStatusFilter] = useState<SessionStatusFilter>("all");

  const tableState = useDataTableState({
    sorting: [{ id: "creationTime", desc: true }],
  });

  const extraParams = useMemo<Record<string, unknown>>(
    () => (statusFilter === "all" ? {} : { IsActive: statusFilter === "active" }),
    [statusFilter],
  );

  const query = useDataTableQuery<SessionItem, GridQueryParams>({
    queryOptions: impersonationSessionGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    extraParams,
  });

  const columns = useMemo<ColumnDef<AppTableFeatures, SessionItem>[]>(() => {
    const base: ColumnDef<AppTableFeatures, SessionItem>[] = [
      {
        id: "creationTime",
        header: "开始时间",
        cell: ({ row }) => formatDateTime(row.original.creationTime),
      },
      {
        id: "impersonatorUserName",
        header: "管理员",
        cell: ({ row }) => row.original.impersonatorUserName ?? "-",
      },
      {
        id: "targetUserName",
        header: "被模拟用户",
        cell: ({ row }) => row.original.targetUserName ?? "-",
      },
      {
        id: "clientId",
        header: "客户端",
        cell: ({ row }) => row.original.clientId ?? "-",
      },
      {
        id: "status",
        header: "状态",
        cell: ({ row }) => {
          if (row.original.isActive) {
            return <Badge variant="default">{"进行中"}</Badge>;
          }
          return row.original.isRevoked ? (
            <Badge variant="destructive">{"已撤销"}</Badge>
          ) : (
            <Badge variant="secondary">{`已结束 ${row.original.endTime ? `· ${formatDateTime(row.original.endTime)}` : ""}`}</Badge>
          );
        },
      },
      {
        id: "revocationTime",
        header: "撤销时间",
        cell: ({ row }) => formatDateTime(row.original.revocationTime),
      },
    ];

    if (canRevoke) {
      base.push({
        id: "actions",
        header: "操作",
        cell: ({ row }) =>
          row.original.isActive ? (
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={(event) => {
                event.stopPropagation();
                onRevoke(row.original.id ?? "");
              }}
              title={"撤销会话"}
              aria-label={"撤销会话"}
            >
              <X />
            </Button>
          ) : null,
      });
    }

    return base;
  }, [canRevoke, onRevoke]);

  const table = useDataTable({
    columns,
    data: query.data,
    rowCount: query.totalCount,
    state: tableState.state,
    manualPagination: true,
    manualSorting: true,
    pageCount: query.pageCount,
  });

  return { table, query, tableState, statusFilter, setStatusFilter };
}
