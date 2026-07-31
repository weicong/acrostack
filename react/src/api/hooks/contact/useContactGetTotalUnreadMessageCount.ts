/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  ContactGetTotalUnreadMessageCountStatus200,
  ContactGetTotalUnreadMessageCountStatus400,
  ContactGetTotalUnreadMessageCountStatus401,
  ContactGetTotalUnreadMessageCountStatus403,
  ContactGetTotalUnreadMessageCountStatus404,
  ContactGetTotalUnreadMessageCountStatus500,
  ContactGetTotalUnreadMessageCountStatus501,
} from "../../models/contact/ContactGetTotalUnreadMessageCount.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { contactGetTotalUnreadMessageCount } from "../../clients/contact/contactGetTotalUnreadMessageCount.ts";

export const contactGetTotalUnreadMessageCountQueryKey = () =>
  [{ url: "/api/app/contact/total-unread-message-count" }] as const;

type ContactGetTotalUnreadMessageCountQueryKey = ReturnType<
  typeof contactGetTotalUnreadMessageCountQueryKey
>;

export function contactGetTotalUnreadMessageCountQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
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
      return contactGetTotalUnreadMessageCount({ ...config, signal: config.signal ?? signal });
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
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? contactGetTotalUnreadMessageCountQueryKey();

  const query = useQuery(
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

  query.queryKey = queryKey as TQueryKey;

  return query;
}
