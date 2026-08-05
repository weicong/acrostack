/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AuditLogGetStatisticsQueryStartTime,
  AuditLogGetStatisticsQueryEndTime,
  AuditLogGetStatisticsQueryTopCount,
  AuditLogGetStatisticsStatus200,
  AuditLogGetStatisticsStatus400,
  AuditLogGetStatisticsStatus401,
  AuditLogGetStatisticsStatus403,
  AuditLogGetStatisticsStatus404,
  AuditLogGetStatisticsStatus500,
  AuditLogGetStatisticsStatus501,
} from "../../models/auditLog/AuditLogGetStatistics.ts";

function getAuditLogGetStatisticsUrl() {
  const res = { method: "GET", url: `/api/app/audit-log/statistics` as const };

  return res;
}

/**
 * {@link /api/app/audit-log/statistics}
 */
export async function auditLogGetStatistics(
  params?: {
    StartTime?: AuditLogGetStatisticsQueryStartTime;
    EndTime?: AuditLogGetStatisticsQueryEndTime;
    TopCount?: AuditLogGetStatisticsQueryTopCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    AuditLogGetStatisticsStatus200,
    ResponseErrorConfig<
      | AuditLogGetStatisticsStatus400
      | AuditLogGetStatisticsStatus401
      | AuditLogGetStatisticsStatus403
      | AuditLogGetStatisticsStatus404
      | AuditLogGetStatisticsStatus500
      | AuditLogGetStatisticsStatus501
    >,
    unknown
  >({ method: "GET", url: getAuditLogGetStatisticsUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
