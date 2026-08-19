/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BlogAdminUpdateOptions, BlogAdminUpdateStatus200, BlogAdminUpdateStatus400, BlogAdminUpdateStatus401, BlogAdminUpdateStatus403, BlogAdminUpdateStatus404, BlogAdminUpdateStatus500, BlogAdminUpdateStatus501 } from '../../models/blogAdmin/BlogAdminUpdate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { blogAdminUpdate } from '../../clients/blogAdmin/blogAdminUpdate'

export const blogAdminUpdateMutationKey = () => [{ url: '/api/cms-kit-admin/blogs/:id' }] as const

export function blogAdminUpdateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = blogAdminUpdateMutationKey()
  return mutationOptions<BlogAdminUpdateStatus200, ResponseErrorConfig<BlogAdminUpdateStatus400 | BlogAdminUpdateStatus401 | BlogAdminUpdateStatus403 | BlogAdminUpdateStatus404 | BlogAdminUpdateStatus500 | BlogAdminUpdateStatus501>, BlogAdminUpdateOptions, TContext>({
    mutationKey,
    mutationFn: async({ path, body }) => {
      const { data } = await blogAdminUpdate({ ...config, path, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-admin/blogs/:id}
 */
export function useBlogAdminUpdate<TContext>(options: {
  mutation?: UseMutationOptions<BlogAdminUpdateStatus200, ResponseErrorConfig<BlogAdminUpdateStatus400 | BlogAdminUpdateStatus401 | BlogAdminUpdateStatus403 | BlogAdminUpdateStatus404 | BlogAdminUpdateStatus500 | BlogAdminUpdateStatus501>, BlogAdminUpdateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogAdminUpdateMutationKey()

  const baseOptions = blogAdminUpdateMutationOptions(config) as UseMutationOptions<BlogAdminUpdateStatus200, ResponseErrorConfig<BlogAdminUpdateStatus400 | BlogAdminUpdateStatus401 | BlogAdminUpdateStatus403 | BlogAdminUpdateStatus404 | BlogAdminUpdateStatus500 | BlogAdminUpdateStatus501>, BlogAdminUpdateOptions, TContext>

  return useMutation<BlogAdminUpdateStatus200, ResponseErrorConfig<BlogAdminUpdateStatus400 | BlogAdminUpdateStatus401 | BlogAdminUpdateStatus403 | BlogAdminUpdateStatus404 | BlogAdminUpdateStatus500 | BlogAdminUpdateStatus501>, BlogAdminUpdateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<BlogAdminUpdateStatus200, ResponseErrorConfig<BlogAdminUpdateStatus400 | BlogAdminUpdateStatus401 | BlogAdminUpdateStatus403 | BlogAdminUpdateStatus404 | BlogAdminUpdateStatus500 | BlogAdminUpdateStatus501>, BlogAdminUpdateOptions, TContext>
}
