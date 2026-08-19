/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { UserDeleteOptions, UserDeleteStatus200, UserDeleteStatus204, UserDeleteStatus400, UserDeleteStatus401, UserDeleteStatus403, UserDeleteStatus404, UserDeleteStatus500, UserDeleteStatus501 } from '../../models/user/UserDelete'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { userDelete } from '../../clients/user/userDelete'

export const userDeleteMutationKey = () => [{ url: '/api/identity/users/:id' }] as const

export function userDeleteMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = userDeleteMutationKey()
  return mutationOptions<UserDeleteStatus200 | UserDeleteStatus204, ResponseErrorConfig<UserDeleteStatus400 | UserDeleteStatus401 | UserDeleteStatus403 | UserDeleteStatus404 | UserDeleteStatus500 | UserDeleteStatus501>, UserDeleteOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await userDelete({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/identity/users/:id}
 */
export function useUserDelete<TContext>(options: {
  mutation?: UseMutationOptions<UserDeleteStatus200 | UserDeleteStatus204, ResponseErrorConfig<UserDeleteStatus400 | UserDeleteStatus401 | UserDeleteStatus403 | UserDeleteStatus404 | UserDeleteStatus500 | UserDeleteStatus501>, UserDeleteOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? userDeleteMutationKey()

  const baseOptions = userDeleteMutationOptions(config) as UseMutationOptions<UserDeleteStatus200 | UserDeleteStatus204, ResponseErrorConfig<UserDeleteStatus400 | UserDeleteStatus401 | UserDeleteStatus403 | UserDeleteStatus404 | UserDeleteStatus500 | UserDeleteStatus501>, UserDeleteOptions, TContext>

  return useMutation<UserDeleteStatus200 | UserDeleteStatus204, ResponseErrorConfig<UserDeleteStatus400 | UserDeleteStatus401 | UserDeleteStatus403 | UserDeleteStatus404 | UserDeleteStatus500 | UserDeleteStatus501>, UserDeleteOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<UserDeleteStatus200 | UserDeleteStatus204, ResponseErrorConfig<UserDeleteStatus400 | UserDeleteStatus401 | UserDeleteStatus403 | UserDeleteStatus404 | UserDeleteStatus500 | UserDeleteStatus501>, UserDeleteOptions, TContext>
}
