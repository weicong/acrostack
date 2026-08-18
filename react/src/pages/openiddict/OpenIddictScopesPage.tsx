import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
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
  openIddictScopeGetListQueryOptions,
  openIddictScopeGetListQueryKey,
} from "@/api/hooks/openIddictScope/useOpenIddictScopeGetList";
import { useOpenIddictScopeDelete } from "@/api/hooks/openIddictScope/useOpenIddictScopeDelete";
import type { AcroStackOpenIddictManagementOpenIddictScopeDto as ScopeDto } from "@/api/models/acroStack/openIddictManagement/OpenIddictScopeDto";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";

type ScopeItem = ScopeDto;

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

export function OpenIddictScopesPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();
  const deleteMutation = useOpenIddictScopeDelete();
  const [deleteScopeId, setDeleteScopeId] = useState<string | null>(null);

  const tableState = useDataTableState({
    sorting: [{ id: "creationTime", desc: true }],
  });

  const query = useDataTableQuery<ScopeItem, AbpGridParams>({
    queryOptions: openIddictScopeGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const handleDeleteConfirm = () => {
    if (!deleteScopeId) return;
    deleteMutation.mutate(
      { id: deleteScopeId },
      {
        onSuccess: () => {
          setDeleteScopeId(null);
          void queryClient.invalidateQueries({ queryKey: openIddictScopeGetListQueryKey() });
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  };

  const columns = useMemo<ColumnDef<AppTableFeatures, ScopeItem>[]>(
    () => [
      {
        id: "name",
        header: t("AbpOpenIddict::Name"),
        cell: ({ row }) => <code>{row.original.name ?? "-"}</code>,
      },
      {
        id: "displayName",
        header: t("AbpOpenIddict::DisplayName"),
        cell: ({ row }) => row.original.displayName ?? "-",
      },
      {
        id: "description",
        header: t("AbpOpenIddict::Description"),
        cell: ({ row }) => row.original.description ?? "-",
      },
      {
        id: "resources",
        header: t("AbpOpenIddict::Resources"),
        cell: ({ row }) => row.original.resources?.length ?? 0,
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
              onClick={() => setDeleteScopeId(row.original.id ?? "")}
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
    <PageLayout title={t("AbpOpenIddict::Scopes")}>
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
        open={deleteScopeId !== null}
        onOpenChange={(open) => !open && setDeleteScopeId(null)}
        title={t("AbpUi::AreYouSure")}
        description={t("AbpOpenIddict::ScopeDeleteConfirmation")}
        confirmLabel={t("AbpUi::Delete")}
        variant="destructive"
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
