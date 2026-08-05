/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ConversationToggleReactionPathMessageId,
  ConversationToggleReactionQueryReaction,
  ConversationToggleReactionStatus200,
  ConversationToggleReactionStatus400,
  ConversationToggleReactionStatus401,
  ConversationToggleReactionStatus403,
  ConversationToggleReactionStatus404,
  ConversationToggleReactionStatus500,
  ConversationToggleReactionStatus501,
} from "../../models/conversation/ConversationToggleReaction.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { conversationToggleReaction } from "../../clients/conversation/conversationToggleReaction.ts";

export const conversationToggleReactionMutationKey = () =>
  [{ url: "/api/app/conversation/toggle-reaction/:messageId" }] as const;

export function conversationToggleReactionMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = conversationToggleReactionMutationKey();
  return mutationOptions<
    ConversationToggleReactionStatus200,
    ResponseErrorConfig<
      | ConversationToggleReactionStatus400
      | ConversationToggleReactionStatus401
      | ConversationToggleReactionStatus403
      | ConversationToggleReactionStatus404
      | ConversationToggleReactionStatus500
      | ConversationToggleReactionStatus501
    >,
    {
      messageId: ConversationToggleReactionPathMessageId;
      params?: { reaction?: ConversationToggleReactionQueryReaction };
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ messageId, params }) => {
      return conversationToggleReaction(messageId, params, config);
    },
  });
}

/**
 * {@link /api/app/conversation/toggle-reaction/:messageId}
 */
export function useConversationToggleReaction<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ConversationToggleReactionStatus200,
      ResponseErrorConfig<
        | ConversationToggleReactionStatus400
        | ConversationToggleReactionStatus401
        | ConversationToggleReactionStatus403
        | ConversationToggleReactionStatus404
        | ConversationToggleReactionStatus500
        | ConversationToggleReactionStatus501
      >,
      {
        messageId: ConversationToggleReactionPathMessageId;
        params?: { reaction?: ConversationToggleReactionQueryReaction };
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? conversationToggleReactionMutationKey();

  const baseOptions = conversationToggleReactionMutationOptions(config) as UseMutationOptions<
    ConversationToggleReactionStatus200,
    ResponseErrorConfig<
      | ConversationToggleReactionStatus400
      | ConversationToggleReactionStatus401
      | ConversationToggleReactionStatus403
      | ConversationToggleReactionStatus404
      | ConversationToggleReactionStatus500
      | ConversationToggleReactionStatus501
    >,
    {
      messageId: ConversationToggleReactionPathMessageId;
      params?: { reaction?: ConversationToggleReactionQueryReaction };
    },
    TContext
  >;

  return useMutation<
    ConversationToggleReactionStatus200,
    ResponseErrorConfig<
      | ConversationToggleReactionStatus400
      | ConversationToggleReactionStatus401
      | ConversationToggleReactionStatus403
      | ConversationToggleReactionStatus404
      | ConversationToggleReactionStatus500
      | ConversationToggleReactionStatus501
    >,
    {
      messageId: ConversationToggleReactionPathMessageId;
      params?: { reaction?: ConversationToggleReactionQueryReaction };
    },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ConversationToggleReactionStatus200,
    ResponseErrorConfig<
      | ConversationToggleReactionStatus400
      | ConversationToggleReactionStatus401
      | ConversationToggleReactionStatus403
      | ConversationToggleReactionStatus404
      | ConversationToggleReactionStatus500
      | ConversationToggleReactionStatus501
    >,
    {
      messageId: ConversationToggleReactionPathMessageId;
      params?: { reaction?: ConversationToggleReactionQueryReaction };
    },
    TContext
  >;
}
