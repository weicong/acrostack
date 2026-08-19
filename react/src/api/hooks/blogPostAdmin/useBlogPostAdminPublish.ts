/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BlogPostAdminPublishOptions, BlogPostAdminPublishStatus200, BlogPostAdminPublishStatus204, BlogPostAdminPublishStatus400, BlogPostAdminPublishStatus401, BlogPostAdminPublishStatus403, BlogPostAdminPublishStatus404, BlogPostAdminPublishStatus500, BlogPostAdminPublishStatus501 } from '../../models/blogPostAdmin/BlogPostAdminPublish'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { blogPostAdminPublish } from '../../clients/blogPostAdmin/blogPostAdminPublish'

export const blogPostAdminPublishMutationKey = () => [{ url: '/api/cms-kit-admin/blogs/blog-posts/:id/publish' }] as const

export function blogPostAdminPublishMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = blogPostAdminPublishMutationKey()
  return mutationOptions<BlogPostAdminPublishStatus200 | BlogPostAdminPublishStatus204, ResponseErrorConfig<BlogPostAdminPublishStatus400 | BlogPostAdminPublishStatus401 | BlogPostAdminPublishStatus403 | BlogPostAdminPublishStatus404 | BlogPostAdminPublishStatus500 | BlogPostAdminPublishStatus501>, BlogPostAdminPublishOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await blogPostAdminPublish({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id/publish}
 */
export function useBlogPostAdminPublish<TContext>(options: {
  mutation?: UseMutationOptions<BlogPostAdminPublishStatus200 | BlogPostAdminPublishStatus204, ResponseErrorConfig<BlogPostAdminPublishStatus400 | BlogPostAdminPublishStatus401 | BlogPostAdminPublishStatus403 | BlogPostAdminPublishStatus404 | BlogPostAdminPublishStatus500 | BlogPostAdminPublishStatus501>, BlogPostAdminPublishOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogPostAdminPublishMutationKey()

  const baseOptions = blogPostAdminPublishMutationOptions(config) as UseMutationOptions<BlogPostAdminPublishStatus200 | BlogPostAdminPublishStatus204, ResponseErrorConfig<BlogPostAdminPublishStatus400 | BlogPostAdminPublishStatus401 | BlogPostAdminPublishStatus403 | BlogPostAdminPublishStatus404 | BlogPostAdminPublishStatus500 | BlogPostAdminPublishStatus501>, BlogPostAdminPublishOptions, TContext>

  return useMutation<BlogPostAdminPublishStatus200 | BlogPostAdminPublishStatus204, ResponseErrorConfig<BlogPostAdminPublishStatus400 | BlogPostAdminPublishStatus401 | BlogPostAdminPublishStatus403 | BlogPostAdminPublishStatus404 | BlogPostAdminPublishStatus500 | BlogPostAdminPublishStatus501>, BlogPostAdminPublishOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<BlogPostAdminPublishStatus200 | BlogPostAdminPublishStatus204, ResponseErrorConfig<BlogPostAdminPublishStatus400 | BlogPostAdminPublishStatus401 | BlogPostAdminPublishStatus403 | BlogPostAdminPublishStatus404 | BlogPostAdminPublishStatus500 | BlogPostAdminPublishStatus501>, BlogPostAdminPublishOptions, TContext>
}
