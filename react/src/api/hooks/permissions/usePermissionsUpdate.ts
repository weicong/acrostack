/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { PermissionsUpdateOptions, PermissionsUpdateStatus200, PermissionsUpdateStatus204, PermissionsUpdateStatus400, PermissionsUpdateStatus401, PermissionsUpdateStatus403, PermissionsUpdateStatus404, PermissionsUpdateStatus500, PermissionsUpdateStatus501 } from '../../models/permissions/PermissionsUpdate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { permissionsUpdate } from '../../clients/permissions/permissionsUpdate'

export const permissionsUpdateMutationKey = () => [{ url: '/api/permission-management/permissions' }] as const

export function permissionsUpdateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } } = {}) {
  const mutationKey = permissionsUpdateMutationKey()
  return mutationOptions<PermissionsUpdateStatus200 | PermissionsUpdateStatus204, ResponseErrorConfig<PermissionsUpdateStatus400 | PermissionsUpdateStatus401 | PermissionsUpdateStatus403 | PermissionsUpdateStatus404 | PermissionsUpdateStatus500 | PermissionsUpdateStatus501>, PermissionsUpdateOptions, TContext>({
    mutationKey,
    mutationFn: async({ query, body }) => {
      const { data } = await permissionsUpdate({ ...config, query, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/permission-management/permissions}
 */
export function usePermissionsUpdate<TContext>(options: {
  mutation?: UseMutationOptions<PermissionsUpdateStatus200 | PermissionsUpdateStatus204, ResponseErrorConfig<PermissionsUpdateStatus400 | PermissionsUpdateStatus401 | PermissionsUpdateStatus403 | PermissionsUpdateStatus404 | PermissionsUpdateStatus500 | PermissionsUpdateStatus501>, PermissionsUpdateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? permissionsUpdateMutationKey()

  const baseOptions = permissionsUpdateMutationOptions(config) as UseMutationOptions<PermissionsUpdateStatus200 | PermissionsUpdateStatus204, ResponseErrorConfig<PermissionsUpdateStatus400 | PermissionsUpdateStatus401 | PermissionsUpdateStatus403 | PermissionsUpdateStatus404 | PermissionsUpdateStatus500 | PermissionsUpdateStatus501>, PermissionsUpdateOptions, TContext>

  return useMutation<PermissionsUpdateStatus200 | PermissionsUpdateStatus204, ResponseErrorConfig<PermissionsUpdateStatus400 | PermissionsUpdateStatus401 | PermissionsUpdateStatus403 | PermissionsUpdateStatus404 | PermissionsUpdateStatus500 | PermissionsUpdateStatus501>, PermissionsUpdateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<PermissionsUpdateStatus200 | PermissionsUpdateStatus204, ResponseErrorConfig<PermissionsUpdateStatus400 | PermissionsUpdateStatus401 | PermissionsUpdateStatus403 | PermissionsUpdateStatus404 | PermissionsUpdateStatus500 | PermissionsUpdateStatus501>, PermissionsUpdateOptions, TContext>
}
