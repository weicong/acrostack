/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AuditLogGetEntityChangePathEntityChangeId,
  AuditLogGetEntityChangeStatus200,
  AuditLogGetEntityChangeStatus400,
  AuditLogGetEntityChangeStatus401,
  AuditLogGetEntityChangeStatus403,
  AuditLogGetEntityChangeStatus404,
  AuditLogGetEntityChangeStatus500,
  AuditLogGetEntityChangeStatus501,
} from "../../models/auditLog/AuditLogGetEntityChange.ts";

function getAuditLogGetEntityChangeUrl(entityChangeId: AuditLogGetEntityChangePathEntityChangeId) {
  const res = { method: "GET", url: `/api/app/audit-log/entity-change/${entityChangeId}` as const };

  return res;
}

/**
 * {@link /api/app/audit-log/entity-change/:entityChangeId}
 */
export async function auditLogGetEntityChange(
  entityChangeId: AuditLogGetEntityChangePathEntityChangeId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    AuditLogGetEntityChangeStatus200,
    ResponseErrorConfig<
      | AuditLogGetEntityChangeStatus400
      | AuditLogGetEntityChangeStatus401
      | AuditLogGetEntityChangeStatus403
      | AuditLogGetEntityChangeStatus404
      | AuditLogGetEntityChangeStatus500
      | AuditLogGetEntityChangeStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getAuditLogGetEntityChangeUrl(entityChangeId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
