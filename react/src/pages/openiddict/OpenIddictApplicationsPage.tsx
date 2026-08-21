import { useEffect, useMemo, useState } from "react";
import {
  Badge,
  Button,
  SearchBox,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import { Delete20Regular } from "@fluentui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import { useQueryClient } from "@tanstack/react-query";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/data-table/useDataTable";
import {
  openIddictApplicationGetListQueryOptions,
  openIddictApplicationGetListQueryKey,
} from "@/api/hooks/openIddictApplication/useOpenIddictApplicationGetList";
import { useOpenIddictApplicationDelete } from "@/api/hooks/openIddictApplication/useOpenIddictApplicationDelete";
import type { AcroStackOpenIddictManagementOpenIddictApplicationDto as AppDto } from "@/api/models/acroStack/openIddictManagement/OpenIddictApplicationDto";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";

type AppItem = AppDto;

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
});

export function OpenIddictApplicationsPage() {
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();
  const deleteMutation = useOpenIddictApplicationDelete();
  const [deleteAppId, setDeleteAppId] = useState<string | null>(null);

  const tableState = useDataTableState({
    sorting: [{ id: "creationTime", desc: true }],
  });

  const query = useDataTableQuery<AppItem, AbpGridParams>({
    queryOptions: openIddictApplicationGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const handleDeleteConfirm = () => {
    if (!deleteAppId) return;
    deleteMutation.mutate(
      { path: { id: deleteAppId } },
      {
        onSuccess: () => {
          setDeleteAppId(null);
          void queryClient.invalidateQueries({ queryKey: openIddictApplicationGetListQueryKey() });
          dispatchToast("删除成功", { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  };

  const columns = useMemo<ColumnDef<AppTableFeatures, AppItem>[]>(
    () => [
      {
        id: "clientId",
        header: "客户端 ID",
        cell: ({ row }) => <code>{row.original.clientId ?? "-"}</code>,
      },
      {
        id: "displayName",
        header: "显示名称",
        cell: ({ row }) => row.original.displayName ?? "-",
      },
      {
        id: "clientType",
        header: "客户端类型",
        cell: ({ row }) => (
          <Badge
            appearance="filled"
            color={row.original.clientType === "confidential" ? "brand" : "informative"}
          >
            {row.original.clientType ?? "-"}
          </Badge>
        ),
      },
      {
        id: "consentType",
        header: "授权类型",
        cell: ({ row }) => row.original.consentType ?? "-",
      },
      {
        id: "permissions",
        header: "权限",
        cell: ({ row }) => row.original.permissions?.length ?? 0,
      },
      {
        id: "redirectUris",
        header: "重定向 URI",
        cell: ({ row }) => row.original.redirectUris?.length ?? 0,
      },
      {
        id: "creationTime",
        header: "创建时间",
        cell: ({ row }) =>
          row.original.creationTime ? new Date(row.original.creationTime).toLocaleString() : "-",
      },
      {
        id: "actions",
        header: "操作",
        cell: ({ row }) => (
          <div className={styles.actionsCell}>
            <Button
              size="small"
              appearance="subtle"
              icon={<Delete20Regular />}
              onClick={() => setDeleteAppId(row.original.id ?? "")}
              title={"删除"}
            />
          </div>
        ),
      },
    ],
    [styles.actionsCell],
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
    <PageLayout title={"应用"}>
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
        open={deleteAppId !== null}
        onOpenChange={(open) => !open && setDeleteAppId(null)}
        title={"你确定吗?"}
        description={"确定要删除此应用吗？"}
        confirmLabel={"删除"}
        variant="destructive"
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
