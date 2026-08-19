/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { ConversationMarkAsReadOptions, ConversationMarkAsReadStatus200, ConversationMarkAsReadStatus204, ConversationMarkAsReadStatus400, ConversationMarkAsReadStatus401, ConversationMarkAsReadStatus403, ConversationMarkAsReadStatus404, ConversationMarkAsReadStatus500, ConversationMarkAsReadStatus501 } from '../../models/conversation/ConversationMarkAsRead'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { conversationMarkAsRead } from '../../clients/conversation/conversationMarkAsRead'

export const conversationMarkAsReadMutationKey = () => [{ url: '/api/app/conversation/mark-as-read/:targetUserId' }] as const

export function conversationMarkAsReadMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = conversationMarkAsReadMutationKey()
  return mutationOptions<ConversationMarkAsReadStatus200 | ConversationMarkAsReadStatus204, ResponseErrorConfig<ConversationMarkAsReadStatus400 | ConversationMarkAsReadStatus401 | ConversationMarkAsReadStatus403 | ConversationMarkAsReadStatus404 | ConversationMarkAsReadStatus500 | ConversationMarkAsReadStatus501>, ConversationMarkAsReadOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await conversationMarkAsRead({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/conversation/mark-as-read/:targetUserId}
 */
export function useConversationMarkAsRead<TContext>(options: {
  mutation?: UseMutationOptions<ConversationMarkAsReadStatus200 | ConversationMarkAsReadStatus204, ResponseErrorConfig<ConversationMarkAsReadStatus400 | ConversationMarkAsReadStatus401 | ConversationMarkAsReadStatus403 | ConversationMarkAsReadStatus404 | ConversationMarkAsReadStatus500 | ConversationMarkAsReadStatus501>, ConversationMarkAsReadOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? conversationMarkAsReadMutationKey()

  const baseOptions = conversationMarkAsReadMutationOptions(config) as UseMutationOptions<ConversationMarkAsReadStatus200 | ConversationMarkAsReadStatus204, ResponseErrorConfig<ConversationMarkAsReadStatus400 | ConversationMarkAsReadStatus401 | ConversationMarkAsReadStatus403 | ConversationMarkAsReadStatus404 | ConversationMarkAsReadStatus500 | ConversationMarkAsReadStatus501>, ConversationMarkAsReadOptions, TContext>

  return useMutation<ConversationMarkAsReadStatus200 | ConversationMarkAsReadStatus204, ResponseErrorConfig<ConversationMarkAsReadStatus400 | ConversationMarkAsReadStatus401 | ConversationMarkAsReadStatus403 | ConversationMarkAsReadStatus404 | ConversationMarkAsReadStatus500 | ConversationMarkAsReadStatus501>, ConversationMarkAsReadOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<ConversationMarkAsReadStatus200 | ConversationMarkAsReadStatus204, ResponseErrorConfig<ConversationMarkAsReadStatus400 | ConversationMarkAsReadStatus401 | ConversationMarkAsReadStatus403 | ConversationMarkAsReadStatus404 | ConversationMarkAsReadStatus500 | ConversationMarkAsReadStatus501>, ConversationMarkAsReadOptions, TContext>
}
