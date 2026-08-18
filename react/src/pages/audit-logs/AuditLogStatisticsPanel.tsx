import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Badge,
  type BadgeProps,
  Card,
  Spinner,
  Text,
  makeStyles,
  tokens,
  Field,
  Button,
} from "@fluentui/react-components";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import { Search20Regular } from "@fluentui/react-icons";
import { useQuery } from "@tanstack/react-query";
import {
  auditLogGetStatisticsQueryOptions,
  auditLogGetStatisticsQueryKey,
} from "@/api/hooks/auditLog/useAuditLogGetStatistics";
import type { AcroStackAuditLoggingAuditLogStatisticsDto as AuditLogStatisticsDto } from "@/api/models/acroStack/auditLogging/AuditLogStatisticsDto";
import type { AcroStackAuditLoggingUrlStatisticDto as UrlStatisticDto } from "@/api/models/acroStack/auditLogging/UrlStatisticDto";

interface AuditLogStatisticsPanelProps {
  /** Pass a tenant/key scope buster if needed; unused for now. */
  defaultTopCount?: number;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  filterBar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
  datePicker: {
    minWidth: "220px",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: tokens.spacingHorizontalM,
  },
  statCard: {
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalM}`,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
  },
  statLabel: {
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase200,
  },
  statValue: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: 600,
  },
  sectionTitle: {
    marginTop: tokens.spacingVerticalM,
    marginBottom: tokens.spacingVerticalXS,
    fontWeight: 600,
  },
  listCard: {
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
  },
  urlRow: {
    display: "grid",
    gridTemplateColumns: "1fr auto auto",
    gap: tokens.spacingHorizontalM,
    alignItems: "center",
    paddingBlock: tokens.spacingVerticalXS,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    "&:last-child": {
      borderBottom: "none",
    },
  },
  urlText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontFamily: "monospace",
    fontSize: tokens.fontSizeBase200,
  },
  methodBadges: {
    display: "flex",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalXS,
  },
  errorState: {
    color: tokens.colorPaletteRedForeground1,
  },
});

function toStartOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function toEndOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(23, 59, 59, 999);
  return d;
}

function formatDuration(ms: number | undefined | null): string {
  if (ms === undefined || ms === null) return "-";
  return `${ms} ms`;
}

function formatBigint(value: bigint | number | undefined | null): string {
  if (value === undefined || value === null) return "0";
  if (typeof value === "bigint") return value.toLocaleString();
  return value.toLocaleString();
}

function methodBadgeColor(method: string): BadgeProps["color"] {
  switch (method) {
    case "GET":
      return "success";
    case "POST":
      return "brand";
    case "PUT":
    case "PATCH":
      return "warning";
    case "DELETE":
      return "danger";
    default:
      return "informative";
  }
}

function HttpMethodBadge({ method }: { method: string }) {
  return (
    <Badge appearance="filled" color={methodBadgeColor(method)} size="small">
      {method}
    </Badge>
  );
}

function UrlStatisticRow({ stat, rank }: { stat: UrlStatisticDto; rank: number }) {
  const styles = useStyles();
  return (
    <div className={styles.urlRow}>
      <Text className={styles.urlText} title={stat.url ?? undefined}>
        {rank}. {stat.url || "-"}
      </Text>
      <Text size={200}>{formatDuration(stat.averageExecutionDuration)}</Text>
      <Text size={200}>×{stat.count ?? 0}</Text>
    </div>
  );
}

export function AuditLogStatisticsPanel({ defaultTopCount = 10 }: AuditLogStatisticsPanelProps) {
  const { t } = useTranslation();
  const styles = useStyles();

  // Default range: last 7 days.
  const [startDate, setStartDate] = useState<Date | null>(() => {
    const d = new Date();
    d.setDate(d.getDate() - 7);
    return toStartOfDay(d);
  });
  const [endDate, setEndDate] = useState<Date | null>(() => toEndOfDay(new Date()));

  const params = useMemo(
    () => ({
      StartTime: startDate ? startDate.toISOString() : undefined,
      EndTime: endDate ? endDate.toISOString() : undefined,
      TopCount: defaultTopCount,
    }),
    [startDate, endDate, defaultTopCount],
  );

  // Use the generated queryOptions fn so the query key matches what useAuditLogGetStatistics
  // would produce, allowing shared cache invalidation.
  const query = useQuery({
    ...auditLogGetStatisticsQueryOptions(params),
    // Re-fetch when filters change; default staleTime is fine.
    refetchOnMount: true,
  });

  const stats = query.data as AuditLogStatisticsDto | undefined;

  const httpMethodEntries = useMemo(() => {
    const map = stats?.httpRequestMethodCounts ?? {};
    return Object.entries(map)
      .filter(([method]) => Boolean(method))
      .sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0));
  }, [stats]);

  return (
    <div className={styles.root}>
      <div className={styles.filterBar}>
        <Field label={t("AbpAuditLogging::StartTime")} className={styles.datePicker}>
          <DatePicker
            value={startDate}
            onSelectDate={(date) => setStartDate(date ? toStartOfDay(date) : null)}
            placeholder={t("AbpAuditLogging::StartTime")}
          />
        </Field>
        <Field label={t("AbpAuditLogging::EndTime")} className={styles.datePicker}>
          <DatePicker
            value={endDate}
            onSelectDate={(date) => setEndDate(date ? toEndOfDay(date) : null)}
            placeholder={t("AbpAuditLogging::EndTime")}
          />
        </Field>
        <Button
          appearance="primary"
          icon={<Search20Regular />}
          onClick={() => query.refetch()}
          disabled={query.isFetching}
        >
          {t("AbpUi::Refresh")}
        </Button>
      </div>

      {query.isLoading && <Spinner label={t("AbpUi::Loading")} />}
      {query.isError && (
        <Text className={styles.errorState}>
          {query.error ? String(query.error) : t("AbpUi::InternalServerError")}
        </Text>
      )}

      {stats && (
        <>
          <div className={styles.statsGrid}>
            <Card className={styles.statCard}>
              <Text className={styles.statLabel}>{t("AbpAuditLogging::TotalRequestCount")}</Text>
              <Text className={styles.statValue}>{formatBigint(stats.totalRequestCount)}</Text>
            </Card>
            <Card className={styles.statCard}>
              <Text className={styles.statLabel}>{t("AbpAuditLogging::AverageDuration")}</Text>
              <Text className={styles.statValue}>
                {formatDuration(stats.averageExecutionDuration)}
              </Text>
            </Card>
            <Card className={styles.statCard}>
              <Text className={styles.statLabel}>{t("AbpAuditLogging::MaxDuration")}</Text>
              <Text className={styles.statValue}>{formatDuration(stats.maxExecutionDuration)}</Text>
            </Card>
            <Card className={styles.statCard}>
              <Text className={styles.statLabel}>{t("AbpAuditLogging::MinDuration")}</Text>
              <Text className={styles.statValue}>{formatDuration(stats.minExecutionDuration)}</Text>
            </Card>
            <Card className={styles.statCard}>
              <Text className={styles.statLabel}>{t("AbpAuditLogging::ErrorCount")}</Text>
              <Text className={styles.statValue}>{formatBigint(stats.errorCount)}</Text>
            </Card>
          </div>

          <Text as="h3" className={styles.sectionTitle}>
            {t("AbpAuditLogging::HttpMethodDistribution")}
          </Text>
          {httpMethodEntries.length === 0 ? (
            <Text size={200}>{t("AbpUi::NoRecords")}</Text>
          ) : (
            <div className={styles.methodBadges}>
              {httpMethodEntries.map(([method, count]) => (
                <Badge key={method} appearance="outline" size="large">
                  <HttpMethodBadge method={method} /> {String(count)}
                </Badge>
              ))}
            </div>
          )}

          <Text as="h3" className={styles.sectionTitle}>
            {t("AbpAuditLogging::TopSlowUrls")}
          </Text>
          <Card className={styles.listCard}>
            {stats.topSlowUrls && stats.topSlowUrls.length > 0 ? (
              stats.topSlowUrls.map((stat, idx) => (
                <UrlStatisticRow key={`${stat.url}-${idx}`} stat={stat} rank={idx + 1} />
              ))
            ) : (
              <Text size={200}>{t("AbpUi::NoRecords")}</Text>
            )}
          </Card>

          <Text as="h3" className={styles.sectionTitle}>
            {t("AbpAuditLogging::TopFrequentUrls")}
          </Text>
          <Card className={styles.listCard}>
            {stats.topFrequentUrls && stats.topFrequentUrls.length > 0 ? (
              stats.topFrequentUrls.map((stat, idx) => (
                <UrlStatisticRow key={`${stat.url}-${idx}`} stat={stat} rank={idx + 1} />
              ))
            ) : (
              <Text size={200}>{t("AbpUi::NoRecords")}</Text>
            )}
          </Card>
        </>
      )}
    </div>
  );
}

// Re-export for callers that need to invalidate the statistics query (e.g. on tenant switch).
export { auditLogGetStatisticsQueryKey };
