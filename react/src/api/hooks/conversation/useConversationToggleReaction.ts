/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { ConversationToggleReactionOptions, ConversationToggleReactionStatus200, ConversationToggleReactionStatus400, ConversationToggleReactionStatus401, ConversationToggleReactionStatus403, ConversationToggleReactionStatus404, ConversationToggleReactionStatus500, ConversationToggleReactionStatus501 } from '../../models/conversation/ConversationToggleReaction'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { conversationToggleReaction } from '../../clients/conversation/conversationToggleReaction'

export const conversationToggleReactionMutationKey = () => [{ url: '/api/app/conversation/toggle-reaction/:messageId' }] as const

export function conversationToggleReactionMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = conversationToggleReactionMutationKey()
  return mutationOptions<ConversationToggleReactionStatus200, ResponseErrorConfig<ConversationToggleReactionStatus400 | ConversationToggleReactionStatus401 | ConversationToggleReactionStatus403 | ConversationToggleReactionStatus404 | ConversationToggleReactionStatus500 | ConversationToggleReactionStatus501>, ConversationToggleReactionOptions, TContext>({
    mutationKey,
    mutationFn: async({ path, query }) => {
      const { data } = await conversationToggleReaction({ ...config, path, query, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/conversation/toggle-reaction/:messageId}
 */
export function useConversationToggleReaction<TContext>(options: {
  mutation?: UseMutationOptions<ConversationToggleReactionStatus200, ResponseErrorConfig<ConversationToggleReactionStatus400 | ConversationToggleReactionStatus401 | ConversationToggleReactionStatus403 | ConversationToggleReactionStatus404 | ConversationToggleReactionStatus500 | ConversationToggleReactionStatus501>, ConversationToggleReactionOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? conversationToggleReactionMutationKey()

  const baseOptions = conversationToggleReactionMutationOptions(config) as UseMutationOptions<ConversationToggleReactionStatus200, ResponseErrorConfig<ConversationToggleReactionStatus400 | ConversationToggleReactionStatus401 | ConversationToggleReactionStatus403 | ConversationToggleReactionStatus404 | ConversationToggleReactionStatus500 | ConversationToggleReactionStatus501>, ConversationToggleReactionOptions, TContext>

  return useMutation<ConversationToggleReactionStatus200, ResponseErrorConfig<ConversationToggleReactionStatus400 | ConversationToggleReactionStatus401 | ConversationToggleReactionStatus403 | ConversationToggleReactionStatus404 | ConversationToggleReactionStatus500 | ConversationToggleReactionStatus501>, ConversationToggleReactionOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<ConversationToggleReactionStatus200, ResponseErrorConfig<ConversationToggleReactionStatus400 | ConversationToggleReactionStatus401 | ConversationToggleReactionStatus403 | ConversationToggleReactionStatus404 | ConversationToggleReactionStatus500 | ConversationToggleReactionStatus501>, ConversationToggleReactionOptions, TContext>
}
