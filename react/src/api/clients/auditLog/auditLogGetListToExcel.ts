/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AuditLogGetListToExcelQueryFilter,
  AuditLogGetListToExcelQueryUserId,
  AuditLogGetListToExcelQueryHttpMethod,
  AuditLogGetListToExcelQueryUrl,
  AuditLogGetListToExcelQueryStartTime,
  AuditLogGetListToExcelQueryEndTime,
  AuditLogGetListToExcelQueryHttpStatusCode,
  AuditLogGetListToExcelQueryHasException,
  AuditLogGetListToExcelQuerySorting,
  AuditLogGetListToExcelQuerySkipCount,
  AuditLogGetListToExcelQueryMaxResultCount,
  AuditLogGetListToExcelStatus200,
  AuditLogGetListToExcelStatus400,
  AuditLogGetListToExcelStatus401,
  AuditLogGetListToExcelStatus403,
  AuditLogGetListToExcelStatus404,
  AuditLogGetListToExcelStatus500,
  AuditLogGetListToExcelStatus501,
} from "../../models/auditLog/AuditLogGetListToExcel.ts";

function getAuditLogGetListToExcelUrl() {
  const res = { method: "GET", url: `/api/app/audit-log/to-excel` as const };

  return res;
}

/**
 * {@link /api/app/audit-log/to-excel}
 */
export async function auditLogGetListToExcel(
  params?: {
    Filter?: AuditLogGetListToExcelQueryFilter;
    UserId?: AuditLogGetListToExcelQueryUserId;
    HttpMethod?: AuditLogGetListToExcelQueryHttpMethod;
    Url?: AuditLogGetListToExcelQueryUrl;
    StartTime?: AuditLogGetListToExcelQueryStartTime;
    EndTime?: AuditLogGetListToExcelQueryEndTime;
    HttpStatusCode?: AuditLogGetListToExcelQueryHttpStatusCode;
    HasException?: AuditLogGetListToExcelQueryHasException;
    Sorting?: AuditLogGetListToExcelQuerySorting;
    SkipCount?: AuditLogGetListToExcelQuerySkipCount;
    MaxResultCount?: AuditLogGetListToExcelQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    AuditLogGetListToExcelStatus200,
    ResponseErrorConfig<
      | AuditLogGetListToExcelStatus400
      | AuditLogGetListToExcelStatus401
      | AuditLogGetListToExcelStatus403
      | AuditLogGetListToExcelStatus404
      | AuditLogGetListToExcelStatus500
      | AuditLogGetListToExcelStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getAuditLogGetListToExcelUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
