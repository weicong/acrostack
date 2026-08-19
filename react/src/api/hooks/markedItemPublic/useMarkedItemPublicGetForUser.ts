/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  MarkedItemPublicGetForUserOptions,
  MarkedItemPublicGetForUserStatus200,
  MarkedItemPublicGetForUserStatus400,
  MarkedItemPublicGetForUserStatus401,
  MarkedItemPublicGetForUserStatus403,
  MarkedItemPublicGetForUserStatus404,
  MarkedItemPublicGetForUserStatus500,
  MarkedItemPublicGetForUserStatus501,
} from "../../models/markedItemPublic/MarkedItemPublicGetForUser";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { markedItemPublicGetForUser } from "../../clients/markedItemPublic/markedItemPublicGetForUser";

export const markedItemPublicGetForUserQueryKey = ({
  path,
}: Omit<MarkedItemPublicGetForUserOptions, "headers">) =>
  [{ url: "/api/cms-kit-public/marked-items/:entityType/:entityId", params: path }] as const;

type MarkedItemPublicGetForUserQueryKey = ReturnType<typeof markedItemPublicGetForUserQueryKey>;

export function markedItemPublicGetForUserQueryOptions(
  { path }: MarkedItemPublicGetForUserOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = markedItemPublicGetForUserQueryKey({ path });
  return queryOptions<
    MarkedItemPublicGetForUserStatus200,
    ResponseErrorConfig<
      | MarkedItemPublicGetForUserStatus400
      | MarkedItemPublicGetForUserStatus401
      | MarkedItemPublicGetForUserStatus403
      | MarkedItemPublicGetForUserStatus404
      | MarkedItemPublicGetForUserStatus500
      | MarkedItemPublicGetForUserStatus501
    >,
    MarkedItemPublicGetForUserStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await markedItemPublicGetForUser({
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
 * {@link /api/cms-kit-public/marked-items/:entityType/:entityId}
 */
export function useMarkedItemPublicGetForUser<
  TData = MarkedItemPublicGetForUserStatus200,
  TQueryData = MarkedItemPublicGetForUserStatus200,
  TQueryKey extends QueryKey = MarkedItemPublicGetForUserQueryKey,
>(
  {
    path,
  }: {
    path:
      | MarkedItemPublicGetForUserOptions["path"]
      | (() => MarkedItemPublicGetForUserOptions["path"]);
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        MarkedItemPublicGetForUserStatus200,
        ResponseErrorConfig<
          | MarkedItemPublicGetForUserStatus400
          | MarkedItemPublicGetForUserStatus401
          | MarkedItemPublicGetForUserStatus403
          | MarkedItemPublicGetForUserStatus404
          | MarkedItemPublicGetForUserStatus500
          | MarkedItemPublicGetForUserStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? markedItemPublicGetForUserQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...markedItemPublicGetForUserQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | MarkedItemPublicGetForUserStatus400
      | MarkedItemPublicGetForUserStatus401
      | MarkedItemPublicGetForUserStatus403
      | MarkedItemPublicGetForUserStatus404
      | MarkedItemPublicGetForUserStatus500
      | MarkedItemPublicGetForUserStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
