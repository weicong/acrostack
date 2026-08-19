/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ConversationSendMessageWithAttachmentOptions,
  ConversationSendMessageWithAttachmentStatus200,
  ConversationSendMessageWithAttachmentStatus400,
  ConversationSendMessageWithAttachmentStatus401,
  ConversationSendMessageWithAttachmentStatus403,
  ConversationSendMessageWithAttachmentStatus404,
  ConversationSendMessageWithAttachmentStatus500,
  ConversationSendMessageWithAttachmentStatus501,
} from "../../models/conversation/ConversationSendMessageWithAttachment";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { conversationSendMessageWithAttachment } from "../../clients/conversation/conversationSendMessageWithAttachment";

export const conversationSendMessageWithAttachmentMutationKey = () =>
  [{ url: "/api/app/conversation/send-message-with-attachment" }] as const;

export function conversationSendMessageWithAttachmentMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = conversationSendMessageWithAttachmentMutationKey();
  return mutationOptions<
    ConversationSendMessageWithAttachmentStatus200,
    ResponseErrorConfig<
      | ConversationSendMessageWithAttachmentStatus400
      | ConversationSendMessageWithAttachmentStatus401
      | ConversationSendMessageWithAttachmentStatus403
      | ConversationSendMessageWithAttachmentStatus404
      | ConversationSendMessageWithAttachmentStatus500
      | ConversationSendMessageWithAttachmentStatus501
    >,
    ConversationSendMessageWithAttachmentOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await conversationSendMessageWithAttachment({
        ...config,
        body,
        throwOnError: true,
      });
      return data;
    },
  });
}

/**
 * {@link /api/app/conversation/send-message-with-attachment}
 */
export function useConversationSendMessageWithAttachment<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ConversationSendMessageWithAttachmentStatus200,
      ResponseErrorConfig<
        | ConversationSendMessageWithAttachmentStatus400
        | ConversationSendMessageWithAttachmentStatus401
        | ConversationSendMessageWithAttachmentStatus403
        | ConversationSendMessageWithAttachmentStatus404
        | ConversationSendMessageWithAttachmentStatus500
        | ConversationSendMessageWithAttachmentStatus501
      >,
      ConversationSendMessageWithAttachmentOptions,
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
  const mutationKey =
    mutationOptions.mutationKey ?? conversationSendMessageWithAttachmentMutationKey();

  const baseOptions = conversationSendMessageWithAttachmentMutationOptions(
    config,
  ) as UseMutationOptions<
    ConversationSendMessageWithAttachmentStatus200,
    ResponseErrorConfig<
      | ConversationSendMessageWithAttachmentStatus400
      | ConversationSendMessageWithAttachmentStatus401
      | ConversationSendMessageWithAttachmentStatus403
      | ConversationSendMessageWithAttachmentStatus404
      | ConversationSendMessageWithAttachmentStatus500
      | ConversationSendMessageWithAttachmentStatus501
    >,
    ConversationSendMessageWithAttachmentOptions,
    TContext
  >;

  return useMutation<
    ConversationSendMessageWithAttachmentStatus200,
    ResponseErrorConfig<
      | ConversationSendMessageWithAttachmentStatus400
      | ConversationSendMessageWithAttachmentStatus401
      | ConversationSendMessageWithAttachmentStatus403
      | ConversationSendMessageWithAttachmentStatus404
      | ConversationSendMessageWithAttachmentStatus500
      | ConversationSendMessageWithAttachmentStatus501
    >,
    ConversationSendMessageWithAttachmentOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ConversationSendMessageWithAttachmentStatus200,
    ResponseErrorConfig<
      | ConversationSendMessageWithAttachmentStatus400
      | ConversationSendMessageWithAttachmentStatus401
      | ConversationSendMessageWithAttachmentStatus403
      | ConversationSendMessageWithAttachmentStatus404
      | ConversationSendMessageWithAttachmentStatus500
      | ConversationSendMessageWithAttachmentStatus501
    >,
    ConversationSendMessageWithAttachmentOptions,
    TContext
  >;
}
