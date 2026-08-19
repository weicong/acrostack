/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { AccountRegisterOptions, AccountRegisterStatus200, AccountRegisterStatus400, AccountRegisterStatus401, AccountRegisterStatus403, AccountRegisterStatus404, AccountRegisterStatus500, AccountRegisterStatus501 } from '../../models/account/AccountRegister'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { accountRegister } from '../../clients/account/accountRegister'

export const accountRegisterMutationKey = () => [{ url: '/api/account/register' }] as const

export function accountRegisterMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = accountRegisterMutationKey()
  return mutationOptions<AccountRegisterStatus200, ResponseErrorConfig<AccountRegisterStatus400 | AccountRegisterStatus401 | AccountRegisterStatus403 | AccountRegisterStatus404 | AccountRegisterStatus500 | AccountRegisterStatus501>, AccountRegisterOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await accountRegister({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/account/register}
 */
export function useAccountRegister<TContext>(options: {
  mutation?: UseMutationOptions<AccountRegisterStatus200, ResponseErrorConfig<AccountRegisterStatus400 | AccountRegisterStatus401 | AccountRegisterStatus403 | AccountRegisterStatus404 | AccountRegisterStatus500 | AccountRegisterStatus501>, AccountRegisterOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? accountRegisterMutationKey()

  const baseOptions = accountRegisterMutationOptions(config) as UseMutationOptions<AccountRegisterStatus200, ResponseErrorConfig<AccountRegisterStatus400 | AccountRegisterStatus401 | AccountRegisterStatus403 | AccountRegisterStatus404 | AccountRegisterStatus500 | AccountRegisterStatus501>, AccountRegisterOptions, TContext>

  return useMutation<AccountRegisterStatus200, ResponseErrorConfig<AccountRegisterStatus400 | AccountRegisterStatus401 | AccountRegisterStatus403 | AccountRegisterStatus404 | AccountRegisterStatus500 | AccountRegisterStatus501>, AccountRegisterOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<AccountRegisterStatus200, ResponseErrorConfig<AccountRegisterStatus400 | AccountRegisterStatus401 | AccountRegisterStatus403 | AccountRegisterStatus404 | AccountRegisterStatus500 | AccountRegisterStatus501>, AccountRegisterOptions, TContext>
}
