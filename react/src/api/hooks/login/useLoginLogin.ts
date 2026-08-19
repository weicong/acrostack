/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { LoginLoginOptions, LoginLoginStatus200, LoginLoginStatus400, LoginLoginStatus401, LoginLoginStatus403, LoginLoginStatus404, LoginLoginStatus500, LoginLoginStatus501 } from '../../models/login/LoginLogin'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { loginLogin } from '../../clients/login/loginLogin'

export const loginLoginMutationKey = () => [{ url: '/api/account/login' }] as const

export function loginLoginMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = loginLoginMutationKey()
  return mutationOptions<LoginLoginStatus200, ResponseErrorConfig<LoginLoginStatus400 | LoginLoginStatus401 | LoginLoginStatus403 | LoginLoginStatus404 | LoginLoginStatus500 | LoginLoginStatus501>, LoginLoginOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await loginLogin({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/account/login}
 */
export function useLoginLogin<TContext>(options: {
  mutation?: UseMutationOptions<LoginLoginStatus200, ResponseErrorConfig<LoginLoginStatus400 | LoginLoginStatus401 | LoginLoginStatus403 | LoginLoginStatus404 | LoginLoginStatus500 | LoginLoginStatus501>, LoginLoginOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? loginLoginMutationKey()

  const baseOptions = loginLoginMutationOptions(config) as UseMutationOptions<LoginLoginStatus200, ResponseErrorConfig<LoginLoginStatus400 | LoginLoginStatus401 | LoginLoginStatus403 | LoginLoginStatus404 | LoginLoginStatus500 | LoginLoginStatus501>, LoginLoginOptions, TContext>

  return useMutation<LoginLoginStatus200, ResponseErrorConfig<LoginLoginStatus400 | LoginLoginStatus401 | LoginLoginStatus403 | LoginLoginStatus404 | LoginLoginStatus500 | LoginLoginStatus501>, LoginLoginOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<LoginLoginStatus200, ResponseErrorConfig<LoginLoginStatus400 | LoginLoginStatus401 | LoginLoginStatus403 | LoginLoginStatus404 | LoginLoginStatus500 | LoginLoginStatus501>, LoginLoginOptions, TContext>
}
