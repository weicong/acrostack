/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassSessionGetOptions,
  ClassSessionGetStatus200,
  ClassSessionGetStatus400,
  ClassSessionGetStatus401,
  ClassSessionGetStatus403,
  ClassSessionGetStatus404,
  ClassSessionGetStatus500,
  ClassSessionGetStatus501,
} from "../../models/classSession/ClassSessionGet";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { classSessionGet } from "../../clients/classSession/classSessionGet";

export const classSessionGetQueryKey = ({ path }: Omit<ClassSessionGetOptions, "headers">) =>
  [{ url: "/api/app/class-session/:id", params: path }] as const;

type ClassSessionGetQueryKey = ReturnType<typeof classSessionGetQueryKey>;

export function classSessionGetQueryOptions(
  { path }: ClassSessionGetOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = classSessionGetQueryKey({ path });
  return queryOptions<
    ClassSessionGetStatus200,
    ResponseErrorConfig<
      | ClassSessionGetStatus400
      | ClassSessionGetStatus401
      | ClassSessionGetStatus403
      | ClassSessionGetStatus404
      | ClassSessionGetStatus500
      | ClassSessionGetStatus501
    >,
    ClassSessionGetStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await classSessionGet({
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
 * {@link /api/app/class-session/:id}
 */
export function useClassSessionGet<
  TData = ClassSessionGetStatus200,
  TQueryData = ClassSessionGetStatus200,
  TQueryKey extends QueryKey = ClassSessionGetQueryKey,
>(
  { path }: { path: ClassSessionGetOptions["path"] | (() => ClassSessionGetOptions["path"]) },
  options: {
    query?: Partial<
      QueryObserverOptions<
        ClassSessionGetStatus200,
        ResponseErrorConfig<
          | ClassSessionGetStatus400
          | ClassSessionGetStatus401
          | ClassSessionGetStatus403
          | ClassSessionGetStatus404
          | ClassSessionGetStatus500
          | ClassSessionGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? classSessionGetQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...classSessionGetQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | ClassSessionGetStatus400
      | ClassSessionGetStatus401
      | ClassSessionGetStatus403
      | ClassSessionGetStatus404
      | ClassSessionGetStatus500
      | ClassSessionGetStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
