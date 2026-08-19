/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BlogPostAdminHasBlogPostWaitingForReviewStatus200, BlogPostAdminHasBlogPostWaitingForReviewStatus400, BlogPostAdminHasBlogPostWaitingForReviewStatus401, BlogPostAdminHasBlogPostWaitingForReviewStatus403, BlogPostAdminHasBlogPostWaitingForReviewStatus404, BlogPostAdminHasBlogPostWaitingForReviewStatus500, BlogPostAdminHasBlogPostWaitingForReviewStatus501 } from '../../models/blogPostAdmin/BlogPostAdminHasBlogPostWaitingForReview'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { blogPostAdminHasBlogPostWaitingForReview } from '../../clients/blogPostAdmin/blogPostAdminHasBlogPostWaitingForReview'

export const blogPostAdminHasBlogPostWaitingForReviewQueryKey = () => [{ url: '/api/cms-kit-admin/blogs/blog-posts/has-blogpost-waiting-for-review' }] as const

type BlogPostAdminHasBlogPostWaitingForReviewQueryKey = ReturnType<typeof blogPostAdminHasBlogPostWaitingForReviewQueryKey>

export function blogPostAdminHasBlogPostWaitingForReviewQueryOptions(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = blogPostAdminHasBlogPostWaitingForReviewQueryKey()
  return queryOptions<BlogPostAdminHasBlogPostWaitingForReviewStatus200, ResponseErrorConfig<BlogPostAdminHasBlogPostWaitingForReviewStatus400 | BlogPostAdminHasBlogPostWaitingForReviewStatus401 | BlogPostAdminHasBlogPostWaitingForReviewStatus403 | BlogPostAdminHasBlogPostWaitingForReviewStatus404 | BlogPostAdminHasBlogPostWaitingForReviewStatus500 | BlogPostAdminHasBlogPostWaitingForReviewStatus501>, BlogPostAdminHasBlogPostWaitingForReviewStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await blogPostAdminHasBlogPostWaitingForReview({ ...config, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/has-blogpost-waiting-for-review}
 */
export function useBlogPostAdminHasBlogPostWaitingForReview<TData = BlogPostAdminHasBlogPostWaitingForReviewStatus200, TQueryData = BlogPostAdminHasBlogPostWaitingForReviewStatus200, TQueryKey extends QueryKey = BlogPostAdminHasBlogPostWaitingForReviewQueryKey>(options: {
  query?: Partial<QueryObserverOptions<BlogPostAdminHasBlogPostWaitingForReviewStatus200, ResponseErrorConfig<BlogPostAdminHasBlogPostWaitingForReviewStatus400 | BlogPostAdminHasBlogPostWaitingForReviewStatus401 | BlogPostAdminHasBlogPostWaitingForReviewStatus403 | BlogPostAdminHasBlogPostWaitingForReviewStatus404 | BlogPostAdminHasBlogPostWaitingForReviewStatus500 | BlogPostAdminHasBlogPostWaitingForReviewStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const queryKey = resolvedOptions?.queryKey ?? blogPostAdminHasBlogPostWaitingForReviewQueryKey()

  const queryResult = useQuery({
   ...blogPostAdminHasBlogPostWaitingForReviewQueryOptions(config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<BlogPostAdminHasBlogPostWaitingForReviewStatus400 | BlogPostAdminHasBlogPostWaitingForReviewStatus401 | BlogPostAdminHasBlogPostWaitingForReviewStatus403 | BlogPostAdminHasBlogPostWaitingForReviewStatus404 | BlogPostAdminHasBlogPostWaitingForReviewStatus500 | BlogPostAdminHasBlogPostWaitingForReviewStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
