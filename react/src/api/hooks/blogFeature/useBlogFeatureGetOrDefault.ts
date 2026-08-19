/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BlogFeatureGetOrDefaultOptions, BlogFeatureGetOrDefaultStatus200, BlogFeatureGetOrDefaultStatus400, BlogFeatureGetOrDefaultStatus401, BlogFeatureGetOrDefaultStatus403, BlogFeatureGetOrDefaultStatus404, BlogFeatureGetOrDefaultStatus500, BlogFeatureGetOrDefaultStatus501 } from '../../models/blogFeature/BlogFeatureGetOrDefault'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { blogFeatureGetOrDefault } from '../../clients/blogFeature/blogFeatureGetOrDefault'

export const blogFeatureGetOrDefaultQueryKey = ({ path }: Omit<BlogFeatureGetOrDefaultOptions, 'headers'>) => [{ url: '/api/cms-kit/blogs/:blogId/features/:featureName', params: path }] as const

type BlogFeatureGetOrDefaultQueryKey = ReturnType<typeof blogFeatureGetOrDefaultQueryKey>

export function blogFeatureGetOrDefaultQueryOptions({ path }: BlogFeatureGetOrDefaultOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = blogFeatureGetOrDefaultQueryKey({ path })
  return queryOptions<BlogFeatureGetOrDefaultStatus200, ResponseErrorConfig<BlogFeatureGetOrDefaultStatus400 | BlogFeatureGetOrDefaultStatus401 | BlogFeatureGetOrDefaultStatus403 | BlogFeatureGetOrDefaultStatus404 | BlogFeatureGetOrDefaultStatus500 | BlogFeatureGetOrDefaultStatus501>, BlogFeatureGetOrDefaultStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await blogFeatureGetOrDefault({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/cms-kit/blogs/:blogId/features/:featureName}
 */
export function useBlogFeatureGetOrDefault<TData = BlogFeatureGetOrDefaultStatus200, TQueryData = BlogFeatureGetOrDefaultStatus200, TQueryKey extends QueryKey = BlogFeatureGetOrDefaultQueryKey>({ path }: { path: BlogFeatureGetOrDefaultOptions['path'] | (() => BlogFeatureGetOrDefaultOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<BlogFeatureGetOrDefaultStatus200, ResponseErrorConfig<BlogFeatureGetOrDefaultStatus400 | BlogFeatureGetOrDefaultStatus401 | BlogFeatureGetOrDefaultStatus403 | BlogFeatureGetOrDefaultStatus404 | BlogFeatureGetOrDefaultStatus500 | BlogFeatureGetOrDefaultStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? blogFeatureGetOrDefaultQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...blogFeatureGetOrDefaultQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<BlogFeatureGetOrDefaultStatus400 | BlogFeatureGetOrDefaultStatus401 | BlogFeatureGetOrDefaultStatus403 | BlogFeatureGetOrDefaultStatus404 | BlogFeatureGetOrDefaultStatus500 | BlogFeatureGetOrDefaultStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
