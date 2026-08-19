/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BlogPostPublicGetAuthorsHasBlogPostsOptions, BlogPostPublicGetAuthorsHasBlogPostsStatus200, BlogPostPublicGetAuthorsHasBlogPostsStatus400, BlogPostPublicGetAuthorsHasBlogPostsStatus401, BlogPostPublicGetAuthorsHasBlogPostsStatus403, BlogPostPublicGetAuthorsHasBlogPostsStatus404, BlogPostPublicGetAuthorsHasBlogPostsStatus500, BlogPostPublicGetAuthorsHasBlogPostsStatus501 } from '../../models/blogPostPublic/BlogPostPublicGetAuthorsHasBlogPosts'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { blogPostPublicGetAuthorsHasBlogPosts } from '../../clients/blogPostPublic/blogPostPublicGetAuthorsHasBlogPosts'

export const blogPostPublicGetAuthorsHasBlogPostsQueryKey = ({ query }: Omit<BlogPostPublicGetAuthorsHasBlogPostsOptions, 'headers'> = {}) => [{ url: '/api/cms-kit-public/blog-posts/authors' }, ...(query ? [query] : [])] as const

type BlogPostPublicGetAuthorsHasBlogPostsQueryKey = ReturnType<typeof blogPostPublicGetAuthorsHasBlogPostsQueryKey>

export function blogPostPublicGetAuthorsHasBlogPostsQueryOptions({ query }: BlogPostPublicGetAuthorsHasBlogPostsOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = blogPostPublicGetAuthorsHasBlogPostsQueryKey({ query })
  return queryOptions<BlogPostPublicGetAuthorsHasBlogPostsStatus200, ResponseErrorConfig<BlogPostPublicGetAuthorsHasBlogPostsStatus400 | BlogPostPublicGetAuthorsHasBlogPostsStatus401 | BlogPostPublicGetAuthorsHasBlogPostsStatus403 | BlogPostPublicGetAuthorsHasBlogPostsStatus404 | BlogPostPublicGetAuthorsHasBlogPostsStatus500 | BlogPostPublicGetAuthorsHasBlogPostsStatus501>, BlogPostPublicGetAuthorsHasBlogPostsStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await blogPostPublicGetAuthorsHasBlogPosts({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/cms-kit-public/blog-posts/authors}
 */
export function useBlogPostPublicGetAuthorsHasBlogPosts<TData = BlogPostPublicGetAuthorsHasBlogPostsStatus200, TQueryData = BlogPostPublicGetAuthorsHasBlogPostsStatus200, TQueryKey extends QueryKey = BlogPostPublicGetAuthorsHasBlogPostsQueryKey>({ query }: { query?: BlogPostPublicGetAuthorsHasBlogPostsOptions['query'] | (() => BlogPostPublicGetAuthorsHasBlogPostsOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<BlogPostPublicGetAuthorsHasBlogPostsStatus200, ResponseErrorConfig<BlogPostPublicGetAuthorsHasBlogPostsStatus400 | BlogPostPublicGetAuthorsHasBlogPostsStatus401 | BlogPostPublicGetAuthorsHasBlogPostsStatus403 | BlogPostPublicGetAuthorsHasBlogPostsStatus404 | BlogPostPublicGetAuthorsHasBlogPostsStatus500 | BlogPostPublicGetAuthorsHasBlogPostsStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? blogPostPublicGetAuthorsHasBlogPostsQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...blogPostPublicGetAuthorsHasBlogPostsQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<BlogPostPublicGetAuthorsHasBlogPostsStatus400 | BlogPostPublicGetAuthorsHasBlogPostsStatus401 | BlogPostPublicGetAuthorsHasBlogPostsStatus403 | BlogPostPublicGetAuthorsHasBlogPostsStatus404 | BlogPostPublicGetAuthorsHasBlogPostsStatus500 | BlogPostPublicGetAuthorsHasBlogPostsStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
