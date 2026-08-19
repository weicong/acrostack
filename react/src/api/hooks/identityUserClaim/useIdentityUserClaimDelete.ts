/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { IdentityUserClaimDeleteOptions, IdentityUserClaimDeleteStatus200, IdentityUserClaimDeleteStatus204, IdentityUserClaimDeleteStatus400, IdentityUserClaimDeleteStatus401, IdentityUserClaimDeleteStatus403, IdentityUserClaimDeleteStatus404, IdentityUserClaimDeleteStatus500, IdentityUserClaimDeleteStatus501 } from '../../models/identityUserClaim/IdentityUserClaimDelete'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { identityUserClaimDelete } from '../../clients/identityUserClaim/identityUserClaimDelete'

export const identityUserClaimDeleteMutationKey = () => [{ url: '/api/app/identity-user-claim/:id' }] as const

export function identityUserClaimDeleteMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = identityUserClaimDeleteMutationKey()
  return mutationOptions<IdentityUserClaimDeleteStatus200 | IdentityUserClaimDeleteStatus204, ResponseErrorConfig<IdentityUserClaimDeleteStatus400 | IdentityUserClaimDeleteStatus401 | IdentityUserClaimDeleteStatus403 | IdentityUserClaimDeleteStatus404 | IdentityUserClaimDeleteStatus500 | IdentityUserClaimDeleteStatus501>, IdentityUserClaimDeleteOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await identityUserClaimDelete({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/identity-user-claim/:id}
 */
export function useIdentityUserClaimDelete<TContext>(options: {
  mutation?: UseMutationOptions<IdentityUserClaimDeleteStatus200 | IdentityUserClaimDeleteStatus204, ResponseErrorConfig<IdentityUserClaimDeleteStatus400 | IdentityUserClaimDeleteStatus401 | IdentityUserClaimDeleteStatus403 | IdentityUserClaimDeleteStatus404 | IdentityUserClaimDeleteStatus500 | IdentityUserClaimDeleteStatus501>, IdentityUserClaimDeleteOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? identityUserClaimDeleteMutationKey()

  const baseOptions = identityUserClaimDeleteMutationOptions(config) as UseMutationOptions<IdentityUserClaimDeleteStatus200 | IdentityUserClaimDeleteStatus204, ResponseErrorConfig<IdentityUserClaimDeleteStatus400 | IdentityUserClaimDeleteStatus401 | IdentityUserClaimDeleteStatus403 | IdentityUserClaimDeleteStatus404 | IdentityUserClaimDeleteStatus500 | IdentityUserClaimDeleteStatus501>, IdentityUserClaimDeleteOptions, TContext>

  return useMutation<IdentityUserClaimDeleteStatus200 | IdentityUserClaimDeleteStatus204, ResponseErrorConfig<IdentityUserClaimDeleteStatus400 | IdentityUserClaimDeleteStatus401 | IdentityUserClaimDeleteStatus403 | IdentityUserClaimDeleteStatus404 | IdentityUserClaimDeleteStatus500 | IdentityUserClaimDeleteStatus501>, IdentityUserClaimDeleteOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<IdentityUserClaimDeleteStatus200 | IdentityUserClaimDeleteStatus204, ResponseErrorConfig<IdentityUserClaimDeleteStatus400 | IdentityUserClaimDeleteStatus401 | IdentityUserClaimDeleteStatus403 | IdentityUserClaimDeleteStatus404 | IdentityUserClaimDeleteStatus500 | IdentityUserClaimDeleteStatus501>, IdentityUserClaimDeleteOptions, TContext>
}
