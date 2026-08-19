/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { TagAdminGetListOptions, TagAdminGetListStatus200, TagAdminGetListStatus400, TagAdminGetListStatus401, TagAdminGetListStatus403, TagAdminGetListStatus404, TagAdminGetListStatus500, TagAdminGetListStatus501 } from '../../models/tagAdmin/TagAdminGetList'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { tagAdminGetList } from '../../clients/tagAdmin/tagAdminGetList'

export const tagAdminGetListQueryKey = ({ query }: Omit<TagAdminGetListOptions, 'headers'> = {}) => [{ url: '/api/cms-kit-admin/tags' }, ...(query ? [query] : [])] as const

type TagAdminGetListQueryKey = ReturnType<typeof tagAdminGetListQueryKey>

export function tagAdminGetListQueryOptions({ query }: TagAdminGetListOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = tagAdminGetListQueryKey({ query })
  return queryOptions<TagAdminGetListStatus200, ResponseErrorConfig<TagAdminGetListStatus400 | TagAdminGetListStatus401 | TagAdminGetListStatus403 | TagAdminGetListStatus404 | TagAdminGetListStatus500 | TagAdminGetListStatus501>, TagAdminGetListStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await tagAdminGetList({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/cms-kit-admin/tags}
 */
export function useTagAdminGetList<TData = TagAdminGetListStatus200, TQueryData = TagAdminGetListStatus200, TQueryKey extends QueryKey = TagAdminGetListQueryKey>({ query }: { query?: TagAdminGetListOptions['query'] | (() => TagAdminGetListOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<TagAdminGetListStatus200, ResponseErrorConfig<TagAdminGetListStatus400 | TagAdminGetListStatus401 | TagAdminGetListStatus403 | TagAdminGetListStatus404 | TagAdminGetListStatus500 | TagAdminGetListStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? tagAdminGetListQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...tagAdminGetListQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<TagAdminGetListStatus400 | TagAdminGetListStatus401 | TagAdminGetListStatus403 | TagAdminGetListStatus404 | TagAdminGetListStatus500 | TagAdminGetListStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
