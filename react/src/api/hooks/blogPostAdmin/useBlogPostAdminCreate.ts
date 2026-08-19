/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BlogPostAdminCreateOptions, BlogPostAdminCreateStatus200, BlogPostAdminCreateStatus400, BlogPostAdminCreateStatus401, BlogPostAdminCreateStatus403, BlogPostAdminCreateStatus404, BlogPostAdminCreateStatus500, BlogPostAdminCreateStatus501 } from '../../models/blogPostAdmin/BlogPostAdminCreate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { blogPostAdminCreate } from '../../clients/blogPostAdmin/blogPostAdminCreate'

export const blogPostAdminCreateMutationKey = () => [{ url: '/api/cms-kit-admin/blogs/blog-posts' }] as const

export function blogPostAdminCreateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = blogPostAdminCreateMutationKey()
  return mutationOptions<BlogPostAdminCreateStatus200, ResponseErrorConfig<BlogPostAdminCreateStatus400 | BlogPostAdminCreateStatus401 | BlogPostAdminCreateStatus403 | BlogPostAdminCreateStatus404 | BlogPostAdminCreateStatus500 | BlogPostAdminCreateStatus501>, BlogPostAdminCreateOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await blogPostAdminCreate({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts}
 */
export function useBlogPostAdminCreate<TContext>(options: {
  mutation?: UseMutationOptions<BlogPostAdminCreateStatus200, ResponseErrorConfig<BlogPostAdminCreateStatus400 | BlogPostAdminCreateStatus401 | BlogPostAdminCreateStatus403 | BlogPostAdminCreateStatus404 | BlogPostAdminCreateStatus500 | BlogPostAdminCreateStatus501>, BlogPostAdminCreateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogPostAdminCreateMutationKey()

  const baseOptions = blogPostAdminCreateMutationOptions(config) as UseMutationOptions<BlogPostAdminCreateStatus200, ResponseErrorConfig<BlogPostAdminCreateStatus400 | BlogPostAdminCreateStatus401 | BlogPostAdminCreateStatus403 | BlogPostAdminCreateStatus404 | BlogPostAdminCreateStatus500 | BlogPostAdminCreateStatus501>, BlogPostAdminCreateOptions, TContext>

  return useMutation<BlogPostAdminCreateStatus200, ResponseErrorConfig<BlogPostAdminCreateStatus400 | BlogPostAdminCreateStatus401 | BlogPostAdminCreateStatus403 | BlogPostAdminCreateStatus404 | BlogPostAdminCreateStatus500 | BlogPostAdminCreateStatus501>, BlogPostAdminCreateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<BlogPostAdminCreateStatus200, ResponseErrorConfig<BlogPostAdminCreateStatus400 | BlogPostAdminCreateStatus401 | BlogPostAdminCreateStatus403 | BlogPostAdminCreateStatus404 | BlogPostAdminCreateStatus500 | BlogPostAdminCreateStatus501>, BlogPostAdminCreateOptions, TContext>
}
