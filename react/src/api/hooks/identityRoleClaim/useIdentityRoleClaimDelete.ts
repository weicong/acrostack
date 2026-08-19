/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { IdentityRoleClaimDeleteOptions, IdentityRoleClaimDeleteStatus200, IdentityRoleClaimDeleteStatus204, IdentityRoleClaimDeleteStatus400, IdentityRoleClaimDeleteStatus401, IdentityRoleClaimDeleteStatus403, IdentityRoleClaimDeleteStatus404, IdentityRoleClaimDeleteStatus500, IdentityRoleClaimDeleteStatus501 } from '../../models/identityRoleClaim/IdentityRoleClaimDelete'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { identityRoleClaimDelete } from '../../clients/identityRoleClaim/identityRoleClaimDelete'

export const identityRoleClaimDeleteMutationKey = () => [{ url: '/api/app/identity-role-claim/:id' }] as const

export function identityRoleClaimDeleteMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = identityRoleClaimDeleteMutationKey()
  return mutationOptions<IdentityRoleClaimDeleteStatus200 | IdentityRoleClaimDeleteStatus204, ResponseErrorConfig<IdentityRoleClaimDeleteStatus400 | IdentityRoleClaimDeleteStatus401 | IdentityRoleClaimDeleteStatus403 | IdentityRoleClaimDeleteStatus404 | IdentityRoleClaimDeleteStatus500 | IdentityRoleClaimDeleteStatus501>, IdentityRoleClaimDeleteOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await identityRoleClaimDelete({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/identity-role-claim/:id}
 */
export function useIdentityRoleClaimDelete<TContext>(options: {
  mutation?: UseMutationOptions<IdentityRoleClaimDeleteStatus200 | IdentityRoleClaimDeleteStatus204, ResponseErrorConfig<IdentityRoleClaimDeleteStatus400 | IdentityRoleClaimDeleteStatus401 | IdentityRoleClaimDeleteStatus403 | IdentityRoleClaimDeleteStatus404 | IdentityRoleClaimDeleteStatus500 | IdentityRoleClaimDeleteStatus501>, IdentityRoleClaimDeleteOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? identityRoleClaimDeleteMutationKey()

  const baseOptions = identityRoleClaimDeleteMutationOptions(config) as UseMutationOptions<IdentityRoleClaimDeleteStatus200 | IdentityRoleClaimDeleteStatus204, ResponseErrorConfig<IdentityRoleClaimDeleteStatus400 | IdentityRoleClaimDeleteStatus401 | IdentityRoleClaimDeleteStatus403 | IdentityRoleClaimDeleteStatus404 | IdentityRoleClaimDeleteStatus500 | IdentityRoleClaimDeleteStatus501>, IdentityRoleClaimDeleteOptions, TContext>

  return useMutation<IdentityRoleClaimDeleteStatus200 | IdentityRoleClaimDeleteStatus204, ResponseErrorConfig<IdentityRoleClaimDeleteStatus400 | IdentityRoleClaimDeleteStatus401 | IdentityRoleClaimDeleteStatus403 | IdentityRoleClaimDeleteStatus404 | IdentityRoleClaimDeleteStatus500 | IdentityRoleClaimDeleteStatus501>, IdentityRoleClaimDeleteOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<IdentityRoleClaimDeleteStatus200 | IdentityRoleClaimDeleteStatus204, ResponseErrorConfig<IdentityRoleClaimDeleteStatus400 | IdentityRoleClaimDeleteStatus401 | IdentityRoleClaimDeleteStatus403 | IdentityRoleClaimDeleteStatus404 | IdentityRoleClaimDeleteStatus500 | IdentityRoleClaimDeleteStatus501>, IdentityRoleClaimDeleteOptions, TContext>
}
