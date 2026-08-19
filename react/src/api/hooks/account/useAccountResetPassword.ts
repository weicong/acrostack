/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { AccountResetPasswordOptions, AccountResetPasswordStatus200, AccountResetPasswordStatus204, AccountResetPasswordStatus400, AccountResetPasswordStatus401, AccountResetPasswordStatus403, AccountResetPasswordStatus404, AccountResetPasswordStatus500, AccountResetPasswordStatus501 } from '../../models/account/AccountResetPassword'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { accountResetPassword } from '../../clients/account/accountResetPassword'

export const accountResetPasswordMutationKey = () => [{ url: '/api/account/reset-password' }] as const

export function accountResetPasswordMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } } = {}) {
  const mutationKey = accountResetPasswordMutationKey()
  return mutationOptions<AccountResetPasswordStatus200 | AccountResetPasswordStatus204, ResponseErrorConfig<AccountResetPasswordStatus400 | AccountResetPasswordStatus401 | AccountResetPasswordStatus403 | AccountResetPasswordStatus404 | AccountResetPasswordStatus500 | AccountResetPasswordStatus501>, AccountResetPasswordOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await accountResetPassword({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/account/reset-password}
 */
export function useAccountResetPassword<TContext>(options: {
  mutation?: UseMutationOptions<AccountResetPasswordStatus200 | AccountResetPasswordStatus204, ResponseErrorConfig<AccountResetPasswordStatus400 | AccountResetPasswordStatus401 | AccountResetPasswordStatus403 | AccountResetPasswordStatus404 | AccountResetPasswordStatus500 | AccountResetPasswordStatus501>, AccountResetPasswordOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? accountResetPasswordMutationKey()

  const baseOptions = accountResetPasswordMutationOptions(config) as UseMutationOptions<AccountResetPasswordStatus200 | AccountResetPasswordStatus204, ResponseErrorConfig<AccountResetPasswordStatus400 | AccountResetPasswordStatus401 | AccountResetPasswordStatus403 | AccountResetPasswordStatus404 | AccountResetPasswordStatus500 | AccountResetPasswordStatus501>, AccountResetPasswordOptions, TContext>

  return useMutation<AccountResetPasswordStatus200 | AccountResetPasswordStatus204, ResponseErrorConfig<AccountResetPasswordStatus400 | AccountResetPasswordStatus401 | AccountResetPasswordStatus403 | AccountResetPasswordStatus404 | AccountResetPasswordStatus500 | AccountResetPasswordStatus501>, AccountResetPasswordOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<AccountResetPasswordStatus200 | AccountResetPasswordStatus204, ResponseErrorConfig<AccountResetPasswordStatus400 | AccountResetPasswordStatus401 | AccountResetPasswordStatus403 | AccountResetPasswordStatus404 | AccountResetPasswordStatus500 | AccountResetPasswordStatus501>, AccountResetPasswordOptions, TContext>
}
