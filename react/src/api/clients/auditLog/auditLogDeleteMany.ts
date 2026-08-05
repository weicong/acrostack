/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AuditLogDeleteManyQueryIds,
  AuditLogDeleteManyStatus200,
  AuditLogDeleteManyStatus204,
  AuditLogDeleteManyStatus400,
  AuditLogDeleteManyStatus401,
  AuditLogDeleteManyStatus403,
  AuditLogDeleteManyStatus404,
  AuditLogDeleteManyStatus500,
  AuditLogDeleteManyStatus501,
} from "../../models/auditLog/AuditLogDeleteMany.ts";

function getAuditLogDeleteManyUrl() {
  const res = { method: "DELETE", url: `/api/app/audit-log/many` as const };

  return res;
}

/**
 * {@link /api/app/audit-log/many}
 */
export async function auditLogDeleteMany(
  params?: { ids?: AuditLogDeleteManyQueryIds },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    AuditLogDeleteManyStatus200 | AuditLogDeleteManyStatus204,
    ResponseErrorConfig<
      | AuditLogDeleteManyStatus400
      | AuditLogDeleteManyStatus401
      | AuditLogDeleteManyStatus403
      | AuditLogDeleteManyStatus404
      | AuditLogDeleteManyStatus500
      | AuditLogDeleteManyStatus501
    >,
    unknown
  >({ method: "DELETE", url: getAuditLogDeleteManyUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
