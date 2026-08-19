/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BlogPostAdminSendToReviewOptions, BlogPostAdminSendToReviewStatus200, BlogPostAdminSendToReviewStatus204, BlogPostAdminSendToReviewStatus400, BlogPostAdminSendToReviewStatus401, BlogPostAdminSendToReviewStatus403, BlogPostAdminSendToReviewStatus404, BlogPostAdminSendToReviewStatus500, BlogPostAdminSendToReviewStatus501 } from '../../models/blogPostAdmin/BlogPostAdminSendToReview'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { blogPostAdminSendToReview } from '../../clients/blogPostAdmin/blogPostAdminSendToReview'

export const blogPostAdminSendToReviewMutationKey = () => [{ url: '/api/cms-kit-admin/blogs/blog-posts/:id/send-to-review' }] as const

export function blogPostAdminSendToReviewMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = blogPostAdminSendToReviewMutationKey()
  return mutationOptions<BlogPostAdminSendToReviewStatus200 | BlogPostAdminSendToReviewStatus204, ResponseErrorConfig<BlogPostAdminSendToReviewStatus400 | BlogPostAdminSendToReviewStatus401 | BlogPostAdminSendToReviewStatus403 | BlogPostAdminSendToReviewStatus404 | BlogPostAdminSendToReviewStatus500 | BlogPostAdminSendToReviewStatus501>, BlogPostAdminSendToReviewOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await blogPostAdminSendToReview({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id/send-to-review}
 */
export function useBlogPostAdminSendToReview<TContext>(options: {
  mutation?: UseMutationOptions<BlogPostAdminSendToReviewStatus200 | BlogPostAdminSendToReviewStatus204, ResponseErrorConfig<BlogPostAdminSendToReviewStatus400 | BlogPostAdminSendToReviewStatus401 | BlogPostAdminSendToReviewStatus403 | BlogPostAdminSendToReviewStatus404 | BlogPostAdminSendToReviewStatus500 | BlogPostAdminSendToReviewStatus501>, BlogPostAdminSendToReviewOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogPostAdminSendToReviewMutationKey()

  const baseOptions = blogPostAdminSendToReviewMutationOptions(config) as UseMutationOptions<BlogPostAdminSendToReviewStatus200 | BlogPostAdminSendToReviewStatus204, ResponseErrorConfig<BlogPostAdminSendToReviewStatus400 | BlogPostAdminSendToReviewStatus401 | BlogPostAdminSendToReviewStatus403 | BlogPostAdminSendToReviewStatus404 | BlogPostAdminSendToReviewStatus500 | BlogPostAdminSendToReviewStatus501>, BlogPostAdminSendToReviewOptions, TContext>

  return useMutation<BlogPostAdminSendToReviewStatus200 | BlogPostAdminSendToReviewStatus204, ResponseErrorConfig<BlogPostAdminSendToReviewStatus400 | BlogPostAdminSendToReviewStatus401 | BlogPostAdminSendToReviewStatus403 | BlogPostAdminSendToReviewStatus404 | BlogPostAdminSendToReviewStatus500 | BlogPostAdminSendToReviewStatus501>, BlogPostAdminSendToReviewOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<BlogPostAdminSendToReviewStatus200 | BlogPostAdminSendToReviewStatus204, ResponseErrorConfig<BlogPostAdminSendToReviewStatus400 | BlogPostAdminSendToReviewStatus401 | BlogPostAdminSendToReviewStatus403 | BlogPostAdminSendToReviewStatus404 | BlogPostAdminSendToReviewStatus500 | BlogPostAdminSendToReviewStatus501>, BlogPostAdminSendToReviewOptions, TContext>
}
