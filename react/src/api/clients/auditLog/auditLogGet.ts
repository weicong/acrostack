/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AuditLogGetPathId,
  AuditLogGetStatus200,
  AuditLogGetStatus400,
  AuditLogGetStatus401,
  AuditLogGetStatus403,
  AuditLogGetStatus404,
  AuditLogGetStatus500,
  AuditLogGetStatus501,
} from "../../models/auditLog/AuditLogGet.ts";

function getAuditLogGetUrl(id: AuditLogGetPathId) {
  const res = { method: "GET", url: `/api/app/audit-log/${id}` as const };

  return res;
}

/**
 * {@link /api/app/audit-log/:id}
 */
export async function auditLogGet(
  id: AuditLogGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    AuditLogGetStatus200,
    ResponseErrorConfig<
      | AuditLogGetStatus400
      | AuditLogGetStatus401
      | AuditLogGetStatus403
      | AuditLogGetStatus404
      | AuditLogGetStatus500
      | AuditLogGetStatus501
    >,
    unknown
  >({ method: "GET", url: getAuditLogGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
