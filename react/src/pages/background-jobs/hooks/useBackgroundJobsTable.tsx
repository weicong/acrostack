/**
 * 后台任务列表表格聚合 hook：数据查询、列定义与表格实例。
 */
import { useMemo } from "react";
import { Badge, Button } from "@fluentui/react-components";
import {
  ArrowCounterclockwise20Regular,
  Delete20Regular,
  Pause20Regular,
} from "@fluentui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import { backgroundJobGetListQueryOptions } from "@/api/hooks/backgroundJob/useBackgroundJobGetList";
import type { AcroStackBackgroundJobsBackgroundJobDto as BackgroundJobDto } from "@/api/models/acroStack/backgroundJobs/BackgroundJobDto";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/data-table/useDataTable";
import { useBackgroundJobsStyles } from "../styles/backgroundJobs";
import type { ConfirmAction } from "./useBackgroundJobActions";

export type JobItem = BackgroundJobDto;

export interface BackgroundJobsTableOptions {
  /** 是否显示操作列（需 Delete 权限）。 */
  canDelete: boolean;
  /** 行内操作按钮点击回调（携带确认操作类型）。 */
  onAction: (action: ConfirmAction) => void;
}

export function useBackgroundJobsTable({ canDelete, onAction }: BackgroundJobsTableOptions) {
  const styles = useBackgroundJobsStyles();

  const tableState = useDataTableState({
    sorting: [{ id: "creationTime", desc: true }],
  });

  const query = useDataTableQuery<JobItem, AbpGridParams>({
    queryOptions: backgroundJobGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const columns = useMemo<ColumnDef<AppTableFeatures, JobItem>[]>(() => {
    const base: ColumnDef<AppTableFeatures, JobItem>[] = [
      {
        id: "jobName",
        header: "任务名称",
        cell: ({ row }) => row.original.jobName ?? "-",
      },
      {
        id: "jobArgs",
        header: "任务参数",
        cell: ({ row }) => (
          <span className={styles.jobArgs} title={row.original.jobArgs ?? undefined}>
            {row.original.jobArgs ?? "-"}
          </span>
        ),
      },
      {
        id: "tryCount",
        header: "尝试次数",
        cell: ({ row }) => row.original.tryCount ?? 0,
      },
      {
        id: "isAbandoned",
        header: "状态",
        cell: ({ row }) =>
          row.original.isAbandoned ? (
            <Badge appearance="filled" color="danger">
              {"已放弃"}
            </Badge>
          ) : (
            <Badge appearance="filled" color="success">
              {"等待中"}
            </Badge>
          ),
      },
      {
        id: "creationTime",
        header: "创建时间",
        cell: ({ row }) =>
          row.original.creationTime ? new Date(row.original.creationTime).toLocaleString() : "-",
      },
      {
        id: "lastTryTime",
        header: "上次尝试时间",
        cell: ({ row }) =>
          row.original.lastTryTime ? new Date(row.original.lastTryTime).toLocaleString() : "-",
      },
      {
        id: "nextTryTime",
        header: "下次重试时间",
        cell: ({ row }) =>
          row.original.nextTryTime ? new Date(row.original.nextTryTime).toLocaleString() : "-",
      },
    ];

    if (canDelete) {
      base.push({
        id: "actions",
        header: "操作",
        cell: ({ row }) => {
          const id = row.original.id ?? "";
          const isAbandoned = row.original.isAbandoned === true;
          return (
            <div className={styles.actionsCell}>
              <Button
                size="small"
                appearance="subtle"
                icon={<ArrowCounterclockwise20Regular />}
                onClick={() => onAction({ kind: "requeue", id })}
                title={"重新排队"}
                aria-label={"重新排队"}
              />
              <Button
                size="small"
                appearance="subtle"
                icon={<Pause20Regular />}
                onClick={() => onAction({ kind: "abandon", id })}
                disabled={isAbandoned}
                title={"放弃"}
                aria-label={"放弃"}
              />
              <Button
                size="small"
                appearance="subtle"
                icon={<Delete20Regular />}
                onClick={() => onAction({ kind: "delete", id })}
                title={"删除"}
                aria-label={"删除"}
              />
            </div>
          );
        },
      });
    }

    return base;
  }, [styles.jobArgs, styles.actionsCell, canDelete, onAction]);

  const table = useDataTable({
    columns,
    data: query.data,
    rowCount: query.totalCount,
    state: tableState.state,
    manualPagination: true,
    manualSorting: true,
    pageCount: query.pageCount,
  });

  return { table, query, tableState };
}
