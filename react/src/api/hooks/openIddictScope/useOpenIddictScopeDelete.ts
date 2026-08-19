/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { OpenIddictScopeDeleteOptions, OpenIddictScopeDeleteStatus200, OpenIddictScopeDeleteStatus204, OpenIddictScopeDeleteStatus400, OpenIddictScopeDeleteStatus401, OpenIddictScopeDeleteStatus403, OpenIddictScopeDeleteStatus404, OpenIddictScopeDeleteStatus500, OpenIddictScopeDeleteStatus501 } from '../../models/openIddictScope/OpenIddictScopeDelete'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { openIddictScopeDelete } from '../../clients/openIddictScope/openIddictScopeDelete'

export const openIddictScopeDeleteMutationKey = () => [{ url: '/api/app/open-iddict-scope/:id' }] as const

export function openIddictScopeDeleteMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = openIddictScopeDeleteMutationKey()
  return mutationOptions<OpenIddictScopeDeleteStatus200 | OpenIddictScopeDeleteStatus204, ResponseErrorConfig<OpenIddictScopeDeleteStatus400 | OpenIddictScopeDeleteStatus401 | OpenIddictScopeDeleteStatus403 | OpenIddictScopeDeleteStatus404 | OpenIddictScopeDeleteStatus500 | OpenIddictScopeDeleteStatus501>, OpenIddictScopeDeleteOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await openIddictScopeDelete({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/open-iddict-scope/:id}
 */
export function useOpenIddictScopeDelete<TContext>(options: {
  mutation?: UseMutationOptions<OpenIddictScopeDeleteStatus200 | OpenIddictScopeDeleteStatus204, ResponseErrorConfig<OpenIddictScopeDeleteStatus400 | OpenIddictScopeDeleteStatus401 | OpenIddictScopeDeleteStatus403 | OpenIddictScopeDeleteStatus404 | OpenIddictScopeDeleteStatus500 | OpenIddictScopeDeleteStatus501>, OpenIddictScopeDeleteOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? openIddictScopeDeleteMutationKey()

  const baseOptions = openIddictScopeDeleteMutationOptions(config) as UseMutationOptions<OpenIddictScopeDeleteStatus200 | OpenIddictScopeDeleteStatus204, ResponseErrorConfig<OpenIddictScopeDeleteStatus400 | OpenIddictScopeDeleteStatus401 | OpenIddictScopeDeleteStatus403 | OpenIddictScopeDeleteStatus404 | OpenIddictScopeDeleteStatus500 | OpenIddictScopeDeleteStatus501>, OpenIddictScopeDeleteOptions, TContext>

  return useMutation<OpenIddictScopeDeleteStatus200 | OpenIddictScopeDeleteStatus204, ResponseErrorConfig<OpenIddictScopeDeleteStatus400 | OpenIddictScopeDeleteStatus401 | OpenIddictScopeDeleteStatus403 | OpenIddictScopeDeleteStatus404 | OpenIddictScopeDeleteStatus500 | OpenIddictScopeDeleteStatus501>, OpenIddictScopeDeleteOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<OpenIddictScopeDeleteStatus200 | OpenIddictScopeDeleteStatus204, ResponseErrorConfig<OpenIddictScopeDeleteStatus400 | OpenIddictScopeDeleteStatus401 | OpenIddictScopeDeleteStatus403 | OpenIddictScopeDeleteStatus404 | OpenIddictScopeDeleteStatus500 | OpenIddictScopeDeleteStatus501>, OpenIddictScopeDeleteOptions, TContext>
}
