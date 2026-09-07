/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  AuditLogDeleteManyOptions,
  AuditLogDeleteManyResponses,
} from "../../models/auditLog/AuditLogDeleteMany";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/audit-log/many}
 */
export function auditLogDeleteMany<ThrowOnError extends boolean = true>(
  options: Options<AuditLogDeleteManyOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<AuditLogDeleteManyResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/app/audit-log/many",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<AuditLogDeleteManyResponses, ThrowOnError>>,
  );
}
