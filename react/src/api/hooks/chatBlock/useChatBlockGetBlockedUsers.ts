/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ChatBlockGetBlockedUsersStatus200,
  ChatBlockGetBlockedUsersStatus400,
  ChatBlockGetBlockedUsersStatus401,
  ChatBlockGetBlockedUsersStatus403,
  ChatBlockGetBlockedUsersStatus404,
  ChatBlockGetBlockedUsersStatus500,
  ChatBlockGetBlockedUsersStatus501,
} from "../../models/chatBlock/ChatBlockGetBlockedUsers";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { chatBlockGetBlockedUsers } from "../../clients/chatBlock/chatBlockGetBlockedUsers";

export const chatBlockGetBlockedUsersQueryKey = () =>
  [{ url: "/api/app/chat-block/blocked-users" }] as const;

type ChatBlockGetBlockedUsersQueryKey = ReturnType<typeof chatBlockGetBlockedUsersQueryKey>;

export function chatBlockGetBlockedUsersQueryOptions(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
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
      const { data } = await chatBlockGetBlockedUsers({
        ...config,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? chatBlockGetBlockedUsersQueryKey();

  const queryResult = useQuery(
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
