/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { RoleDeleteOptions, RoleDeleteStatus200, RoleDeleteStatus204, RoleDeleteStatus400, RoleDeleteStatus401, RoleDeleteStatus403, RoleDeleteStatus404, RoleDeleteStatus500, RoleDeleteStatus501 } from '../../models/role/RoleDelete'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { roleDelete } from '../../clients/role/roleDelete'

export const roleDeleteMutationKey = () => [{ url: '/api/identity/roles/:id' }] as const

export function roleDeleteMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = roleDeleteMutationKey()
  return mutationOptions<RoleDeleteStatus200 | RoleDeleteStatus204, ResponseErrorConfig<RoleDeleteStatus400 | RoleDeleteStatus401 | RoleDeleteStatus403 | RoleDeleteStatus404 | RoleDeleteStatus500 | RoleDeleteStatus501>, RoleDeleteOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await roleDelete({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/identity/roles/:id}
 */
export function useRoleDelete<TContext>(options: {
  mutation?: UseMutationOptions<RoleDeleteStatus200 | RoleDeleteStatus204, ResponseErrorConfig<RoleDeleteStatus400 | RoleDeleteStatus401 | RoleDeleteStatus403 | RoleDeleteStatus404 | RoleDeleteStatus500 | RoleDeleteStatus501>, RoleDeleteOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? roleDeleteMutationKey()

  const baseOptions = roleDeleteMutationOptions(config) as UseMutationOptions<RoleDeleteStatus200 | RoleDeleteStatus204, ResponseErrorConfig<RoleDeleteStatus400 | RoleDeleteStatus401 | RoleDeleteStatus403 | RoleDeleteStatus404 | RoleDeleteStatus500 | RoleDeleteStatus501>, RoleDeleteOptions, TContext>

  return useMutation<RoleDeleteStatus200 | RoleDeleteStatus204, ResponseErrorConfig<RoleDeleteStatus400 | RoleDeleteStatus401 | RoleDeleteStatus403 | RoleDeleteStatus404 | RoleDeleteStatus500 | RoleDeleteStatus501>, RoleDeleteOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<RoleDeleteStatus200 | RoleDeleteStatus204, ResponseErrorConfig<RoleDeleteStatus400 | RoleDeleteStatus401 | RoleDeleteStatus403 | RoleDeleteStatus404 | RoleDeleteStatus500 | RoleDeleteStatus501>, RoleDeleteOptions, TContext>
}
