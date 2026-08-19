/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { TimeZoneSettingsUpdateOptions, TimeZoneSettingsUpdateStatus200, TimeZoneSettingsUpdateStatus204, TimeZoneSettingsUpdateStatus400, TimeZoneSettingsUpdateStatus401, TimeZoneSettingsUpdateStatus403, TimeZoneSettingsUpdateStatus404, TimeZoneSettingsUpdateStatus500, TimeZoneSettingsUpdateStatus501 } from '../../models/timeZoneSettings/TimeZoneSettingsUpdate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { timeZoneSettingsUpdate } from '../../clients/timeZoneSettings/timeZoneSettingsUpdate'

export const timeZoneSettingsUpdateMutationKey = () => [{ url: '/api/setting-management/timezone' }] as const

export function timeZoneSettingsUpdateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = timeZoneSettingsUpdateMutationKey()
  return mutationOptions<TimeZoneSettingsUpdateStatus200 | TimeZoneSettingsUpdateStatus204, ResponseErrorConfig<TimeZoneSettingsUpdateStatus400 | TimeZoneSettingsUpdateStatus401 | TimeZoneSettingsUpdateStatus403 | TimeZoneSettingsUpdateStatus404 | TimeZoneSettingsUpdateStatus500 | TimeZoneSettingsUpdateStatus501>, TimeZoneSettingsUpdateOptions, TContext>({
    mutationKey,
    mutationFn: async({ query }) => {
      const { data } = await timeZoneSettingsUpdate({ ...config, query, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/setting-management/timezone}
 */
export function useTimeZoneSettingsUpdate<TContext>(options: {
  mutation?: UseMutationOptions<TimeZoneSettingsUpdateStatus200 | TimeZoneSettingsUpdateStatus204, ResponseErrorConfig<TimeZoneSettingsUpdateStatus400 | TimeZoneSettingsUpdateStatus401 | TimeZoneSettingsUpdateStatus403 | TimeZoneSettingsUpdateStatus404 | TimeZoneSettingsUpdateStatus500 | TimeZoneSettingsUpdateStatus501>, TimeZoneSettingsUpdateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? timeZoneSettingsUpdateMutationKey()

  const baseOptions = timeZoneSettingsUpdateMutationOptions(config) as UseMutationOptions<TimeZoneSettingsUpdateStatus200 | TimeZoneSettingsUpdateStatus204, ResponseErrorConfig<TimeZoneSettingsUpdateStatus400 | TimeZoneSettingsUpdateStatus401 | TimeZoneSettingsUpdateStatus403 | TimeZoneSettingsUpdateStatus404 | TimeZoneSettingsUpdateStatus500 | TimeZoneSettingsUpdateStatus501>, TimeZoneSettingsUpdateOptions, TContext>

  return useMutation<TimeZoneSettingsUpdateStatus200 | TimeZoneSettingsUpdateStatus204, ResponseErrorConfig<TimeZoneSettingsUpdateStatus400 | TimeZoneSettingsUpdateStatus401 | TimeZoneSettingsUpdateStatus403 | TimeZoneSettingsUpdateStatus404 | TimeZoneSettingsUpdateStatus500 | TimeZoneSettingsUpdateStatus501>, TimeZoneSettingsUpdateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<TimeZoneSettingsUpdateStatus200 | TimeZoneSettingsUpdateStatus204, ResponseErrorConfig<TimeZoneSettingsUpdateStatus400 | TimeZoneSettingsUpdateStatus401 | TimeZoneSettingsUpdateStatus403 | TimeZoneSettingsUpdateStatus404 | TimeZoneSettingsUpdateStatus500 | TimeZoneSettingsUpdateStatus501>, TimeZoneSettingsUpdateOptions, TContext>
}
