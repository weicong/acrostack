/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassSessionGetDashboardOptions,
  ClassSessionGetDashboardStatus200,
  ClassSessionGetDashboardStatus400,
  ClassSessionGetDashboardStatus401,
  ClassSessionGetDashboardStatus403,
  ClassSessionGetDashboardStatus404,
  ClassSessionGetDashboardStatus500,
  ClassSessionGetDashboardStatus501,
} from "../../models/classSession/ClassSessionGetDashboard";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { classSessionGetDashboard } from "../../clients/classSession/classSessionGetDashboard";

export const classSessionGetDashboardQueryKey = ({
  path,
}: Omit<ClassSessionGetDashboardOptions, "headers">) =>
  [{ url: "/api/app/class-session/:id/dashboard", params: path }] as const;

type ClassSessionGetDashboardQueryKey = ReturnType<typeof classSessionGetDashboardQueryKey>;

export function classSessionGetDashboardQueryOptions(
  { path }: ClassSessionGetDashboardOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = classSessionGetDashboardQueryKey({ path });
  return queryOptions<
    ClassSessionGetDashboardStatus200,
    ResponseErrorConfig<
      | ClassSessionGetDashboardStatus400
      | ClassSessionGetDashboardStatus401
      | ClassSessionGetDashboardStatus403
      | ClassSessionGetDashboardStatus404
      | ClassSessionGetDashboardStatus500
      | ClassSessionGetDashboardStatus501
    >,
    ClassSessionGetDashboardStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await classSessionGetDashboard({
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
 * {@link /api/app/class-session/:id/dashboard}
 */
export function useClassSessionGetDashboard<
  TData = ClassSessionGetDashboardStatus200,
  TQueryData = ClassSessionGetDashboardStatus200,
  TQueryKey extends QueryKey = ClassSessionGetDashboardQueryKey,
>(
  {
    path,
  }: {
    path: ClassSessionGetDashboardOptions["path"] | (() => ClassSessionGetDashboardOptions["path"]);
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        ClassSessionGetDashboardStatus200,
        ResponseErrorConfig<
          | ClassSessionGetDashboardStatus400
          | ClassSessionGetDashboardStatus401
          | ClassSessionGetDashboardStatus403
          | ClassSessionGetDashboardStatus404
          | ClassSessionGetDashboardStatus500
          | ClassSessionGetDashboardStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? classSessionGetDashboardQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...classSessionGetDashboardQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | ClassSessionGetDashboardStatus400
      | ClassSessionGetDashboardStatus401
      | ClassSessionGetDashboardStatus403
      | ClassSessionGetDashboardStatus404
      | ClassSessionGetDashboardStatus500
      | ClassSessionGetDashboardStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
