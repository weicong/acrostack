/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { RatingPublicDeleteOptions, RatingPublicDeleteStatus200, RatingPublicDeleteStatus204, RatingPublicDeleteStatus400, RatingPublicDeleteStatus401, RatingPublicDeleteStatus403, RatingPublicDeleteStatus404, RatingPublicDeleteStatus500, RatingPublicDeleteStatus501 } from '../../models/ratingPublic/RatingPublicDelete'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { ratingPublicDelete } from '../../clients/ratingPublic/ratingPublicDelete'

export const ratingPublicDeleteMutationKey = () => [{ url: '/api/cms-kit-public/ratings/:entityType/:entityId' }] as const

export function ratingPublicDeleteMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = ratingPublicDeleteMutationKey()
  return mutationOptions<RatingPublicDeleteStatus200 | RatingPublicDeleteStatus204, ResponseErrorConfig<RatingPublicDeleteStatus400 | RatingPublicDeleteStatus401 | RatingPublicDeleteStatus403 | RatingPublicDeleteStatus404 | RatingPublicDeleteStatus500 | RatingPublicDeleteStatus501>, RatingPublicDeleteOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await ratingPublicDelete({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-public/ratings/:entityType/:entityId}
 */
export function useRatingPublicDelete<TContext>(options: {
  mutation?: UseMutationOptions<RatingPublicDeleteStatus200 | RatingPublicDeleteStatus204, ResponseErrorConfig<RatingPublicDeleteStatus400 | RatingPublicDeleteStatus401 | RatingPublicDeleteStatus403 | RatingPublicDeleteStatus404 | RatingPublicDeleteStatus500 | RatingPublicDeleteStatus501>, RatingPublicDeleteOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? ratingPublicDeleteMutationKey()

  const baseOptions = ratingPublicDeleteMutationOptions(config) as UseMutationOptions<RatingPublicDeleteStatus200 | RatingPublicDeleteStatus204, ResponseErrorConfig<RatingPublicDeleteStatus400 | RatingPublicDeleteStatus401 | RatingPublicDeleteStatus403 | RatingPublicDeleteStatus404 | RatingPublicDeleteStatus500 | RatingPublicDeleteStatus501>, RatingPublicDeleteOptions, TContext>

  return useMutation<RatingPublicDeleteStatus200 | RatingPublicDeleteStatus204, ResponseErrorConfig<RatingPublicDeleteStatus400 | RatingPublicDeleteStatus401 | RatingPublicDeleteStatus403 | RatingPublicDeleteStatus404 | RatingPublicDeleteStatus500 | RatingPublicDeleteStatus501>, RatingPublicDeleteOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<RatingPublicDeleteStatus200 | RatingPublicDeleteStatus204, ResponseErrorConfig<RatingPublicDeleteStatus400 | RatingPublicDeleteStatus401 | RatingPublicDeleteStatus403 | RatingPublicDeleteStatus404 | RatingPublicDeleteStatus500 | RatingPublicDeleteStatus501>, RatingPublicDeleteOptions, TContext>
}
