/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { IdentityUserClaimCreateOptions, IdentityUserClaimCreateStatus200, IdentityUserClaimCreateStatus400, IdentityUserClaimCreateStatus401, IdentityUserClaimCreateStatus403, IdentityUserClaimCreateStatus404, IdentityUserClaimCreateStatus500, IdentityUserClaimCreateStatus501 } from '../../models/identityUserClaim/IdentityUserClaimCreate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { identityUserClaimCreate } from '../../clients/identityUserClaim/identityUserClaimCreate'

export const identityUserClaimCreateMutationKey = () => [{ url: '/api/app/identity-user-claim' }] as const

export function identityUserClaimCreateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = identityUserClaimCreateMutationKey()
  return mutationOptions<IdentityUserClaimCreateStatus200, ResponseErrorConfig<IdentityUserClaimCreateStatus400 | IdentityUserClaimCreateStatus401 | IdentityUserClaimCreateStatus403 | IdentityUserClaimCreateStatus404 | IdentityUserClaimCreateStatus500 | IdentityUserClaimCreateStatus501>, IdentityUserClaimCreateOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await identityUserClaimCreate({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/identity-user-claim}
 */
export function useIdentityUserClaimCreate<TContext>(options: {
  mutation?: UseMutationOptions<IdentityUserClaimCreateStatus200, ResponseErrorConfig<IdentityUserClaimCreateStatus400 | IdentityUserClaimCreateStatus401 | IdentityUserClaimCreateStatus403 | IdentityUserClaimCreateStatus404 | IdentityUserClaimCreateStatus500 | IdentityUserClaimCreateStatus501>, IdentityUserClaimCreateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? identityUserClaimCreateMutationKey()

  const baseOptions = identityUserClaimCreateMutationOptions(config) as UseMutationOptions<IdentityUserClaimCreateStatus200, ResponseErrorConfig<IdentityUserClaimCreateStatus400 | IdentityUserClaimCreateStatus401 | IdentityUserClaimCreateStatus403 | IdentityUserClaimCreateStatus404 | IdentityUserClaimCreateStatus500 | IdentityUserClaimCreateStatus501>, IdentityUserClaimCreateOptions, TContext>

  return useMutation<IdentityUserClaimCreateStatus200, ResponseErrorConfig<IdentityUserClaimCreateStatus400 | IdentityUserClaimCreateStatus401 | IdentityUserClaimCreateStatus403 | IdentityUserClaimCreateStatus404 | IdentityUserClaimCreateStatus500 | IdentityUserClaimCreateStatus501>, IdentityUserClaimCreateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<IdentityUserClaimCreateStatus200, ResponseErrorConfig<IdentityUserClaimCreateStatus400 | IdentityUserClaimCreateStatus401 | IdentityUserClaimCreateStatus403 | IdentityUserClaimCreateStatus404 | IdentityUserClaimCreateStatus500 | IdentityUserClaimCreateStatus501>, IdentityUserClaimCreateOptions, TContext>
}
