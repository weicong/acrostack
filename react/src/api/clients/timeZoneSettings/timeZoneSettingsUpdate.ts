/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { TimeZoneSettingsUpdateOptions, TimeZoneSettingsUpdateResponses } from '../../models/timeZoneSettings/TimeZoneSettingsUpdate'
import { client } from '../../.kubb/client'

/**
 * {@link /api/setting-management/timezone}
 */
export function timeZoneSettingsUpdate<ThrowOnError extends boolean = true>(options: Options<TimeZoneSettingsUpdateOptions, ThrowOnError> = {}): Promise<RequestResult<TimeZoneSettingsUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'POST', url: '/api/setting-management/timezone', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<TimeZoneSettingsUpdateResponses, ThrowOnError>>
}
