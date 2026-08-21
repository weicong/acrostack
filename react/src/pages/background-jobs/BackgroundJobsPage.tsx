import { useCallback, useEffect, useMemo, useState } from "react";

import {
  Badge,
  Button,
  SearchBox,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import {
  Delete20Regular,
  ArrowCounterclockwise20Regular,
  Pause20Regular,
} from "@fluentui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import { useQueryClient } from "@tanstack/react-query";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/data-table/useDataTable";
import {
  backgroundJobGetListQueryOptions,
  backgroundJobGetListQueryKey,
} from "@/api/hooks/backgroundJob/useBackgroundJobGetList";
import { useBackgroundJobDelete } from "@/api/hooks/backgroundJob/useBackgroundJobDelete";
import { useBackgroundJobRequeue } from "@/api/hooks/backgroundJob/useBackgroundJobRequeue";
import { useBackgroundJobAbandon } from "@/api/hooks/backgroundJob/useBackgroundJobAbandon";
import type { AcroStackBackgroundJobsBackgroundJobDto as BackgroundJobDto } from "@/api/models/acroStack/backgroundJobs/BackgroundJobDto";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";

type JobItem = BackgroundJobDto;

type ConfirmAction =
  | { kind: "delete"; id: string }
  | { kind: "requeue"; id: string }
  | { kind: "abandon"; id: string };

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: tokens.spacingHorizontalM,
    marginBottom: tokens.spacingHorizontalM,
  },
  filters: {
    display: "flex",
    flex: 1,
    minWidth: 0,
  },
  actionsCell: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
  jobArgs: {
    maxWidth: "300px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontFamily: "monospace",
    fontSize: tokens.fontSizeBase200,
  },
});

export function BackgroundJobsPage() {
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();
  const { isGranted } = usePermissions();
  const canDelete = isGranted("AcroStack.BackgroundJobs.Delete");

  const deleteMutation = useBackgroundJobDelete();
  const requeueMutation = useBackgroundJobRequeue();
  const abandonMutation = useBackgroundJobAbandon();

  const [confirmAction, setConfirmAction] = useState<ConfirmAction | null>(null);

  const tableState = useDataTableState({
    sorting: [{ id: "creationTime", desc: true }],
  });

  const query = useDataTableQuery<JobItem, AbpGridParams>({
    queryOptions: backgroundJobGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const invalidateList = useCallback(() => {
    void queryClient.invalidateQueries({ queryKey: backgroundJobGetListQueryKey() });
  }, [queryClient]);

  const handleConfirm = useCallback(() => {
    if (!confirmAction) return;
    const action = confirmAction;

    const onSuccess = () => {
      setConfirmAction(null);
      invalidateList();
      const toastMessage =
        action.kind === "delete" ? "删除成功" : action.kind === "requeue" ? "已重新排队" : "已放弃";
      dispatchToast(toastMessage, { intent: "success" });
    };
    const onError = (err: unknown) => {
      dispatchToast(String(err), { intent: "error" });
    };

    if (action.kind === "delete") {
      deleteMutation.mutate({ path: { id: action.id } }, { onSuccess, onError });
    } else if (action.kind === "requeue") {
      requeueMutation.mutate({ path: { id: action.id } }, { onSuccess, onError });
    } else {
      abandonMutation.mutate({ path: { id: action.id } }, { onSuccess, onError });
    }
  }, [
    confirmAction,
    invalidateList,
    dispatchToast,
    deleteMutation,
    requeueMutation,
    abandonMutation,
  ]);

  const isPending =
    deleteMutation.isPending || requeueMutation.isPending || abandonMutation.isPending;

  const confirmTitle =
    confirmAction?.kind === "delete"
      ? "你确定吗?"
      : confirmAction?.kind === "requeue"
        ? "重新排队"
        : "放弃";
  const confirmDescription =
    confirmAction?.kind === "delete"
      ? "确定要删除此后台任务吗？"
      : confirmAction?.kind === "requeue"
        ? "确定要重新排队此后台任务吗？"
        : "确定要放弃此后台任务吗？";
  const confirmLabel =
    confirmAction?.kind === "delete"
      ? "删除"
      : confirmAction?.kind === "requeue"
        ? "重新排队"
        : "放弃";

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
                onClick={() => setConfirmAction({ kind: "requeue", id })}
                title={"重新排队"}
                aria-label={"重新排队"}
              />
              <Button
                size="small"
                appearance="subtle"
                icon={<Pause20Regular />}
                onClick={() => setConfirmAction({ kind: "abandon", id })}
                disabled={isAbandoned}
                title={"放弃"}
                aria-label={"放弃"}
              />
              <Button
                size="small"
                appearance="subtle"
                icon={<Delete20Regular />}
                onClick={() => setConfirmAction({ kind: "delete", id })}
                title={"删除"}
                aria-label={"删除"}
              />
            </div>
          );
        },
      });
    }

    return base;
  }, [styles.jobArgs, styles.actionsCell, canDelete]);

  const table = useDataTable({
    columns,
    data: query.data,
    rowCount: query.totalCount,
    state: tableState.state,
    manualPagination: true,
    manualSorting: true,
    pageCount: query.pageCount,
  });

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      tableState.state.onGlobalFilterChange(searchValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <PageLayout title={"后台任务"}>
      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <SearchBox
            placeholder={"搜索"}
            value={searchValue}
            onChange={(_, data) => setSearchValue(data.value)}
            appearance="outline"
          />
        </div>
      </div>

      <DataTable
        table={table}
        isLoading={query.isLoading}
        isError={query.isError}
        errorMessage={query.error ? String(query.error) : undefined}
      />

      <ConfirmDialog
        open={confirmAction !== null}
        onOpenChange={(open) => !open && setConfirmAction(null)}
        title={confirmTitle}
        description={confirmDescription}
        confirmLabel={confirmLabel}
        variant={confirmAction?.kind === "delete" ? "destructive" : "default"}
        onConfirm={handleConfirm}
        isPending={isPending}
      />
    </PageLayout>
  );
}
