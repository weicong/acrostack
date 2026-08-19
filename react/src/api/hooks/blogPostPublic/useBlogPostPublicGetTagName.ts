/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BlogPostPublicGetTagNameOptions, BlogPostPublicGetTagNameStatus200, BlogPostPublicGetTagNameStatus400, BlogPostPublicGetTagNameStatus401, BlogPostPublicGetTagNameStatus403, BlogPostPublicGetTagNameStatus404, BlogPostPublicGetTagNameStatus500, BlogPostPublicGetTagNameStatus501 } from '../../models/blogPostPublic/BlogPostPublicGetTagName'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { blogPostPublicGetTagName } from '../../clients/blogPostPublic/blogPostPublicGetTagName'

export const blogPostPublicGetTagNameQueryKey = ({ path, query }: Omit<BlogPostPublicGetTagNameOptions, 'headers'>) => [{ url: '/api/cms-kit-public/blog-posts/tags/:id', params: path }, ...(query ? [query] : [])] as const

type BlogPostPublicGetTagNameQueryKey = ReturnType<typeof blogPostPublicGetTagNameQueryKey>

export function blogPostPublicGetTagNameQueryOptions({ path, query }: BlogPostPublicGetTagNameOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = blogPostPublicGetTagNameQueryKey({ path, query })
  return queryOptions<BlogPostPublicGetTagNameStatus200, ResponseErrorConfig<BlogPostPublicGetTagNameStatus400 | BlogPostPublicGetTagNameStatus401 | BlogPostPublicGetTagNameStatus403 | BlogPostPublicGetTagNameStatus404 | BlogPostPublicGetTagNameStatus500 | BlogPostPublicGetTagNameStatus501>, BlogPostPublicGetTagNameStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await blogPostPublicGetTagName({ ...config, path, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/cms-kit-public/blog-posts/tags/:id}
 */
export function useBlogPostPublicGetTagName<TData = BlogPostPublicGetTagNameStatus200, TQueryData = BlogPostPublicGetTagNameStatus200, TQueryKey extends QueryKey = BlogPostPublicGetTagNameQueryKey>({ path, query }: { path: BlogPostPublicGetTagNameOptions['path'] | (() => BlogPostPublicGetTagNameOptions['path']); query?: BlogPostPublicGetTagNameOptions['query'] | (() => BlogPostPublicGetTagNameOptions['query']) }, options: {
  query?: Partial<QueryObserverOptions<BlogPostPublicGetTagNameStatus200, ResponseErrorConfig<BlogPostPublicGetTagNameStatus400 | BlogPostPublicGetTagNameStatus401 | BlogPostPublicGetTagNameStatus403 | BlogPostPublicGetTagNameStatus404 | BlogPostPublicGetTagNameStatus500 | BlogPostPublicGetTagNameStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path, query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? blogPostPublicGetTagNameQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...blogPostPublicGetTagNameQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<BlogPostPublicGetTagNameStatus400 | BlogPostPublicGetTagNameStatus401 | BlogPostPublicGetTagNameStatus403 | BlogPostPublicGetTagNameStatus404 | BlogPostPublicGetTagNameStatus500 | BlogPostPublicGetTagNameStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
