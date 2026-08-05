/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ConversationSearchMessagesData,
  ConversationSearchMessagesStatus200,
  ConversationSearchMessagesStatus400,
  ConversationSearchMessagesStatus401,
  ConversationSearchMessagesStatus403,
  ConversationSearchMessagesStatus404,
  ConversationSearchMessagesStatus500,
  ConversationSearchMessagesStatus501,
} from "../../models/conversation/ConversationSearchMessages.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { conversationSearchMessages } from "../../clients/conversation/conversationSearchMessages.ts";

export const conversationSearchMessagesMutationKey = () =>
  [{ url: "/api/app/conversation/search-messages" }] as const;

export function conversationSearchMessagesMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<ConversationSearchMessagesData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
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
    { data?: ConversationSearchMessagesData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return conversationSearchMessages(data, config);
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
      { data?: ConversationSearchMessagesData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<ConversationSearchMessagesData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
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
    { data?: ConversationSearchMessagesData },
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
    { data?: ConversationSearchMessagesData },
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
    { data?: ConversationSearchMessagesData },
    TContext
  >;
}
