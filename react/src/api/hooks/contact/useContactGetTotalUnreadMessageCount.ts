/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ContactGetTotalUnreadMessageCountStatus200,
  ContactGetTotalUnreadMessageCountStatus400,
  ContactGetTotalUnreadMessageCountStatus401,
  ContactGetTotalUnreadMessageCountStatus403,
  ContactGetTotalUnreadMessageCountStatus404,
  ContactGetTotalUnreadMessageCountStatus500,
  ContactGetTotalUnreadMessageCountStatus501,
} from "../../models/contact/ContactGetTotalUnreadMessageCount";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { contactGetTotalUnreadMessageCount } from "../../clients/contact/contactGetTotalUnreadMessageCount";

export const contactGetTotalUnreadMessageCountQueryKey = () =>
  [{ url: "/api/app/contact/total-unread-message-count" }] as const;

type ContactGetTotalUnreadMessageCountQueryKey = ReturnType<
  typeof contactGetTotalUnreadMessageCountQueryKey
>;

export function contactGetTotalUnreadMessageCountQueryOptions(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = contactGetTotalUnreadMessageCountQueryKey();
  return queryOptions<
    ContactGetTotalUnreadMessageCountStatus200,
    ResponseErrorConfig<
      | ContactGetTotalUnreadMessageCountStatus400
      | ContactGetTotalUnreadMessageCountStatus401
      | ContactGetTotalUnreadMessageCountStatus403
      | ContactGetTotalUnreadMessageCountStatus404
      | ContactGetTotalUnreadMessageCountStatus500
      | ContactGetTotalUnreadMessageCountStatus501
    >,
    ContactGetTotalUnreadMessageCountStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await contactGetTotalUnreadMessageCount({
        ...config,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
    },
  });
}

/**
 * {@link /api/app/contact/total-unread-message-count}
 */
export function useContactGetTotalUnreadMessageCount<
  TData = ContactGetTotalUnreadMessageCountStatus200,
  TQueryData = ContactGetTotalUnreadMessageCountStatus200,
  TQueryKey extends QueryKey = ContactGetTotalUnreadMessageCountQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        ContactGetTotalUnreadMessageCountStatus200,
        ResponseErrorConfig<
          | ContactGetTotalUnreadMessageCountStatus400
          | ContactGetTotalUnreadMessageCountStatus401
          | ContactGetTotalUnreadMessageCountStatus403
          | ContactGetTotalUnreadMessageCountStatus404
          | ContactGetTotalUnreadMessageCountStatus500
          | ContactGetTotalUnreadMessageCountStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? contactGetTotalUnreadMessageCountQueryKey();

  const queryResult = useQuery(
    {
      ...contactGetTotalUnreadMessageCountQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | ContactGetTotalUnreadMessageCountStatus400
      | ContactGetTotalUnreadMessageCountStatus401
      | ContactGetTotalUnreadMessageCountStatus403
      | ContactGetTotalUnreadMessageCountStatus404
      | ContactGetTotalUnreadMessageCountStatus500
      | ContactGetTotalUnreadMessageCountStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
