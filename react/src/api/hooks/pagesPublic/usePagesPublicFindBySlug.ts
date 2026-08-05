/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  PagesPublicFindBySlugQuerySlug,
  PagesPublicFindBySlugStatus200,
  PagesPublicFindBySlugStatus400,
  PagesPublicFindBySlugStatus401,
  PagesPublicFindBySlugStatus403,
  PagesPublicFindBySlugStatus404,
  PagesPublicFindBySlugStatus500,
  PagesPublicFindBySlugStatus501,
} from "../../models/pagesPublic/PagesPublicFindBySlug.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { pagesPublicFindBySlug } from "../../clients/pagesPublic/pagesPublicFindBySlug.ts";

export const pagesPublicFindBySlugQueryKey = (params?: { slug?: PagesPublicFindBySlugQuerySlug }) =>
  [{ url: "/api/cms-kit-public/pages/by-slug" }, ...(params ? [params] : [])] as const;

type PagesPublicFindBySlugQueryKey = ReturnType<typeof pagesPublicFindBySlugQueryKey>;

export function pagesPublicFindBySlugQueryOptions(
  params?: { slug?: PagesPublicFindBySlugQuerySlug },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = pagesPublicFindBySlugQueryKey(params);
  return queryOptions<
    PagesPublicFindBySlugStatus200,
    ResponseErrorConfig<
      | PagesPublicFindBySlugStatus400
      | PagesPublicFindBySlugStatus401
      | PagesPublicFindBySlugStatus403
      | PagesPublicFindBySlugStatus404
      | PagesPublicFindBySlugStatus500
      | PagesPublicFindBySlugStatus501
    >,
    PagesPublicFindBySlugStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return pagesPublicFindBySlug(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-public/pages/by-slug}
 */
export function usePagesPublicFindBySlug<
  TData = PagesPublicFindBySlugStatus200,
  TQueryData = PagesPublicFindBySlugStatus200,
  TQueryKey extends QueryKey = PagesPublicFindBySlugQueryKey,
>(
  params?: { slug?: PagesPublicFindBySlugQuerySlug },
  options: {
    query?: Partial<
      QueryObserverOptions<
        PagesPublicFindBySlugStatus200,
        ResponseErrorConfig<
          | PagesPublicFindBySlugStatus400
          | PagesPublicFindBySlugStatus401
          | PagesPublicFindBySlugStatus403
          | PagesPublicFindBySlugStatus404
          | PagesPublicFindBySlugStatus500
          | PagesPublicFindBySlugStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? pagesPublicFindBySlugQueryKey(params);

  const query = useQuery(
    {
      ...pagesPublicFindBySlugQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PagesPublicFindBySlugStatus400
      | PagesPublicFindBySlugStatus401
      | PagesPublicFindBySlugStatus403
      | PagesPublicFindBySlugStatus404
      | PagesPublicFindBySlugStatus500
      | PagesPublicFindBySlugStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
