/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { FeaturesDeleteOptions, FeaturesDeleteStatus200, FeaturesDeleteStatus204, FeaturesDeleteStatus400, FeaturesDeleteStatus401, FeaturesDeleteStatus403, FeaturesDeleteStatus404, FeaturesDeleteStatus500, FeaturesDeleteStatus501 } from '../../models/features/FeaturesDelete'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { featuresDelete } from '../../clients/features/featuresDelete'

export const featuresDeleteMutationKey = () => [{ url: '/api/feature-management/features' }] as const

export function featuresDeleteMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = featuresDeleteMutationKey()
  return mutationOptions<FeaturesDeleteStatus200 | FeaturesDeleteStatus204, ResponseErrorConfig<FeaturesDeleteStatus400 | FeaturesDeleteStatus401 | FeaturesDeleteStatus403 | FeaturesDeleteStatus404 | FeaturesDeleteStatus500 | FeaturesDeleteStatus501>, FeaturesDeleteOptions, TContext>({
    mutationKey,
    mutationFn: async({ query }) => {
      const { data } = await featuresDelete({ ...config, query, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/feature-management/features}
 */
export function useFeaturesDelete<TContext>(options: {
  mutation?: UseMutationOptions<FeaturesDeleteStatus200 | FeaturesDeleteStatus204, ResponseErrorConfig<FeaturesDeleteStatus400 | FeaturesDeleteStatus401 | FeaturesDeleteStatus403 | FeaturesDeleteStatus404 | FeaturesDeleteStatus500 | FeaturesDeleteStatus501>, FeaturesDeleteOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? featuresDeleteMutationKey()

  const baseOptions = featuresDeleteMutationOptions(config) as UseMutationOptions<FeaturesDeleteStatus200 | FeaturesDeleteStatus204, ResponseErrorConfig<FeaturesDeleteStatus400 | FeaturesDeleteStatus401 | FeaturesDeleteStatus403 | FeaturesDeleteStatus404 | FeaturesDeleteStatus500 | FeaturesDeleteStatus501>, FeaturesDeleteOptions, TContext>

  return useMutation<FeaturesDeleteStatus200 | FeaturesDeleteStatus204, ResponseErrorConfig<FeaturesDeleteStatus400 | FeaturesDeleteStatus401 | FeaturesDeleteStatus403 | FeaturesDeleteStatus404 | FeaturesDeleteStatus500 | FeaturesDeleteStatus501>, FeaturesDeleteOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<FeaturesDeleteStatus200 | FeaturesDeleteStatus204, ResponseErrorConfig<FeaturesDeleteStatus400 | FeaturesDeleteStatus401 | FeaturesDeleteStatus403 | FeaturesDeleteStatus404 | FeaturesDeleteStatus500 | FeaturesDeleteStatus501>, FeaturesDeleteOptions, TContext>
}
