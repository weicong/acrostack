/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { UserUpdateRolesOptions, UserUpdateRolesStatus200, UserUpdateRolesStatus204, UserUpdateRolesStatus400, UserUpdateRolesStatus401, UserUpdateRolesStatus403, UserUpdateRolesStatus404, UserUpdateRolesStatus500, UserUpdateRolesStatus501 } from '../../models/user/UserUpdateRoles'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { userUpdateRoles } from '../../clients/user/userUpdateRoles'

export const userUpdateRolesMutationKey = () => [{ url: '/api/identity/users/:id/roles' }] as const

export function userUpdateRolesMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } } = {}) {
  const mutationKey = userUpdateRolesMutationKey()
  return mutationOptions<UserUpdateRolesStatus200 | UserUpdateRolesStatus204, ResponseErrorConfig<UserUpdateRolesStatus400 | UserUpdateRolesStatus401 | UserUpdateRolesStatus403 | UserUpdateRolesStatus404 | UserUpdateRolesStatus500 | UserUpdateRolesStatus501>, UserUpdateRolesOptions, TContext>({
    mutationKey,
    mutationFn: async({ path, body }) => {
      const { data } = await userUpdateRoles({ ...config, path, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/identity/users/:id/roles}
 */
export function useUserUpdateRoles<TContext>(options: {
  mutation?: UseMutationOptions<UserUpdateRolesStatus200 | UserUpdateRolesStatus204, ResponseErrorConfig<UserUpdateRolesStatus400 | UserUpdateRolesStatus401 | UserUpdateRolesStatus403 | UserUpdateRolesStatus404 | UserUpdateRolesStatus500 | UserUpdateRolesStatus501>, UserUpdateRolesOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? userUpdateRolesMutationKey()

  const baseOptions = userUpdateRolesMutationOptions(config) as UseMutationOptions<UserUpdateRolesStatus200 | UserUpdateRolesStatus204, ResponseErrorConfig<UserUpdateRolesStatus400 | UserUpdateRolesStatus401 | UserUpdateRolesStatus403 | UserUpdateRolesStatus404 | UserUpdateRolesStatus500 | UserUpdateRolesStatus501>, UserUpdateRolesOptions, TContext>

  return useMutation<UserUpdateRolesStatus200 | UserUpdateRolesStatus204, ResponseErrorConfig<UserUpdateRolesStatus400 | UserUpdateRolesStatus401 | UserUpdateRolesStatus403 | UserUpdateRolesStatus404 | UserUpdateRolesStatus500 | UserUpdateRolesStatus501>, UserUpdateRolesOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<UserUpdateRolesStatus200 | UserUpdateRolesStatus204, ResponseErrorConfig<UserUpdateRolesStatus400 | UserUpdateRolesStatus401 | UserUpdateRolesStatus403 | UserUpdateRolesStatus404 | UserUpdateRolesStatus500 | UserUpdateRolesStatus501>, UserUpdateRolesOptions, TContext>
}
