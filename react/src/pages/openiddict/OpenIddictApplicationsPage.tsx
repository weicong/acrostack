/**
 * OpenIddict 应用列表页：纯编排（查询 + 删除确认 + 子组件组装）。
 */
import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable } from "@/components/data-table/useDataTable";
import { openIddictApplicationGetListQueryOptions } from "@/api/hooks/openIddictApplication/useOpenIddictApplicationGetList";
import type { AcroStackOpenIddictManagementOpenIddictApplicationDto as AppDto } from "@/api/models/acroStack/openIddictManagement/OpenIddictApplicationDto";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { OpenIddictToolbar } from "./components/OpenIddictToolbar";
import { useApplicationActions } from "./hooks/useApplicationActions";
import { useApplicationColumns } from "./hooks/useApplicationColumns";

export function OpenIddictApplicationsPage() {
  const [deleteAppId, setDeleteAppId] = useState<string | null>(null);
  const { remove, isRemovePending } = useApplicationActions();
  const columns = useApplicationColumns({ onDelete: setDeleteAppId });

  const tableState = useDataTableState({
    sorting: [{ id: "creationTime", desc: true }],
  });

  const query = useDataTableQuery<AppDto, AbpGridParams>({
    queryOptions: openIddictApplicationGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const table = useDataTable({
    columns,
    data: query.data,
    rowCount: query.totalCount,
    state: tableState.state,
    manualPagination: true,
    manualSorting: true,
    pageCount: query.pageCount,
  });

  return (
    <PageLayout title={"应用"}>
      <OpenIddictToolbar onGlobalFilterChange={tableState.state.onGlobalFilterChange} />

      <DataTable
        table={table}
        isLoading={query.isLoading}
        isError={query.isError}
        errorMessage={query.error ? String(query.error) : undefined}
      />

      <ConfirmDialog
        open={deleteAppId !== null}
        onOpenChange={(open) => !open && setDeleteAppId(null)}
        title={"你确定吗?"}
        description={"确定要删除此应用吗？"}
        confirmLabel={"删除"}
        variant="destructive"
        isPending={isRemovePending}
        onConfirm={async () => {
          if (!deleteAppId) return;
          const ok = await remove(deleteAppId);
          if (ok) setDeleteAppId(null);
        }}
      />
    </PageLayout>
  );
}
