/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BlogFeatureAdminSetOptions, BlogFeatureAdminSetStatus200, BlogFeatureAdminSetStatus204, BlogFeatureAdminSetStatus400, BlogFeatureAdminSetStatus401, BlogFeatureAdminSetStatus403, BlogFeatureAdminSetStatus404, BlogFeatureAdminSetStatus500, BlogFeatureAdminSetStatus501 } from '../../models/blogFeatureAdmin/BlogFeatureAdminSet'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { blogFeatureAdminSet } from '../../clients/blogFeatureAdmin/blogFeatureAdminSet'

export const blogFeatureAdminSetMutationKey = () => [{ url: '/api/cms-kit-admin/blogs/:blogId/features' }] as const

export function blogFeatureAdminSetMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } } = {}) {
  const mutationKey = blogFeatureAdminSetMutationKey()
  return mutationOptions<BlogFeatureAdminSetStatus200 | BlogFeatureAdminSetStatus204, ResponseErrorConfig<BlogFeatureAdminSetStatus400 | BlogFeatureAdminSetStatus401 | BlogFeatureAdminSetStatus403 | BlogFeatureAdminSetStatus404 | BlogFeatureAdminSetStatus500 | BlogFeatureAdminSetStatus501>, BlogFeatureAdminSetOptions, TContext>({
    mutationKey,
    mutationFn: async({ path, body }) => {
      const { data } = await blogFeatureAdminSet({ ...config, path, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-admin/blogs/:blogId/features}
 */
export function useBlogFeatureAdminSet<TContext>(options: {
  mutation?: UseMutationOptions<BlogFeatureAdminSetStatus200 | BlogFeatureAdminSetStatus204, ResponseErrorConfig<BlogFeatureAdminSetStatus400 | BlogFeatureAdminSetStatus401 | BlogFeatureAdminSetStatus403 | BlogFeatureAdminSetStatus404 | BlogFeatureAdminSetStatus500 | BlogFeatureAdminSetStatus501>, BlogFeatureAdminSetOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogFeatureAdminSetMutationKey()

  const baseOptions = blogFeatureAdminSetMutationOptions(config) as UseMutationOptions<BlogFeatureAdminSetStatus200 | BlogFeatureAdminSetStatus204, ResponseErrorConfig<BlogFeatureAdminSetStatus400 | BlogFeatureAdminSetStatus401 | BlogFeatureAdminSetStatus403 | BlogFeatureAdminSetStatus404 | BlogFeatureAdminSetStatus500 | BlogFeatureAdminSetStatus501>, BlogFeatureAdminSetOptions, TContext>

  return useMutation<BlogFeatureAdminSetStatus200 | BlogFeatureAdminSetStatus204, ResponseErrorConfig<BlogFeatureAdminSetStatus400 | BlogFeatureAdminSetStatus401 | BlogFeatureAdminSetStatus403 | BlogFeatureAdminSetStatus404 | BlogFeatureAdminSetStatus500 | BlogFeatureAdminSetStatus501>, BlogFeatureAdminSetOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<BlogFeatureAdminSetStatus200 | BlogFeatureAdminSetStatus204, ResponseErrorConfig<BlogFeatureAdminSetStatus400 | BlogFeatureAdminSetStatus401 | BlogFeatureAdminSetStatus403 | BlogFeatureAdminSetStatus404 | BlogFeatureAdminSetStatus500 | BlogFeatureAdminSetStatus501>, BlogFeatureAdminSetOptions, TContext>
}
