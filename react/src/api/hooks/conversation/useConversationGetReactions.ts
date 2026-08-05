/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  ConversationGetReactionsPathMessageId,
  ConversationGetReactionsStatus200,
  ConversationGetReactionsStatus400,
  ConversationGetReactionsStatus401,
  ConversationGetReactionsStatus403,
  ConversationGetReactionsStatus404,
  ConversationGetReactionsStatus500,
  ConversationGetReactionsStatus501,
} from "../../models/conversation/ConversationGetReactions.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { conversationGetReactions } from "../../clients/conversation/conversationGetReactions.ts";

export const conversationGetReactionsQueryKey = (
  messageId?: ConversationGetReactionsPathMessageId,
) =>
  [
    { url: "/api/app/conversation/reactions/:messageId", params: { messageId: messageId } },
  ] as const;

type ConversationGetReactionsQueryKey = ReturnType<typeof conversationGetReactionsQueryKey>;

export function conversationGetReactionsQueryOptions(
  messageId?: ConversationGetReactionsPathMessageId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = conversationGetReactionsQueryKey(messageId);
  return queryOptions<
    ConversationGetReactionsStatus200,
    ResponseErrorConfig<
      | ConversationGetReactionsStatus400
      | ConversationGetReactionsStatus401
      | ConversationGetReactionsStatus403
      | ConversationGetReactionsStatus404
      | ConversationGetReactionsStatus500
      | ConversationGetReactionsStatus501
    >,
    ConversationGetReactionsStatus200,
    typeof queryKey
  >({
    enabled: !!messageId,
    queryKey,
    queryFn: async ({ signal }) => {
      return conversationGetReactions(messageId!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/conversation/reactions/:messageId}
 */
export function useConversationGetReactions<
  TData = ConversationGetReactionsStatus200,
  TQueryData = ConversationGetReactionsStatus200,
  TQueryKey extends QueryKey = ConversationGetReactionsQueryKey,
>(
  messageId?: ConversationGetReactionsPathMessageId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        ConversationGetReactionsStatus200,
        ResponseErrorConfig<
          | ConversationGetReactionsStatus400
          | ConversationGetReactionsStatus401
          | ConversationGetReactionsStatus403
          | ConversationGetReactionsStatus404
          | ConversationGetReactionsStatus500
          | ConversationGetReactionsStatus501
        >,
        TData,
        TQueryData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? conversationGetReactionsQueryKey(messageId);

  const query = useQuery(
    {
      ...conversationGetReactionsQueryOptions(messageId, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | ConversationGetReactionsStatus400
      | ConversationGetReactionsStatus401
      | ConversationGetReactionsStatus403
      | ConversationGetReactionsStatus404
      | ConversationGetReactionsStatus500
      | ConversationGetReactionsStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
