/**
 * 模拟登录会话列表表格聚合 hook：数据查询、列定义与表格实例。
 *
 * 后端查询输入不含自由文本 Filter，工具栏仅提供状态筛选
 * （通过 extraParams.IsActive 透传）。
 */
import { useMemo, useState } from "react";
import { Badge, Button } from "@fluentui/react-components";
import { Dismiss20Regular } from "@fluentui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import { impersonationSessionGetListQueryOptions } from "@/api/hooks/impersonationSession/useImpersonationSessionGetList";
import type { AcroStackAccountProImpersonationSessionDto as ImpersonationSessionDto } from "@/api/models/acroStack/accountPro/ImpersonationSessionDto";
import { useDataTableState } from "@/components/ui/data-table/useDataTableState";
import {
  useDataTableQuery,
  type AbpGridParams,
} from "@/components/ui/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/ui/data-table/useDataTable";
import { useImpersonationSessionsStyles } from "../styles/impersonationSessions";

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
  const styles = useImpersonationSessionsStyles();

  const [statusFilter, setStatusFilter] = useState<SessionStatusFilter>("all");

  const tableState = useDataTableState({
    sorting: [{ id: "creationTime", desc: true }],
  });

  const extraParams = useMemo<Record<string, unknown>>(
    () => (statusFilter === "all" ? {} : { IsActive: statusFilter === "active" }),
    [statusFilter],
  );

  const query = useDataTableQuery<SessionItem, AbpGridParams>({
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
            return (
              <Badge appearance="filled" color="success">
                {"进行中"}
              </Badge>
            );
          }
          return row.original.isRevoked ? (
            <Badge appearance="filled" color="danger">
              {"已撤销"}
            </Badge>
          ) : (
            <Badge appearance="filled">{`已结束 ${row.original.endTime ? `· ${formatDateTime(row.original.endTime)}` : ""}`}</Badge>
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
            <div className={styles.actionsCell}>
              <Button
                size="small"
                appearance="subtle"
                icon={<Dismiss20Regular />}
                onClick={() => onRevoke(row.original.id ?? "")}
                title={"撤销会话"}
                aria-label={"撤销会话"}
              />
            </div>
          ) : null,
      });
    }

    return base;
  }, [styles.actionsCell, canRevoke, onRevoke]);

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
