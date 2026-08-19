/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ConversationDeleteMessageOptions,
  ConversationDeleteMessageStatus200,
  ConversationDeleteMessageStatus204,
  ConversationDeleteMessageStatus400,
  ConversationDeleteMessageStatus401,
  ConversationDeleteMessageStatus403,
  ConversationDeleteMessageStatus404,
  ConversationDeleteMessageStatus500,
  ConversationDeleteMessageStatus501,
} from "../../models/conversation/ConversationDeleteMessage";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { conversationDeleteMessage } from "../../clients/conversation/conversationDeleteMessage";

export const conversationDeleteMessageMutationKey = () =>
  [{ url: "/api/app/conversation/message/:messageId" }] as const;

export function conversationDeleteMessageMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
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
    ConversationDeleteMessageOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await conversationDeleteMessage({ ...config, path, throwOnError: true });
      return data;
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
      ConversationDeleteMessageOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
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
    ConversationDeleteMessageOptions,
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
    ConversationDeleteMessageOptions,
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
    ConversationDeleteMessageOptions,
    TContext
  >;
}
