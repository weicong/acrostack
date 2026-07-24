/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AuditLogGetListQueryFilter,
  AuditLogGetListQueryUserId,
  AuditLogGetListQueryHttpMethod,
  AuditLogGetListQueryUrl,
  AuditLogGetListQueryStartTime,
  AuditLogGetListQueryEndTime,
  AuditLogGetListQueryHttpStatusCode,
  AuditLogGetListQueryHasException,
  AuditLogGetListQuerySorting,
  AuditLogGetListQuerySkipCount,
  AuditLogGetListQueryMaxResultCount,
  AuditLogGetListStatus200,
  AuditLogGetListStatus400,
  AuditLogGetListStatus401,
  AuditLogGetListStatus403,
  AuditLogGetListStatus404,
  AuditLogGetListStatus500,
  AuditLogGetListStatus501,
} from "../../models/auditLog/AuditLogGetList.ts";

function getAuditLogGetListUrl() {
  const res = { method: "GET", url: `/api/app/audit-log` as const };

  return res;
}

/**
 * {@link /api/app/audit-log}
 */
export async function auditLogGetList(
  params?: {
    Filter?: AuditLogGetListQueryFilter;
    UserId?: AuditLogGetListQueryUserId;
    HttpMethod?: AuditLogGetListQueryHttpMethod;
    Url?: AuditLogGetListQueryUrl;
    StartTime?: AuditLogGetListQueryStartTime;
    EndTime?: AuditLogGetListQueryEndTime;
    HttpStatusCode?: AuditLogGetListQueryHttpStatusCode;
    HasException?: AuditLogGetListQueryHasException;
    Sorting?: AuditLogGetListQuerySorting;
    SkipCount?: AuditLogGetListQuerySkipCount;
    MaxResultCount?: AuditLogGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    AuditLogGetListStatus200,
    ResponseErrorConfig<
      | AuditLogGetListStatus400
      | AuditLogGetListStatus401
      | AuditLogGetListStatus403
      | AuditLogGetListStatus404
      | AuditLogGetListStatus500
      | AuditLogGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getAuditLogGetListUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
