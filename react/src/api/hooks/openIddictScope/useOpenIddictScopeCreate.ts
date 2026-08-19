/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { OpenIddictScopeCreateOptions, OpenIddictScopeCreateStatus200, OpenIddictScopeCreateStatus400, OpenIddictScopeCreateStatus401, OpenIddictScopeCreateStatus403, OpenIddictScopeCreateStatus404, OpenIddictScopeCreateStatus500, OpenIddictScopeCreateStatus501 } from '../../models/openIddictScope/OpenIddictScopeCreate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { openIddictScopeCreate } from '../../clients/openIddictScope/openIddictScopeCreate'

export const openIddictScopeCreateMutationKey = () => [{ url: '/api/app/open-iddict-scope' }] as const

export function openIddictScopeCreateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = openIddictScopeCreateMutationKey()
  return mutationOptions<OpenIddictScopeCreateStatus200, ResponseErrorConfig<OpenIddictScopeCreateStatus400 | OpenIddictScopeCreateStatus401 | OpenIddictScopeCreateStatus403 | OpenIddictScopeCreateStatus404 | OpenIddictScopeCreateStatus500 | OpenIddictScopeCreateStatus501>, OpenIddictScopeCreateOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await openIddictScopeCreate({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/open-iddict-scope}
 */
export function useOpenIddictScopeCreate<TContext>(options: {
  mutation?: UseMutationOptions<OpenIddictScopeCreateStatus200, ResponseErrorConfig<OpenIddictScopeCreateStatus400 | OpenIddictScopeCreateStatus401 | OpenIddictScopeCreateStatus403 | OpenIddictScopeCreateStatus404 | OpenIddictScopeCreateStatus500 | OpenIddictScopeCreateStatus501>, OpenIddictScopeCreateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? openIddictScopeCreateMutationKey()

  const baseOptions = openIddictScopeCreateMutationOptions(config) as UseMutationOptions<OpenIddictScopeCreateStatus200, ResponseErrorConfig<OpenIddictScopeCreateStatus400 | OpenIddictScopeCreateStatus401 | OpenIddictScopeCreateStatus403 | OpenIddictScopeCreateStatus404 | OpenIddictScopeCreateStatus500 | OpenIddictScopeCreateStatus501>, OpenIddictScopeCreateOptions, TContext>

  return useMutation<OpenIddictScopeCreateStatus200, ResponseErrorConfig<OpenIddictScopeCreateStatus400 | OpenIddictScopeCreateStatus401 | OpenIddictScopeCreateStatus403 | OpenIddictScopeCreateStatus404 | OpenIddictScopeCreateStatus500 | OpenIddictScopeCreateStatus501>, OpenIddictScopeCreateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<OpenIddictScopeCreateStatus200, ResponseErrorConfig<OpenIddictScopeCreateStatus400 | OpenIddictScopeCreateStatus401 | OpenIddictScopeCreateStatus403 | OpenIddictScopeCreateStatus404 | OpenIddictScopeCreateStatus500 | OpenIddictScopeCreateStatus501>, OpenIddictScopeCreateOptions, TContext>
}
