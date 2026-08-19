/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { ProfileChangePasswordOptions, ProfileChangePasswordStatus200, ProfileChangePasswordStatus204, ProfileChangePasswordStatus400, ProfileChangePasswordStatus401, ProfileChangePasswordStatus403, ProfileChangePasswordStatus404, ProfileChangePasswordStatus500, ProfileChangePasswordStatus501 } from '../../models/profile/ProfileChangePassword'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { profileChangePassword } from '../../clients/profile/profileChangePassword'

export const profileChangePasswordMutationKey = () => [{ url: '/api/account/my-profile/change-password' }] as const

export function profileChangePasswordMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } } = {}) {
  const mutationKey = profileChangePasswordMutationKey()
  return mutationOptions<ProfileChangePasswordStatus200 | ProfileChangePasswordStatus204, ResponseErrorConfig<ProfileChangePasswordStatus400 | ProfileChangePasswordStatus401 | ProfileChangePasswordStatus403 | ProfileChangePasswordStatus404 | ProfileChangePasswordStatus500 | ProfileChangePasswordStatus501>, ProfileChangePasswordOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await profileChangePassword({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/account/my-profile/change-password}
 */
export function useProfileChangePassword<TContext>(options: {
  mutation?: UseMutationOptions<ProfileChangePasswordStatus200 | ProfileChangePasswordStatus204, ResponseErrorConfig<ProfileChangePasswordStatus400 | ProfileChangePasswordStatus401 | ProfileChangePasswordStatus403 | ProfileChangePasswordStatus404 | ProfileChangePasswordStatus500 | ProfileChangePasswordStatus501>, ProfileChangePasswordOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? profileChangePasswordMutationKey()

  const baseOptions = profileChangePasswordMutationOptions(config) as UseMutationOptions<ProfileChangePasswordStatus200 | ProfileChangePasswordStatus204, ResponseErrorConfig<ProfileChangePasswordStatus400 | ProfileChangePasswordStatus401 | ProfileChangePasswordStatus403 | ProfileChangePasswordStatus404 | ProfileChangePasswordStatus500 | ProfileChangePasswordStatus501>, ProfileChangePasswordOptions, TContext>

  return useMutation<ProfileChangePasswordStatus200 | ProfileChangePasswordStatus204, ResponseErrorConfig<ProfileChangePasswordStatus400 | ProfileChangePasswordStatus401 | ProfileChangePasswordStatus403 | ProfileChangePasswordStatus404 | ProfileChangePasswordStatus500 | ProfileChangePasswordStatus501>, ProfileChangePasswordOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<ProfileChangePasswordStatus200 | ProfileChangePasswordStatus204, ResponseErrorConfig<ProfileChangePasswordStatus400 | ProfileChangePasswordStatus401 | ProfileChangePasswordStatus403 | ProfileChangePasswordStatus404 | ProfileChangePasswordStatus500 | ProfileChangePasswordStatus501>, ProfileChangePasswordOptions, TContext>
}
