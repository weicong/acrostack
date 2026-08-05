/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ChatBlockUnblockUserPathBlockedUserId,
  ChatBlockUnblockUserStatus200,
  ChatBlockUnblockUserStatus204,
  ChatBlockUnblockUserStatus400,
  ChatBlockUnblockUserStatus401,
  ChatBlockUnblockUserStatus403,
  ChatBlockUnblockUserStatus404,
  ChatBlockUnblockUserStatus500,
  ChatBlockUnblockUserStatus501,
} from "../../models/chatBlock/ChatBlockUnblockUser.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { chatBlockUnblockUser } from "../../clients/chatBlock/chatBlockUnblockUser.ts";

export const chatBlockUnblockUserMutationKey = () =>
  [{ url: "/api/app/chat-block/unblock-user/:blockedUserId" }] as const;

export function chatBlockUnblockUserMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = chatBlockUnblockUserMutationKey();
  return mutationOptions<
    ChatBlockUnblockUserStatus200 | ChatBlockUnblockUserStatus204,
    ResponseErrorConfig<
      | ChatBlockUnblockUserStatus400
      | ChatBlockUnblockUserStatus401
      | ChatBlockUnblockUserStatus403
      | ChatBlockUnblockUserStatus404
      | ChatBlockUnblockUserStatus500
      | ChatBlockUnblockUserStatus501
    >,
    { blockedUserId: ChatBlockUnblockUserPathBlockedUserId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ blockedUserId }) => {
      return chatBlockUnblockUser(blockedUserId, config);
    },
  });
}

/**
 * {@link /api/app/chat-block/unblock-user/:blockedUserId}
 */
export function useChatBlockUnblockUser<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ChatBlockUnblockUserStatus200 | ChatBlockUnblockUserStatus204,
      ResponseErrorConfig<
        | ChatBlockUnblockUserStatus400
        | ChatBlockUnblockUserStatus401
        | ChatBlockUnblockUserStatus403
        | ChatBlockUnblockUserStatus404
        | ChatBlockUnblockUserStatus500
        | ChatBlockUnblockUserStatus501
      >,
      { blockedUserId: ChatBlockUnblockUserPathBlockedUserId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? chatBlockUnblockUserMutationKey();

  const baseOptions = chatBlockUnblockUserMutationOptions(config) as UseMutationOptions<
    ChatBlockUnblockUserStatus200 | ChatBlockUnblockUserStatus204,
    ResponseErrorConfig<
      | ChatBlockUnblockUserStatus400
      | ChatBlockUnblockUserStatus401
      | ChatBlockUnblockUserStatus403
      | ChatBlockUnblockUserStatus404
      | ChatBlockUnblockUserStatus500
      | ChatBlockUnblockUserStatus501
    >,
    { blockedUserId: ChatBlockUnblockUserPathBlockedUserId },
    TContext
  >;

  return useMutation<
    ChatBlockUnblockUserStatus200 | ChatBlockUnblockUserStatus204,
    ResponseErrorConfig<
      | ChatBlockUnblockUserStatus400
      | ChatBlockUnblockUserStatus401
      | ChatBlockUnblockUserStatus403
      | ChatBlockUnblockUserStatus404
      | ChatBlockUnblockUserStatus500
      | ChatBlockUnblockUserStatus501
    >,
    { blockedUserId: ChatBlockUnblockUserPathBlockedUserId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ChatBlockUnblockUserStatus200 | ChatBlockUnblockUserStatus204,
    ResponseErrorConfig<
      | ChatBlockUnblockUserStatus400
      | ChatBlockUnblockUserStatus401
      | ChatBlockUnblockUserStatus403
      | ChatBlockUnblockUserStatus404
      | ChatBlockUnblockUserStatus500
      | ChatBlockUnblockUserStatus501
    >,
    { blockedUserId: ChatBlockUnblockUserPathBlockedUserId },
    TContext
  >;
}
