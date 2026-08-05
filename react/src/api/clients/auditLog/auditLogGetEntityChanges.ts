/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AuditLogGetEntityChangesPathAuditLogId,
  AuditLogGetEntityChangesStatus200,
  AuditLogGetEntityChangesStatus400,
  AuditLogGetEntityChangesStatus401,
  AuditLogGetEntityChangesStatus403,
  AuditLogGetEntityChangesStatus404,
  AuditLogGetEntityChangesStatus500,
  AuditLogGetEntityChangesStatus501,
} from "../../models/auditLog/AuditLogGetEntityChanges.ts";

function getAuditLogGetEntityChangesUrl(auditLogId: AuditLogGetEntityChangesPathAuditLogId) {
  const res = { method: "GET", url: `/api/app/audit-log/entity-changes/${auditLogId}` as const };

  return res;
}

/**
 * {@link /api/app/audit-log/entity-changes/:auditLogId}
 */
export async function auditLogGetEntityChanges(
  auditLogId: AuditLogGetEntityChangesPathAuditLogId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    AuditLogGetEntityChangesStatus200,
    ResponseErrorConfig<
      | AuditLogGetEntityChangesStatus400
      | AuditLogGetEntityChangesStatus401
      | AuditLogGetEntityChangesStatus403
      | AuditLogGetEntityChangesStatus404
      | AuditLogGetEntityChangesStatus500
      | AuditLogGetEntityChangesStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getAuditLogGetEntityChangesUrl(auditLogId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
