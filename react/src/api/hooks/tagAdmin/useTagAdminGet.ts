/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  TagAdminGetPathId,
  TagAdminGetStatus200,
  TagAdminGetStatus400,
  TagAdminGetStatus401,
  TagAdminGetStatus403,
  TagAdminGetStatus404,
  TagAdminGetStatus500,
  TagAdminGetStatus501,
} from "../../models/tagAdmin/TagAdminGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { tagAdminGet } from "../../clients/tagAdmin/tagAdminGet.ts";

export const tagAdminGetQueryKey = (id?: TagAdminGetPathId) =>
  [{ url: "/api/cms-kit-admin/tags/:id", params: { id: id } }] as const;

type TagAdminGetQueryKey = ReturnType<typeof tagAdminGetQueryKey>;

export function tagAdminGetQueryOptions(
  id?: TagAdminGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = tagAdminGetQueryKey(id);
  return queryOptions<
    TagAdminGetStatus200,
    ResponseErrorConfig<
      | TagAdminGetStatus400
      | TagAdminGetStatus401
      | TagAdminGetStatus403
      | TagAdminGetStatus404
      | TagAdminGetStatus500
      | TagAdminGetStatus501
    >,
    TagAdminGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return tagAdminGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/tags/:id}
 */
export function useTagAdminGet<
  TData = TagAdminGetStatus200,
  TQueryData = TagAdminGetStatus200,
  TQueryKey extends QueryKey = TagAdminGetQueryKey,
>(
  id?: TagAdminGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        TagAdminGetStatus200,
        ResponseErrorConfig<
          | TagAdminGetStatus400
          | TagAdminGetStatus401
          | TagAdminGetStatus403
          | TagAdminGetStatus404
          | TagAdminGetStatus500
          | TagAdminGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? tagAdminGetQueryKey(id);

  const query = useQuery(
    {
      ...tagAdminGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | TagAdminGetStatus400
      | TagAdminGetStatus401
      | TagAdminGetStatus403
      | TagAdminGetStatus404
      | TagAdminGetStatus500
      | TagAdminGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
