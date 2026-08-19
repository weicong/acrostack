/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BlogPostAdminGetOptions, BlogPostAdminGetStatus200, BlogPostAdminGetStatus400, BlogPostAdminGetStatus401, BlogPostAdminGetStatus403, BlogPostAdminGetStatus404, BlogPostAdminGetStatus500, BlogPostAdminGetStatus501 } from '../../models/blogPostAdmin/BlogPostAdminGet'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { blogPostAdminGet } from '../../clients/blogPostAdmin/blogPostAdminGet'

export const blogPostAdminGetQueryKey = ({ path }: Omit<BlogPostAdminGetOptions, 'headers'>) => [{ url: '/api/cms-kit-admin/blogs/blog-posts/:id', params: path }] as const

type BlogPostAdminGetQueryKey = ReturnType<typeof blogPostAdminGetQueryKey>

export function blogPostAdminGetQueryOptions({ path }: BlogPostAdminGetOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = blogPostAdminGetQueryKey({ path })
  return queryOptions<BlogPostAdminGetStatus200, ResponseErrorConfig<BlogPostAdminGetStatus400 | BlogPostAdminGetStatus401 | BlogPostAdminGetStatus403 | BlogPostAdminGetStatus404 | BlogPostAdminGetStatus500 | BlogPostAdminGetStatus501>, BlogPostAdminGetStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await blogPostAdminGet({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id}
 */
export function useBlogPostAdminGet<TData = BlogPostAdminGetStatus200, TQueryData = BlogPostAdminGetStatus200, TQueryKey extends QueryKey = BlogPostAdminGetQueryKey>({ path }: { path: BlogPostAdminGetOptions['path'] | (() => BlogPostAdminGetOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<BlogPostAdminGetStatus200, ResponseErrorConfig<BlogPostAdminGetStatus400 | BlogPostAdminGetStatus401 | BlogPostAdminGetStatus403 | BlogPostAdminGetStatus404 | BlogPostAdminGetStatus500 | BlogPostAdminGetStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? blogPostAdminGetQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...blogPostAdminGetQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<BlogPostAdminGetStatus400 | BlogPostAdminGetStatus401 | BlogPostAdminGetStatus403 | BlogPostAdminGetStatus404 | BlogPostAdminGetStatus500 | BlogPostAdminGetStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
