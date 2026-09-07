/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { AuditLogGetOptions, AuditLogGetResponses } from "../../models/auditLog/AuditLogGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/audit-log/:id}
 */
export function auditLogGet<ThrowOnError extends boolean = true>(
  options: Options<AuditLogGetOptions, ThrowOnError>,
): Unwrappable<RequestResult<AuditLogGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/audit-log/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<AuditLogGetResponses, ThrowOnError>>,
  );
}
