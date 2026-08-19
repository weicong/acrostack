/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  OpenIddictApplicationGetOptions,
  OpenIddictApplicationGetStatus200,
  OpenIddictApplicationGetStatus400,
  OpenIddictApplicationGetStatus401,
  OpenIddictApplicationGetStatus403,
  OpenIddictApplicationGetStatus404,
  OpenIddictApplicationGetStatus500,
  OpenIddictApplicationGetStatus501,
} from "../../models/openIddictApplication/OpenIddictApplicationGet";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { openIddictApplicationGet } from "../../clients/openIddictApplication/openIddictApplicationGet";

export const openIddictApplicationGetQueryKey = ({
  path,
}: Omit<OpenIddictApplicationGetOptions, "headers">) =>
  [{ url: "/api/app/open-iddict-application/:id", params: path }] as const;

type OpenIddictApplicationGetQueryKey = ReturnType<typeof openIddictApplicationGetQueryKey>;

export function openIddictApplicationGetQueryOptions(
  { path }: OpenIddictApplicationGetOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = openIddictApplicationGetQueryKey({ path });
  return queryOptions<
    OpenIddictApplicationGetStatus200,
    ResponseErrorConfig<
      | OpenIddictApplicationGetStatus400
      | OpenIddictApplicationGetStatus401
      | OpenIddictApplicationGetStatus403
      | OpenIddictApplicationGetStatus404
      | OpenIddictApplicationGetStatus500
      | OpenIddictApplicationGetStatus501
    >,
    OpenIddictApplicationGetStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await openIddictApplicationGet({
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
 * {@link /api/app/open-iddict-application/:id}
 */
export function useOpenIddictApplicationGet<
  TData = OpenIddictApplicationGetStatus200,
  TQueryData = OpenIddictApplicationGetStatus200,
  TQueryKey extends QueryKey = OpenIddictApplicationGetQueryKey,
>(
  {
    path,
  }: {
    path: OpenIddictApplicationGetOptions["path"] | (() => OpenIddictApplicationGetOptions["path"]);
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        OpenIddictApplicationGetStatus200,
        ResponseErrorConfig<
          | OpenIddictApplicationGetStatus400
          | OpenIddictApplicationGetStatus401
          | OpenIddictApplicationGetStatus403
          | OpenIddictApplicationGetStatus404
          | OpenIddictApplicationGetStatus500
          | OpenIddictApplicationGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? openIddictApplicationGetQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...openIddictApplicationGetQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | OpenIddictApplicationGetStatus400
      | OpenIddictApplicationGetStatus401
      | OpenIddictApplicationGetStatus403
      | OpenIddictApplicationGetStatus404
      | OpenIddictApplicationGetStatus500
      | OpenIddictApplicationGetStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
