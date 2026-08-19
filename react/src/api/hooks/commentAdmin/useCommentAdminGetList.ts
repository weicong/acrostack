/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { CommentAdminGetListOptions, CommentAdminGetListStatus200, CommentAdminGetListStatus400, CommentAdminGetListStatus401, CommentAdminGetListStatus403, CommentAdminGetListStatus404, CommentAdminGetListStatus500, CommentAdminGetListStatus501 } from '../../models/commentAdmin/CommentAdminGetList'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { commentAdminGetList } from '../../clients/commentAdmin/commentAdminGetList'

export const commentAdminGetListQueryKey = ({ query }: Omit<CommentAdminGetListOptions, 'headers'> = {}) => [{ url: '/api/cms-kit-admin/comments' }, ...(query ? [query] : [])] as const

type CommentAdminGetListQueryKey = ReturnType<typeof commentAdminGetListQueryKey>

export function commentAdminGetListQueryOptions({ query }: CommentAdminGetListOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = commentAdminGetListQueryKey({ query })
  return queryOptions<CommentAdminGetListStatus200, ResponseErrorConfig<CommentAdminGetListStatus400 | CommentAdminGetListStatus401 | CommentAdminGetListStatus403 | CommentAdminGetListStatus404 | CommentAdminGetListStatus500 | CommentAdminGetListStatus501>, CommentAdminGetListStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await commentAdminGetList({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/cms-kit-admin/comments}
 */
export function useCommentAdminGetList<TData = CommentAdminGetListStatus200, TQueryData = CommentAdminGetListStatus200, TQueryKey extends QueryKey = CommentAdminGetListQueryKey>({ query }: { query?: CommentAdminGetListOptions['query'] | (() => CommentAdminGetListOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<CommentAdminGetListStatus200, ResponseErrorConfig<CommentAdminGetListStatus400 | CommentAdminGetListStatus401 | CommentAdminGetListStatus403 | CommentAdminGetListStatus404 | CommentAdminGetListStatus500 | CommentAdminGetListStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? commentAdminGetListQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...commentAdminGetListQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<CommentAdminGetListStatus400 | CommentAdminGetListStatus401 | CommentAdminGetListStatus403 | CommentAdminGetListStatus404 | CommentAdminGetListStatus500 | CommentAdminGetListStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
