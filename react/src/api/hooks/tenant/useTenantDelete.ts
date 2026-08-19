/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { TenantDeleteOptions, TenantDeleteStatus200, TenantDeleteStatus204, TenantDeleteStatus400, TenantDeleteStatus401, TenantDeleteStatus403, TenantDeleteStatus404, TenantDeleteStatus500, TenantDeleteStatus501 } from '../../models/tenant/TenantDelete'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { tenantDelete } from '../../clients/tenant/tenantDelete'

export const tenantDeleteMutationKey = () => [{ url: '/api/multi-tenancy/tenants/:id' }] as const

export function tenantDeleteMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = tenantDeleteMutationKey()
  return mutationOptions<TenantDeleteStatus200 | TenantDeleteStatus204, ResponseErrorConfig<TenantDeleteStatus400 | TenantDeleteStatus401 | TenantDeleteStatus403 | TenantDeleteStatus404 | TenantDeleteStatus500 | TenantDeleteStatus501>, TenantDeleteOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await tenantDelete({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/multi-tenancy/tenants/:id}
 */
export function useTenantDelete<TContext>(options: {
  mutation?: UseMutationOptions<TenantDeleteStatus200 | TenantDeleteStatus204, ResponseErrorConfig<TenantDeleteStatus400 | TenantDeleteStatus401 | TenantDeleteStatus403 | TenantDeleteStatus404 | TenantDeleteStatus500 | TenantDeleteStatus501>, TenantDeleteOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? tenantDeleteMutationKey()

  const baseOptions = tenantDeleteMutationOptions(config) as UseMutationOptions<TenantDeleteStatus200 | TenantDeleteStatus204, ResponseErrorConfig<TenantDeleteStatus400 | TenantDeleteStatus401 | TenantDeleteStatus403 | TenantDeleteStatus404 | TenantDeleteStatus500 | TenantDeleteStatus501>, TenantDeleteOptions, TContext>

  return useMutation<TenantDeleteStatus200 | TenantDeleteStatus204, ResponseErrorConfig<TenantDeleteStatus400 | TenantDeleteStatus401 | TenantDeleteStatus403 | TenantDeleteStatus404 | TenantDeleteStatus500 | TenantDeleteStatus501>, TenantDeleteOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<TenantDeleteStatus200 | TenantDeleteStatus204, ResponseErrorConfig<TenantDeleteStatus400 | TenantDeleteStatus401 | TenantDeleteStatus403 | TenantDeleteStatus404 | TenantDeleteStatus500 | TenantDeleteStatus501>, TenantDeleteOptions, TContext>
}
