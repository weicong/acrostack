/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  CommentPublicGetListOptions,
  CommentPublicGetListStatus200,
  CommentPublicGetListStatus400,
  CommentPublicGetListStatus401,
  CommentPublicGetListStatus403,
  CommentPublicGetListStatus404,
  CommentPublicGetListStatus500,
  CommentPublicGetListStatus501,
} from "../../models/commentPublic/CommentPublicGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { commentPublicGetList } from "../../clients/commentPublic/commentPublicGetList";

export const commentPublicGetListQueryKey = ({
  path,
}: Omit<CommentPublicGetListOptions, "headers">) =>
  [{ url: "/api/cms-kit-public/comments/:entityType/:entityId", params: path }] as const;

type CommentPublicGetListQueryKey = ReturnType<typeof commentPublicGetListQueryKey>;

export function commentPublicGetListQueryOptions(
  { path }: CommentPublicGetListOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = commentPublicGetListQueryKey({ path });
  return queryOptions<
    CommentPublicGetListStatus200,
    ResponseErrorConfig<
      | CommentPublicGetListStatus400
      | CommentPublicGetListStatus401
      | CommentPublicGetListStatus403
      | CommentPublicGetListStatus404
      | CommentPublicGetListStatus500
      | CommentPublicGetListStatus501
    >,
    CommentPublicGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await commentPublicGetList({
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
 * {@link /api/cms-kit-public/comments/:entityType/:entityId}
 */
export function useCommentPublicGetList<
  TData = CommentPublicGetListStatus200,
  TQueryData = CommentPublicGetListStatus200,
  TQueryKey extends QueryKey = CommentPublicGetListQueryKey,
>(
  {
    path,
  }: { path: CommentPublicGetListOptions["path"] | (() => CommentPublicGetListOptions["path"]) },
  options: {
    query?: Partial<
      QueryObserverOptions<
        CommentPublicGetListStatus200,
        ResponseErrorConfig<
          | CommentPublicGetListStatus400
          | CommentPublicGetListStatus401
          | CommentPublicGetListStatus403
          | CommentPublicGetListStatus404
          | CommentPublicGetListStatus500
          | CommentPublicGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? commentPublicGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...commentPublicGetListQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | CommentPublicGetListStatus400
      | CommentPublicGetListStatus401
      | CommentPublicGetListStatus403
      | CommentPublicGetListStatus404
      | CommentPublicGetListStatus500
      | CommentPublicGetListStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
