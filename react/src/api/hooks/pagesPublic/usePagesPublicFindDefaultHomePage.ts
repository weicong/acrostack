/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  PagesPublicFindDefaultHomePageStatus200,
  PagesPublicFindDefaultHomePageStatus400,
  PagesPublicFindDefaultHomePageStatus401,
  PagesPublicFindDefaultHomePageStatus403,
  PagesPublicFindDefaultHomePageStatus404,
  PagesPublicFindDefaultHomePageStatus500,
  PagesPublicFindDefaultHomePageStatus501,
} from "../../models/pagesPublic/PagesPublicFindDefaultHomePage.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { pagesPublicFindDefaultHomePage } from "../../clients/pagesPublic/pagesPublicFindDefaultHomePage.ts";

export const pagesPublicFindDefaultHomePageQueryKey = () =>
  [{ url: "/api/cms-kit-public/pages/home" }] as const;

type PagesPublicFindDefaultHomePageQueryKey = ReturnType<
  typeof pagesPublicFindDefaultHomePageQueryKey
>;

export function pagesPublicFindDefaultHomePageQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = pagesPublicFindDefaultHomePageQueryKey();
  return queryOptions<
    PagesPublicFindDefaultHomePageStatus200,
    ResponseErrorConfig<
      | PagesPublicFindDefaultHomePageStatus400
      | PagesPublicFindDefaultHomePageStatus401
      | PagesPublicFindDefaultHomePageStatus403
      | PagesPublicFindDefaultHomePageStatus404
      | PagesPublicFindDefaultHomePageStatus500
      | PagesPublicFindDefaultHomePageStatus501
    >,
    PagesPublicFindDefaultHomePageStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return pagesPublicFindDefaultHomePage({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-public/pages/home}
 */
export function usePagesPublicFindDefaultHomePage<
  TData = PagesPublicFindDefaultHomePageStatus200,
  TQueryData = PagesPublicFindDefaultHomePageStatus200,
  TQueryKey extends QueryKey = PagesPublicFindDefaultHomePageQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        PagesPublicFindDefaultHomePageStatus200,
        ResponseErrorConfig<
          | PagesPublicFindDefaultHomePageStatus400
          | PagesPublicFindDefaultHomePageStatus401
          | PagesPublicFindDefaultHomePageStatus403
          | PagesPublicFindDefaultHomePageStatus404
          | PagesPublicFindDefaultHomePageStatus500
          | PagesPublicFindDefaultHomePageStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? pagesPublicFindDefaultHomePageQueryKey();

  const query = useQuery(
    {
      ...pagesPublicFindDefaultHomePageQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PagesPublicFindDefaultHomePageStatus400
      | PagesPublicFindDefaultHomePageStatus401
      | PagesPublicFindDefaultHomePageStatus403
      | PagesPublicFindDefaultHomePageStatus404
      | PagesPublicFindDefaultHomePageStatus500
      | PagesPublicFindDefaultHomePageStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
