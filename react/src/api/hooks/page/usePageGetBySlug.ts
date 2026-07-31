/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  PageGetBySlugQuerySlug,
  PageGetBySlugStatus200,
  PageGetBySlugStatus400,
  PageGetBySlugStatus401,
  PageGetBySlugStatus403,
  PageGetBySlugStatus404,
  PageGetBySlugStatus500,
  PageGetBySlugStatus501,
} from "../../models/page/PageGetBySlug.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { pageGetBySlug } from "../../clients/page/pageGetBySlug.ts";

export const pageGetBySlugQueryKey = (params?: { slug?: PageGetBySlugQuerySlug }) =>
  [{ url: "/api/app/page/by-slug" }, ...(params ? [params] : [])] as const;

type PageGetBySlugQueryKey = ReturnType<typeof pageGetBySlugQueryKey>;

export function pageGetBySlugQueryOptions(
  params?: { slug?: PageGetBySlugQuerySlug },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = pageGetBySlugQueryKey(params);
  return queryOptions<
    PageGetBySlugStatus200,
    ResponseErrorConfig<
      | PageGetBySlugStatus400
      | PageGetBySlugStatus401
      | PageGetBySlugStatus403
      | PageGetBySlugStatus404
      | PageGetBySlugStatus500
      | PageGetBySlugStatus501
    >,
    PageGetBySlugStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return pageGetBySlug(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/page/by-slug}
 */
export function usePageGetBySlug<
  TData = PageGetBySlugStatus200,
  TQueryData = PageGetBySlugStatus200,
  TQueryKey extends QueryKey = PageGetBySlugQueryKey,
>(
  params?: { slug?: PageGetBySlugQuerySlug },
  options: {
    query?: Partial<
      QueryObserverOptions<
        PageGetBySlugStatus200,
        ResponseErrorConfig<
          | PageGetBySlugStatus400
          | PageGetBySlugStatus401
          | PageGetBySlugStatus403
          | PageGetBySlugStatus404
          | PageGetBySlugStatus500
          | PageGetBySlugStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? pageGetBySlugQueryKey(params);

  const query = useQuery(
    {
      ...pageGetBySlugQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PageGetBySlugStatus400
      | PageGetBySlugStatus401
      | PageGetBySlugStatus403
      | PageGetBySlugStatus404
      | PageGetBySlugStatus500
      | PageGetBySlugStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
