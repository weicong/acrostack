/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ConversationEditMessageOptions,
  ConversationEditMessageStatus200,
  ConversationEditMessageStatus400,
  ConversationEditMessageStatus401,
  ConversationEditMessageStatus403,
  ConversationEditMessageStatus404,
  ConversationEditMessageStatus500,
  ConversationEditMessageStatus501,
} from "../../models/conversation/ConversationEditMessage";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { conversationEditMessage } from "../../clients/conversation/conversationEditMessage";

export const conversationEditMessageMutationKey = () =>
  [{ url: "/api/app/conversation/edit-message/:messageId" }] as const;

export function conversationEditMessageMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
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
    ConversationEditMessageOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await conversationEditMessage({ ...config, path, body, throwOnError: true });
      return data;
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
      ConversationEditMessageOptions,
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
    ConversationEditMessageOptions,
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
    ConversationEditMessageOptions,
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
    ConversationEditMessageOptions,
    TContext
  >;
}
