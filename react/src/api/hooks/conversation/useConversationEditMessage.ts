/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ConversationEditMessageData,
  ConversationEditMessagePathMessageId,
  ConversationEditMessageStatus200,
  ConversationEditMessageStatus400,
  ConversationEditMessageStatus401,
  ConversationEditMessageStatus403,
  ConversationEditMessageStatus404,
  ConversationEditMessageStatus500,
  ConversationEditMessageStatus501,
} from "../../models/conversation/ConversationEditMessage.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { conversationEditMessage } from "../../clients/conversation/conversationEditMessage.ts";

export const conversationEditMessageMutationKey = () =>
  [{ url: "/api/app/conversation/edit-message/:messageId" }] as const;

export function conversationEditMessageMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<ConversationEditMessageData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = conversationEditMessageMutationKey();
  return mutationOptions<
    ConversationEditMessageStatus200,
    ResponseErrorConfig<
      | ConversationEditMessageStatus400
      | ConversationEditMessageStatus401
      | ConversationEditMessageStatus403
      | ConversationEditMessageStatus404
      | ConversationEditMessageStatus500
      | ConversationEditMessageStatus501
    >,
    { messageId: ConversationEditMessagePathMessageId; data?: ConversationEditMessageData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ messageId, data }) => {
      return conversationEditMessage(messageId, data, config);
    },
  });
}

/**
 * {@link /api/app/conversation/edit-message/:messageId}
 */
export function useConversationEditMessage<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ConversationEditMessageStatus200,
      ResponseErrorConfig<
        | ConversationEditMessageStatus400
        | ConversationEditMessageStatus401
        | ConversationEditMessageStatus403
        | ConversationEditMessageStatus404
        | ConversationEditMessageStatus500
        | ConversationEditMessageStatus501
      >,
      { messageId: ConversationEditMessagePathMessageId; data?: ConversationEditMessageData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<ConversationEditMessageData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? conversationEditMessageMutationKey();

  const baseOptions = conversationEditMessageMutationOptions(config) as UseMutationOptions<
    ConversationEditMessageStatus200,
    ResponseErrorConfig<
      | ConversationEditMessageStatus400
      | ConversationEditMessageStatus401
      | ConversationEditMessageStatus403
      | ConversationEditMessageStatus404
      | ConversationEditMessageStatus500
      | ConversationEditMessageStatus501
    >,
    { messageId: ConversationEditMessagePathMessageId; data?: ConversationEditMessageData },
    TContext
  >;

  return useMutation<
    ConversationEditMessageStatus200,
    ResponseErrorConfig<
      | ConversationEditMessageStatus400
      | ConversationEditMessageStatus401
      | ConversationEditMessageStatus403
      | ConversationEditMessageStatus404
      | ConversationEditMessageStatus500
      | ConversationEditMessageStatus501
    >,
    { messageId: ConversationEditMessagePathMessageId; data?: ConversationEditMessageData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ConversationEditMessageStatus200,
    ResponseErrorConfig<
      | ConversationEditMessageStatus400
      | ConversationEditMessageStatus401
      | ConversationEditMessageStatus403
      | ConversationEditMessageStatus404
      | ConversationEditMessageStatus500
      | ConversationEditMessageStatus501
    >,
    { messageId: ConversationEditMessagePathMessageId; data?: ConversationEditMessageData },
    TContext
  >;
}
