/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { ConversationGetMessageListOptions, ConversationGetMessageListStatus200, ConversationGetMessageListStatus400, ConversationGetMessageListStatus401, ConversationGetMessageListStatus403, ConversationGetMessageListStatus404, ConversationGetMessageListStatus500, ConversationGetMessageListStatus501 } from '../../models/conversation/ConversationGetMessageList'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { conversationGetMessageList } from '../../clients/conversation/conversationGetMessageList'

export const conversationGetMessageListQueryKey = ({ query }: Omit<ConversationGetMessageListOptions, 'headers'> = {}) => [{ url: '/api/app/conversation/message-list' }, ...(query ? [query] : [])] as const

type ConversationGetMessageListQueryKey = ReturnType<typeof conversationGetMessageListQueryKey>

export function conversationGetMessageListQueryOptions({ query }: ConversationGetMessageListOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = conversationGetMessageListQueryKey({ query })
  return queryOptions<ConversationGetMessageListStatus200, ResponseErrorConfig<ConversationGetMessageListStatus400 | ConversationGetMessageListStatus401 | ConversationGetMessageListStatus403 | ConversationGetMessageListStatus404 | ConversationGetMessageListStatus500 | ConversationGetMessageListStatus501>, ConversationGetMessageListStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await conversationGetMessageList({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/app/conversation/message-list}
 */
export function useConversationGetMessageList<TData = ConversationGetMessageListStatus200, TQueryData = ConversationGetMessageListStatus200, TQueryKey extends QueryKey = ConversationGetMessageListQueryKey>({ query }: { query?: ConversationGetMessageListOptions['query'] | (() => ConversationGetMessageListOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<ConversationGetMessageListStatus200, ResponseErrorConfig<ConversationGetMessageListStatus400 | ConversationGetMessageListStatus401 | ConversationGetMessageListStatus403 | ConversationGetMessageListStatus404 | ConversationGetMessageListStatus500 | ConversationGetMessageListStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? conversationGetMessageListQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...conversationGetMessageListQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<ConversationGetMessageListStatus400 | ConversationGetMessageListStatus401 | ConversationGetMessageListStatus403 | ConversationGetMessageListStatus404 | ConversationGetMessageListStatus500 | ConversationGetMessageListStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
