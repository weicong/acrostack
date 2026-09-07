/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  AuditLogDeleteOptions,
  AuditLogDeleteResponses,
} from "../../models/auditLog/AuditLogDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/audit-log/:id}
 */
export function auditLogDelete<ThrowOnError extends boolean = true>(
  options: Options<AuditLogDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<AuditLogDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/app/audit-log/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<AuditLogDeleteResponses, ThrowOnError>>,
  );
}
