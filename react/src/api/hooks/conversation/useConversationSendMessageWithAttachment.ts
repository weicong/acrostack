/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ConversationSendMessageWithAttachmentData,
  ConversationSendMessageWithAttachmentStatus200,
  ConversationSendMessageWithAttachmentStatus400,
  ConversationSendMessageWithAttachmentStatus401,
  ConversationSendMessageWithAttachmentStatus403,
  ConversationSendMessageWithAttachmentStatus404,
  ConversationSendMessageWithAttachmentStatus500,
  ConversationSendMessageWithAttachmentStatus501,
} from "../../models/conversation/ConversationSendMessageWithAttachment.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { conversationSendMessageWithAttachment } from "../../clients/conversation/conversationSendMessageWithAttachment.ts";

export const conversationSendMessageWithAttachmentMutationKey = () =>
  [{ url: "/api/app/conversation/send-message-with-attachment" }] as const;

export function conversationSendMessageWithAttachmentMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<ConversationSendMessageWithAttachmentData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
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
    { data?: ConversationSendMessageWithAttachmentData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return conversationSendMessageWithAttachment(data, config);
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
      { data?: ConversationSendMessageWithAttachmentData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<ConversationSendMessageWithAttachmentData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
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
    { data?: ConversationSendMessageWithAttachmentData },
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
    { data?: ConversationSendMessageWithAttachmentData },
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
    { data?: ConversationSendMessageWithAttachmentData },
    TContext
  >;
}
