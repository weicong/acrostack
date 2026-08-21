/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassSessionGetListOptions,
  ClassSessionGetListStatus200,
  ClassSessionGetListStatus400,
  ClassSessionGetListStatus401,
  ClassSessionGetListStatus403,
  ClassSessionGetListStatus404,
  ClassSessionGetListStatus500,
  ClassSessionGetListStatus501,
} from "../../models/classSession/ClassSessionGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { classSessionGetList } from "../../clients/classSession/classSessionGetList";

export const classSessionGetListQueryKey = ({
  query,
}: Omit<ClassSessionGetListOptions, "headers"> = {}) =>
  [{ url: "/api/app/class-session" }, ...(query ? [query] : [])] as const;

type ClassSessionGetListQueryKey = ReturnType<typeof classSessionGetListQueryKey>;

export function classSessionGetListQueryOptions(
  { query }: ClassSessionGetListOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = classSessionGetListQueryKey({ query });
  return queryOptions<
    ClassSessionGetListStatus200,
    ResponseErrorConfig<
      | ClassSessionGetListStatus400
      | ClassSessionGetListStatus401
      | ClassSessionGetListStatus403
      | ClassSessionGetListStatus404
      | ClassSessionGetListStatus500
      | ClassSessionGetListStatus501
    >,
    ClassSessionGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await classSessionGetList({
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
 * {@link /api/app/class-session}
 */
export function useClassSessionGetList<
  TData = ClassSessionGetListStatus200,
  TQueryData = ClassSessionGetListStatus200,
  TQueryKey extends QueryKey = ClassSessionGetListQueryKey,
>(
  {
    query,
  }: {
    query?: ClassSessionGetListOptions["query"] | (() => ClassSessionGetListOptions["query"]);
  } = {},
  options: {
    query?: Partial<
      QueryObserverOptions<
        ClassSessionGetListStatus200,
        ResponseErrorConfig<
          | ClassSessionGetListStatus400
          | ClassSessionGetListStatus401
          | ClassSessionGetListStatus403
          | ClassSessionGetListStatus404
          | ClassSessionGetListStatus500
          | ClassSessionGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? classSessionGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...classSessionGetListQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | ClassSessionGetListStatus400
      | ClassSessionGetListStatus401
      | ClassSessionGetListStatus403
      | ClassSessionGetListStatus404
      | ClassSessionGetListStatus500
      | ClassSessionGetListStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
