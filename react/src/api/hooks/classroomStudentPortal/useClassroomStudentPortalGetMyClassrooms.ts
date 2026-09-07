/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type { ClassroomStudentPortalGetMyClassroomsStatus200 } from "../../models/classroomStudentPortal/ClassroomStudentPortalGetMyClassrooms";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { classroomStudentPortalGetMyClassrooms } from "../../clients/classroomStudentPortal/classroomStudentPortalGetMyClassrooms";

export const classroomStudentPortalGetMyClassroomsQueryKey = () =>
  [{ url: "/api/student-portal/my/classrooms" }] as const;

type ClassroomStudentPortalGetMyClassroomsQueryKey = ReturnType<
  typeof classroomStudentPortalGetMyClassroomsQueryKey
>;

export function classroomStudentPortalGetMyClassroomsQueryOptions(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = classroomStudentPortalGetMyClassroomsQueryKey();
  return queryOptions<
    ClassroomStudentPortalGetMyClassroomsStatus200,
    ResponseErrorConfig<Error>,
    ClassroomStudentPortalGetMyClassroomsStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return classroomStudentPortalGetMyClassrooms({
        ...config,
        signal: config.signal ?? signal,
        throwOnError: true,
      }).unwrap();
    },
  });
}

/**
 * @summary 加入过的课堂列表（进行中的排前）。
 * {@link /api/student-portal/my/classrooms}
 */
export function useClassroomStudentPortalGetMyClassrooms<
  TData = ClassroomStudentPortalGetMyClassroomsStatus200,
  TQueryData = ClassroomStudentPortalGetMyClassroomsStatus200,
  TQueryKey extends QueryKey = ClassroomStudentPortalGetMyClassroomsQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        ClassroomStudentPortalGetMyClassroomsStatus200,
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
  const queryKey = resolvedOptions?.queryKey ?? classroomStudentPortalGetMyClassroomsQueryKey();

  const queryResult = useQuery(
    {
      ...classroomStudentPortalGetMyClassroomsQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
