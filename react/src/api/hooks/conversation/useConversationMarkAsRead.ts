/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ConversationMarkAsReadPathTargetUserId,
  ConversationMarkAsReadStatus200,
  ConversationMarkAsReadStatus204,
  ConversationMarkAsReadStatus400,
  ConversationMarkAsReadStatus401,
  ConversationMarkAsReadStatus403,
  ConversationMarkAsReadStatus404,
  ConversationMarkAsReadStatus500,
  ConversationMarkAsReadStatus501,
} from "../../models/conversation/ConversationMarkAsRead.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { conversationMarkAsRead } from "../../clients/conversation/conversationMarkAsRead.ts";

export const conversationMarkAsReadMutationKey = () =>
  [{ url: "/api/app/conversation/mark-as-read/:targetUserId" }] as const;

export function conversationMarkAsReadMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = conversationMarkAsReadMutationKey();
  return mutationOptions<
    ConversationMarkAsReadStatus200 | ConversationMarkAsReadStatus204,
    ResponseErrorConfig<
      | ConversationMarkAsReadStatus400
      | ConversationMarkAsReadStatus401
      | ConversationMarkAsReadStatus403
      | ConversationMarkAsReadStatus404
      | ConversationMarkAsReadStatus500
      | ConversationMarkAsReadStatus501
    >,
    { targetUserId: ConversationMarkAsReadPathTargetUserId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ targetUserId }) => {
      return conversationMarkAsRead(targetUserId, config);
    },
  });
}

/**
 * {@link /api/app/conversation/mark-as-read/:targetUserId}
 */
export function useConversationMarkAsRead<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ConversationMarkAsReadStatus200 | ConversationMarkAsReadStatus204,
      ResponseErrorConfig<
        | ConversationMarkAsReadStatus400
        | ConversationMarkAsReadStatus401
        | ConversationMarkAsReadStatus403
        | ConversationMarkAsReadStatus404
        | ConversationMarkAsReadStatus500
        | ConversationMarkAsReadStatus501
      >,
      { targetUserId: ConversationMarkAsReadPathTargetUserId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? conversationMarkAsReadMutationKey();

  const baseOptions = conversationMarkAsReadMutationOptions(config) as UseMutationOptions<
    ConversationMarkAsReadStatus200 | ConversationMarkAsReadStatus204,
    ResponseErrorConfig<
      | ConversationMarkAsReadStatus400
      | ConversationMarkAsReadStatus401
      | ConversationMarkAsReadStatus403
      | ConversationMarkAsReadStatus404
      | ConversationMarkAsReadStatus500
      | ConversationMarkAsReadStatus501
    >,
    { targetUserId: ConversationMarkAsReadPathTargetUserId },
    TContext
  >;

  return useMutation<
    ConversationMarkAsReadStatus200 | ConversationMarkAsReadStatus204,
    ResponseErrorConfig<
      | ConversationMarkAsReadStatus400
      | ConversationMarkAsReadStatus401
      | ConversationMarkAsReadStatus403
      | ConversationMarkAsReadStatus404
      | ConversationMarkAsReadStatus500
      | ConversationMarkAsReadStatus501
    >,
    { targetUserId: ConversationMarkAsReadPathTargetUserId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ConversationMarkAsReadStatus200 | ConversationMarkAsReadStatus204,
    ResponseErrorConfig<
      | ConversationMarkAsReadStatus400
      | ConversationMarkAsReadStatus401
      | ConversationMarkAsReadStatus403
      | ConversationMarkAsReadStatus404
      | ConversationMarkAsReadStatus500
      | ConversationMarkAsReadStatus501
    >,
    { targetUserId: ConversationMarkAsReadPathTargetUserId },
    TContext
  >;
}
