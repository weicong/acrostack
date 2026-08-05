/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  TagAdminGetListQueryFilter,
  TagAdminGetListQuerySorting,
  TagAdminGetListQuerySkipCount,
  TagAdminGetListQueryMaxResultCount,
  TagAdminGetListStatus200,
  TagAdminGetListStatus400,
  TagAdminGetListStatus401,
  TagAdminGetListStatus403,
  TagAdminGetListStatus404,
  TagAdminGetListStatus500,
  TagAdminGetListStatus501,
} from "../../models/tagAdmin/TagAdminGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { tagAdminGetList } from "../../clients/tagAdmin/tagAdminGetList.ts";

export const tagAdminGetListQueryKey = (params?: {
  Filter?: TagAdminGetListQueryFilter;
  Sorting?: TagAdminGetListQuerySorting;
  SkipCount?: TagAdminGetListQuerySkipCount;
  MaxResultCount?: TagAdminGetListQueryMaxResultCount;
}) => [{ url: "/api/cms-kit-admin/tags" }, ...(params ? [params] : [])] as const;

type TagAdminGetListQueryKey = ReturnType<typeof tagAdminGetListQueryKey>;

export function tagAdminGetListQueryOptions(
  params?: {
    Filter?: TagAdminGetListQueryFilter;
    Sorting?: TagAdminGetListQuerySorting;
    SkipCount?: TagAdminGetListQuerySkipCount;
    MaxResultCount?: TagAdminGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = tagAdminGetListQueryKey(params);
  return queryOptions<
    TagAdminGetListStatus200,
    ResponseErrorConfig<
      | TagAdminGetListStatus400
      | TagAdminGetListStatus401
      | TagAdminGetListStatus403
      | TagAdminGetListStatus404
      | TagAdminGetListStatus500
      | TagAdminGetListStatus501
    >,
    TagAdminGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return tagAdminGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/tags}
 */
export function useTagAdminGetList<
  TData = TagAdminGetListStatus200,
  TQueryData = TagAdminGetListStatus200,
  TQueryKey extends QueryKey = TagAdminGetListQueryKey,
>(
  params?: {
    Filter?: TagAdminGetListQueryFilter;
    Sorting?: TagAdminGetListQuerySorting;
    SkipCount?: TagAdminGetListQuerySkipCount;
    MaxResultCount?: TagAdminGetListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        TagAdminGetListStatus200,
        ResponseErrorConfig<
          | TagAdminGetListStatus400
          | TagAdminGetListStatus401
          | TagAdminGetListStatus403
          | TagAdminGetListStatus404
          | TagAdminGetListStatus500
          | TagAdminGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? tagAdminGetListQueryKey(params);

  const query = useQuery(
    {
      ...tagAdminGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | TagAdminGetListStatus400
      | TagAdminGetListStatus401
      | TagAdminGetListStatus403
      | TagAdminGetListStatus404
      | TagAdminGetListStatus500
      | TagAdminGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
