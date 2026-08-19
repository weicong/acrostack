/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BlogPostAdminCreateAndSendToReviewOptions, BlogPostAdminCreateAndSendToReviewStatus200, BlogPostAdminCreateAndSendToReviewStatus400, BlogPostAdminCreateAndSendToReviewStatus401, BlogPostAdminCreateAndSendToReviewStatus403, BlogPostAdminCreateAndSendToReviewStatus404, BlogPostAdminCreateAndSendToReviewStatus500, BlogPostAdminCreateAndSendToReviewStatus501 } from '../../models/blogPostAdmin/BlogPostAdminCreateAndSendToReview'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { blogPostAdminCreateAndSendToReview } from '../../clients/blogPostAdmin/blogPostAdminCreateAndSendToReview'

export const blogPostAdminCreateAndSendToReviewMutationKey = () => [{ url: '/api/cms-kit-admin/blogs/blog-posts/create-and-send-to-review' }] as const

export function blogPostAdminCreateAndSendToReviewMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = blogPostAdminCreateAndSendToReviewMutationKey()
  return mutationOptions<BlogPostAdminCreateAndSendToReviewStatus200, ResponseErrorConfig<BlogPostAdminCreateAndSendToReviewStatus400 | BlogPostAdminCreateAndSendToReviewStatus401 | BlogPostAdminCreateAndSendToReviewStatus403 | BlogPostAdminCreateAndSendToReviewStatus404 | BlogPostAdminCreateAndSendToReviewStatus500 | BlogPostAdminCreateAndSendToReviewStatus501>, BlogPostAdminCreateAndSendToReviewOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await blogPostAdminCreateAndSendToReview({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/create-and-send-to-review}
 */
export function useBlogPostAdminCreateAndSendToReview<TContext>(options: {
  mutation?: UseMutationOptions<BlogPostAdminCreateAndSendToReviewStatus200, ResponseErrorConfig<BlogPostAdminCreateAndSendToReviewStatus400 | BlogPostAdminCreateAndSendToReviewStatus401 | BlogPostAdminCreateAndSendToReviewStatus403 | BlogPostAdminCreateAndSendToReviewStatus404 | BlogPostAdminCreateAndSendToReviewStatus500 | BlogPostAdminCreateAndSendToReviewStatus501>, BlogPostAdminCreateAndSendToReviewOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogPostAdminCreateAndSendToReviewMutationKey()

  const baseOptions = blogPostAdminCreateAndSendToReviewMutationOptions(config) as UseMutationOptions<BlogPostAdminCreateAndSendToReviewStatus200, ResponseErrorConfig<BlogPostAdminCreateAndSendToReviewStatus400 | BlogPostAdminCreateAndSendToReviewStatus401 | BlogPostAdminCreateAndSendToReviewStatus403 | BlogPostAdminCreateAndSendToReviewStatus404 | BlogPostAdminCreateAndSendToReviewStatus500 | BlogPostAdminCreateAndSendToReviewStatus501>, BlogPostAdminCreateAndSendToReviewOptions, TContext>

  return useMutation<BlogPostAdminCreateAndSendToReviewStatus200, ResponseErrorConfig<BlogPostAdminCreateAndSendToReviewStatus400 | BlogPostAdminCreateAndSendToReviewStatus401 | BlogPostAdminCreateAndSendToReviewStatus403 | BlogPostAdminCreateAndSendToReviewStatus404 | BlogPostAdminCreateAndSendToReviewStatus500 | BlogPostAdminCreateAndSendToReviewStatus501>, BlogPostAdminCreateAndSendToReviewOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<BlogPostAdminCreateAndSendToReviewStatus200, ResponseErrorConfig<BlogPostAdminCreateAndSendToReviewStatus400 | BlogPostAdminCreateAndSendToReviewStatus401 | BlogPostAdminCreateAndSendToReviewStatus403 | BlogPostAdminCreateAndSendToReviewStatus404 | BlogPostAdminCreateAndSendToReviewStatus500 | BlogPostAdminCreateAndSendToReviewStatus501>, BlogPostAdminCreateAndSendToReviewOptions, TContext>
}
