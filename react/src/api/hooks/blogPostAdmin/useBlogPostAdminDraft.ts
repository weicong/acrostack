/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BlogPostAdminDraftOptions, BlogPostAdminDraftStatus200, BlogPostAdminDraftStatus204, BlogPostAdminDraftStatus400, BlogPostAdminDraftStatus401, BlogPostAdminDraftStatus403, BlogPostAdminDraftStatus404, BlogPostAdminDraftStatus500, BlogPostAdminDraftStatus501 } from '../../models/blogPostAdmin/BlogPostAdminDraft'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { blogPostAdminDraft } from '../../clients/blogPostAdmin/blogPostAdminDraft'

export const blogPostAdminDraftMutationKey = () => [{ url: '/api/cms-kit-admin/blogs/blog-posts/:id/draft' }] as const

export function blogPostAdminDraftMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = blogPostAdminDraftMutationKey()
  return mutationOptions<BlogPostAdminDraftStatus200 | BlogPostAdminDraftStatus204, ResponseErrorConfig<BlogPostAdminDraftStatus400 | BlogPostAdminDraftStatus401 | BlogPostAdminDraftStatus403 | BlogPostAdminDraftStatus404 | BlogPostAdminDraftStatus500 | BlogPostAdminDraftStatus501>, BlogPostAdminDraftOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await blogPostAdminDraft({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id/draft}
 */
export function useBlogPostAdminDraft<TContext>(options: {
  mutation?: UseMutationOptions<BlogPostAdminDraftStatus200 | BlogPostAdminDraftStatus204, ResponseErrorConfig<BlogPostAdminDraftStatus400 | BlogPostAdminDraftStatus401 | BlogPostAdminDraftStatus403 | BlogPostAdminDraftStatus404 | BlogPostAdminDraftStatus500 | BlogPostAdminDraftStatus501>, BlogPostAdminDraftOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogPostAdminDraftMutationKey()

  const baseOptions = blogPostAdminDraftMutationOptions(config) as UseMutationOptions<BlogPostAdminDraftStatus200 | BlogPostAdminDraftStatus204, ResponseErrorConfig<BlogPostAdminDraftStatus400 | BlogPostAdminDraftStatus401 | BlogPostAdminDraftStatus403 | BlogPostAdminDraftStatus404 | BlogPostAdminDraftStatus500 | BlogPostAdminDraftStatus501>, BlogPostAdminDraftOptions, TContext>

  return useMutation<BlogPostAdminDraftStatus200 | BlogPostAdminDraftStatus204, ResponseErrorConfig<BlogPostAdminDraftStatus400 | BlogPostAdminDraftStatus401 | BlogPostAdminDraftStatus403 | BlogPostAdminDraftStatus404 | BlogPostAdminDraftStatus500 | BlogPostAdminDraftStatus501>, BlogPostAdminDraftOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<BlogPostAdminDraftStatus200 | BlogPostAdminDraftStatus204, ResponseErrorConfig<BlogPostAdminDraftStatus400 | BlogPostAdminDraftStatus401 | BlogPostAdminDraftStatus403 | BlogPostAdminDraftStatus404 | BlogPostAdminDraftStatus500 | BlogPostAdminDraftStatus501>, BlogPostAdminDraftOptions, TContext>
}
