/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { AccountSendPasswordResetCodeOptions, AccountSendPasswordResetCodeStatus200, AccountSendPasswordResetCodeStatus204, AccountSendPasswordResetCodeStatus400, AccountSendPasswordResetCodeStatus401, AccountSendPasswordResetCodeStatus403, AccountSendPasswordResetCodeStatus404, AccountSendPasswordResetCodeStatus500, AccountSendPasswordResetCodeStatus501 } from '../../models/account/AccountSendPasswordResetCode'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { accountSendPasswordResetCode } from '../../clients/account/accountSendPasswordResetCode'

export const accountSendPasswordResetCodeMutationKey = () => [{ url: '/api/account/send-password-reset-code' }] as const

export function accountSendPasswordResetCodeMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } } = {}) {
  const mutationKey = accountSendPasswordResetCodeMutationKey()
  return mutationOptions<AccountSendPasswordResetCodeStatus200 | AccountSendPasswordResetCodeStatus204, ResponseErrorConfig<AccountSendPasswordResetCodeStatus400 | AccountSendPasswordResetCodeStatus401 | AccountSendPasswordResetCodeStatus403 | AccountSendPasswordResetCodeStatus404 | AccountSendPasswordResetCodeStatus500 | AccountSendPasswordResetCodeStatus501>, AccountSendPasswordResetCodeOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await accountSendPasswordResetCode({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/account/send-password-reset-code}
 */
export function useAccountSendPasswordResetCode<TContext>(options: {
  mutation?: UseMutationOptions<AccountSendPasswordResetCodeStatus200 | AccountSendPasswordResetCodeStatus204, ResponseErrorConfig<AccountSendPasswordResetCodeStatus400 | AccountSendPasswordResetCodeStatus401 | AccountSendPasswordResetCodeStatus403 | AccountSendPasswordResetCodeStatus404 | AccountSendPasswordResetCodeStatus500 | AccountSendPasswordResetCodeStatus501>, AccountSendPasswordResetCodeOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? accountSendPasswordResetCodeMutationKey()

  const baseOptions = accountSendPasswordResetCodeMutationOptions(config) as UseMutationOptions<AccountSendPasswordResetCodeStatus200 | AccountSendPasswordResetCodeStatus204, ResponseErrorConfig<AccountSendPasswordResetCodeStatus400 | AccountSendPasswordResetCodeStatus401 | AccountSendPasswordResetCodeStatus403 | AccountSendPasswordResetCodeStatus404 | AccountSendPasswordResetCodeStatus500 | AccountSendPasswordResetCodeStatus501>, AccountSendPasswordResetCodeOptions, TContext>

  return useMutation<AccountSendPasswordResetCodeStatus200 | AccountSendPasswordResetCodeStatus204, ResponseErrorConfig<AccountSendPasswordResetCodeStatus400 | AccountSendPasswordResetCodeStatus401 | AccountSendPasswordResetCodeStatus403 | AccountSendPasswordResetCodeStatus404 | AccountSendPasswordResetCodeStatus500 | AccountSendPasswordResetCodeStatus501>, AccountSendPasswordResetCodeOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<AccountSendPasswordResetCodeStatus200 | AccountSendPasswordResetCodeStatus204, ResponseErrorConfig<AccountSendPasswordResetCodeStatus400 | AccountSendPasswordResetCodeStatus401 | AccountSendPasswordResetCodeStatus403 | AccountSendPasswordResetCodeStatus404 | AccountSendPasswordResetCodeStatus500 | AccountSendPasswordResetCodeStatus501>, AccountSendPasswordResetCodeOptions, TContext>
}
