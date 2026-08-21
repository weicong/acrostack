/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassroomStudentGetSnapshotOptions,
  ClassroomStudentGetSnapshotStatus200,
} from "../../models/classroomStudent/ClassroomStudentGetSnapshot";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { classroomStudentGetSnapshot } from "../../clients/classroomStudent/classroomStudentGetSnapshot";

export const classroomStudentGetSnapshotQueryKey = ({
  path,
}: Omit<ClassroomStudentGetSnapshotOptions, "headers">) =>
  [{ url: "/api/student/class-sessions/:id/snapshot", params: path }] as const;

type ClassroomStudentGetSnapshotQueryKey = ReturnType<typeof classroomStudentGetSnapshotQueryKey>;

export function classroomStudentGetSnapshotQueryOptions(
  { path }: ClassroomStudentGetSnapshotOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = classroomStudentGetSnapshotQueryKey({ path });
  return queryOptions<
    ClassroomStudentGetSnapshotStatus200,
    ResponseErrorConfig<Error>,
    ClassroomStudentGetSnapshotStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await classroomStudentGetSnapshot({
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
 * {@link /api/student/class-sessions/:id/snapshot}
 */
export function useClassroomStudentGetSnapshot<
  TData = ClassroomStudentGetSnapshotStatus200,
  TQueryData = ClassroomStudentGetSnapshotStatus200,
  TQueryKey extends QueryKey = ClassroomStudentGetSnapshotQueryKey,
>(
  {
    path,
  }: {
    path:
      | ClassroomStudentGetSnapshotOptions["path"]
      | (() => ClassroomStudentGetSnapshotOptions["path"]);
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        ClassroomStudentGetSnapshotStatus200,
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
  const queryKey = resolvedOptions?.queryKey ?? classroomStudentGetSnapshotQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...classroomStudentGetSnapshotQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
