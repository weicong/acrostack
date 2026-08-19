/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  CommentAdminGetOptions,
  CommentAdminGetStatus200,
  CommentAdminGetStatus400,
  CommentAdminGetStatus401,
  CommentAdminGetStatus403,
  CommentAdminGetStatus404,
  CommentAdminGetStatus500,
  CommentAdminGetStatus501,
} from "../../models/commentAdmin/CommentAdminGet";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { commentAdminGet } from "../../clients/commentAdmin/commentAdminGet";

export const commentAdminGetQueryKey = ({ path }: Omit<CommentAdminGetOptions, "headers">) =>
  [{ url: "/api/cms-kit-admin/comments/:id", params: path }] as const;

type CommentAdminGetQueryKey = ReturnType<typeof commentAdminGetQueryKey>;

export function commentAdminGetQueryOptions(
  { path }: CommentAdminGetOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = commentAdminGetQueryKey({ path });
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
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await commentAdminGet({
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
 * {@link /api/cms-kit-admin/comments/:id}
 */
export function useCommentAdminGet<
  TData = CommentAdminGetStatus200,
  TQueryData = CommentAdminGetStatus200,
  TQueryKey extends QueryKey = CommentAdminGetQueryKey,
>(
  { path }: { path: CommentAdminGetOptions["path"] | (() => CommentAdminGetOptions["path"]) },
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { path: typeof path === "function" ? path() : path };
  const queryKey = resolvedOptions?.queryKey ?? commentAdminGetQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...commentAdminGetQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
