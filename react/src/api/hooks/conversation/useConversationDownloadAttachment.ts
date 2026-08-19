/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ConversationDownloadAttachmentOptions,
  ConversationDownloadAttachmentStatus200,
  ConversationDownloadAttachmentStatus400,
  ConversationDownloadAttachmentStatus401,
  ConversationDownloadAttachmentStatus403,
  ConversationDownloadAttachmentStatus404,
  ConversationDownloadAttachmentStatus500,
  ConversationDownloadAttachmentStatus501,
} from "../../models/conversation/ConversationDownloadAttachment";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { conversationDownloadAttachment } from "../../clients/conversation/conversationDownloadAttachment";

export const conversationDownloadAttachmentMutationKey = () =>
  [{ url: "/api/app/conversation/download-attachment/:messageId" }] as const;

export function conversationDownloadAttachmentMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: { response?: "text/plain" | "application/json" | "text/json" };
  } = {},
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
    ConversationDownloadAttachmentOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await conversationDownloadAttachment({
        ...config,
        path,
        throwOnError: true,
      });
      return data;
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
      ConversationDownloadAttachmentOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: { response?: "text/plain" | "application/json" | "text/json" };
    };
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
    ConversationDownloadAttachmentOptions,
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
    ConversationDownloadAttachmentOptions,
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
    ConversationDownloadAttachmentOptions,
    TContext
  >;
}
