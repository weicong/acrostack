/**
 * OpenIddict Scope 列表页：纯编排（查询 + 删除确认 + 子组件组装）。
 */
import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable } from "@/components/data-table/useDataTable";
import { openIddictScopeGetListQueryOptions } from "@/api/hooks/openIddictScope/useOpenIddictScopeGetList";
import type { AcroStackOpenIddictManagementOpenIddictScopeDto as ScopeDto } from "@/api/models/acroStack/openIddictManagement/OpenIddictScopeDto";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { OpenIddictToolbar } from "./components/OpenIddictToolbar";
import { useScopeActions } from "./hooks/useScopeActions";
import { useScopeColumns } from "./hooks/useScopeColumns";

export function OpenIddictScopesPage() {
  const [deleteScopeId, setDeleteScopeId] = useState<string | null>(null);
  const { remove, isRemovePending } = useScopeActions();
  const columns = useScopeColumns({ onDelete: setDeleteScopeId });

  const tableState = useDataTableState({
    sorting: [{ id: "creationTime", desc: true }],
  });

  const query = useDataTableQuery<ScopeDto, AbpGridParams>({
    queryOptions: openIddictScopeGetListQueryOptions,
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
    <PageLayout title={"Scope"}>
      <OpenIddictToolbar onGlobalFilterChange={tableState.state.onGlobalFilterChange} />

      <DataTable
        table={table}
        isLoading={query.isLoading}
        isError={query.isError}
        errorMessage={query.error ? String(query.error) : undefined}
      />

      <ConfirmDialog
        open={deleteScopeId !== null}
        onOpenChange={(open) => !open && setDeleteScopeId(null)}
        title={"你确定吗?"}
        description={"确定要删除此 Scope 吗？"}
        confirmLabel={"删除"}
        variant="destructive"
        isPending={isRemovePending}
        onConfirm={async () => {
          if (!deleteScopeId) return;
          const ok = await remove(deleteScopeId);
          if (ok) setDeleteScopeId(null);
        }}
      />
    </PageLayout>
  );
}
