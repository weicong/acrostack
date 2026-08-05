/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  ChatBlockGetBlockedUsersStatus200,
  ChatBlockGetBlockedUsersStatus400,
  ChatBlockGetBlockedUsersStatus401,
  ChatBlockGetBlockedUsersStatus403,
  ChatBlockGetBlockedUsersStatus404,
  ChatBlockGetBlockedUsersStatus500,
  ChatBlockGetBlockedUsersStatus501,
} from "../../models/chatBlock/ChatBlockGetBlockedUsers.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { chatBlockGetBlockedUsers } from "../../clients/chatBlock/chatBlockGetBlockedUsers.ts";

export const chatBlockGetBlockedUsersQueryKey = () =>
  [{ url: "/api/app/chat-block/blocked-users" }] as const;

type ChatBlockGetBlockedUsersQueryKey = ReturnType<typeof chatBlockGetBlockedUsersQueryKey>;

export function chatBlockGetBlockedUsersQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = chatBlockGetBlockedUsersQueryKey();
  return queryOptions<
    ChatBlockGetBlockedUsersStatus200,
    ResponseErrorConfig<
      | ChatBlockGetBlockedUsersStatus400
      | ChatBlockGetBlockedUsersStatus401
      | ChatBlockGetBlockedUsersStatus403
      | ChatBlockGetBlockedUsersStatus404
      | ChatBlockGetBlockedUsersStatus500
      | ChatBlockGetBlockedUsersStatus501
    >,
    ChatBlockGetBlockedUsersStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return chatBlockGetBlockedUsers({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/chat-block/blocked-users}
 */
export function useChatBlockGetBlockedUsers<
  TData = ChatBlockGetBlockedUsersStatus200,
  TQueryData = ChatBlockGetBlockedUsersStatus200,
  TQueryKey extends QueryKey = ChatBlockGetBlockedUsersQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        ChatBlockGetBlockedUsersStatus200,
        ResponseErrorConfig<
          | ChatBlockGetBlockedUsersStatus400
          | ChatBlockGetBlockedUsersStatus401
          | ChatBlockGetBlockedUsersStatus403
          | ChatBlockGetBlockedUsersStatus404
          | ChatBlockGetBlockedUsersStatus500
          | ChatBlockGetBlockedUsersStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? chatBlockGetBlockedUsersQueryKey();

  const query = useQuery(
    {
      ...chatBlockGetBlockedUsersQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | ChatBlockGetBlockedUsersStatus400
      | ChatBlockGetBlockedUsersStatus401
      | ChatBlockGetBlockedUsersStatus403
      | ChatBlockGetBlockedUsersStatus404
      | ChatBlockGetBlockedUsersStatus500
      | ChatBlockGetBlockedUsersStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
