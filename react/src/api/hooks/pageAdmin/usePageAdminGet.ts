/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  PageAdminGetOptions,
  PageAdminGetStatus200,
  PageAdminGetStatus400,
  PageAdminGetStatus401,
  PageAdminGetStatus403,
  PageAdminGetStatus404,
  PageAdminGetStatus500,
  PageAdminGetStatus501,
} from "../../models/pageAdmin/PageAdminGet";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { pageAdminGet } from "../../clients/pageAdmin/pageAdminGet";

export const pageAdminGetQueryKey = ({ path }: Omit<PageAdminGetOptions, "headers">) =>
  [{ url: "/api/cms-kit-admin/pages/:id", params: path }] as const;

type PageAdminGetQueryKey = ReturnType<typeof pageAdminGetQueryKey>;

export function pageAdminGetQueryOptions(
  { path }: PageAdminGetOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = pageAdminGetQueryKey({ path });
  return queryOptions<
    PageAdminGetStatus200,
    ResponseErrorConfig<
      | PageAdminGetStatus400
      | PageAdminGetStatus401
      | PageAdminGetStatus403
      | PageAdminGetStatus404
      | PageAdminGetStatus500
      | PageAdminGetStatus501
    >,
    PageAdminGetStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await pageAdminGet({
        ...config,
        path,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
    },
  });
}

/**
 * {@link /api/cms-kit-admin/pages/:id}
 */
export function usePageAdminGet<
  TData = PageAdminGetStatus200,
  TQueryData = PageAdminGetStatus200,
  TQueryKey extends QueryKey = PageAdminGetQueryKey,
>(
  { path }: { path: PageAdminGetOptions["path"] | (() => PageAdminGetOptions["path"]) },
  options: {
    query?: Partial<
      QueryObserverOptions<
        PageAdminGetStatus200,
        ResponseErrorConfig<
          | PageAdminGetStatus400
          | PageAdminGetStatus401
          | PageAdminGetStatus403
          | PageAdminGetStatus404
          | PageAdminGetStatus500
          | PageAdminGetStatus501
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
  const resolvedParams = { path: typeof path === "function" ? path() : path };
  const queryKey = resolvedOptions?.queryKey ?? pageAdminGetQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...pageAdminGetQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PageAdminGetStatus400
      | PageAdminGetStatus401
      | PageAdminGetStatus403
      | PageAdminGetStatus404
      | PageAdminGetStatus500
      | PageAdminGetStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
