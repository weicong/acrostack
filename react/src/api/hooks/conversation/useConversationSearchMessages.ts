/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ConversationSearchMessagesOptions,
  ConversationSearchMessagesStatus200,
  ConversationSearchMessagesStatus400,
  ConversationSearchMessagesStatus401,
  ConversationSearchMessagesStatus403,
  ConversationSearchMessagesStatus404,
  ConversationSearchMessagesStatus500,
  ConversationSearchMessagesStatus501,
} from "../../models/conversation/ConversationSearchMessages";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { conversationSearchMessages } from "../../clients/conversation/conversationSearchMessages";

export const conversationSearchMessagesMutationKey = () =>
  [{ url: "/api/app/conversation/search-messages" }] as const;

export function conversationSearchMessagesMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = conversationSearchMessagesMutationKey();
  return mutationOptions<
    ConversationSearchMessagesStatus200,
    ResponseErrorConfig<
      | ConversationSearchMessagesStatus400
      | ConversationSearchMessagesStatus401
      | ConversationSearchMessagesStatus403
      | ConversationSearchMessagesStatus404
      | ConversationSearchMessagesStatus500
      | ConversationSearchMessagesStatus501
    >,
    ConversationSearchMessagesOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await conversationSearchMessages({ ...config, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/conversation/search-messages}
 */
export function useConversationSearchMessages<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ConversationSearchMessagesStatus200,
      ResponseErrorConfig<
        | ConversationSearchMessagesStatus400
        | ConversationSearchMessagesStatus401
        | ConversationSearchMessagesStatus403
        | ConversationSearchMessagesStatus404
        | ConversationSearchMessagesStatus500
        | ConversationSearchMessagesStatus501
      >,
      ConversationSearchMessagesOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? conversationSearchMessagesMutationKey();

  const baseOptions = conversationSearchMessagesMutationOptions(config) as UseMutationOptions<
    ConversationSearchMessagesStatus200,
    ResponseErrorConfig<
      | ConversationSearchMessagesStatus400
      | ConversationSearchMessagesStatus401
      | ConversationSearchMessagesStatus403
      | ConversationSearchMessagesStatus404
      | ConversationSearchMessagesStatus500
      | ConversationSearchMessagesStatus501
    >,
    ConversationSearchMessagesOptions,
    TContext
  >;

  return useMutation<
    ConversationSearchMessagesStatus200,
    ResponseErrorConfig<
      | ConversationSearchMessagesStatus400
      | ConversationSearchMessagesStatus401
      | ConversationSearchMessagesStatus403
      | ConversationSearchMessagesStatus404
      | ConversationSearchMessagesStatus500
      | ConversationSearchMessagesStatus501
    >,
    ConversationSearchMessagesOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ConversationSearchMessagesStatus200,
    ResponseErrorConfig<
      | ConversationSearchMessagesStatus400
      | ConversationSearchMessagesStatus401
      | ConversationSearchMessagesStatus403
      | ConversationSearchMessagesStatus404
      | ConversationSearchMessagesStatus500
      | ConversationSearchMessagesStatus501
    >,
    ConversationSearchMessagesOptions,
    TContext
  >;
}
