/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ChatBlockBlockUserPathBlockedUserId,
  ChatBlockBlockUserStatus200,
  ChatBlockBlockUserStatus204,
  ChatBlockBlockUserStatus400,
  ChatBlockBlockUserStatus401,
  ChatBlockBlockUserStatus403,
  ChatBlockBlockUserStatus404,
  ChatBlockBlockUserStatus500,
  ChatBlockBlockUserStatus501,
} from "../../models/chatBlock/ChatBlockBlockUser.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { chatBlockBlockUser } from "../../clients/chatBlock/chatBlockBlockUser.ts";

export const chatBlockBlockUserMutationKey = () =>
  [{ url: "/api/app/chat-block/block-user/:blockedUserId" }] as const;

export function chatBlockBlockUserMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = chatBlockBlockUserMutationKey();
  return mutationOptions<
    ChatBlockBlockUserStatus200 | ChatBlockBlockUserStatus204,
    ResponseErrorConfig<
      | ChatBlockBlockUserStatus400
      | ChatBlockBlockUserStatus401
      | ChatBlockBlockUserStatus403
      | ChatBlockBlockUserStatus404
      | ChatBlockBlockUserStatus500
      | ChatBlockBlockUserStatus501
    >,
    { blockedUserId: ChatBlockBlockUserPathBlockedUserId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ blockedUserId }) => {
      return chatBlockBlockUser(blockedUserId, config);
    },
  });
}

/**
 * {@link /api/app/chat-block/block-user/:blockedUserId}
 */
export function useChatBlockBlockUser<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ChatBlockBlockUserStatus200 | ChatBlockBlockUserStatus204,
      ResponseErrorConfig<
        | ChatBlockBlockUserStatus400
        | ChatBlockBlockUserStatus401
        | ChatBlockBlockUserStatus403
        | ChatBlockBlockUserStatus404
        | ChatBlockBlockUserStatus500
        | ChatBlockBlockUserStatus501
      >,
      { blockedUserId: ChatBlockBlockUserPathBlockedUserId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? chatBlockBlockUserMutationKey();

  const baseOptions = chatBlockBlockUserMutationOptions(config) as UseMutationOptions<
    ChatBlockBlockUserStatus200 | ChatBlockBlockUserStatus204,
    ResponseErrorConfig<
      | ChatBlockBlockUserStatus400
      | ChatBlockBlockUserStatus401
      | ChatBlockBlockUserStatus403
      | ChatBlockBlockUserStatus404
      | ChatBlockBlockUserStatus500
      | ChatBlockBlockUserStatus501
    >,
    { blockedUserId: ChatBlockBlockUserPathBlockedUserId },
    TContext
  >;

  return useMutation<
    ChatBlockBlockUserStatus200 | ChatBlockBlockUserStatus204,
    ResponseErrorConfig<
      | ChatBlockBlockUserStatus400
      | ChatBlockBlockUserStatus401
      | ChatBlockBlockUserStatus403
      | ChatBlockBlockUserStatus404
      | ChatBlockBlockUserStatus500
      | ChatBlockBlockUserStatus501
    >,
    { blockedUserId: ChatBlockBlockUserPathBlockedUserId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ChatBlockBlockUserStatus200 | ChatBlockBlockUserStatus204,
    ResponseErrorConfig<
      | ChatBlockBlockUserStatus400
      | ChatBlockBlockUserStatus401
      | ChatBlockBlockUserStatus403
      | ChatBlockBlockUserStatus404
      | ChatBlockBlockUserStatus500
      | ChatBlockBlockUserStatus501
    >,
    { blockedUserId: ChatBlockBlockUserPathBlockedUserId },
    TContext
  >;
}
