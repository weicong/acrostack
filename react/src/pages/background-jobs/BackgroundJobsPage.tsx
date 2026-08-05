import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
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
import { type ColumnDef, stockFeatures } from "@tanstack/react-table";
import { useQueryClient } from "@tanstack/react-query";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable } from "@/components/data-table/useDataTable";
import {
  backgroundJobGetListQueryOptions,
  backgroundJobGetListQueryKey,
} from "@/api/hooks/backgroundJob/useBackgroundJobGetList";
import { useBackgroundJobDelete } from "@/api/hooks/backgroundJob/useBackgroundJobDelete";
import { useBackgroundJobRequeue } from "@/api/hooks/backgroundJob/useBackgroundJobRequeue";
import { useBackgroundJobAbandon } from "@/api/hooks/backgroundJob/useBackgroundJobAbandon";
import type { AcroStackServicesDtosBackgroundJobsBackgroundJobDto as BackgroundJobDto } from "@/api/models/acroStack/services/dtos/backgroundJobs/BackgroundJobDto";
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
  const { t } = useTranslation();
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
      const toastKey =
        action.kind === "delete"
          ? "AbpUi::DeletedSuccessfully"
          : action.kind === "requeue"
            ? "AbpBackgroundJobs::Requeued"
            : "AbpBackgroundJobs::Abandoned";
      dispatchToast(t(toastKey), { intent: "success" });
    };
    const onError = (err: unknown) => {
      dispatchToast(String(err), { intent: "error" });
    };

    if (action.kind === "delete") {
      deleteMutation.mutate({ id: action.id }, { onSuccess, onError });
    } else if (action.kind === "requeue") {
      requeueMutation.mutate({ id: action.id }, { onSuccess, onError });
    } else {
      abandonMutation.mutate({ id: action.id }, { onSuccess, onError });
    }
  }, [
    confirmAction,
    invalidateList,
    dispatchToast,
    t,
    deleteMutation,
    requeueMutation,
    abandonMutation,
  ]);

  const isPending =
    deleteMutation.isPending || requeueMutation.isPending || abandonMutation.isPending;

  const confirmTitle =
    confirmAction?.kind === "delete"
      ? t("AbpUi::AreYouSure")
      : confirmAction?.kind === "requeue"
        ? t("AbpBackgroundJobs::Requeue")
        : t("AbpBackgroundJobs::Abandon");
  const confirmDescription =
    confirmAction?.kind === "delete"
      ? t("AbpBackgroundJobs::JobDeleteConfirmation")
      : confirmAction?.kind === "requeue"
        ? t("AbpBackgroundJobs::RequeueConfirmation")
        : t("AbpBackgroundJobs::AbandonConfirmation");
  const confirmLabel =
    confirmAction?.kind === "delete"
      ? t("AbpUi::Delete")
      : confirmAction?.kind === "requeue"
        ? t("AbpBackgroundJobs::Requeue")
        : t("AbpBackgroundJobs::Abandon");

  const columns = useMemo<ColumnDef<typeof stockFeatures, JobItem>[]>(() => {
    const base: ColumnDef<typeof stockFeatures, JobItem>[] = [
      {
        id: "jobName",
        header: t("AbpBackgroundJobs::JobName"),
        cell: ({ row }) => row.original.jobName ?? "-",
      },
      {
        id: "jobArgs",
        header: t("AbpBackgroundJobs::JobArgs"),
        cell: ({ row }) => (
          <span className={styles.jobArgs} title={row.original.jobArgs ?? undefined}>
            {row.original.jobArgs ?? "-"}
          </span>
        ),
      },
      {
        id: "tryCount",
        header: t("AbpBackgroundJobs::TryCount"),
        cell: ({ row }) => row.original.tryCount ?? 0,
      },
      {
        id: "isAbandoned",
        header: t("AbpBackgroundJobs::Status"),
        cell: ({ row }) =>
          row.original.isAbandoned ? (
            <Badge appearance="filled" color="danger">
              {t("AbpBackgroundJobs::Abandoned")}
            </Badge>
          ) : (
            <Badge appearance="filled" color="success">
              {t("AbpBackgroundJobs::Waiting")}
            </Badge>
          ),
      },
      {
        id: "creationTime",
        header: t("AbpBackgroundJobs::CreationTime"),
        cell: ({ row }) =>
          row.original.creationTime ? new Date(row.original.creationTime).toLocaleString() : "-",
      },
      {
        id: "lastTryTime",
        header: t("AbpBackgroundJobs::LastTryTime"),
        cell: ({ row }) =>
          row.original.lastTryTime ? new Date(row.original.lastTryTime).toLocaleString() : "-",
      },
      {
        id: "nextTryTime",
        header: t("AbpBackgroundJobs::NextTryTime"),
        cell: ({ row }) =>
          row.original.nextTryTime ? new Date(row.original.nextTryTime).toLocaleString() : "-",
      },
    ];

    if (canDelete) {
      base.push({
        id: "actions",
        header: t("AbpUi::Actions"),
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
                title={t("AbpBackgroundJobs::Requeue")}
                aria-label={t("AbpBackgroundJobs::Requeue")}
              />
              <Button
                size="small"
                appearance="subtle"
                icon={<Pause20Regular />}
                onClick={() => setConfirmAction({ kind: "abandon", id })}
                disabled={isAbandoned}
                title={t("AbpBackgroundJobs::Abandon")}
                aria-label={t("AbpBackgroundJobs::Abandon")}
              />
              <Button
                size="small"
                appearance="subtle"
                icon={<Delete20Regular />}
                onClick={() => setConfirmAction({ kind: "delete", id })}
                title={t("AbpUi::Delete")}
                aria-label={t("AbpUi::Delete")}
              />
            </div>
          );
        },
      });
    }

    return base;
  }, [t, styles.jobArgs, styles.actionsCell, canDelete]);

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
    <PageLayout title={t("AbpBackgroundJobs::BackgroundJobs")}>
      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <SearchBox
            placeholder={t("AbpUi::Search")}
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
