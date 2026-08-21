/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassSessionGetSnapshotOptions,
  ClassSessionGetSnapshotStatus200,
  ClassSessionGetSnapshotStatus400,
  ClassSessionGetSnapshotStatus401,
  ClassSessionGetSnapshotStatus403,
  ClassSessionGetSnapshotStatus404,
  ClassSessionGetSnapshotStatus500,
  ClassSessionGetSnapshotStatus501,
} from "../../models/classSession/ClassSessionGetSnapshot";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { classSessionGetSnapshot } from "../../clients/classSession/classSessionGetSnapshot";

export const classSessionGetSnapshotQueryKey = ({
  path,
}: Omit<ClassSessionGetSnapshotOptions, "headers">) =>
  [{ url: "/api/app/class-session/:id/snapshot", params: path }] as const;

type ClassSessionGetSnapshotQueryKey = ReturnType<typeof classSessionGetSnapshotQueryKey>;

export function classSessionGetSnapshotQueryOptions(
  { path }: ClassSessionGetSnapshotOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = classSessionGetSnapshotQueryKey({ path });
  return queryOptions<
    ClassSessionGetSnapshotStatus200,
    ResponseErrorConfig<
      | ClassSessionGetSnapshotStatus400
      | ClassSessionGetSnapshotStatus401
      | ClassSessionGetSnapshotStatus403
      | ClassSessionGetSnapshotStatus404
      | ClassSessionGetSnapshotStatus500
      | ClassSessionGetSnapshotStatus501
    >,
    ClassSessionGetSnapshotStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await classSessionGetSnapshot({
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
 * {@link /api/app/class-session/:id/snapshot}
 */
export function useClassSessionGetSnapshot<
  TData = ClassSessionGetSnapshotStatus200,
  TQueryData = ClassSessionGetSnapshotStatus200,
  TQueryKey extends QueryKey = ClassSessionGetSnapshotQueryKey,
>(
  {
    path,
  }: {
    path: ClassSessionGetSnapshotOptions["path"] | (() => ClassSessionGetSnapshotOptions["path"]);
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        ClassSessionGetSnapshotStatus200,
        ResponseErrorConfig<
          | ClassSessionGetSnapshotStatus400
          | ClassSessionGetSnapshotStatus401
          | ClassSessionGetSnapshotStatus403
          | ClassSessionGetSnapshotStatus404
          | ClassSessionGetSnapshotStatus500
          | ClassSessionGetSnapshotStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? classSessionGetSnapshotQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...classSessionGetSnapshotQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | ClassSessionGetSnapshotStatus400
      | ClassSessionGetSnapshotStatus401
      | ClassSessionGetSnapshotStatus403
      | ClassSessionGetSnapshotStatus404
      | ClassSessionGetSnapshotStatus500
      | ClassSessionGetSnapshotStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
