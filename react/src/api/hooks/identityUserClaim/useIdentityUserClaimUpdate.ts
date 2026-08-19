/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { IdentityUserClaimUpdateOptions, IdentityUserClaimUpdateStatus200, IdentityUserClaimUpdateStatus400, IdentityUserClaimUpdateStatus401, IdentityUserClaimUpdateStatus403, IdentityUserClaimUpdateStatus404, IdentityUserClaimUpdateStatus500, IdentityUserClaimUpdateStatus501 } from '../../models/identityUserClaim/IdentityUserClaimUpdate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { identityUserClaimUpdate } from '../../clients/identityUserClaim/identityUserClaimUpdate'

export const identityUserClaimUpdateMutationKey = () => [{ url: '/api/app/identity-user-claim/:id' }] as const

export function identityUserClaimUpdateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = identityUserClaimUpdateMutationKey()
  return mutationOptions<IdentityUserClaimUpdateStatus200, ResponseErrorConfig<IdentityUserClaimUpdateStatus400 | IdentityUserClaimUpdateStatus401 | IdentityUserClaimUpdateStatus403 | IdentityUserClaimUpdateStatus404 | IdentityUserClaimUpdateStatus500 | IdentityUserClaimUpdateStatus501>, IdentityUserClaimUpdateOptions, TContext>({
    mutationKey,
    mutationFn: async({ path, body }) => {
      const { data } = await identityUserClaimUpdate({ ...config, path, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/identity-user-claim/:id}
 */
export function useIdentityUserClaimUpdate<TContext>(options: {
  mutation?: UseMutationOptions<IdentityUserClaimUpdateStatus200, ResponseErrorConfig<IdentityUserClaimUpdateStatus400 | IdentityUserClaimUpdateStatus401 | IdentityUserClaimUpdateStatus403 | IdentityUserClaimUpdateStatus404 | IdentityUserClaimUpdateStatus500 | IdentityUserClaimUpdateStatus501>, IdentityUserClaimUpdateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? identityUserClaimUpdateMutationKey()

  const baseOptions = identityUserClaimUpdateMutationOptions(config) as UseMutationOptions<IdentityUserClaimUpdateStatus200, ResponseErrorConfig<IdentityUserClaimUpdateStatus400 | IdentityUserClaimUpdateStatus401 | IdentityUserClaimUpdateStatus403 | IdentityUserClaimUpdateStatus404 | IdentityUserClaimUpdateStatus500 | IdentityUserClaimUpdateStatus501>, IdentityUserClaimUpdateOptions, TContext>

  return useMutation<IdentityUserClaimUpdateStatus200, ResponseErrorConfig<IdentityUserClaimUpdateStatus400 | IdentityUserClaimUpdateStatus401 | IdentityUserClaimUpdateStatus403 | IdentityUserClaimUpdateStatus404 | IdentityUserClaimUpdateStatus500 | IdentityUserClaimUpdateStatus501>, IdentityUserClaimUpdateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<IdentityUserClaimUpdateStatus200, ResponseErrorConfig<IdentityUserClaimUpdateStatus400 | IdentityUserClaimUpdateStatus401 | IdentityUserClaimUpdateStatus403 | IdentityUserClaimUpdateStatus404 | IdentityUserClaimUpdateStatus500 | IdentityUserClaimUpdateStatus501>, IdentityUserClaimUpdateOptions, TContext>
}
