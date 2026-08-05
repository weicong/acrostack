/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  PagesPublicDoesSlugExistQuerySlug,
  PagesPublicDoesSlugExistStatus200,
  PagesPublicDoesSlugExistStatus400,
  PagesPublicDoesSlugExistStatus401,
  PagesPublicDoesSlugExistStatus403,
  PagesPublicDoesSlugExistStatus404,
  PagesPublicDoesSlugExistStatus500,
  PagesPublicDoesSlugExistStatus501,
} from "../../models/pagesPublic/PagesPublicDoesSlugExist.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { pagesPublicDoesSlugExist } from "../../clients/pagesPublic/pagesPublicDoesSlugExist.ts";

export const pagesPublicDoesSlugExistQueryKey = (params?: {
  slug?: PagesPublicDoesSlugExistQuerySlug;
}) => [{ url: "/api/cms-kit-public/pages/exist" }, ...(params ? [params] : [])] as const;

type PagesPublicDoesSlugExistQueryKey = ReturnType<typeof pagesPublicDoesSlugExistQueryKey>;

export function pagesPublicDoesSlugExistQueryOptions(
  params?: { slug?: PagesPublicDoesSlugExistQuerySlug },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = pagesPublicDoesSlugExistQueryKey(params);
  return queryOptions<
    PagesPublicDoesSlugExistStatus200,
    ResponseErrorConfig<
      | PagesPublicDoesSlugExistStatus400
      | PagesPublicDoesSlugExistStatus401
      | PagesPublicDoesSlugExistStatus403
      | PagesPublicDoesSlugExistStatus404
      | PagesPublicDoesSlugExistStatus500
      | PagesPublicDoesSlugExistStatus501
    >,
    PagesPublicDoesSlugExistStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return pagesPublicDoesSlugExist(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-public/pages/exist}
 */
export function usePagesPublicDoesSlugExist<
  TData = PagesPublicDoesSlugExistStatus200,
  TQueryData = PagesPublicDoesSlugExistStatus200,
  TQueryKey extends QueryKey = PagesPublicDoesSlugExistQueryKey,
>(
  params?: { slug?: PagesPublicDoesSlugExistQuerySlug },
  options: {
    query?: Partial<
      QueryObserverOptions<
        PagesPublicDoesSlugExistStatus200,
        ResponseErrorConfig<
          | PagesPublicDoesSlugExistStatus400
          | PagesPublicDoesSlugExistStatus401
          | PagesPublicDoesSlugExistStatus403
          | PagesPublicDoesSlugExistStatus404
          | PagesPublicDoesSlugExistStatus500
          | PagesPublicDoesSlugExistStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? pagesPublicDoesSlugExistQueryKey(params);

  const query = useQuery(
    {
      ...pagesPublicDoesSlugExistQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PagesPublicDoesSlugExistStatus400
      | PagesPublicDoesSlugExistStatus401
      | PagesPublicDoesSlugExistStatus403
      | PagesPublicDoesSlugExistStatus404
      | PagesPublicDoesSlugExistStatus500
      | PagesPublicDoesSlugExistStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
