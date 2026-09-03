/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ImpersonationSessionGetListOptions,
  ImpersonationSessionGetListStatus200,
  ImpersonationSessionGetListStatus400,
  ImpersonationSessionGetListStatus401,
  ImpersonationSessionGetListStatus403,
  ImpersonationSessionGetListStatus404,
  ImpersonationSessionGetListStatus500,
  ImpersonationSessionGetListStatus501,
} from "../../models/impersonationSession/ImpersonationSessionGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { impersonationSessionGetList } from "../../clients/impersonationSession/impersonationSessionGetList";

export const impersonationSessionGetListQueryKey = ({
  query,
}: Omit<ImpersonationSessionGetListOptions, "headers"> = {}) =>
  [{ url: "/api/app/impersonation-session" }, ...(query ? [query] : [])] as const;

type ImpersonationSessionGetListQueryKey = ReturnType<typeof impersonationSessionGetListQueryKey>;

export function impersonationSessionGetListQueryOptions(
  { query }: ImpersonationSessionGetListOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = impersonationSessionGetListQueryKey({ query });
  return queryOptions<
    ImpersonationSessionGetListStatus200,
    ResponseErrorConfig<
      | ImpersonationSessionGetListStatus400
      | ImpersonationSessionGetListStatus401
      | ImpersonationSessionGetListStatus403
      | ImpersonationSessionGetListStatus404
      | ImpersonationSessionGetListStatus500
      | ImpersonationSessionGetListStatus501
    >,
    ImpersonationSessionGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await impersonationSessionGetList({
        ...config,
        query,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
    },
  });
}

/**
 * {@link /api/app/impersonation-session}
 */
export function useImpersonationSessionGetList<
  TData = ImpersonationSessionGetListStatus200,
  TQueryData = ImpersonationSessionGetListStatus200,
  TQueryKey extends QueryKey = ImpersonationSessionGetListQueryKey,
>(
  {
    query,
  }: {
    query?:
      | ImpersonationSessionGetListOptions["query"]
      | (() => ImpersonationSessionGetListOptions["query"]);
  } = {},
  options: {
    query?: Partial<
      QueryObserverOptions<
        ImpersonationSessionGetListStatus200,
        ResponseErrorConfig<
          | ImpersonationSessionGetListStatus400
          | ImpersonationSessionGetListStatus401
          | ImpersonationSessionGetListStatus403
          | ImpersonationSessionGetListStatus404
          | ImpersonationSessionGetListStatus500
          | ImpersonationSessionGetListStatus501
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
  const resolvedParams = { query: typeof query === "function" ? query() : query };
  const queryKey = resolvedOptions?.queryKey ?? impersonationSessionGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...impersonationSessionGetListQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | ImpersonationSessionGetListStatus400
      | ImpersonationSessionGetListStatus401
      | ImpersonationSessionGetListStatus403
      | ImpersonationSessionGetListStatus404
      | ImpersonationSessionGetListStatus500
      | ImpersonationSessionGetListStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
