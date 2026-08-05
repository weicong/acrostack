/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ConversationDeleteMessagePathMessageId,
  ConversationDeleteMessageStatus200,
  ConversationDeleteMessageStatus204,
  ConversationDeleteMessageStatus400,
  ConversationDeleteMessageStatus401,
  ConversationDeleteMessageStatus403,
  ConversationDeleteMessageStatus404,
  ConversationDeleteMessageStatus500,
  ConversationDeleteMessageStatus501,
} from "../../models/conversation/ConversationDeleteMessage.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { conversationDeleteMessage } from "../../clients/conversation/conversationDeleteMessage.ts";

export const conversationDeleteMessageMutationKey = () =>
  [{ url: "/api/app/conversation/message/:messageId" }] as const;

export function conversationDeleteMessageMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = conversationDeleteMessageMutationKey();
  return mutationOptions<
    ConversationDeleteMessageStatus200 | ConversationDeleteMessageStatus204,
    ResponseErrorConfig<
      | ConversationDeleteMessageStatus400
      | ConversationDeleteMessageStatus401
      | ConversationDeleteMessageStatus403
      | ConversationDeleteMessageStatus404
      | ConversationDeleteMessageStatus500
      | ConversationDeleteMessageStatus501
    >,
    { messageId: ConversationDeleteMessagePathMessageId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ messageId }) => {
      return conversationDeleteMessage(messageId, config);
    },
  });
}

/**
 * {@link /api/app/conversation/message/:messageId}
 */
export function useConversationDeleteMessage<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ConversationDeleteMessageStatus200 | ConversationDeleteMessageStatus204,
      ResponseErrorConfig<
        | ConversationDeleteMessageStatus400
        | ConversationDeleteMessageStatus401
        | ConversationDeleteMessageStatus403
        | ConversationDeleteMessageStatus404
        | ConversationDeleteMessageStatus500
        | ConversationDeleteMessageStatus501
      >,
      { messageId: ConversationDeleteMessagePathMessageId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? conversationDeleteMessageMutationKey();

  const baseOptions = conversationDeleteMessageMutationOptions(config) as UseMutationOptions<
    ConversationDeleteMessageStatus200 | ConversationDeleteMessageStatus204,
    ResponseErrorConfig<
      | ConversationDeleteMessageStatus400
      | ConversationDeleteMessageStatus401
      | ConversationDeleteMessageStatus403
      | ConversationDeleteMessageStatus404
      | ConversationDeleteMessageStatus500
      | ConversationDeleteMessageStatus501
    >,
    { messageId: ConversationDeleteMessagePathMessageId },
    TContext
  >;

  return useMutation<
    ConversationDeleteMessageStatus200 | ConversationDeleteMessageStatus204,
    ResponseErrorConfig<
      | ConversationDeleteMessageStatus400
      | ConversationDeleteMessageStatus401
      | ConversationDeleteMessageStatus403
      | ConversationDeleteMessageStatus404
      | ConversationDeleteMessageStatus500
      | ConversationDeleteMessageStatus501
    >,
    { messageId: ConversationDeleteMessagePathMessageId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ConversationDeleteMessageStatus200 | ConversationDeleteMessageStatus204,
    ResponseErrorConfig<
      | ConversationDeleteMessageStatus400
      | ConversationDeleteMessageStatus401
      | ConversationDeleteMessageStatus403
      | ConversationDeleteMessageStatus404
      | ConversationDeleteMessageStatus500
      | ConversationDeleteMessageStatus501
    >,
    { messageId: ConversationDeleteMessagePathMessageId },
    TContext
  >;
}
