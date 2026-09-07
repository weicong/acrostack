/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  AuditLogGetListToExcelOptions,
  AuditLogGetListToExcelResponses,
} from "../../models/auditLog/AuditLogGetListToExcel";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/audit-log/to-excel}
 */
export function auditLogGetListToExcel<ThrowOnError extends boolean = true>(
  options: Options<AuditLogGetListToExcelOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<AuditLogGetListToExcelResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/audit-log/to-excel",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<AuditLogGetListToExcelResponses, ThrowOnError>>,
  );
}
