/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ConversationSendMessageOptions,
  ConversationSendMessageStatus200,
  ConversationSendMessageStatus400,
  ConversationSendMessageStatus401,
  ConversationSendMessageStatus403,
  ConversationSendMessageStatus404,
  ConversationSendMessageStatus500,
  ConversationSendMessageStatus501,
} from "../../models/conversation/ConversationSendMessage";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { conversationSendMessage } from "../../clients/conversation/conversationSendMessage";

export const conversationSendMessageMutationKey = () =>
  [{ url: "/api/app/conversation/send-message" }] as const;

export function conversationSendMessageMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
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
    ConversationSendMessageOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await conversationSendMessage({ ...config, body, throwOnError: true });
      return data;
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
      ConversationSendMessageOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: {
        request?: "application/json" | "text/json" | "application/*+json";
        response?: "text/plain" | "application/json" | "text/json";
      };
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
    ConversationSendMessageOptions,
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
    ConversationSendMessageOptions,
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
    ConversationSendMessageOptions,
    TContext
  >;
}
