/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  CommentAdminGetListQueryEntityType,
  CommentAdminGetListQueryText,
  CommentAdminGetListQueryRepliedCommentId,
  CommentAdminGetListQueryAuthor,
  CommentAdminGetListQueryCreationStartDate,
  CommentAdminGetListQueryCreationEndDate,
  CommentAdminGetListQueryCommentApproveState,
  CommentAdminGetListQuerySorting,
  CommentAdminGetListQuerySkipCount,
  CommentAdminGetListQueryMaxResultCount,
  CommentAdminGetListStatus200,
  CommentAdminGetListStatus400,
  CommentAdminGetListStatus401,
  CommentAdminGetListStatus403,
  CommentAdminGetListStatus404,
  CommentAdminGetListStatus500,
  CommentAdminGetListStatus501,
} from "../../models/commentAdmin/CommentAdminGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { commentAdminGetList } from "../../clients/commentAdmin/commentAdminGetList.ts";

export const commentAdminGetListQueryKey = (params?: {
  EntityType?: CommentAdminGetListQueryEntityType;
  Text?: CommentAdminGetListQueryText;
  RepliedCommentId?: CommentAdminGetListQueryRepliedCommentId;
  Author?: CommentAdminGetListQueryAuthor;
  CreationStartDate?: CommentAdminGetListQueryCreationStartDate;
  CreationEndDate?: CommentAdminGetListQueryCreationEndDate;
  CommentApproveState?: CommentAdminGetListQueryCommentApproveState;
  Sorting?: CommentAdminGetListQuerySorting;
  SkipCount?: CommentAdminGetListQuerySkipCount;
  MaxResultCount?: CommentAdminGetListQueryMaxResultCount;
}) => [{ url: "/api/cms-kit-admin/comments" }, ...(params ? [params] : [])] as const;

type CommentAdminGetListQueryKey = ReturnType<typeof commentAdminGetListQueryKey>;

export function commentAdminGetListQueryOptions(
  params?: {
    EntityType?: CommentAdminGetListQueryEntityType;
    Text?: CommentAdminGetListQueryText;
    RepliedCommentId?: CommentAdminGetListQueryRepliedCommentId;
    Author?: CommentAdminGetListQueryAuthor;
    CreationStartDate?: CommentAdminGetListQueryCreationStartDate;
    CreationEndDate?: CommentAdminGetListQueryCreationEndDate;
    CommentApproveState?: CommentAdminGetListQueryCommentApproveState;
    Sorting?: CommentAdminGetListQuerySorting;
    SkipCount?: CommentAdminGetListQuerySkipCount;
    MaxResultCount?: CommentAdminGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = commentAdminGetListQueryKey(params);
  return queryOptions<
    CommentAdminGetListStatus200,
    ResponseErrorConfig<
      | CommentAdminGetListStatus400
      | CommentAdminGetListStatus401
      | CommentAdminGetListStatus403
      | CommentAdminGetListStatus404
      | CommentAdminGetListStatus500
      | CommentAdminGetListStatus501
    >,
    CommentAdminGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return commentAdminGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/comments}
 */
export function useCommentAdminGetList<
  TData = CommentAdminGetListStatus200,
  TQueryData = CommentAdminGetListStatus200,
  TQueryKey extends QueryKey = CommentAdminGetListQueryKey,
>(
  params?: {
    EntityType?: CommentAdminGetListQueryEntityType;
    Text?: CommentAdminGetListQueryText;
    RepliedCommentId?: CommentAdminGetListQueryRepliedCommentId;
    Author?: CommentAdminGetListQueryAuthor;
    CreationStartDate?: CommentAdminGetListQueryCreationStartDate;
    CreationEndDate?: CommentAdminGetListQueryCreationEndDate;
    CommentApproveState?: CommentAdminGetListQueryCommentApproveState;
    Sorting?: CommentAdminGetListQuerySorting;
    SkipCount?: CommentAdminGetListQuerySkipCount;
    MaxResultCount?: CommentAdminGetListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        CommentAdminGetListStatus200,
        ResponseErrorConfig<
          | CommentAdminGetListStatus400
          | CommentAdminGetListStatus401
          | CommentAdminGetListStatus403
          | CommentAdminGetListStatus404
          | CommentAdminGetListStatus500
          | CommentAdminGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? commentAdminGetListQueryKey(params);

  const query = useQuery(
    {
      ...commentAdminGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | CommentAdminGetListStatus400
      | CommentAdminGetListStatus401
      | CommentAdminGetListStatus403
      | CommentAdminGetListStatus404
      | CommentAdminGetListStatus500
      | CommentAdminGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
