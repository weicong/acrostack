/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassroomPresentationGetSnapshotOptions,
  ClassroomPresentationGetSnapshotStatus200,
} from "../../models/classroomPresentation/ClassroomPresentationGetSnapshot";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { classroomPresentationGetSnapshot } from "../../clients/classroomPresentation/classroomPresentationGetSnapshot";

export const classroomPresentationGetSnapshotQueryKey = ({
  path,
}: Omit<ClassroomPresentationGetSnapshotOptions, "headers">) =>
  [{ url: "/api/presentation/class-sessions/:id/snapshot", params: path }] as const;

type ClassroomPresentationGetSnapshotQueryKey = ReturnType<
  typeof classroomPresentationGetSnapshotQueryKey
>;

export function classroomPresentationGetSnapshotQueryOptions(
  { path }: ClassroomPresentationGetSnapshotOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = classroomPresentationGetSnapshotQueryKey({ path });
  return queryOptions<
    ClassroomPresentationGetSnapshotStatus200,
    ResponseErrorConfig<Error>,
    ClassroomPresentationGetSnapshotStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await classroomPresentationGetSnapshot({
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
 * {@link /api/presentation/class-sessions/:id/snapshot}
 */
export function useClassroomPresentationGetSnapshot<
  TData = ClassroomPresentationGetSnapshotStatus200,
  TQueryData = ClassroomPresentationGetSnapshotStatus200,
  TQueryKey extends QueryKey = ClassroomPresentationGetSnapshotQueryKey,
>(
  {
    path,
  }: {
    path:
      | ClassroomPresentationGetSnapshotOptions["path"]
      | (() => ClassroomPresentationGetSnapshotOptions["path"]);
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        ClassroomPresentationGetSnapshotStatus200,
        ResponseErrorConfig<Error>,
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
    resolvedOptions?.queryKey ?? classroomPresentationGetSnapshotQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...classroomPresentationGetSnapshotQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
