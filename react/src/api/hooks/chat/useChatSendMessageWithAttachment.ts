/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ChatSendMessageWithAttachmentOptions,
  ChatSendMessageWithAttachmentStatus200,
} from "../../models/chat/ChatSendMessageWithAttachment";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { chatSendMessageWithAttachment } from "../../clients/chat/chatSendMessageWithAttachment";

export const chatSendMessageWithAttachmentMutationKey = () =>
  [{ url: "/api/app/chat/messages/send-with-attachment" }] as const;

export function chatSendMessageWithAttachmentMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: { response?: "text/plain" | "application/json" | "text/json" };
  } = {},
) {
  const mutationKey = chatSendMessageWithAttachmentMutationKey();
  return mutationOptions<
    ChatSendMessageWithAttachmentStatus200,
    ResponseErrorConfig<Error>,
    ChatSendMessageWithAttachmentOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await chatSendMessageWithAttachment({ ...config, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * @summary Sends a chat message with an optional file attachment. The request
 * must be `multipart/form-data`: form fields bind to
 * AcroStack.Chat.SendMessageInput and the file part binds to
 * attachment.
 * {@link /api/app/chat/messages/send-with-attachment}
 */
export function useChatSendMessageWithAttachment<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ChatSendMessageWithAttachmentStatus200,
      ResponseErrorConfig<Error>,
      ChatSendMessageWithAttachmentOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: { response?: "text/plain" | "application/json" | "text/json" };
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? chatSendMessageWithAttachmentMutationKey();

  const baseOptions = chatSendMessageWithAttachmentMutationOptions(config) as UseMutationOptions<
    ChatSendMessageWithAttachmentStatus200,
    ResponseErrorConfig<Error>,
    ChatSendMessageWithAttachmentOptions,
    TContext
  >;

  return useMutation<
    ChatSendMessageWithAttachmentStatus200,
    ResponseErrorConfig<Error>,
    ChatSendMessageWithAttachmentOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ChatSendMessageWithAttachmentStatus200,
    ResponseErrorConfig<Error>,
    ChatSendMessageWithAttachmentOptions,
    TContext
  >;
}
