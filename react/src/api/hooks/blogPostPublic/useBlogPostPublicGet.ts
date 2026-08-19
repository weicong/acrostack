/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BlogPostPublicGetOptions, BlogPostPublicGetStatus200, BlogPostPublicGetStatus400, BlogPostPublicGetStatus401, BlogPostPublicGetStatus403, BlogPostPublicGetStatus404, BlogPostPublicGetStatus500, BlogPostPublicGetStatus501 } from '../../models/blogPostPublic/BlogPostPublicGet'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { blogPostPublicGet } from '../../clients/blogPostPublic/blogPostPublicGet'

export const blogPostPublicGetQueryKey = ({ path }: Omit<BlogPostPublicGetOptions, 'headers'>) => [{ url: '/api/cms-kit-public/blog-posts/:blogSlug/:blogPostSlug', params: path }] as const

type BlogPostPublicGetQueryKey = ReturnType<typeof blogPostPublicGetQueryKey>

export function blogPostPublicGetQueryOptions({ path }: BlogPostPublicGetOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = blogPostPublicGetQueryKey({ path })
  return queryOptions<BlogPostPublicGetStatus200, ResponseErrorConfig<BlogPostPublicGetStatus400 | BlogPostPublicGetStatus401 | BlogPostPublicGetStatus403 | BlogPostPublicGetStatus404 | BlogPostPublicGetStatus500 | BlogPostPublicGetStatus501>, BlogPostPublicGetStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await blogPostPublicGet({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/cms-kit-public/blog-posts/:blogSlug/:blogPostSlug}
 */
export function useBlogPostPublicGet<TData = BlogPostPublicGetStatus200, TQueryData = BlogPostPublicGetStatus200, TQueryKey extends QueryKey = BlogPostPublicGetQueryKey>({ path }: { path: BlogPostPublicGetOptions['path'] | (() => BlogPostPublicGetOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<BlogPostPublicGetStatus200, ResponseErrorConfig<BlogPostPublicGetStatus400 | BlogPostPublicGetStatus401 | BlogPostPublicGetStatus403 | BlogPostPublicGetStatus404 | BlogPostPublicGetStatus500 | BlogPostPublicGetStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? blogPostPublicGetQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...blogPostPublicGetQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<BlogPostPublicGetStatus400 | BlogPostPublicGetStatus401 | BlogPostPublicGetStatus403 | BlogPostPublicGetStatus404 | BlogPostPublicGetStatus500 | BlogPostPublicGetStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
