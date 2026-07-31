/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  ConversationGetMessageListQueryTargetUserId,
  ConversationGetMessageListQuerySkipCount,
  ConversationGetMessageListQueryMaxResultCount,
  ConversationGetMessageListStatus200,
  ConversationGetMessageListStatus400,
  ConversationGetMessageListStatus401,
  ConversationGetMessageListStatus403,
  ConversationGetMessageListStatus404,
  ConversationGetMessageListStatus500,
  ConversationGetMessageListStatus501,
} from "../../models/conversation/ConversationGetMessageList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { conversationGetMessageList } from "../../clients/conversation/conversationGetMessageList.ts";

export const conversationGetMessageListQueryKey = (params?: {
  TargetUserId?: ConversationGetMessageListQueryTargetUserId;
  SkipCount?: ConversationGetMessageListQuerySkipCount;
  MaxResultCount?: ConversationGetMessageListQueryMaxResultCount;
}) => [{ url: "/api/app/conversation/message-list" }, ...(params ? [params] : [])] as const;

type ConversationGetMessageListQueryKey = ReturnType<typeof conversationGetMessageListQueryKey>;

export function conversationGetMessageListQueryOptions(
  params?: {
    TargetUserId?: ConversationGetMessageListQueryTargetUserId;
    SkipCount?: ConversationGetMessageListQuerySkipCount;
    MaxResultCount?: ConversationGetMessageListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = conversationGetMessageListQueryKey(params);
  return queryOptions<
    ConversationGetMessageListStatus200,
    ResponseErrorConfig<
      | ConversationGetMessageListStatus400
      | ConversationGetMessageListStatus401
      | ConversationGetMessageListStatus403
      | ConversationGetMessageListStatus404
      | ConversationGetMessageListStatus500
      | ConversationGetMessageListStatus501
    >,
    ConversationGetMessageListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return conversationGetMessageList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/conversation/message-list}
 */
export function useConversationGetMessageList<
  TData = ConversationGetMessageListStatus200,
  TQueryData = ConversationGetMessageListStatus200,
  TQueryKey extends QueryKey = ConversationGetMessageListQueryKey,
>(
  params?: {
    TargetUserId?: ConversationGetMessageListQueryTargetUserId;
    SkipCount?: ConversationGetMessageListQuerySkipCount;
    MaxResultCount?: ConversationGetMessageListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        ConversationGetMessageListStatus200,
        ResponseErrorConfig<
          | ConversationGetMessageListStatus400
          | ConversationGetMessageListStatus401
          | ConversationGetMessageListStatus403
          | ConversationGetMessageListStatus404
          | ConversationGetMessageListStatus500
          | ConversationGetMessageListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? conversationGetMessageListQueryKey(params);

  const query = useQuery(
    {
      ...conversationGetMessageListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | ConversationGetMessageListStatus400
      | ConversationGetMessageListStatus401
      | ConversationGetMessageListStatus403
      | ConversationGetMessageListStatus404
      | ConversationGetMessageListStatus500
      | ConversationGetMessageListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
