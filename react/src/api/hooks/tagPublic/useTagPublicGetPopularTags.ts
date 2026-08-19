/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { TagPublicGetPopularTagsOptions, TagPublicGetPopularTagsStatus200, TagPublicGetPopularTagsStatus400, TagPublicGetPopularTagsStatus401, TagPublicGetPopularTagsStatus403, TagPublicGetPopularTagsStatus404, TagPublicGetPopularTagsStatus500, TagPublicGetPopularTagsStatus501 } from '../../models/tagPublic/TagPublicGetPopularTags'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { tagPublicGetPopularTags } from '../../clients/tagPublic/tagPublicGetPopularTags'

export const tagPublicGetPopularTagsQueryKey = ({ path }: Omit<TagPublicGetPopularTagsOptions, 'headers'>) => [{ url: '/api/cms-kit-public/tags/popular/:entityType/:maxCount', params: path }] as const

type TagPublicGetPopularTagsQueryKey = ReturnType<typeof tagPublicGetPopularTagsQueryKey>

export function tagPublicGetPopularTagsQueryOptions({ path }: TagPublicGetPopularTagsOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = tagPublicGetPopularTagsQueryKey({ path })
  return queryOptions<TagPublicGetPopularTagsStatus200, ResponseErrorConfig<TagPublicGetPopularTagsStatus400 | TagPublicGetPopularTagsStatus401 | TagPublicGetPopularTagsStatus403 | TagPublicGetPopularTagsStatus404 | TagPublicGetPopularTagsStatus500 | TagPublicGetPopularTagsStatus501>, TagPublicGetPopularTagsStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await tagPublicGetPopularTags({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/cms-kit-public/tags/popular/:entityType/:maxCount}
 */
export function useTagPublicGetPopularTags<TData = TagPublicGetPopularTagsStatus200, TQueryData = TagPublicGetPopularTagsStatus200, TQueryKey extends QueryKey = TagPublicGetPopularTagsQueryKey>({ path }: { path: TagPublicGetPopularTagsOptions['path'] | (() => TagPublicGetPopularTagsOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<TagPublicGetPopularTagsStatus200, ResponseErrorConfig<TagPublicGetPopularTagsStatus400 | TagPublicGetPopularTagsStatus401 | TagPublicGetPopularTagsStatus403 | TagPublicGetPopularTagsStatus404 | TagPublicGetPopularTagsStatus500 | TagPublicGetPopularTagsStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? tagPublicGetPopularTagsQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...tagPublicGetPopularTagsQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<TagPublicGetPopularTagsStatus400 | TagPublicGetPopularTagsStatus401 | TagPublicGetPopularTagsStatus403 | TagPublicGetPopularTagsStatus404 | TagPublicGetPopularTagsStatus500 | TagPublicGetPopularTagsStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
