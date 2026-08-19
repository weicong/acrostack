/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  PagesPublicDoesSlugExistOptions,
  PagesPublicDoesSlugExistStatus200,
  PagesPublicDoesSlugExistStatus400,
  PagesPublicDoesSlugExistStatus401,
  PagesPublicDoesSlugExistStatus403,
  PagesPublicDoesSlugExistStatus404,
  PagesPublicDoesSlugExistStatus500,
  PagesPublicDoesSlugExistStatus501,
} from "../../models/pagesPublic/PagesPublicDoesSlugExist";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { pagesPublicDoesSlugExist } from "../../clients/pagesPublic/pagesPublicDoesSlugExist";

export const pagesPublicDoesSlugExistQueryKey = ({
  query,
}: Omit<PagesPublicDoesSlugExistOptions, "headers"> = {}) =>
  [{ url: "/api/cms-kit-public/pages/exist" }, ...(query ? [query] : [])] as const;

type PagesPublicDoesSlugExistQueryKey = ReturnType<typeof pagesPublicDoesSlugExistQueryKey>;

export function pagesPublicDoesSlugExistQueryOptions(
  { query }: PagesPublicDoesSlugExistOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = pagesPublicDoesSlugExistQueryKey({ query });
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
      const { data } = await pagesPublicDoesSlugExist({
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
 * {@link /api/cms-kit-public/pages/exist}
 */
export function usePagesPublicDoesSlugExist<
  TData = PagesPublicDoesSlugExistStatus200,
  TQueryData = PagesPublicDoesSlugExistStatus200,
  TQueryKey extends QueryKey = PagesPublicDoesSlugExistQueryKey,
>(
  {
    query,
  }: {
    query?:
      | PagesPublicDoesSlugExistOptions["query"]
      | (() => PagesPublicDoesSlugExistOptions["query"]);
  } = {},
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { query: typeof query === "function" ? query() : query };
  const queryKey = resolvedOptions?.queryKey ?? pagesPublicDoesSlugExistQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...pagesPublicDoesSlugExistQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
