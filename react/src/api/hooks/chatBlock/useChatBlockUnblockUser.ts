/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { ChatBlockUnblockUserOptions, ChatBlockUnblockUserStatus200, ChatBlockUnblockUserStatus204, ChatBlockUnblockUserStatus400, ChatBlockUnblockUserStatus401, ChatBlockUnblockUserStatus403, ChatBlockUnblockUserStatus404, ChatBlockUnblockUserStatus500, ChatBlockUnblockUserStatus501 } from '../../models/chatBlock/ChatBlockUnblockUser'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { chatBlockUnblockUser } from '../../clients/chatBlock/chatBlockUnblockUser'

export const chatBlockUnblockUserMutationKey = () => [{ url: '/api/app/chat-block/unblock-user/:blockedUserId' }] as const

export function chatBlockUnblockUserMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = chatBlockUnblockUserMutationKey()
  return mutationOptions<ChatBlockUnblockUserStatus200 | ChatBlockUnblockUserStatus204, ResponseErrorConfig<ChatBlockUnblockUserStatus400 | ChatBlockUnblockUserStatus401 | ChatBlockUnblockUserStatus403 | ChatBlockUnblockUserStatus404 | ChatBlockUnblockUserStatus500 | ChatBlockUnblockUserStatus501>, ChatBlockUnblockUserOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await chatBlockUnblockUser({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/chat-block/unblock-user/:blockedUserId}
 */
export function useChatBlockUnblockUser<TContext>(options: {
  mutation?: UseMutationOptions<ChatBlockUnblockUserStatus200 | ChatBlockUnblockUserStatus204, ResponseErrorConfig<ChatBlockUnblockUserStatus400 | ChatBlockUnblockUserStatus401 | ChatBlockUnblockUserStatus403 | ChatBlockUnblockUserStatus404 | ChatBlockUnblockUserStatus500 | ChatBlockUnblockUserStatus501>, ChatBlockUnblockUserOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? chatBlockUnblockUserMutationKey()

  const baseOptions = chatBlockUnblockUserMutationOptions(config) as UseMutationOptions<ChatBlockUnblockUserStatus200 | ChatBlockUnblockUserStatus204, ResponseErrorConfig<ChatBlockUnblockUserStatus400 | ChatBlockUnblockUserStatus401 | ChatBlockUnblockUserStatus403 | ChatBlockUnblockUserStatus404 | ChatBlockUnblockUserStatus500 | ChatBlockUnblockUserStatus501>, ChatBlockUnblockUserOptions, TContext>

  return useMutation<ChatBlockUnblockUserStatus200 | ChatBlockUnblockUserStatus204, ResponseErrorConfig<ChatBlockUnblockUserStatus400 | ChatBlockUnblockUserStatus401 | ChatBlockUnblockUserStatus403 | ChatBlockUnblockUserStatus404 | ChatBlockUnblockUserStatus500 | ChatBlockUnblockUserStatus501>, ChatBlockUnblockUserOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<ChatBlockUnblockUserStatus200 | ChatBlockUnblockUserStatus204, ResponseErrorConfig<ChatBlockUnblockUserStatus400 | ChatBlockUnblockUserStatus401 | ChatBlockUnblockUserStatus403 | ChatBlockUnblockUserStatus404 | ChatBlockUnblockUserStatus500 | ChatBlockUnblockUserStatus501>, ChatBlockUnblockUserOptions, TContext>
}
