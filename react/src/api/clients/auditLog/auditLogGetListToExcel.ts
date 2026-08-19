/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { AuditLogGetListToExcelOptions, AuditLogGetListToExcelResponses } from '../../models/auditLog/AuditLogGetListToExcel'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/audit-log/to-excel}
 */
export function auditLogGetListToExcel<ThrowOnError extends boolean = true>(options: Options<AuditLogGetListToExcelOptions, ThrowOnError> = {}): Promise<RequestResult<AuditLogGetListToExcelResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/app/audit-log/to-excel', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<AuditLogGetListToExcelResponses, ThrowOnError>>
}
