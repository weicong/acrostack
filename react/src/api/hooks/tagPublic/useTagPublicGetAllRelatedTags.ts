/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  TagPublicGetAllRelatedTagsOptions,
  TagPublicGetAllRelatedTagsStatus200,
  TagPublicGetAllRelatedTagsStatus400,
  TagPublicGetAllRelatedTagsStatus401,
  TagPublicGetAllRelatedTagsStatus403,
  TagPublicGetAllRelatedTagsStatus404,
  TagPublicGetAllRelatedTagsStatus500,
  TagPublicGetAllRelatedTagsStatus501,
} from "../../models/tagPublic/TagPublicGetAllRelatedTags";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { tagPublicGetAllRelatedTags } from "../../clients/tagPublic/tagPublicGetAllRelatedTags";

export const tagPublicGetAllRelatedTagsQueryKey = ({
  path,
}: Omit<TagPublicGetAllRelatedTagsOptions, "headers">) =>
  [{ url: "/api/cms-kit-public/tags/:entityType/:entityId", params: path }] as const;

type TagPublicGetAllRelatedTagsQueryKey = ReturnType<typeof tagPublicGetAllRelatedTagsQueryKey>;

export function tagPublicGetAllRelatedTagsQueryOptions(
  { path }: TagPublicGetAllRelatedTagsOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = tagPublicGetAllRelatedTagsQueryKey({ path });
  return queryOptions<
    TagPublicGetAllRelatedTagsStatus200,
    ResponseErrorConfig<
      | TagPublicGetAllRelatedTagsStatus400
      | TagPublicGetAllRelatedTagsStatus401
      | TagPublicGetAllRelatedTagsStatus403
      | TagPublicGetAllRelatedTagsStatus404
      | TagPublicGetAllRelatedTagsStatus500
      | TagPublicGetAllRelatedTagsStatus501
    >,
    TagPublicGetAllRelatedTagsStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await tagPublicGetAllRelatedTags({
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
 * {@link /api/cms-kit-public/tags/:entityType/:entityId}
 */
export function useTagPublicGetAllRelatedTags<
  TData = TagPublicGetAllRelatedTagsStatus200,
  TQueryData = TagPublicGetAllRelatedTagsStatus200,
  TQueryKey extends QueryKey = TagPublicGetAllRelatedTagsQueryKey,
>(
  {
    path,
  }: {
    path:
      | TagPublicGetAllRelatedTagsOptions["path"]
      | (() => TagPublicGetAllRelatedTagsOptions["path"]);
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        TagPublicGetAllRelatedTagsStatus200,
        ResponseErrorConfig<
          | TagPublicGetAllRelatedTagsStatus400
          | TagPublicGetAllRelatedTagsStatus401
          | TagPublicGetAllRelatedTagsStatus403
          | TagPublicGetAllRelatedTagsStatus404
          | TagPublicGetAllRelatedTagsStatus500
          | TagPublicGetAllRelatedTagsStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? tagPublicGetAllRelatedTagsQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...tagPublicGetAllRelatedTagsQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | TagPublicGetAllRelatedTagsStatus400
      | TagPublicGetAllRelatedTagsStatus401
      | TagPublicGetAllRelatedTagsStatus403
      | TagPublicGetAllRelatedTagsStatus404
      | TagPublicGetAllRelatedTagsStatus500
      | TagPublicGetAllRelatedTagsStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
