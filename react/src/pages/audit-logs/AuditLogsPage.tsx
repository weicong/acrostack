import { useEffect, useMemo, useState } from "react";
import {
  Badge,
  Card,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Link as FluentLink,
  makeStyles,
  SearchBox,
  Tab,
  TabList,
  Text,
  tokens,
  type SelectTabData,
  type SelectTabEvent,
} from "@fluentui/react-components";
import { type ColumnDef } from "@tanstack/react-table";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/data-table/useDataTable";
import { auditLogGetListQueryOptions } from "@/api/hooks/auditLog/useAuditLogGetList";
import type { AcroStackAuditLoggingAuditLogDto as AuditLogDto } from "@/api/models/acroStack/auditLogging/AuditLogDto";
import { AuditLogStatisticsPanel } from "./AuditLogStatisticsPanel";

type AuditLogItem = AuditLogDto;
type AuditLogTabValue = "logs" | "statistics";

// URL 列展示的最大长度，超出部分截断显示省略号
const URL_DISPLAY_MAX_LENGTH = 60;

const useStyles = makeStyles({
  tabs: {
    marginBottom: tokens.spacingVerticalS,
  },
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
  detailSection: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  detailRow: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
    "& > span:first-child": {
      minWidth: "140px",
      fontWeight: 600,
    },
  },
  changeHeader: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
    marginBottom: tokens.spacingVerticalXS,
  },
  propertyChange: {
    paddingLeft: tokens.spacingHorizontalL,
    fontSize: tokens.fontSizeBase200,
  },
  actionItem: {
    padding: `${tokens.spacingVerticalXS} 0`,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  badge: {
    minWidth: "40px",
    textAlign: "center",
  },
  exceptions: {
    whiteSpace: "pre-wrap",
    color: tokens.colorPaletteRedForeground1,
  },
  originalValue: {
    color: tokens.colorPaletteRedForeground1,
  },
  newValue: {
    color: tokens.colorPaletteGreenForeground1,
  },
  entityChangeCard: {
    padding: tokens.spacingHorizontalS,
  },
});

function statusBadgeColor(
  status?: number | null,
): "success" | "warning" | "danger" | "informative" {
  if (!status) return "informative";
  if (status >= 200 && status < 300) return "success";
  if (status >= 400 && status < 500) return "warning";
  if (status >= 500) return "danger";
  return "informative";
}

function changeTypeLabel(changeType: number): string {
  switch (changeType) {
    case 0:
      return "创建";
    case 1:
      return "已更新";
    case 2:
      return "已删除";
    default:
      return String(changeType);
  }
}

function changeTypeBadgeColor(
  changeType: number,
): "success" | "warning" | "danger" | "informative" {
  switch (changeType) {
    case 0:
      return "success";
    case 1:
      return "warning";
    case 2:
      return "danger";
    default:
      return "informative";
  }
}

export function AuditLogsPage() {
  const styles = useStyles();
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

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      tableState.state.onGlobalFilterChange(searchValue);
    }, 300);
    return () => clearTimeout(timer);
    // onGlobalFilterChange 在 useDataTableState 中经 useCallback 包装，引用稳定，无需列入依赖数组
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

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
        </>
      )}

      {activeTab === "statistics" && <AuditLogStatisticsPanel />}

      <Drawer
        open={selectedLog !== null}
        onOpenChange={(_, data) => !data.open && setSelectedLog(null)}
        position="end"
        size="large"
      >
        <DrawerHeader>
          <DrawerHeaderTitle>{"审计日志详情"}</DrawerHeaderTitle>
        </DrawerHeader>
        <DrawerBody>
          {selectedLog && (
            <div className={styles.detailSection}>
              <div className={styles.detailRow}>
                <span>{"用户名"}</span>
                <span>{selectedLog.userName ?? "-"}</span>
              </div>
              <div className={styles.detailRow}>
                <span>{"HTTP 方法"}</span>
                <span>{selectedLog.httpMethod ?? "-"}</span>
              </div>
              <div className={styles.detailRow}>
                <span>{"网址"}</span>
                <span>{selectedLog.url ?? "-"}</span>
              </div>
              <div className={styles.detailRow}>
                <span>{"HTTP 状态代码"}</span>
                <span>
                  {selectedLog.httpStatusCode ? (
                    <Badge appearance="filled" color={statusBadgeColor(selectedLog.httpStatusCode)}>
                      {selectedLog.httpStatusCode}
                    </Badge>
                  ) : (
                    "-"
                  )}
                </span>
              </div>
              <div className={styles.detailRow}>
                <span>{"时间"}</span>
                <span>
                  {selectedLog.executionTime
                    ? new Date(selectedLog.executionTime).toLocaleString()
                    : "-"}
                </span>
              </div>
              <div className={styles.detailRow}>
                <span>{"持续时间"}</span>
                <span>{selectedLog.executionDuration ?? 0}ms</span>
              </div>
              <div className={styles.detailRow}>
                <span>{"客户端 IP 地址"}</span>
                <span>{selectedLog.clientIpAddress ?? "-"}</span>
              </div>
              <div className={styles.detailRow}>
                <span>{"浏览器信息"}</span>
                <span>{selectedLog.browserInfo ?? "-"}</span>
              </div>

              {selectedLog.exceptions && (
                <>
                  <Text weight="semibold">{"异常"}</Text>
                  <Text size={200} className={styles.exceptions}>
                    {selectedLog.exceptions}
                  </Text>
                </>
              )}

              {selectedLog.entityChanges && selectedLog.entityChanges.length > 0 && (
                <>
                  <Text weight="semibold">{"实体变化"}</Text>
                  {selectedLog.entityChanges.map((change, idx) => {
                    const changeType = change.changeType ?? 0;
                    return (
                      <Card key={idx} className={styles.entityChangeCard} size="small">
                        <div className={styles.changeHeader}>
                          <Text weight="semibold">
                            <Badge
                              appearance="filled"
                              color={changeTypeBadgeColor(changeType)}
                              size="small"
                            >
                              {changeTypeLabel(changeType)}
                            </Badge>{" "}
                            {change.entityTypeFullName?.split(".").pop() ?? "-"}
                          </Text>
                          <Text size={200}>
                            {"实体 ID"}: {change.entityId ?? "-"}
                          </Text>
                          {change.changeTime && (
                            <Text size={200}>
                              {"时间"}: {new Date(change.changeTime).toLocaleString()}
                            </Text>
                          )}
                        </div>
                        {change.propertyChanges && change.propertyChanges.length > 0 && (
                          <div>
                            {change.propertyChanges.map((pc, pidx) => (
                              <div key={pidx} className={styles.propertyChange}>
                                <Text size={200}>
                                  <Text weight="semibold">{pc.propertyName}</Text>:{" "}
                                  <Text className={styles.originalValue}>
                                    {pc.originalValue ?? "null"}
                                  </Text>
                                  {" → "}
                                  <Text className={styles.newValue}>{pc.newValue ?? "null"}</Text>
                                </Text>
                              </div>
                            ))}
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </>
              )}

              {selectedLog.actions && selectedLog.actions.length > 0 && (
                <>
                  <Text weight="semibold">{"操作"}</Text>
                  {selectedLog.actions.map((action, idx) => (
                    <div key={idx} className={styles.actionItem}>
                      <Text>
                        {action.serviceName}.{action.methodName}
                      </Text>
                      <Text size={200}>Duration: {action.executionDuration ?? 0}ms</Text>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </DrawerBody>
      </Drawer>
    </PageLayout>
  );
}
