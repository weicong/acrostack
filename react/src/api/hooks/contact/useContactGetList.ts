/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  ContactGetListStatus200,
  ContactGetListStatus400,
  ContactGetListStatus401,
  ContactGetListStatus403,
  ContactGetListStatus404,
  ContactGetListStatus500,
  ContactGetListStatus501,
} from "../../models/contact/ContactGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { contactGetList } from "../../clients/contact/contactGetList.ts";

export const contactGetListQueryKey = () => [{ url: "/api/app/contact" }] as const;

type ContactGetListQueryKey = ReturnType<typeof contactGetListQueryKey>;

export function contactGetListQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = contactGetListQueryKey();
  return queryOptions<
    ContactGetListStatus200,
    ResponseErrorConfig<
      | ContactGetListStatus400
      | ContactGetListStatus401
      | ContactGetListStatus403
      | ContactGetListStatus404
      | ContactGetListStatus500
      | ContactGetListStatus501
    >,
    ContactGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return contactGetList({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/contact}
 */
export function useContactGetList<
  TData = ContactGetListStatus200,
  TQueryData = ContactGetListStatus200,
  TQueryKey extends QueryKey = ContactGetListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        ContactGetListStatus200,
        ResponseErrorConfig<
          | ContactGetListStatus400
          | ContactGetListStatus401
          | ContactGetListStatus403
          | ContactGetListStatus404
          | ContactGetListStatus500
          | ContactGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? contactGetListQueryKey();

  const query = useQuery(
    {
      ...contactGetListQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | ContactGetListStatus400
      | ContactGetListStatus401
      | ContactGetListStatus403
      | ContactGetListStatus404
      | ContactGetListStatus500
      | ContactGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
