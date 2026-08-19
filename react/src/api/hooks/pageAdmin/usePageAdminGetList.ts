/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  PageAdminGetListOptions,
  PageAdminGetListStatus200,
  PageAdminGetListStatus400,
  PageAdminGetListStatus401,
  PageAdminGetListStatus403,
  PageAdminGetListStatus404,
  PageAdminGetListStatus500,
  PageAdminGetListStatus501,
} from "../../models/pageAdmin/PageAdminGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { pageAdminGetList } from "../../clients/pageAdmin/pageAdminGetList";

export const pageAdminGetListQueryKey = ({
  query,
}: Omit<PageAdminGetListOptions, "headers"> = {}) =>
  [{ url: "/api/cms-kit-admin/pages" }, ...(query ? [query] : [])] as const;

type PageAdminGetListQueryKey = ReturnType<typeof pageAdminGetListQueryKey>;

export function pageAdminGetListQueryOptions(
  { query }: PageAdminGetListOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = pageAdminGetListQueryKey({ query });
  return queryOptions<
    PageAdminGetListStatus200,
    ResponseErrorConfig<
      | PageAdminGetListStatus400
      | PageAdminGetListStatus401
      | PageAdminGetListStatus403
      | PageAdminGetListStatus404
      | PageAdminGetListStatus500
      | PageAdminGetListStatus501
    >,
    PageAdminGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await pageAdminGetList({
        ...config,
        query,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
    },
  });
}

/**
 * {@link /api/cms-kit-admin/pages}
 */
export function usePageAdminGetList<
  TData = PageAdminGetListStatus200,
  TQueryData = PageAdminGetListStatus200,
  TQueryKey extends QueryKey = PageAdminGetListQueryKey,
>(
  {
    query,
  }: { query?: PageAdminGetListOptions["query"] | (() => PageAdminGetListOptions["query"]) } = {},
  options: {
    query?: Partial<
      QueryObserverOptions<
        PageAdminGetListStatus200,
        ResponseErrorConfig<
          | PageAdminGetListStatus400
          | PageAdminGetListStatus401
          | PageAdminGetListStatus403
          | PageAdminGetListStatus404
          | PageAdminGetListStatus500
          | PageAdminGetListStatus501
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
  const resolvedParams = { query: typeof query === "function" ? query() : query };
  const queryKey = resolvedOptions?.queryKey ?? pageAdminGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...pageAdminGetListQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PageAdminGetListStatus400
      | PageAdminGetListStatus401
      | PageAdminGetListStatus403
      | PageAdminGetListStatus404
      | PageAdminGetListStatus500
      | PageAdminGetListStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
