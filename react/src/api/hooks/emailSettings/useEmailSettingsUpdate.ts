/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { EmailSettingsUpdateOptions, EmailSettingsUpdateStatus200, EmailSettingsUpdateStatus204, EmailSettingsUpdateStatus400, EmailSettingsUpdateStatus401, EmailSettingsUpdateStatus403, EmailSettingsUpdateStatus404, EmailSettingsUpdateStatus500, EmailSettingsUpdateStatus501 } from '../../models/emailSettings/EmailSettingsUpdate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { emailSettingsUpdate } from '../../clients/emailSettings/emailSettingsUpdate'

export const emailSettingsUpdateMutationKey = () => [{ url: '/api/setting-management/emailing' }] as const

export function emailSettingsUpdateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } } = {}) {
  const mutationKey = emailSettingsUpdateMutationKey()
  return mutationOptions<EmailSettingsUpdateStatus200 | EmailSettingsUpdateStatus204, ResponseErrorConfig<EmailSettingsUpdateStatus400 | EmailSettingsUpdateStatus401 | EmailSettingsUpdateStatus403 | EmailSettingsUpdateStatus404 | EmailSettingsUpdateStatus500 | EmailSettingsUpdateStatus501>, EmailSettingsUpdateOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await emailSettingsUpdate({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/setting-management/emailing}
 */
export function useEmailSettingsUpdate<TContext>(options: {
  mutation?: UseMutationOptions<EmailSettingsUpdateStatus200 | EmailSettingsUpdateStatus204, ResponseErrorConfig<EmailSettingsUpdateStatus400 | EmailSettingsUpdateStatus401 | EmailSettingsUpdateStatus403 | EmailSettingsUpdateStatus404 | EmailSettingsUpdateStatus500 | EmailSettingsUpdateStatus501>, EmailSettingsUpdateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? emailSettingsUpdateMutationKey()

  const baseOptions = emailSettingsUpdateMutationOptions(config) as UseMutationOptions<EmailSettingsUpdateStatus200 | EmailSettingsUpdateStatus204, ResponseErrorConfig<EmailSettingsUpdateStatus400 | EmailSettingsUpdateStatus401 | EmailSettingsUpdateStatus403 | EmailSettingsUpdateStatus404 | EmailSettingsUpdateStatus500 | EmailSettingsUpdateStatus501>, EmailSettingsUpdateOptions, TContext>

  return useMutation<EmailSettingsUpdateStatus200 | EmailSettingsUpdateStatus204, ResponseErrorConfig<EmailSettingsUpdateStatus400 | EmailSettingsUpdateStatus401 | EmailSettingsUpdateStatus403 | EmailSettingsUpdateStatus404 | EmailSettingsUpdateStatus500 | EmailSettingsUpdateStatus501>, EmailSettingsUpdateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<EmailSettingsUpdateStatus200 | EmailSettingsUpdateStatus204, ResponseErrorConfig<EmailSettingsUpdateStatus400 | EmailSettingsUpdateStatus401 | EmailSettingsUpdateStatus403 | EmailSettingsUpdateStatus404 | EmailSettingsUpdateStatus500 | EmailSettingsUpdateStatus501>, EmailSettingsUpdateOptions, TContext>
}
