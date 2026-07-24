import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Badge,
  Button,
  SearchBox,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import { Delete20Regular } from "@fluentui/react-icons";
import type { ColumnDef } from "@tanstack/react-table";
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
import type { AcroStackServicesDtosBackgroundJobsBackgroundJobDto as BackgroundJobDto } from "@/api/models/acroStack/services/dtos/backgroundJobs/BackgroundJobDto";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";

type JobItem = BackgroundJobDto;

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
  const deleteMutation = useBackgroundJobDelete();
  const [deleteJobId, setDeleteJobId] = useState<string | null>(null);

  const tableState = useDataTableState({
    sorting: [{ id: "creationTime", desc: true }],
  });

  const query = useDataTableQuery<JobItem, AbpGridParams>({
    queryOptions: backgroundJobGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const handleDeleteConfirm = () => {
    if (!deleteJobId) return;
    deleteMutation.mutate(
      { id: deleteJobId },
      {
        onSuccess: () => {
          setDeleteJobId(null);
          void queryClient.invalidateQueries({ queryKey: backgroundJobGetListQueryKey() });
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  };

  const columns = useMemo<ColumnDef<JobItem>[]>(
    () => [
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
        id: "nextTryTime",
        header: t("AbpBackgroundJobs::NextTryTime"),
        cell: ({ row }) =>
          row.original.nextTryTime ? new Date(row.original.nextTryTime).toLocaleString() : "-",
      },
      {
        id: "actions",
        header: t("AbpUi::Actions"),
        cell: ({ row }) => (
          <div className={styles.actionsCell}>
            <Button
              size="small"
              appearance="subtle"
              icon={<Delete20Regular />}
              onClick={() => setDeleteJobId(row.original.id ?? "")}
              title={t("AbpUi::Delete")}
            />
          </div>
        ),
      },
    ],
    [t, styles.jobArgs, styles.actionsCell],
  );

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
        open={deleteJobId !== null}
        onOpenChange={(open) => !open && setDeleteJobId(null)}
        title={t("AbpUi::AreYouSure")}
        description={t("AbpBackgroundJobs::JobDeleteConfirmation")}
        confirmLabel={t("AbpUi::Delete")}
        variant="destructive"
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
