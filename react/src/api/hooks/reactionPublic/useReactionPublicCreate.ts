/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { ReactionPublicCreateOptions, ReactionPublicCreateStatus200, ReactionPublicCreateStatus204, ReactionPublicCreateStatus400, ReactionPublicCreateStatus401, ReactionPublicCreateStatus403, ReactionPublicCreateStatus404, ReactionPublicCreateStatus500, ReactionPublicCreateStatus501 } from '../../models/reactionPublic/ReactionPublicCreate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { reactionPublicCreate } from '../../clients/reactionPublic/reactionPublicCreate'

export const reactionPublicCreateMutationKey = () => [{ url: '/api/cms-kit-public/reactions/:entityType/:entityId/:reaction' }] as const

export function reactionPublicCreateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = reactionPublicCreateMutationKey()
  return mutationOptions<ReactionPublicCreateStatus200 | ReactionPublicCreateStatus204, ResponseErrorConfig<ReactionPublicCreateStatus400 | ReactionPublicCreateStatus401 | ReactionPublicCreateStatus403 | ReactionPublicCreateStatus404 | ReactionPublicCreateStatus500 | ReactionPublicCreateStatus501>, ReactionPublicCreateOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await reactionPublicCreate({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-public/reactions/:entityType/:entityId/:reaction}
 */
export function useReactionPublicCreate<TContext>(options: {
  mutation?: UseMutationOptions<ReactionPublicCreateStatus200 | ReactionPublicCreateStatus204, ResponseErrorConfig<ReactionPublicCreateStatus400 | ReactionPublicCreateStatus401 | ReactionPublicCreateStatus403 | ReactionPublicCreateStatus404 | ReactionPublicCreateStatus500 | ReactionPublicCreateStatus501>, ReactionPublicCreateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? reactionPublicCreateMutationKey()

  const baseOptions = reactionPublicCreateMutationOptions(config) as UseMutationOptions<ReactionPublicCreateStatus200 | ReactionPublicCreateStatus204, ResponseErrorConfig<ReactionPublicCreateStatus400 | ReactionPublicCreateStatus401 | ReactionPublicCreateStatus403 | ReactionPublicCreateStatus404 | ReactionPublicCreateStatus500 | ReactionPublicCreateStatus501>, ReactionPublicCreateOptions, TContext>

  return useMutation<ReactionPublicCreateStatus200 | ReactionPublicCreateStatus204, ResponseErrorConfig<ReactionPublicCreateStatus400 | ReactionPublicCreateStatus401 | ReactionPublicCreateStatus403 | ReactionPublicCreateStatus404 | ReactionPublicCreateStatus500 | ReactionPublicCreateStatus501>, ReactionPublicCreateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<ReactionPublicCreateStatus200 | ReactionPublicCreateStatus204, ResponseErrorConfig<ReactionPublicCreateStatus400 | ReactionPublicCreateStatus401 | ReactionPublicCreateStatus403 | ReactionPublicCreateStatus404 | ReactionPublicCreateStatus500 | ReactionPublicCreateStatus501>, ReactionPublicCreateOptions, TContext>
}
