/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  CommentGetListForEntityQueryEntityType,
  CommentGetListForEntityQueryEntityId,
  CommentGetListForEntityQuerySkipCount,
  CommentGetListForEntityQueryMaxResultCount,
  CommentGetListForEntityStatus200,
  CommentGetListForEntityStatus400,
  CommentGetListForEntityStatus401,
  CommentGetListForEntityStatus403,
  CommentGetListForEntityStatus404,
  CommentGetListForEntityStatus500,
  CommentGetListForEntityStatus501,
} from "../../models/comment/CommentGetListForEntity.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { commentGetListForEntity } from "../../clients/comment/commentGetListForEntity.ts";

export const commentGetListForEntityQueryKey = (params?: {
  EntityType: CommentGetListForEntityQueryEntityType;
  EntityId: CommentGetListForEntityQueryEntityId;
  SkipCount?: CommentGetListForEntityQuerySkipCount;
  MaxResultCount?: CommentGetListForEntityQueryMaxResultCount;
}) => [{ url: "/api/app/comment/for-entity" }, ...(params ? [params] : [])] as const;

type CommentGetListForEntityQueryKey = ReturnType<typeof commentGetListForEntityQueryKey>;

export function commentGetListForEntityQueryOptions(
  params?: {
    EntityType: CommentGetListForEntityQueryEntityType;
    EntityId: CommentGetListForEntityQueryEntityId;
    SkipCount?: CommentGetListForEntityQuerySkipCount;
    MaxResultCount?: CommentGetListForEntityQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = commentGetListForEntityQueryKey(params);
  return queryOptions<
    CommentGetListForEntityStatus200,
    ResponseErrorConfig<
      | CommentGetListForEntityStatus400
      | CommentGetListForEntityStatus401
      | CommentGetListForEntityStatus403
      | CommentGetListForEntityStatus404
      | CommentGetListForEntityStatus500
      | CommentGetListForEntityStatus501
    >,
    CommentGetListForEntityStatus200,
    typeof queryKey
  >({
    enabled: !!params,
    queryKey,
    queryFn: async ({ signal }) => {
      return commentGetListForEntity(params!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/comment/for-entity}
 */
export function useCommentGetListForEntity<
  TData = CommentGetListForEntityStatus200,
  TQueryData = CommentGetListForEntityStatus200,
  TQueryKey extends QueryKey = CommentGetListForEntityQueryKey,
>(
  params?: {
    EntityType: CommentGetListForEntityQueryEntityType;
    EntityId: CommentGetListForEntityQueryEntityId;
    SkipCount?: CommentGetListForEntityQuerySkipCount;
    MaxResultCount?: CommentGetListForEntityQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        CommentGetListForEntityStatus200,
        ResponseErrorConfig<
          | CommentGetListForEntityStatus400
          | CommentGetListForEntityStatus401
          | CommentGetListForEntityStatus403
          | CommentGetListForEntityStatus404
          | CommentGetListForEntityStatus500
          | CommentGetListForEntityStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? commentGetListForEntityQueryKey(params);

  const query = useQuery(
    {
      ...commentGetListForEntityQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | CommentGetListForEntityStatus400
      | CommentGetListForEntityStatus401
      | CommentGetListForEntityStatus403
      | CommentGetListForEntityStatus404
      | CommentGetListForEntityStatus500
      | CommentGetListForEntityStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
