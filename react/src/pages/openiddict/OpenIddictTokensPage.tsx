/**
 * OpenIddict Token 列表页：查看已签发令牌（状态/过期时间），支持
 * 按用户标识搜索、撤销与删除。
 *
 * 生效边界：OpenIddict 对 JWT access token 默认不做数据库回查，
 * 撤销只影响 reference token / introspection 场景及后续续期链路。
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
import { openIddictTokenGetListQueryOptions } from "@/api/hooks/openIddictToken/useOpenIddictTokenGetList";
import type { AcroStackOpenIddictManagementDtosOpenIddictTokenDto as TokenDto } from "@/api/models/acroStack/openIddictManagement/dtos/OpenIddictTokenDto";
import { OpenIddictToolbar } from "./components/OpenIddictToolbar";
import { useTokenActions } from "./hooks/useTokenActions";
import { useTokenColumns } from "./hooks/useTokenColumns";

type TokenGridParams = AbpGridParams & { Subject?: string };

export function OpenIddictTokensPage() {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [revokeId, setRevokeId] = useState<string | null>(null);
  const [subjectFilter, setSubjectFilter] = useState("");

  const { remove, revoke, isRemovePending, isRevokePending } = useTokenActions();
  const columns = useTokenColumns({ onDelete: setDeleteId, onRevoke: setRevokeId });

  const tableState = useDataTableState({
    sorting: [{ id: "expirationDate", desc: true }],
  });

  const query = useDataTableQuery<TokenDto, TokenGridParams>({
    queryOptions: openIddictTokenGetListQueryOptions,
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
    <PageLayout title={"Token"}>
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
        title={"撤销 Token"}
        description={
          "撤销后该 Token 无法再用于刷新或内省；已签发的 JWT 访问令牌在有效期内仍可使用。确定要撤销吗？"
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
        description={"确定要删除此 Token 吗？删除后客户端需重新登录。"}
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
