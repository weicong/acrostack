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
  const { t } = useTranslation();
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
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
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
        header: t("AbpOpenIddict::ClientId"),
        cell: ({ row }) => <code>{row.original.clientId ?? "-"}</code>,
      },
      {
        id: "displayName",
        header: t("AbpOpenIddict::DisplayName"),
        cell: ({ row }) => row.original.displayName ?? "-",
      },
      {
        id: "clientType",
        header: t("AbpOpenIddict::ClientType"),
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
        header: t("AbpOpenIddict::ConsentType"),
        cell: ({ row }) => row.original.consentType ?? "-",
      },
      {
        id: "permissions",
        header: t("AbpOpenIddict::Permissions"),
        cell: ({ row }) => row.original.permissions?.length ?? 0,
      },
      {
        id: "redirectUris",
        header: t("AbpOpenIddict::RedirectUris"),
        cell: ({ row }) => row.original.redirectUris?.length ?? 0,
      },
      {
        id: "creationTime",
        header: t("AbpUi::CreationTime"),
        cell: ({ row }) =>
          row.original.creationTime ? new Date(row.original.creationTime).toLocaleString() : "-",
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
              onClick={() => setDeleteAppId(row.original.id ?? "")}
              title={t("AbpUi::Delete")}
            />
          </div>
        ),
      },
    ],
    [t, styles.actionsCell],
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
    <PageLayout title={t("AbpOpenIddict::Applications")}>
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
        open={deleteAppId !== null}
        onOpenChange={(open) => !open && setDeleteAppId(null)}
        title={t("AbpUi::AreYouSure")}
        description={t("AbpOpenIddict::ApplicationDeleteConfirmation")}
        confirmLabel={t("AbpUi::Delete")}
        variant="destructive"
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
