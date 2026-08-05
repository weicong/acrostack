/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  CommentPublicGetListPathEntityType,
  CommentPublicGetListPathEntityId,
  CommentPublicGetListStatus200,
  CommentPublicGetListStatus400,
  CommentPublicGetListStatus401,
  CommentPublicGetListStatus403,
  CommentPublicGetListStatus404,
  CommentPublicGetListStatus500,
  CommentPublicGetListStatus501,
} from "../../models/commentPublic/CommentPublicGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { commentPublicGetList } from "../../clients/commentPublic/commentPublicGetList.ts";

export const commentPublicGetListQueryKey = (
  entityType?: CommentPublicGetListPathEntityType,
  entityId?: CommentPublicGetListPathEntityId,
) =>
  [
    {
      url: "/api/cms-kit-public/comments/:entityType/:entityId",
      params: { entityType: entityType, entityId: entityId },
    },
  ] as const;

type CommentPublicGetListQueryKey = ReturnType<typeof commentPublicGetListQueryKey>;

export function commentPublicGetListQueryOptions(
  entityType?: CommentPublicGetListPathEntityType,
  entityId?: CommentPublicGetListPathEntityId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = commentPublicGetListQueryKey(entityType, entityId);
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
    enabled: !!(entityType && entityId),
    queryKey,
    queryFn: async ({ signal }) => {
      return commentPublicGetList(entityType!, entityId!, {
        ...config,
        signal: config.signal ?? signal,
      });
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
  entityType?: CommentPublicGetListPathEntityType,
  entityId?: CommentPublicGetListPathEntityId,
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
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? commentPublicGetListQueryKey(entityType, entityId);

  const query = useQuery(
    {
      ...commentPublicGetListQueryOptions(entityType, entityId, config),
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

  query.queryKey = queryKey as TQueryKey;

  return query;
}
