/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { TenantDeleteDefaultConnectionStringOptions, TenantDeleteDefaultConnectionStringStatus200, TenantDeleteDefaultConnectionStringStatus204, TenantDeleteDefaultConnectionStringStatus400, TenantDeleteDefaultConnectionStringStatus401, TenantDeleteDefaultConnectionStringStatus403, TenantDeleteDefaultConnectionStringStatus404, TenantDeleteDefaultConnectionStringStatus500, TenantDeleteDefaultConnectionStringStatus501 } from '../../models/tenant/TenantDeleteDefaultConnectionString'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { tenantDeleteDefaultConnectionString } from '../../clients/tenant/tenantDeleteDefaultConnectionString'

export const tenantDeleteDefaultConnectionStringMutationKey = () => [{ url: '/api/multi-tenancy/tenants/:id/default-connection-string' }] as const

export function tenantDeleteDefaultConnectionStringMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = tenantDeleteDefaultConnectionStringMutationKey()
  return mutationOptions<TenantDeleteDefaultConnectionStringStatus200 | TenantDeleteDefaultConnectionStringStatus204, ResponseErrorConfig<TenantDeleteDefaultConnectionStringStatus400 | TenantDeleteDefaultConnectionStringStatus401 | TenantDeleteDefaultConnectionStringStatus403 | TenantDeleteDefaultConnectionStringStatus404 | TenantDeleteDefaultConnectionStringStatus500 | TenantDeleteDefaultConnectionStringStatus501>, TenantDeleteDefaultConnectionStringOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await tenantDeleteDefaultConnectionString({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/multi-tenancy/tenants/:id/default-connection-string}
 */
export function useTenantDeleteDefaultConnectionString<TContext>(options: {
  mutation?: UseMutationOptions<TenantDeleteDefaultConnectionStringStatus200 | TenantDeleteDefaultConnectionStringStatus204, ResponseErrorConfig<TenantDeleteDefaultConnectionStringStatus400 | TenantDeleteDefaultConnectionStringStatus401 | TenantDeleteDefaultConnectionStringStatus403 | TenantDeleteDefaultConnectionStringStatus404 | TenantDeleteDefaultConnectionStringStatus500 | TenantDeleteDefaultConnectionStringStatus501>, TenantDeleteDefaultConnectionStringOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? tenantDeleteDefaultConnectionStringMutationKey()

  const baseOptions = tenantDeleteDefaultConnectionStringMutationOptions(config) as UseMutationOptions<TenantDeleteDefaultConnectionStringStatus200 | TenantDeleteDefaultConnectionStringStatus204, ResponseErrorConfig<TenantDeleteDefaultConnectionStringStatus400 | TenantDeleteDefaultConnectionStringStatus401 | TenantDeleteDefaultConnectionStringStatus403 | TenantDeleteDefaultConnectionStringStatus404 | TenantDeleteDefaultConnectionStringStatus500 | TenantDeleteDefaultConnectionStringStatus501>, TenantDeleteDefaultConnectionStringOptions, TContext>

  return useMutation<TenantDeleteDefaultConnectionStringStatus200 | TenantDeleteDefaultConnectionStringStatus204, ResponseErrorConfig<TenantDeleteDefaultConnectionStringStatus400 | TenantDeleteDefaultConnectionStringStatus401 | TenantDeleteDefaultConnectionStringStatus403 | TenantDeleteDefaultConnectionStringStatus404 | TenantDeleteDefaultConnectionStringStatus500 | TenantDeleteDefaultConnectionStringStatus501>, TenantDeleteDefaultConnectionStringOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<TenantDeleteDefaultConnectionStringStatus200 | TenantDeleteDefaultConnectionStringStatus204, ResponseErrorConfig<TenantDeleteDefaultConnectionStringStatus400 | TenantDeleteDefaultConnectionStringStatus401 | TenantDeleteDefaultConnectionStringStatus403 | TenantDeleteDefaultConnectionStringStatus404 | TenantDeleteDefaultConnectionStringStatus500 | TenantDeleteDefaultConnectionStringStatus501>, TenantDeleteDefaultConnectionStringOptions, TContext>
}
