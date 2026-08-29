/**
 * 审计日志页（AuditLogsPage）。
 *
 * 本文件只负责编排：Tab 切换、表格状态与列定义、数据查询；
 * 样式见 styles/auditLogs，助手见 utils/auditLogs，
 * 筛选栏与详情抽屉见 components/。
 */
import { useMemo, useState } from "react";
import {
  Badge,
  Link as FluentLink,
  Tab,
  TabList,
  type SelectTabData,
  type SelectTabEvent,
} from "@fluentui/react-components";
import { type ColumnDef } from "@tanstack/react-table";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/ui/data-table/DataTable";
import { useDataTableState } from "@/components/ui/data-table/useDataTableState";
import {
  useDataTableQuery,
  type AbpGridParams,
} from "@/components/ui/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/ui/data-table/useDataTable";
import { auditLogGetListQueryOptions } from "@/api/hooks/auditLog/useAuditLogGetList";
import type { AcroStackAuditLoggingAuditLogDto as AuditLogDto } from "@/api/models/acroStack/auditLogging/AuditLogDto";
import { AuditLogStatisticsPanel } from "./components/AuditLogStatisticsPanel";
import { useAuditLogsStyles } from "./styles/auditLogs";
import { URL_DISPLAY_MAX_LENGTH } from "./constants/auditLogs";
import { statusBadgeColor } from "./utils/auditLogs";
import { AuditLogsToolbar } from "./components/AuditLogsToolbar";
import { AuditLogDetailDrawer } from "./components/AuditLogDetailDrawer";

type AuditLogItem = AuditLogDto;
type AuditLogTabValue = "logs" | "statistics";

export function AuditLogsPage() {
  const styles = useAuditLogsStyles();
  const [selectedLog, setSelectedLog] = useState<AuditLogItem | null>(null);
  const [activeTab, setActiveTab] = useState<AuditLogTabValue>("logs");

  const tableState = useDataTableState({
    sorting: [{ id: "executionTime", desc: true }],
  });

  const query = useDataTableQuery<AuditLogItem, AbpGridParams>({
    queryOptions: auditLogGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const columns = useMemo<ColumnDef<AppTableFeatures, AuditLogItem>[]>(
    () => [
      {
        id: "executionTime",
        header: "时间",
        cell: ({ row }) => {
          const time = row.original.executionTime;
          return time ? new Date(time).toLocaleString() : "";
        },
      },
      {
        id: "userName",
        header: "用户名",
        cell: ({ row }) => row.original.userName ?? "-",
      },
      {
        id: "httpMethod",
        header: "HTTP 方法",
        cell: ({ row }) => row.original.httpMethod ?? "-",
      },
      {
        id: "url",
        header: "网址",
        cell: ({ row }) => (
          <FluentLink
            onClick={() => setSelectedLog(row.original)}
            title={row.original.url ?? undefined}
          >
            {row.original.url && row.original.url.length > URL_DISPLAY_MAX_LENGTH
              ? row.original.url.slice(0, URL_DISPLAY_MAX_LENGTH) + "..."
              : (row.original.url ?? "-")}
          </FluentLink>
        ),
      },
      {
        id: "httpStatusCode",
        header: "HTTP 状态代码",
        cell: ({ row }) => {
          const code = row.original.httpStatusCode;
          return code ? (
            <Badge appearance="filled" color={statusBadgeColor(code)} className={styles.badge}>
              {code}
            </Badge>
          ) : (
            "-"
          );
        },
      },
      {
        id: "executionDuration",
        header: "持续时间",
        cell: ({ row }) => `${row.original.executionDuration ?? 0}ms`,
      },
      {
        id: "clientIpAddress",
        header: "客户端 IP 地址",
        cell: ({ row }) => row.original.clientIpAddress ?? "-",
      },
    ],
    [styles.badge],
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

  const handleTabSelect = (_: SelectTabEvent, data: SelectTabData) => {
    setActiveTab(data.value as AuditLogTabValue);
  };

  return (
    <PageLayout title={"审计日志"}>
      <TabList
        selectedValue={activeTab}
        onTabSelect={handleTabSelect}
        className={styles.tabs}
        size="medium"
      >
        <Tab value="logs">{"审计日志"}</Tab>
        <Tab value="statistics">{"统计"}</Tab>
      </TabList>

      {activeTab === "logs" && (
        <>
          <AuditLogsToolbar onSearch={tableState.state.onGlobalFilterChange} />

          <DataTable
            table={table}
            isLoading={query.isLoading}
            isError={query.isError}
            errorMessage={query.error ? String(query.error) : undefined}
          />
        </>
      )}

      {activeTab === "statistics" && <AuditLogStatisticsPanel />}

      <AuditLogDetailDrawer log={selectedLog} onClose={() => setSelectedLog(null)} />
    </PageLayout>
  );
}
