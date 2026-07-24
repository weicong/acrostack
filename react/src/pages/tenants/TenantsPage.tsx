import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  SearchBox,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import { PersonArrowLeft20Regular } from "@fluentui/react-icons";
import { PageLayout } from "@/components/layout/PageLayout";
import type { ColumnDef } from "@tanstack/react-table";
import { tenantGetListQueryOptions } from "@/api/hooks/tenant/useTenantGetList";
import type { VoloAbpTenantManagementTenantDto } from "@/api/models/volo/abp/tenantManagement/TenantDto";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable } from "@/components/data-table/useDataTable";
import { DataTable } from "@/components/data-table/DataTable";
import { usePermissions, useCurrentUser } from "@/lib/auth/permissions";
import { impersonateTenant } from "@/lib/auth/impersonation";

type TenantItem = VoloAbpTenantManagementTenantDto;

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: tokens.spacingHorizontalM,
  },
  filters: {
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    minWidth: 0,
  },
  actionsCell: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
});

function useTenantsTable(onImpersonate: (tenant: TenantItem) => void, canImpersonate: boolean) {
  const { t } = useTranslation();
  const styles = useStyles();

  const tableState = useDataTableState({
    sorting: [{ id: "name", desc: false }],
  });

  const query = useDataTableQuery<TenantItem, AbpGridParams>({
    queryOptions: tenantGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const columns = useMemo<ColumnDef<TenantItem>[]>(
    () => [
      {
        id: "name",
        accessorKey: "name",
        header: t("AbpTenantManagement::Name"),
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "actions",
        header: "",
        cell: (info) => {
          const row = info.row.original;
          return (
            <div className={styles.actionsCell}>
              {canImpersonate && !!row.id && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<PersonArrowLeft20Regular />}
                  onClick={(e) => {
                    e.stopPropagation();
                    onImpersonate(row);
                  }}
                  aria-label={t("AbpIdentity::Permission:Impersonation")}
                  title={t("AbpIdentity::Permission:Impersonation")}
                />
              )}
            </div>
          );
        },
      },
    ],
    [t, styles.actionsCell, onImpersonate, canImpersonate],
  );

  const table = useDataTable({
    data: query.data,
    columns,
    rowCount: query.totalCount,
    getRowId: (row) => row.id!,
    state: tableState.state,
    manualPagination: true,
    manualSorting: true,
    pageCount: query.pageCount,
  });

  return { table, query, tableState };
}

export function TenantsPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const { isGranted } = usePermissions();
  const currentUser = useCurrentUser();
  const { dispatchToast } = useToastController();

  // Tenant impersonation is host-only: a tenant user cannot impersonate another tenant.
  const isHostUser = !currentUser?.tenantId;
  const canImpersonate = isHostUser && isGranted("AbpTenantManagement.Tenants.Impersonation");

  const handleImpersonate = useCallback(
    (tenant: TenantItem) => {
      if (!tenant.id) return;
      void impersonateTenant(tenant.id).catch((err: unknown) => {
        const message = err instanceof Error ? err.message : String(err);
        console.error("[impersonation] failed:", err);
        dispatchToast(message, { intent: "error" });
      });
    },
    [dispatchToast],
  );

  const { table, query, tableState } = useTenantsTable(handleImpersonate, canImpersonate);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      tableState.state.onGlobalFilterChange(searchValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <PageLayout title={t("AbpTenantManagement::Tenants")}>
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
    </PageLayout>
  );
}
