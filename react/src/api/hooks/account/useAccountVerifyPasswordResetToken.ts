/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { AccountVerifyPasswordResetTokenOptions, AccountVerifyPasswordResetTokenStatus200, AccountVerifyPasswordResetTokenStatus400, AccountVerifyPasswordResetTokenStatus401, AccountVerifyPasswordResetTokenStatus403, AccountVerifyPasswordResetTokenStatus404, AccountVerifyPasswordResetTokenStatus500, AccountVerifyPasswordResetTokenStatus501 } from '../../models/account/AccountVerifyPasswordResetToken'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { accountVerifyPasswordResetToken } from '../../clients/account/accountVerifyPasswordResetToken'

export const accountVerifyPasswordResetTokenMutationKey = () => [{ url: '/api/account/verify-password-reset-token' }] as const

export function accountVerifyPasswordResetTokenMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = accountVerifyPasswordResetTokenMutationKey()
  return mutationOptions<AccountVerifyPasswordResetTokenStatus200, ResponseErrorConfig<AccountVerifyPasswordResetTokenStatus400 | AccountVerifyPasswordResetTokenStatus401 | AccountVerifyPasswordResetTokenStatus403 | AccountVerifyPasswordResetTokenStatus404 | AccountVerifyPasswordResetTokenStatus500 | AccountVerifyPasswordResetTokenStatus501>, AccountVerifyPasswordResetTokenOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await accountVerifyPasswordResetToken({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/account/verify-password-reset-token}
 */
export function useAccountVerifyPasswordResetToken<TContext>(options: {
  mutation?: UseMutationOptions<AccountVerifyPasswordResetTokenStatus200, ResponseErrorConfig<AccountVerifyPasswordResetTokenStatus400 | AccountVerifyPasswordResetTokenStatus401 | AccountVerifyPasswordResetTokenStatus403 | AccountVerifyPasswordResetTokenStatus404 | AccountVerifyPasswordResetTokenStatus500 | AccountVerifyPasswordResetTokenStatus501>, AccountVerifyPasswordResetTokenOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? accountVerifyPasswordResetTokenMutationKey()

  const baseOptions = accountVerifyPasswordResetTokenMutationOptions(config) as UseMutationOptions<AccountVerifyPasswordResetTokenStatus200, ResponseErrorConfig<AccountVerifyPasswordResetTokenStatus400 | AccountVerifyPasswordResetTokenStatus401 | AccountVerifyPasswordResetTokenStatus403 | AccountVerifyPasswordResetTokenStatus404 | AccountVerifyPasswordResetTokenStatus500 | AccountVerifyPasswordResetTokenStatus501>, AccountVerifyPasswordResetTokenOptions, TContext>

  return useMutation<AccountVerifyPasswordResetTokenStatus200, ResponseErrorConfig<AccountVerifyPasswordResetTokenStatus400 | AccountVerifyPasswordResetTokenStatus401 | AccountVerifyPasswordResetTokenStatus403 | AccountVerifyPasswordResetTokenStatus404 | AccountVerifyPasswordResetTokenStatus500 | AccountVerifyPasswordResetTokenStatus501>, AccountVerifyPasswordResetTokenOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<AccountVerifyPasswordResetTokenStatus200, ResponseErrorConfig<AccountVerifyPasswordResetTokenStatus400 | AccountVerifyPasswordResetTokenStatus401 | AccountVerifyPasswordResetTokenStatus403 | AccountVerifyPasswordResetTokenStatus404 | AccountVerifyPasswordResetTokenStatus500 | AccountVerifyPasswordResetTokenStatus501>, AccountVerifyPasswordResetTokenOptions, TContext>
}
