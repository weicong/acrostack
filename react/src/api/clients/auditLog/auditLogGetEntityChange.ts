/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  AuditLogGetEntityChangeOptions,
  AuditLogGetEntityChangeResponses,
} from "../../models/auditLog/AuditLogGetEntityChange";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/audit-log/entity-change/:entityChangeId}
 */
export function auditLogGetEntityChange<ThrowOnError extends boolean = true>(
  options: Options<AuditLogGetEntityChangeOptions, ThrowOnError>,
): Unwrappable<RequestResult<AuditLogGetEntityChangeResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/audit-log/entity-change/{entityChangeId}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<AuditLogGetEntityChangeResponses, ThrowOnError>>,
  );
}
