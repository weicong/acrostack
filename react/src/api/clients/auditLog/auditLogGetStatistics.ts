/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  AuditLogGetStatisticsOptions,
  AuditLogGetStatisticsResponses,
} from "../../models/auditLog/AuditLogGetStatistics";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/audit-log/statistics}
 */
export function auditLogGetStatistics<ThrowOnError extends boolean = true>(
  options: Options<AuditLogGetStatisticsOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<AuditLogGetStatisticsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/audit-log/statistics",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<AuditLogGetStatisticsResponses, ThrowOnError>>,
  );
}
