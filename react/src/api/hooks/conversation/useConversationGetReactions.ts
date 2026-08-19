/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { ConversationGetReactionsOptions, ConversationGetReactionsStatus200, ConversationGetReactionsStatus400, ConversationGetReactionsStatus401, ConversationGetReactionsStatus403, ConversationGetReactionsStatus404, ConversationGetReactionsStatus500, ConversationGetReactionsStatus501 } from '../../models/conversation/ConversationGetReactions'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { conversationGetReactions } from '../../clients/conversation/conversationGetReactions'

export const conversationGetReactionsQueryKey = ({ path }: Omit<ConversationGetReactionsOptions, 'headers'>) => [{ url: '/api/app/conversation/reactions/:messageId', params: path }] as const

type ConversationGetReactionsQueryKey = ReturnType<typeof conversationGetReactionsQueryKey>

export function conversationGetReactionsQueryOptions({ path }: ConversationGetReactionsOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = conversationGetReactionsQueryKey({ path })
  return queryOptions<ConversationGetReactionsStatus200, ResponseErrorConfig<ConversationGetReactionsStatus400 | ConversationGetReactionsStatus401 | ConversationGetReactionsStatus403 | ConversationGetReactionsStatus404 | ConversationGetReactionsStatus500 | ConversationGetReactionsStatus501>, ConversationGetReactionsStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await conversationGetReactions({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/app/conversation/reactions/:messageId}
 */
export function useConversationGetReactions<TData = ConversationGetReactionsStatus200, TQueryData = ConversationGetReactionsStatus200, TQueryKey extends QueryKey = ConversationGetReactionsQueryKey>({ path }: { path: ConversationGetReactionsOptions['path'] | (() => ConversationGetReactionsOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<ConversationGetReactionsStatus200, ResponseErrorConfig<ConversationGetReactionsStatus400 | ConversationGetReactionsStatus401 | ConversationGetReactionsStatus403 | ConversationGetReactionsStatus404 | ConversationGetReactionsStatus500 | ConversationGetReactionsStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? conversationGetReactionsQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...conversationGetReactionsQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<ConversationGetReactionsStatus400 | ConversationGetReactionsStatus401 | ConversationGetReactionsStatus403 | ConversationGetReactionsStatus404 | ConversationGetReactionsStatus500 | ConversationGetReactionsStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
