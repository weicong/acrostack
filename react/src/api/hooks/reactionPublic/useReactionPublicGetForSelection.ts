/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ReactionPublicGetForSelectionOptions,
  ReactionPublicGetForSelectionStatus200,
  ReactionPublicGetForSelectionStatus400,
  ReactionPublicGetForSelectionStatus401,
  ReactionPublicGetForSelectionStatus403,
  ReactionPublicGetForSelectionStatus404,
  ReactionPublicGetForSelectionStatus500,
  ReactionPublicGetForSelectionStatus501,
} from "../../models/reactionPublic/ReactionPublicGetForSelection";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { reactionPublicGetForSelection } from "../../clients/reactionPublic/reactionPublicGetForSelection";

export const reactionPublicGetForSelectionQueryKey = ({
  path,
}: Omit<ReactionPublicGetForSelectionOptions, "headers">) =>
  [{ url: "/api/cms-kit-public/reactions/:entityType/:entityId", params: path }] as const;

type ReactionPublicGetForSelectionQueryKey = ReturnType<
  typeof reactionPublicGetForSelectionQueryKey
>;

export function reactionPublicGetForSelectionQueryOptions(
  { path }: ReactionPublicGetForSelectionOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = reactionPublicGetForSelectionQueryKey({ path });
  return queryOptions<
    ReactionPublicGetForSelectionStatus200,
    ResponseErrorConfig<
      | ReactionPublicGetForSelectionStatus400
      | ReactionPublicGetForSelectionStatus401
      | ReactionPublicGetForSelectionStatus403
      | ReactionPublicGetForSelectionStatus404
      | ReactionPublicGetForSelectionStatus500
      | ReactionPublicGetForSelectionStatus501
    >,
    ReactionPublicGetForSelectionStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await reactionPublicGetForSelection({
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
 * {@link /api/cms-kit-public/reactions/:entityType/:entityId}
 */
export function useReactionPublicGetForSelection<
  TData = ReactionPublicGetForSelectionStatus200,
  TQueryData = ReactionPublicGetForSelectionStatus200,
  TQueryKey extends QueryKey = ReactionPublicGetForSelectionQueryKey,
>(
  {
    path,
  }: {
    path:
      | ReactionPublicGetForSelectionOptions["path"]
      | (() => ReactionPublicGetForSelectionOptions["path"]);
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        ReactionPublicGetForSelectionStatus200,
        ResponseErrorConfig<
          | ReactionPublicGetForSelectionStatus400
          | ReactionPublicGetForSelectionStatus401
          | ReactionPublicGetForSelectionStatus403
          | ReactionPublicGetForSelectionStatus404
          | ReactionPublicGetForSelectionStatus500
          | ReactionPublicGetForSelectionStatus501
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
  const queryKey =
    resolvedOptions?.queryKey ?? reactionPublicGetForSelectionQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...reactionPublicGetForSelectionQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | ReactionPublicGetForSelectionStatus400
      | ReactionPublicGetForSelectionStatus401
      | ReactionPublicGetForSelectionStatus403
      | ReactionPublicGetForSelectionStatus404
      | ReactionPublicGetForSelectionStatus500
      | ReactionPublicGetForSelectionStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
