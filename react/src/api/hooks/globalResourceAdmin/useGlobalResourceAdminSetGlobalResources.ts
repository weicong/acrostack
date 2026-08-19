/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { GlobalResourceAdminSetGlobalResourcesOptions, GlobalResourceAdminSetGlobalResourcesStatus200, GlobalResourceAdminSetGlobalResourcesStatus204, GlobalResourceAdminSetGlobalResourcesStatus400, GlobalResourceAdminSetGlobalResourcesStatus401, GlobalResourceAdminSetGlobalResourcesStatus403, GlobalResourceAdminSetGlobalResourcesStatus404, GlobalResourceAdminSetGlobalResourcesStatus500, GlobalResourceAdminSetGlobalResourcesStatus501 } from '../../models/globalResourceAdmin/GlobalResourceAdminSetGlobalResources'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { globalResourceAdminSetGlobalResources } from '../../clients/globalResourceAdmin/globalResourceAdminSetGlobalResources'

export const globalResourceAdminSetGlobalResourcesMutationKey = () => [{ url: '/api/cms-kit-admin/global-resources' }] as const

export function globalResourceAdminSetGlobalResourcesMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } } = {}) {
  const mutationKey = globalResourceAdminSetGlobalResourcesMutationKey()
  return mutationOptions<GlobalResourceAdminSetGlobalResourcesStatus200 | GlobalResourceAdminSetGlobalResourcesStatus204, ResponseErrorConfig<GlobalResourceAdminSetGlobalResourcesStatus400 | GlobalResourceAdminSetGlobalResourcesStatus401 | GlobalResourceAdminSetGlobalResourcesStatus403 | GlobalResourceAdminSetGlobalResourcesStatus404 | GlobalResourceAdminSetGlobalResourcesStatus500 | GlobalResourceAdminSetGlobalResourcesStatus501>, GlobalResourceAdminSetGlobalResourcesOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await globalResourceAdminSetGlobalResources({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-admin/global-resources}
 */
export function useGlobalResourceAdminSetGlobalResources<TContext>(options: {
  mutation?: UseMutationOptions<GlobalResourceAdminSetGlobalResourcesStatus200 | GlobalResourceAdminSetGlobalResourcesStatus204, ResponseErrorConfig<GlobalResourceAdminSetGlobalResourcesStatus400 | GlobalResourceAdminSetGlobalResourcesStatus401 | GlobalResourceAdminSetGlobalResourcesStatus403 | GlobalResourceAdminSetGlobalResourcesStatus404 | GlobalResourceAdminSetGlobalResourcesStatus500 | GlobalResourceAdminSetGlobalResourcesStatus501>, GlobalResourceAdminSetGlobalResourcesOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? globalResourceAdminSetGlobalResourcesMutationKey()

  const baseOptions = globalResourceAdminSetGlobalResourcesMutationOptions(config) as UseMutationOptions<GlobalResourceAdminSetGlobalResourcesStatus200 | GlobalResourceAdminSetGlobalResourcesStatus204, ResponseErrorConfig<GlobalResourceAdminSetGlobalResourcesStatus400 | GlobalResourceAdminSetGlobalResourcesStatus401 | GlobalResourceAdminSetGlobalResourcesStatus403 | GlobalResourceAdminSetGlobalResourcesStatus404 | GlobalResourceAdminSetGlobalResourcesStatus500 | GlobalResourceAdminSetGlobalResourcesStatus501>, GlobalResourceAdminSetGlobalResourcesOptions, TContext>

  return useMutation<GlobalResourceAdminSetGlobalResourcesStatus200 | GlobalResourceAdminSetGlobalResourcesStatus204, ResponseErrorConfig<GlobalResourceAdminSetGlobalResourcesStatus400 | GlobalResourceAdminSetGlobalResourcesStatus401 | GlobalResourceAdminSetGlobalResourcesStatus403 | GlobalResourceAdminSetGlobalResourcesStatus404 | GlobalResourceAdminSetGlobalResourcesStatus500 | GlobalResourceAdminSetGlobalResourcesStatus501>, GlobalResourceAdminSetGlobalResourcesOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<GlobalResourceAdminSetGlobalResourcesStatus200 | GlobalResourceAdminSetGlobalResourcesStatus204, ResponseErrorConfig<GlobalResourceAdminSetGlobalResourcesStatus400 | GlobalResourceAdminSetGlobalResourcesStatus401 | GlobalResourceAdminSetGlobalResourcesStatus403 | GlobalResourceAdminSetGlobalResourcesStatus404 | GlobalResourceAdminSetGlobalResourcesStatus500 | GlobalResourceAdminSetGlobalResourcesStatus501>, GlobalResourceAdminSetGlobalResourcesOptions, TContext>
}
