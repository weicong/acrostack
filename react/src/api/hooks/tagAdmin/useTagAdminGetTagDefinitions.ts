/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  TagAdminGetTagDefinitionsStatus200,
  TagAdminGetTagDefinitionsStatus400,
  TagAdminGetTagDefinitionsStatus401,
  TagAdminGetTagDefinitionsStatus403,
  TagAdminGetTagDefinitionsStatus404,
  TagAdminGetTagDefinitionsStatus500,
  TagAdminGetTagDefinitionsStatus501,
} from "../../models/tagAdmin/TagAdminGetTagDefinitions.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { tagAdminGetTagDefinitions } from "../../clients/tagAdmin/tagAdminGetTagDefinitions.ts";

export const tagAdminGetTagDefinitionsQueryKey = () =>
  [{ url: "/api/cms-kit-admin/tags/tag-definitions" }] as const;

type TagAdminGetTagDefinitionsQueryKey = ReturnType<typeof tagAdminGetTagDefinitionsQueryKey>;

export function tagAdminGetTagDefinitionsQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = tagAdminGetTagDefinitionsQueryKey();
  return queryOptions<
    TagAdminGetTagDefinitionsStatus200,
    ResponseErrorConfig<
      | TagAdminGetTagDefinitionsStatus400
      | TagAdminGetTagDefinitionsStatus401
      | TagAdminGetTagDefinitionsStatus403
      | TagAdminGetTagDefinitionsStatus404
      | TagAdminGetTagDefinitionsStatus500
      | TagAdminGetTagDefinitionsStatus501
    >,
    TagAdminGetTagDefinitionsStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return tagAdminGetTagDefinitions({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/tags/tag-definitions}
 */
export function useTagAdminGetTagDefinitions<
  TData = TagAdminGetTagDefinitionsStatus200,
  TQueryData = TagAdminGetTagDefinitionsStatus200,
  TQueryKey extends QueryKey = TagAdminGetTagDefinitionsQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        TagAdminGetTagDefinitionsStatus200,
        ResponseErrorConfig<
          | TagAdminGetTagDefinitionsStatus400
          | TagAdminGetTagDefinitionsStatus401
          | TagAdminGetTagDefinitionsStatus403
          | TagAdminGetTagDefinitionsStatus404
          | TagAdminGetTagDefinitionsStatus500
          | TagAdminGetTagDefinitionsStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? tagAdminGetTagDefinitionsQueryKey();

  const query = useQuery(
    {
      ...tagAdminGetTagDefinitionsQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | TagAdminGetTagDefinitionsStatus400
      | TagAdminGetTagDefinitionsStatus401
      | TagAdminGetTagDefinitionsStatus403
      | TagAdminGetTagDefinitionsStatus404
      | TagAdminGetTagDefinitionsStatus500
      | TagAdminGetTagDefinitionsStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
