/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ConversationSendMessageData,
  ConversationSendMessageStatus200,
  ConversationSendMessageStatus400,
  ConversationSendMessageStatus401,
  ConversationSendMessageStatus403,
  ConversationSendMessageStatus404,
  ConversationSendMessageStatus500,
  ConversationSendMessageStatus501,
} from "../../models/conversation/ConversationSendMessage.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { conversationSendMessage } from "../../clients/conversation/conversationSendMessage.ts";

export const conversationSendMessageMutationKey = () =>
  [{ url: "/api/app/conversation/send-message" }] as const;

export function conversationSendMessageMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<ConversationSendMessageData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = conversationSendMessageMutationKey();
  return mutationOptions<
    ConversationSendMessageStatus200,
    ResponseErrorConfig<
      | ConversationSendMessageStatus400
      | ConversationSendMessageStatus401
      | ConversationSendMessageStatus403
      | ConversationSendMessageStatus404
      | ConversationSendMessageStatus500
      | ConversationSendMessageStatus501
    >,
    { data?: ConversationSendMessageData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return conversationSendMessage(data, config);
    },
  });
}

/**
 * {@link /api/app/conversation/send-message}
 */
export function useConversationSendMessage<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ConversationSendMessageStatus200,
      ResponseErrorConfig<
        | ConversationSendMessageStatus400
        | ConversationSendMessageStatus401
        | ConversationSendMessageStatus403
        | ConversationSendMessageStatus404
        | ConversationSendMessageStatus500
        | ConversationSendMessageStatus501
      >,
      { data?: ConversationSendMessageData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<ConversationSendMessageData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? conversationSendMessageMutationKey();

  const baseOptions = conversationSendMessageMutationOptions(config) as UseMutationOptions<
    ConversationSendMessageStatus200,
    ResponseErrorConfig<
      | ConversationSendMessageStatus400
      | ConversationSendMessageStatus401
      | ConversationSendMessageStatus403
      | ConversationSendMessageStatus404
      | ConversationSendMessageStatus500
      | ConversationSendMessageStatus501
    >,
    { data?: ConversationSendMessageData },
    TContext
  >;

  return useMutation<
    ConversationSendMessageStatus200,
    ResponseErrorConfig<
      | ConversationSendMessageStatus400
      | ConversationSendMessageStatus401
      | ConversationSendMessageStatus403
      | ConversationSendMessageStatus404
      | ConversationSendMessageStatus500
      | ConversationSendMessageStatus501
    >,
    { data?: ConversationSendMessageData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ConversationSendMessageStatus200,
    ResponseErrorConfig<
      | ConversationSendMessageStatus400
      | ConversationSendMessageStatus401
      | ConversationSendMessageStatus403
      | ConversationSendMessageStatus404
      | ConversationSendMessageStatus500
      | ConversationSendMessageStatus501
    >,
    { data?: ConversationSendMessageData },
    TContext
  >;
}
