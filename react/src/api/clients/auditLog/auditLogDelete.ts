/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AuditLogDeletePathId,
  AuditLogDeleteStatus200,
  AuditLogDeleteStatus204,
  AuditLogDeleteStatus400,
  AuditLogDeleteStatus401,
  AuditLogDeleteStatus403,
  AuditLogDeleteStatus404,
  AuditLogDeleteStatus500,
  AuditLogDeleteStatus501,
} from "../../models/auditLog/AuditLogDelete.ts";

function getAuditLogDeleteUrl(id: AuditLogDeletePathId) {
  const res = { method: "DELETE", url: `/api/app/audit-log/${id}` as const };

  return res;
}

/**
 * {@link /api/app/audit-log/:id}
 */
export async function auditLogDelete(
  id: AuditLogDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    AuditLogDeleteStatus200 | AuditLogDeleteStatus204,
    ResponseErrorConfig<
      | AuditLogDeleteStatus400
      | AuditLogDeleteStatus401
      | AuditLogDeleteStatus403
      | AuditLogDeleteStatus404
      | AuditLogDeleteStatus500
      | AuditLogDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getAuditLogDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
