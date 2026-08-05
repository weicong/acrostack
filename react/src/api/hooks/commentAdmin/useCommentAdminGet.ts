/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  CommentAdminGetPathId,
  CommentAdminGetStatus200,
  CommentAdminGetStatus400,
  CommentAdminGetStatus401,
  CommentAdminGetStatus403,
  CommentAdminGetStatus404,
  CommentAdminGetStatus500,
  CommentAdminGetStatus501,
} from "../../models/commentAdmin/CommentAdminGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { commentAdminGet } from "../../clients/commentAdmin/commentAdminGet.ts";

export const commentAdminGetQueryKey = (id?: CommentAdminGetPathId) =>
  [{ url: "/api/cms-kit-admin/comments/:id", params: { id: id } }] as const;

type CommentAdminGetQueryKey = ReturnType<typeof commentAdminGetQueryKey>;

export function commentAdminGetQueryOptions(
  id?: CommentAdminGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = commentAdminGetQueryKey(id);
  return queryOptions<
    CommentAdminGetStatus200,
    ResponseErrorConfig<
      | CommentAdminGetStatus400
      | CommentAdminGetStatus401
      | CommentAdminGetStatus403
      | CommentAdminGetStatus404
      | CommentAdminGetStatus500
      | CommentAdminGetStatus501
    >,
    CommentAdminGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return commentAdminGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/comments/:id}
 */
export function useCommentAdminGet<
  TData = CommentAdminGetStatus200,
  TQueryData = CommentAdminGetStatus200,
  TQueryKey extends QueryKey = CommentAdminGetQueryKey,
>(
  id?: CommentAdminGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        CommentAdminGetStatus200,
        ResponseErrorConfig<
          | CommentAdminGetStatus400
          | CommentAdminGetStatus401
          | CommentAdminGetStatus403
          | CommentAdminGetStatus404
          | CommentAdminGetStatus500
          | CommentAdminGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? commentAdminGetQueryKey(id);

  const query = useQuery(
    {
      ...commentAdminGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | CommentAdminGetStatus400
      | CommentAdminGetStatus401
      | CommentAdminGetStatus403
      | CommentAdminGetStatus404
      | CommentAdminGetStatus500
      | CommentAdminGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
