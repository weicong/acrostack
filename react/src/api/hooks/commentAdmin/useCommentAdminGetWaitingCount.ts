/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { CommentAdminGetWaitingCountStatus200, CommentAdminGetWaitingCountStatus400, CommentAdminGetWaitingCountStatus401, CommentAdminGetWaitingCountStatus403, CommentAdminGetWaitingCountStatus404, CommentAdminGetWaitingCountStatus500, CommentAdminGetWaitingCountStatus501 } from '../../models/commentAdmin/CommentAdminGetWaitingCount'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { commentAdminGetWaitingCount } from '../../clients/commentAdmin/commentAdminGetWaitingCount'

export const commentAdminGetWaitingCountQueryKey = () => [{ url: '/api/cms-kit-admin/comments/waiting-count' }] as const

type CommentAdminGetWaitingCountQueryKey = ReturnType<typeof commentAdminGetWaitingCountQueryKey>

export function commentAdminGetWaitingCountQueryOptions(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = commentAdminGetWaitingCountQueryKey()
  return queryOptions<CommentAdminGetWaitingCountStatus200, ResponseErrorConfig<CommentAdminGetWaitingCountStatus400 | CommentAdminGetWaitingCountStatus401 | CommentAdminGetWaitingCountStatus403 | CommentAdminGetWaitingCountStatus404 | CommentAdminGetWaitingCountStatus500 | CommentAdminGetWaitingCountStatus501>, CommentAdminGetWaitingCountStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await commentAdminGetWaitingCount({ ...config, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/cms-kit-admin/comments/waiting-count}
 */
export function useCommentAdminGetWaitingCount<TData = CommentAdminGetWaitingCountStatus200, TQueryData = CommentAdminGetWaitingCountStatus200, TQueryKey extends QueryKey = CommentAdminGetWaitingCountQueryKey>(options: {
  query?: Partial<QueryObserverOptions<CommentAdminGetWaitingCountStatus200, ResponseErrorConfig<CommentAdminGetWaitingCountStatus400 | CommentAdminGetWaitingCountStatus401 | CommentAdminGetWaitingCountStatus403 | CommentAdminGetWaitingCountStatus404 | CommentAdminGetWaitingCountStatus500 | CommentAdminGetWaitingCountStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const queryKey = resolvedOptions?.queryKey ?? commentAdminGetWaitingCountQueryKey()

  const queryResult = useQuery({
   ...commentAdminGetWaitingCountQueryOptions(config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<CommentAdminGetWaitingCountStatus400 | CommentAdminGetWaitingCountStatus401 | CommentAdminGetWaitingCountStatus403 | CommentAdminGetWaitingCountStatus404 | CommentAdminGetWaitingCountStatus500 | CommentAdminGetWaitingCountStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
