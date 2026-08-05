/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ChatSendMessageWithAttachmentData,
  ChatSendMessageWithAttachmentStatus200,
} from "../../models/chat/ChatSendMessageWithAttachment.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { chatSendMessageWithAttachment } from "../../clients/chat/chatSendMessageWithAttachment.ts";

export const chatSendMessageWithAttachmentMutationKey = () =>
  [{ url: "/api/app/chat/messages/send-with-attachment" }] as const;

export function chatSendMessageWithAttachmentMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<ChatSendMessageWithAttachmentData>> & { client?: Client } = {},
) {
  const mutationKey = chatSendMessageWithAttachmentMutationKey();
  return mutationOptions<
    ChatSendMessageWithAttachmentStatus200,
    ResponseErrorConfig<Error>,
    { data?: ChatSendMessageWithAttachmentData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return chatSendMessageWithAttachment(data, config);
    },
  });
}

/**
 * {@link /api/app/chat/messages/send-with-attachment}
 */
export function useChatSendMessageWithAttachment<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ChatSendMessageWithAttachmentStatus200,
      ResponseErrorConfig<Error>,
      { data?: ChatSendMessageWithAttachmentData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<ChatSendMessageWithAttachmentData>> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? chatSendMessageWithAttachmentMutationKey();

  const baseOptions = chatSendMessageWithAttachmentMutationOptions(config) as UseMutationOptions<
    ChatSendMessageWithAttachmentStatus200,
    ResponseErrorConfig<Error>,
    { data?: ChatSendMessageWithAttachmentData },
    TContext
  >;

  return useMutation<
    ChatSendMessageWithAttachmentStatus200,
    ResponseErrorConfig<Error>,
    { data?: ChatSendMessageWithAttachmentData },
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
    { data?: ChatSendMessageWithAttachmentData },
    TContext
  >;
}
