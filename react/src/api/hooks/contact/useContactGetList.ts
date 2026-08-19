/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ContactGetListStatus200,
  ContactGetListStatus400,
  ContactGetListStatus401,
  ContactGetListStatus403,
  ContactGetListStatus404,
  ContactGetListStatus500,
  ContactGetListStatus501,
} from "../../models/contact/ContactGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { contactGetList } from "../../clients/contact/contactGetList";

export const contactGetListQueryKey = () => [{ url: "/api/app/contact" }] as const;

type ContactGetListQueryKey = ReturnType<typeof contactGetListQueryKey>;

export function contactGetListQueryOptions(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
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
      const { data } = await contactGetList({
        ...config,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? contactGetListQueryKey();

  const queryResult = useQuery(
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
