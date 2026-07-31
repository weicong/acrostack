/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  ConversationGetListStatus200,
  ConversationGetListStatus400,
  ConversationGetListStatus401,
  ConversationGetListStatus403,
  ConversationGetListStatus404,
  ConversationGetListStatus500,
  ConversationGetListStatus501,
} from "../../models/conversation/ConversationGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { conversationGetList } from "../../clients/conversation/conversationGetList.ts";

export const conversationGetListQueryKey = () => [{ url: "/api/app/conversation" }] as const;

type ConversationGetListQueryKey = ReturnType<typeof conversationGetListQueryKey>;

export function conversationGetListQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = conversationGetListQueryKey();
  return queryOptions<
    ConversationGetListStatus200,
    ResponseErrorConfig<
      | ConversationGetListStatus400
      | ConversationGetListStatus401
      | ConversationGetListStatus403
      | ConversationGetListStatus404
      | ConversationGetListStatus500
      | ConversationGetListStatus501
    >,
    ConversationGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return conversationGetList({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/conversation}
 */
export function useConversationGetList<
  TData = ConversationGetListStatus200,
  TQueryData = ConversationGetListStatus200,
  TQueryKey extends QueryKey = ConversationGetListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        ConversationGetListStatus200,
        ResponseErrorConfig<
          | ConversationGetListStatus400
          | ConversationGetListStatus401
          | ConversationGetListStatus403
          | ConversationGetListStatus404
          | ConversationGetListStatus500
          | ConversationGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? conversationGetListQueryKey();

  const query = useQuery(
    {
      ...conversationGetListQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | ConversationGetListStatus400
      | ConversationGetListStatus401
      | ConversationGetListStatus403
      | ConversationGetListStatus404
      | ConversationGetListStatus500
      | ConversationGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
