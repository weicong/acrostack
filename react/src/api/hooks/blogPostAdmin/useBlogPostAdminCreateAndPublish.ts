/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BlogPostAdminCreateAndPublishOptions, BlogPostAdminCreateAndPublishStatus200, BlogPostAdminCreateAndPublishStatus400, BlogPostAdminCreateAndPublishStatus401, BlogPostAdminCreateAndPublishStatus403, BlogPostAdminCreateAndPublishStatus404, BlogPostAdminCreateAndPublishStatus500, BlogPostAdminCreateAndPublishStatus501 } from '../../models/blogPostAdmin/BlogPostAdminCreateAndPublish'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { blogPostAdminCreateAndPublish } from '../../clients/blogPostAdmin/blogPostAdminCreateAndPublish'

export const blogPostAdminCreateAndPublishMutationKey = () => [{ url: '/api/cms-kit-admin/blogs/blog-posts/create-and-publish' }] as const

export function blogPostAdminCreateAndPublishMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = blogPostAdminCreateAndPublishMutationKey()
  return mutationOptions<BlogPostAdminCreateAndPublishStatus200, ResponseErrorConfig<BlogPostAdminCreateAndPublishStatus400 | BlogPostAdminCreateAndPublishStatus401 | BlogPostAdminCreateAndPublishStatus403 | BlogPostAdminCreateAndPublishStatus404 | BlogPostAdminCreateAndPublishStatus500 | BlogPostAdminCreateAndPublishStatus501>, BlogPostAdminCreateAndPublishOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await blogPostAdminCreateAndPublish({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/create-and-publish}
 */
export function useBlogPostAdminCreateAndPublish<TContext>(options: {
  mutation?: UseMutationOptions<BlogPostAdminCreateAndPublishStatus200, ResponseErrorConfig<BlogPostAdminCreateAndPublishStatus400 | BlogPostAdminCreateAndPublishStatus401 | BlogPostAdminCreateAndPublishStatus403 | BlogPostAdminCreateAndPublishStatus404 | BlogPostAdminCreateAndPublishStatus500 | BlogPostAdminCreateAndPublishStatus501>, BlogPostAdminCreateAndPublishOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogPostAdminCreateAndPublishMutationKey()

  const baseOptions = blogPostAdminCreateAndPublishMutationOptions(config) as UseMutationOptions<BlogPostAdminCreateAndPublishStatus200, ResponseErrorConfig<BlogPostAdminCreateAndPublishStatus400 | BlogPostAdminCreateAndPublishStatus401 | BlogPostAdminCreateAndPublishStatus403 | BlogPostAdminCreateAndPublishStatus404 | BlogPostAdminCreateAndPublishStatus500 | BlogPostAdminCreateAndPublishStatus501>, BlogPostAdminCreateAndPublishOptions, TContext>

  return useMutation<BlogPostAdminCreateAndPublishStatus200, ResponseErrorConfig<BlogPostAdminCreateAndPublishStatus400 | BlogPostAdminCreateAndPublishStatus401 | BlogPostAdminCreateAndPublishStatus403 | BlogPostAdminCreateAndPublishStatus404 | BlogPostAdminCreateAndPublishStatus500 | BlogPostAdminCreateAndPublishStatus501>, BlogPostAdminCreateAndPublishOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<BlogPostAdminCreateAndPublishStatus200, ResponseErrorConfig<BlogPostAdminCreateAndPublishStatus400 | BlogPostAdminCreateAndPublishStatus401 | BlogPostAdminCreateAndPublishStatus403 | BlogPostAdminCreateAndPublishStatus404 | BlogPostAdminCreateAndPublishStatus500 | BlogPostAdminCreateAndPublishStatus501>, BlogPostAdminCreateAndPublishOptions, TContext>
}
