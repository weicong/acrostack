/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { IdentityRoleClaimUpdateOptions, IdentityRoleClaimUpdateStatus200, IdentityRoleClaimUpdateStatus400, IdentityRoleClaimUpdateStatus401, IdentityRoleClaimUpdateStatus403, IdentityRoleClaimUpdateStatus404, IdentityRoleClaimUpdateStatus500, IdentityRoleClaimUpdateStatus501 } from '../../models/identityRoleClaim/IdentityRoleClaimUpdate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { identityRoleClaimUpdate } from '../../clients/identityRoleClaim/identityRoleClaimUpdate'

export const identityRoleClaimUpdateMutationKey = () => [{ url: '/api/app/identity-role-claim/:id' }] as const

export function identityRoleClaimUpdateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = identityRoleClaimUpdateMutationKey()
  return mutationOptions<IdentityRoleClaimUpdateStatus200, ResponseErrorConfig<IdentityRoleClaimUpdateStatus400 | IdentityRoleClaimUpdateStatus401 | IdentityRoleClaimUpdateStatus403 | IdentityRoleClaimUpdateStatus404 | IdentityRoleClaimUpdateStatus500 | IdentityRoleClaimUpdateStatus501>, IdentityRoleClaimUpdateOptions, TContext>({
    mutationKey,
    mutationFn: async({ path, body }) => {
      const { data } = await identityRoleClaimUpdate({ ...config, path, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/identity-role-claim/:id}
 */
export function useIdentityRoleClaimUpdate<TContext>(options: {
  mutation?: UseMutationOptions<IdentityRoleClaimUpdateStatus200, ResponseErrorConfig<IdentityRoleClaimUpdateStatus400 | IdentityRoleClaimUpdateStatus401 | IdentityRoleClaimUpdateStatus403 | IdentityRoleClaimUpdateStatus404 | IdentityRoleClaimUpdateStatus500 | IdentityRoleClaimUpdateStatus501>, IdentityRoleClaimUpdateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? identityRoleClaimUpdateMutationKey()

  const baseOptions = identityRoleClaimUpdateMutationOptions(config) as UseMutationOptions<IdentityRoleClaimUpdateStatus200, ResponseErrorConfig<IdentityRoleClaimUpdateStatus400 | IdentityRoleClaimUpdateStatus401 | IdentityRoleClaimUpdateStatus403 | IdentityRoleClaimUpdateStatus404 | IdentityRoleClaimUpdateStatus500 | IdentityRoleClaimUpdateStatus501>, IdentityRoleClaimUpdateOptions, TContext>

  return useMutation<IdentityRoleClaimUpdateStatus200, ResponseErrorConfig<IdentityRoleClaimUpdateStatus400 | IdentityRoleClaimUpdateStatus401 | IdentityRoleClaimUpdateStatus403 | IdentityRoleClaimUpdateStatus404 | IdentityRoleClaimUpdateStatus500 | IdentityRoleClaimUpdateStatus501>, IdentityRoleClaimUpdateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<IdentityRoleClaimUpdateStatus200, ResponseErrorConfig<IdentityRoleClaimUpdateStatus400 | IdentityRoleClaimUpdateStatus401 | IdentityRoleClaimUpdateStatus403 | IdentityRoleClaimUpdateStatus404 | IdentityRoleClaimUpdateStatus500 | IdentityRoleClaimUpdateStatus501>, IdentityRoleClaimUpdateOptions, TContext>
}
