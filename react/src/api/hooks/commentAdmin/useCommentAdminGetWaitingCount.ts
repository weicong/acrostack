/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  CommentAdminGetWaitingCountStatus200,
  CommentAdminGetWaitingCountStatus400,
  CommentAdminGetWaitingCountStatus401,
  CommentAdminGetWaitingCountStatus403,
  CommentAdminGetWaitingCountStatus404,
  CommentAdminGetWaitingCountStatus500,
  CommentAdminGetWaitingCountStatus501,
} from "../../models/commentAdmin/CommentAdminGetWaitingCount.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { commentAdminGetWaitingCount } from "../../clients/commentAdmin/commentAdminGetWaitingCount.ts";

export const commentAdminGetWaitingCountQueryKey = () =>
  [{ url: "/api/cms-kit-admin/comments/waiting-count" }] as const;

type CommentAdminGetWaitingCountQueryKey = ReturnType<typeof commentAdminGetWaitingCountQueryKey>;

export function commentAdminGetWaitingCountQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = commentAdminGetWaitingCountQueryKey();
  return queryOptions<
    CommentAdminGetWaitingCountStatus200,
    ResponseErrorConfig<
      | CommentAdminGetWaitingCountStatus400
      | CommentAdminGetWaitingCountStatus401
      | CommentAdminGetWaitingCountStatus403
      | CommentAdminGetWaitingCountStatus404
      | CommentAdminGetWaitingCountStatus500
      | CommentAdminGetWaitingCountStatus501
    >,
    CommentAdminGetWaitingCountStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return commentAdminGetWaitingCount({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/comments/waiting-count}
 */
export function useCommentAdminGetWaitingCount<
  TData = CommentAdminGetWaitingCountStatus200,
  TQueryData = CommentAdminGetWaitingCountStatus200,
  TQueryKey extends QueryKey = CommentAdminGetWaitingCountQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        CommentAdminGetWaitingCountStatus200,
        ResponseErrorConfig<
          | CommentAdminGetWaitingCountStatus400
          | CommentAdminGetWaitingCountStatus401
          | CommentAdminGetWaitingCountStatus403
          | CommentAdminGetWaitingCountStatus404
          | CommentAdminGetWaitingCountStatus500
          | CommentAdminGetWaitingCountStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? commentAdminGetWaitingCountQueryKey();

  const query = useQuery(
    {
      ...commentAdminGetWaitingCountQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | CommentAdminGetWaitingCountStatus400
      | CommentAdminGetWaitingCountStatus401
      | CommentAdminGetWaitingCountStatus403
      | CommentAdminGetWaitingCountStatus404
      | CommentAdminGetWaitingCountStatus500
      | CommentAdminGetWaitingCountStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
