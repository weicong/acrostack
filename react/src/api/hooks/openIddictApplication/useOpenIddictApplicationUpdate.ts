/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { OpenIddictApplicationUpdateOptions, OpenIddictApplicationUpdateStatus200, OpenIddictApplicationUpdateStatus400, OpenIddictApplicationUpdateStatus401, OpenIddictApplicationUpdateStatus403, OpenIddictApplicationUpdateStatus404, OpenIddictApplicationUpdateStatus500, OpenIddictApplicationUpdateStatus501 } from '../../models/openIddictApplication/OpenIddictApplicationUpdate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { openIddictApplicationUpdate } from '../../clients/openIddictApplication/openIddictApplicationUpdate'

export const openIddictApplicationUpdateMutationKey = () => [{ url: '/api/app/open-iddict-application/:id' }] as const

export function openIddictApplicationUpdateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = openIddictApplicationUpdateMutationKey()
  return mutationOptions<OpenIddictApplicationUpdateStatus200, ResponseErrorConfig<OpenIddictApplicationUpdateStatus400 | OpenIddictApplicationUpdateStatus401 | OpenIddictApplicationUpdateStatus403 | OpenIddictApplicationUpdateStatus404 | OpenIddictApplicationUpdateStatus500 | OpenIddictApplicationUpdateStatus501>, OpenIddictApplicationUpdateOptions, TContext>({
    mutationKey,
    mutationFn: async({ path, body }) => {
      const { data } = await openIddictApplicationUpdate({ ...config, path, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/open-iddict-application/:id}
 */
export function useOpenIddictApplicationUpdate<TContext>(options: {
  mutation?: UseMutationOptions<OpenIddictApplicationUpdateStatus200, ResponseErrorConfig<OpenIddictApplicationUpdateStatus400 | OpenIddictApplicationUpdateStatus401 | OpenIddictApplicationUpdateStatus403 | OpenIddictApplicationUpdateStatus404 | OpenIddictApplicationUpdateStatus500 | OpenIddictApplicationUpdateStatus501>, OpenIddictApplicationUpdateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? openIddictApplicationUpdateMutationKey()

  const baseOptions = openIddictApplicationUpdateMutationOptions(config) as UseMutationOptions<OpenIddictApplicationUpdateStatus200, ResponseErrorConfig<OpenIddictApplicationUpdateStatus400 | OpenIddictApplicationUpdateStatus401 | OpenIddictApplicationUpdateStatus403 | OpenIddictApplicationUpdateStatus404 | OpenIddictApplicationUpdateStatus500 | OpenIddictApplicationUpdateStatus501>, OpenIddictApplicationUpdateOptions, TContext>

  return useMutation<OpenIddictApplicationUpdateStatus200, ResponseErrorConfig<OpenIddictApplicationUpdateStatus400 | OpenIddictApplicationUpdateStatus401 | OpenIddictApplicationUpdateStatus403 | OpenIddictApplicationUpdateStatus404 | OpenIddictApplicationUpdateStatus500 | OpenIddictApplicationUpdateStatus501>, OpenIddictApplicationUpdateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<OpenIddictApplicationUpdateStatus200, ResponseErrorConfig<OpenIddictApplicationUpdateStatus400 | OpenIddictApplicationUpdateStatus401 | OpenIddictApplicationUpdateStatus403 | OpenIddictApplicationUpdateStatus404 | OpenIddictApplicationUpdateStatus500 | OpenIddictApplicationUpdateStatus501>, OpenIddictApplicationUpdateOptions, TContext>
}
