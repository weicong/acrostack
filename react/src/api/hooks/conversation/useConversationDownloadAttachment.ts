/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ConversationDownloadAttachmentPathMessageId,
  ConversationDownloadAttachmentStatus200,
  ConversationDownloadAttachmentStatus400,
  ConversationDownloadAttachmentStatus401,
  ConversationDownloadAttachmentStatus403,
  ConversationDownloadAttachmentStatus404,
  ConversationDownloadAttachmentStatus500,
  ConversationDownloadAttachmentStatus501,
} from "../../models/conversation/ConversationDownloadAttachment.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { conversationDownloadAttachment } from "../../clients/conversation/conversationDownloadAttachment.ts";

export const conversationDownloadAttachmentMutationKey = () =>
  [{ url: "/api/app/conversation/download-attachment/:messageId" }] as const;

export function conversationDownloadAttachmentMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = conversationDownloadAttachmentMutationKey();
  return mutationOptions<
    ConversationDownloadAttachmentStatus200,
    ResponseErrorConfig<
      | ConversationDownloadAttachmentStatus400
      | ConversationDownloadAttachmentStatus401
      | ConversationDownloadAttachmentStatus403
      | ConversationDownloadAttachmentStatus404
      | ConversationDownloadAttachmentStatus500
      | ConversationDownloadAttachmentStatus501
    >,
    { messageId: ConversationDownloadAttachmentPathMessageId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ messageId }) => {
      return conversationDownloadAttachment(messageId, config);
    },
  });
}

/**
 * {@link /api/app/conversation/download-attachment/:messageId}
 */
export function useConversationDownloadAttachment<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ConversationDownloadAttachmentStatus200,
      ResponseErrorConfig<
        | ConversationDownloadAttachmentStatus400
        | ConversationDownloadAttachmentStatus401
        | ConversationDownloadAttachmentStatus403
        | ConversationDownloadAttachmentStatus404
        | ConversationDownloadAttachmentStatus500
        | ConversationDownloadAttachmentStatus501
      >,
      { messageId: ConversationDownloadAttachmentPathMessageId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? conversationDownloadAttachmentMutationKey();

  const baseOptions = conversationDownloadAttachmentMutationOptions(config) as UseMutationOptions<
    ConversationDownloadAttachmentStatus200,
    ResponseErrorConfig<
      | ConversationDownloadAttachmentStatus400
      | ConversationDownloadAttachmentStatus401
      | ConversationDownloadAttachmentStatus403
      | ConversationDownloadAttachmentStatus404
      | ConversationDownloadAttachmentStatus500
      | ConversationDownloadAttachmentStatus501
    >,
    { messageId: ConversationDownloadAttachmentPathMessageId },
    TContext
  >;

  return useMutation<
    ConversationDownloadAttachmentStatus200,
    ResponseErrorConfig<
      | ConversationDownloadAttachmentStatus400
      | ConversationDownloadAttachmentStatus401
      | ConversationDownloadAttachmentStatus403
      | ConversationDownloadAttachmentStatus404
      | ConversationDownloadAttachmentStatus500
      | ConversationDownloadAttachmentStatus501
    >,
    { messageId: ConversationDownloadAttachmentPathMessageId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ConversationDownloadAttachmentStatus200,
    ResponseErrorConfig<
      | ConversationDownloadAttachmentStatus400
      | ConversationDownloadAttachmentStatus401
      | ConversationDownloadAttachmentStatus403
      | ConversationDownloadAttachmentStatus404
      | ConversationDownloadAttachmentStatus500
      | ConversationDownloadAttachmentStatus501
    >,
    { messageId: ConversationDownloadAttachmentPathMessageId },
    TContext
  >;
}
