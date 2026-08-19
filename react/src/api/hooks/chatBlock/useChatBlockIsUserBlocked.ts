/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { ChatBlockIsUserBlockedOptions, ChatBlockIsUserBlockedStatus200, ChatBlockIsUserBlockedStatus400, ChatBlockIsUserBlockedStatus401, ChatBlockIsUserBlockedStatus403, ChatBlockIsUserBlockedStatus404, ChatBlockIsUserBlockedStatus500, ChatBlockIsUserBlockedStatus501 } from '../../models/chatBlock/ChatBlockIsUserBlocked'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { chatBlockIsUserBlocked } from '../../clients/chatBlock/chatBlockIsUserBlocked'

export const chatBlockIsUserBlockedMutationKey = () => [{ url: '/api/app/chat-block/is-user-blocked' }] as const

export function chatBlockIsUserBlockedMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = chatBlockIsUserBlockedMutationKey()
  return mutationOptions<ChatBlockIsUserBlockedStatus200, ResponseErrorConfig<ChatBlockIsUserBlockedStatus400 | ChatBlockIsUserBlockedStatus401 | ChatBlockIsUserBlockedStatus403 | ChatBlockIsUserBlockedStatus404 | ChatBlockIsUserBlockedStatus500 | ChatBlockIsUserBlockedStatus501>, ChatBlockIsUserBlockedOptions, TContext>({
    mutationKey,
    mutationFn: async({ query }) => {
      const { data } = await chatBlockIsUserBlocked({ ...config, query, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/chat-block/is-user-blocked}
 */
export function useChatBlockIsUserBlocked<TContext>(options: {
  mutation?: UseMutationOptions<ChatBlockIsUserBlockedStatus200, ResponseErrorConfig<ChatBlockIsUserBlockedStatus400 | ChatBlockIsUserBlockedStatus401 | ChatBlockIsUserBlockedStatus403 | ChatBlockIsUserBlockedStatus404 | ChatBlockIsUserBlockedStatus500 | ChatBlockIsUserBlockedStatus501>, ChatBlockIsUserBlockedOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? chatBlockIsUserBlockedMutationKey()

  const baseOptions = chatBlockIsUserBlockedMutationOptions(config) as UseMutationOptions<ChatBlockIsUserBlockedStatus200, ResponseErrorConfig<ChatBlockIsUserBlockedStatus400 | ChatBlockIsUserBlockedStatus401 | ChatBlockIsUserBlockedStatus403 | ChatBlockIsUserBlockedStatus404 | ChatBlockIsUserBlockedStatus500 | ChatBlockIsUserBlockedStatus501>, ChatBlockIsUserBlockedOptions, TContext>

  return useMutation<ChatBlockIsUserBlockedStatus200, ResponseErrorConfig<ChatBlockIsUserBlockedStatus400 | ChatBlockIsUserBlockedStatus401 | ChatBlockIsUserBlockedStatus403 | ChatBlockIsUserBlockedStatus404 | ChatBlockIsUserBlockedStatus500 | ChatBlockIsUserBlockedStatus501>, ChatBlockIsUserBlockedOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<ChatBlockIsUserBlockedStatus200, ResponseErrorConfig<ChatBlockIsUserBlockedStatus400 | ChatBlockIsUserBlockedStatus401 | ChatBlockIsUserBlockedStatus403 | ChatBlockIsUserBlockedStatus404 | ChatBlockIsUserBlockedStatus500 | ChatBlockIsUserBlockedStatus501>, ChatBlockIsUserBlockedOptions, TContext>
}
