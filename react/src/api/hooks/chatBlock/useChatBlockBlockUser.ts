/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { ChatBlockBlockUserOptions, ChatBlockBlockUserStatus200, ChatBlockBlockUserStatus204, ChatBlockBlockUserStatus400, ChatBlockBlockUserStatus401, ChatBlockBlockUserStatus403, ChatBlockBlockUserStatus404, ChatBlockBlockUserStatus500, ChatBlockBlockUserStatus501 } from '../../models/chatBlock/ChatBlockBlockUser'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { chatBlockBlockUser } from '../../clients/chatBlock/chatBlockBlockUser'

export const chatBlockBlockUserMutationKey = () => [{ url: '/api/app/chat-block/block-user/:blockedUserId' }] as const

export function chatBlockBlockUserMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = chatBlockBlockUserMutationKey()
  return mutationOptions<ChatBlockBlockUserStatus200 | ChatBlockBlockUserStatus204, ResponseErrorConfig<ChatBlockBlockUserStatus400 | ChatBlockBlockUserStatus401 | ChatBlockBlockUserStatus403 | ChatBlockBlockUserStatus404 | ChatBlockBlockUserStatus500 | ChatBlockBlockUserStatus501>, ChatBlockBlockUserOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await chatBlockBlockUser({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/chat-block/block-user/:blockedUserId}
 */
export function useChatBlockBlockUser<TContext>(options: {
  mutation?: UseMutationOptions<ChatBlockBlockUserStatus200 | ChatBlockBlockUserStatus204, ResponseErrorConfig<ChatBlockBlockUserStatus400 | ChatBlockBlockUserStatus401 | ChatBlockBlockUserStatus403 | ChatBlockBlockUserStatus404 | ChatBlockBlockUserStatus500 | ChatBlockBlockUserStatus501>, ChatBlockBlockUserOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? chatBlockBlockUserMutationKey()

  const baseOptions = chatBlockBlockUserMutationOptions(config) as UseMutationOptions<ChatBlockBlockUserStatus200 | ChatBlockBlockUserStatus204, ResponseErrorConfig<ChatBlockBlockUserStatus400 | ChatBlockBlockUserStatus401 | ChatBlockBlockUserStatus403 | ChatBlockBlockUserStatus404 | ChatBlockBlockUserStatus500 | ChatBlockBlockUserStatus501>, ChatBlockBlockUserOptions, TContext>

  return useMutation<ChatBlockBlockUserStatus200 | ChatBlockBlockUserStatus204, ResponseErrorConfig<ChatBlockBlockUserStatus400 | ChatBlockBlockUserStatus401 | ChatBlockBlockUserStatus403 | ChatBlockBlockUserStatus404 | ChatBlockBlockUserStatus500 | ChatBlockBlockUserStatus501>, ChatBlockBlockUserOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<ChatBlockBlockUserStatus200 | ChatBlockBlockUserStatus204, ResponseErrorConfig<ChatBlockBlockUserStatus400 | ChatBlockBlockUserStatus401 | ChatBlockBlockUserStatus403 | ChatBlockBlockUserStatus404 | ChatBlockBlockUserStatus500 | ChatBlockBlockUserStatus501>, ChatBlockBlockUserOptions, TContext>
}
