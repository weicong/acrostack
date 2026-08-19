/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { ChatDownloadAttachmentOptions, ChatDownloadAttachmentStatus200 } from '../../models/chat/ChatDownloadAttachment'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { chatDownloadAttachment } from '../../clients/chat/chatDownloadAttachment'

export const chatDownloadAttachmentQueryKey = ({ path }: Omit<ChatDownloadAttachmentOptions, 'headers'>) => [{ url: '/api/app/chat/messages/:messageId/attachment', params: path }] as const

type ChatDownloadAttachmentQueryKey = ReturnType<typeof chatDownloadAttachmentQueryKey>

export function chatDownloadAttachmentQueryOptions({ path }: ChatDownloadAttachmentOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = chatDownloadAttachmentQueryKey({ path })
  return queryOptions<ChatDownloadAttachmentStatus200, ResponseErrorConfig<Error>, ChatDownloadAttachmentStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await chatDownloadAttachment({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/app/chat/messages/:messageId/attachment}
 */
export function useChatDownloadAttachment<TData = ChatDownloadAttachmentStatus200, TQueryData = ChatDownloadAttachmentStatus200, TQueryKey extends QueryKey = ChatDownloadAttachmentQueryKey>({ path }: { path: ChatDownloadAttachmentOptions['path'] | (() => ChatDownloadAttachmentOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<ChatDownloadAttachmentStatus200, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? chatDownloadAttachmentQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...chatDownloadAttachmentQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
