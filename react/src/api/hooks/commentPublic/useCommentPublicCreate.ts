/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { CommentPublicCreateOptions, CommentPublicCreateStatus200, CommentPublicCreateStatus400, CommentPublicCreateStatus401, CommentPublicCreateStatus403, CommentPublicCreateStatus404, CommentPublicCreateStatus500, CommentPublicCreateStatus501 } from '../../models/commentPublic/CommentPublicCreate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { commentPublicCreate } from '../../clients/commentPublic/commentPublicCreate'

export const commentPublicCreateMutationKey = () => [{ url: '/api/cms-kit-public/comments/:entityType/:entityId' }] as const

export function commentPublicCreateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = commentPublicCreateMutationKey()
  return mutationOptions<CommentPublicCreateStatus200, ResponseErrorConfig<CommentPublicCreateStatus400 | CommentPublicCreateStatus401 | CommentPublicCreateStatus403 | CommentPublicCreateStatus404 | CommentPublicCreateStatus500 | CommentPublicCreateStatus501>, CommentPublicCreateOptions, TContext>({
    mutationKey,
    mutationFn: async({ path, body }) => {
      const { data } = await commentPublicCreate({ ...config, path, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-public/comments/:entityType/:entityId}
 */
export function useCommentPublicCreate<TContext>(options: {
  mutation?: UseMutationOptions<CommentPublicCreateStatus200, ResponseErrorConfig<CommentPublicCreateStatus400 | CommentPublicCreateStatus401 | CommentPublicCreateStatus403 | CommentPublicCreateStatus404 | CommentPublicCreateStatus500 | CommentPublicCreateStatus501>, CommentPublicCreateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? commentPublicCreateMutationKey()

  const baseOptions = commentPublicCreateMutationOptions(config) as UseMutationOptions<CommentPublicCreateStatus200, ResponseErrorConfig<CommentPublicCreateStatus400 | CommentPublicCreateStatus401 | CommentPublicCreateStatus403 | CommentPublicCreateStatus404 | CommentPublicCreateStatus500 | CommentPublicCreateStatus501>, CommentPublicCreateOptions, TContext>

  return useMutation<CommentPublicCreateStatus200, ResponseErrorConfig<CommentPublicCreateStatus400 | CommentPublicCreateStatus401 | CommentPublicCreateStatus403 | CommentPublicCreateStatus404 | CommentPublicCreateStatus500 | CommentPublicCreateStatus501>, CommentPublicCreateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<CommentPublicCreateStatus200, ResponseErrorConfig<CommentPublicCreateStatus400 | CommentPublicCreateStatus401 | CommentPublicCreateStatus403 | CommentPublicCreateStatus404 | CommentPublicCreateStatus500 | CommentPublicCreateStatus501>, CommentPublicCreateOptions, TContext>
}
