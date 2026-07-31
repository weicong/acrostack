/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  TagGetListQueryFilter,
  TagGetListQuerySorting,
  TagGetListQuerySkipCount,
  TagGetListQueryMaxResultCount,
  TagGetListStatus200,
  TagGetListStatus400,
  TagGetListStatus401,
  TagGetListStatus403,
  TagGetListStatus404,
  TagGetListStatus500,
  TagGetListStatus501,
} from "../../models/tag/TagGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { tagGetList } from "../../clients/tag/tagGetList.ts";

export const tagGetListQueryKey = (params?: {
  Filter?: TagGetListQueryFilter;
  Sorting?: TagGetListQuerySorting;
  SkipCount?: TagGetListQuerySkipCount;
  MaxResultCount?: TagGetListQueryMaxResultCount;
}) => [{ url: "/api/app/tag" }, ...(params ? [params] : [])] as const;

type TagGetListQueryKey = ReturnType<typeof tagGetListQueryKey>;

export function tagGetListQueryOptions(
  params?: {
    Filter?: TagGetListQueryFilter;
    Sorting?: TagGetListQuerySorting;
    SkipCount?: TagGetListQuerySkipCount;
    MaxResultCount?: TagGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = tagGetListQueryKey(params);
  return queryOptions<
    TagGetListStatus200,
    ResponseErrorConfig<
      | TagGetListStatus400
      | TagGetListStatus401
      | TagGetListStatus403
      | TagGetListStatus404
      | TagGetListStatus500
      | TagGetListStatus501
    >,
    TagGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return tagGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/tag}
 */
export function useTagGetList<
  TData = TagGetListStatus200,
  TQueryData = TagGetListStatus200,
  TQueryKey extends QueryKey = TagGetListQueryKey,
>(
  params?: {
    Filter?: TagGetListQueryFilter;
    Sorting?: TagGetListQuerySorting;
    SkipCount?: TagGetListQuerySkipCount;
    MaxResultCount?: TagGetListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        TagGetListStatus200,
        ResponseErrorConfig<
          | TagGetListStatus400
          | TagGetListStatus401
          | TagGetListStatus403
          | TagGetListStatus404
          | TagGetListStatus500
          | TagGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? tagGetListQueryKey(params);

  const query = useQuery(
    {
      ...tagGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | TagGetListStatus400
      | TagGetListStatus401
      | TagGetListStatus403
      | TagGetListStatus404
      | TagGetListStatus500
      | TagGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
