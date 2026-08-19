/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  TagAdminGetOptions,
  TagAdminGetStatus200,
  TagAdminGetStatus400,
  TagAdminGetStatus401,
  TagAdminGetStatus403,
  TagAdminGetStatus404,
  TagAdminGetStatus500,
  TagAdminGetStatus501,
} from "../../models/tagAdmin/TagAdminGet";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { tagAdminGet } from "../../clients/tagAdmin/tagAdminGet";

export const tagAdminGetQueryKey = ({ path }: Omit<TagAdminGetOptions, "headers">) =>
  [{ url: "/api/cms-kit-admin/tags/:id", params: path }] as const;

type TagAdminGetQueryKey = ReturnType<typeof tagAdminGetQueryKey>;

export function tagAdminGetQueryOptions(
  { path }: TagAdminGetOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = tagAdminGetQueryKey({ path });
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
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await tagAdminGet({
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
 * {@link /api/cms-kit-admin/tags/:id}
 */
export function useTagAdminGet<
  TData = TagAdminGetStatus200,
  TQueryData = TagAdminGetStatus200,
  TQueryKey extends QueryKey = TagAdminGetQueryKey,
>(
  { path }: { path: TagAdminGetOptions["path"] | (() => TagAdminGetOptions["path"]) },
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { path: typeof path === "function" ? path() : path };
  const queryKey = resolvedOptions?.queryKey ?? tagAdminGetQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...tagAdminGetQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
