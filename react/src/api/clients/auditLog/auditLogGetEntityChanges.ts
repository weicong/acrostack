/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  AuditLogGetEntityChangesOptions,
  AuditLogGetEntityChangesResponses,
} from "../../models/auditLog/AuditLogGetEntityChanges";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/audit-log/entity-changes/:auditLogId}
 */
export function auditLogGetEntityChanges<ThrowOnError extends boolean = true>(
  options: Options<AuditLogGetEntityChangesOptions, ThrowOnError>,
): Unwrappable<RequestResult<AuditLogGetEntityChangesResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/audit-log/entity-changes/{auditLogId}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<AuditLogGetEntityChangesResponses, ThrowOnError>>,
  );
}
