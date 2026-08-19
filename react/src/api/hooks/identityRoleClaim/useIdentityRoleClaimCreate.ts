/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { IdentityRoleClaimCreateOptions, IdentityRoleClaimCreateStatus200, IdentityRoleClaimCreateStatus400, IdentityRoleClaimCreateStatus401, IdentityRoleClaimCreateStatus403, IdentityRoleClaimCreateStatus404, IdentityRoleClaimCreateStatus500, IdentityRoleClaimCreateStatus501 } from '../../models/identityRoleClaim/IdentityRoleClaimCreate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { identityRoleClaimCreate } from '../../clients/identityRoleClaim/identityRoleClaimCreate'

export const identityRoleClaimCreateMutationKey = () => [{ url: '/api/app/identity-role-claim' }] as const

export function identityRoleClaimCreateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = identityRoleClaimCreateMutationKey()
  return mutationOptions<IdentityRoleClaimCreateStatus200, ResponseErrorConfig<IdentityRoleClaimCreateStatus400 | IdentityRoleClaimCreateStatus401 | IdentityRoleClaimCreateStatus403 | IdentityRoleClaimCreateStatus404 | IdentityRoleClaimCreateStatus500 | IdentityRoleClaimCreateStatus501>, IdentityRoleClaimCreateOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await identityRoleClaimCreate({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/identity-role-claim}
 */
export function useIdentityRoleClaimCreate<TContext>(options: {
  mutation?: UseMutationOptions<IdentityRoleClaimCreateStatus200, ResponseErrorConfig<IdentityRoleClaimCreateStatus400 | IdentityRoleClaimCreateStatus401 | IdentityRoleClaimCreateStatus403 | IdentityRoleClaimCreateStatus404 | IdentityRoleClaimCreateStatus500 | IdentityRoleClaimCreateStatus501>, IdentityRoleClaimCreateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? identityRoleClaimCreateMutationKey()

  const baseOptions = identityRoleClaimCreateMutationOptions(config) as UseMutationOptions<IdentityRoleClaimCreateStatus200, ResponseErrorConfig<IdentityRoleClaimCreateStatus400 | IdentityRoleClaimCreateStatus401 | IdentityRoleClaimCreateStatus403 | IdentityRoleClaimCreateStatus404 | IdentityRoleClaimCreateStatus500 | IdentityRoleClaimCreateStatus501>, IdentityRoleClaimCreateOptions, TContext>

  return useMutation<IdentityRoleClaimCreateStatus200, ResponseErrorConfig<IdentityRoleClaimCreateStatus400 | IdentityRoleClaimCreateStatus401 | IdentityRoleClaimCreateStatus403 | IdentityRoleClaimCreateStatus404 | IdentityRoleClaimCreateStatus500 | IdentityRoleClaimCreateStatus501>, IdentityRoleClaimCreateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<IdentityRoleClaimCreateStatus200, ResponseErrorConfig<IdentityRoleClaimCreateStatus400 | IdentityRoleClaimCreateStatus401 | IdentityRoleClaimCreateStatus403 | IdentityRoleClaimCreateStatus404 | IdentityRoleClaimCreateStatus500 | IdentityRoleClaimCreateStatus501>, IdentityRoleClaimCreateOptions, TContext>
}
