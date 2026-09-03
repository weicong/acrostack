/**
 * OpenIddict Authorization 列表页：查看持久化的用户授权（同意记录），
 * 支持按用户标识搜索、撤销与删除。
 */
import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/ui/data-table/DataTable";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { useDataTableState } from "@/components/ui/data-table/useDataTableState";
import {
  useDataTableQuery,
  type AbpGridParams,
} from "@/components/ui/data-table/useDataTableQuery";
import { useDataTable } from "@/components/ui/data-table/useDataTable";
import { openIddictAuthorizationGetListQueryOptions } from "@/api/hooks/openIddictAuthorization/useOpenIddictAuthorizationGetList";
import type { AcroStackOpenIddictManagementDtosOpenIddictAuthorizationDto as AuthorizationDto } from "@/api/models/acroStack/openIddictManagement/dtos/OpenIddictAuthorizationDto";
import { OpenIddictToolbar } from "./components/OpenIddictToolbar";
import { useAuthorizationActions } from "./hooks/useAuthorizationActions";
import { useAuthorizationColumns } from "./hooks/useAuthorizationColumns";

type AuthorizationGridParams = AbpGridParams & { Subject?: string };

export function OpenIddictAuthorizationsPage() {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [revokeId, setRevokeId] = useState<string | null>(null);
  const [subjectFilter, setSubjectFilter] = useState("");

  const { remove, revoke, isRemovePending, isRevokePending } = useAuthorizationActions();
  const columns = useAuthorizationColumns({ onDelete: setDeleteId, onRevoke: setRevokeId });

  const tableState = useDataTableState({
    sorting: [{ id: "creationDate", desc: true }],
  });

  const query = useDataTableQuery<AuthorizationDto, AuthorizationGridParams>({
    queryOptions: openIddictAuthorizationGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    extraParams: { Subject: subjectFilter || undefined },
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
    <PageLayout title={"Authorization"}>
      <OpenIddictToolbar onGlobalFilterChange={setSubjectFilter} />

      <DataTable
        table={table}
        isLoading={query.isLoading}
        isError={query.isError}
        errorMessage={query.error ? String(query.error) : undefined}
      />

      <ConfirmDialog
        open={revokeId !== null}
        onOpenChange={(open) => !open && setRevokeId(null)}
        title={"撤销 Authorization"}
        description={
          "撤销后该授权关联的刷新令牌链路将失效，客户端需重新请求用户同意。确定要撤销吗？"
        }
        confirmLabel={"撤销"}
        variant="destructive"
        isPending={isRevokePending}
        onConfirm={async () => {
          if (!revokeId) return;
          const ok = await revoke(revokeId);
          if (ok) setRevokeId(null);
        }}
      />

      <ConfirmDialog
        open={deleteId !== null}
        onOpenChange={(open) => !open && setDeleteId(null)}
        title={"你确定吗?"}
        description={"确定要删除此 Authorization 吗？"}
        confirmLabel={"删除"}
        variant="destructive"
        isPending={isRemovePending}
        onConfirm={async () => {
          if (!deleteId) return;
          const ok = await remove(deleteId);
          if (ok) setDeleteId(null);
        }}
      />
    </PageLayout>
  );
}
