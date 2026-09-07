/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type { ClassroomStudentPortalGetMyProfileStatus200 } from "../../models/classroomStudentPortal/ClassroomStudentPortalGetMyProfile";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { classroomStudentPortalGetMyProfile } from "../../clients/classroomStudentPortal/classroomStudentPortalGetMyProfile";

export const classroomStudentPortalGetMyProfileQueryKey = () =>
  [{ url: "/api/student-portal/me" }] as const;

type ClassroomStudentPortalGetMyProfileQueryKey = ReturnType<
  typeof classroomStudentPortalGetMyProfileQueryKey
>;

export function classroomStudentPortalGetMyProfileQueryOptions(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = classroomStudentPortalGetMyProfileQueryKey();
  return queryOptions<
    ClassroomStudentPortalGetMyProfileStatus200,
    ResponseErrorConfig<Error>,
    ClassroomStudentPortalGetMyProfileStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return classroomStudentPortalGetMyProfile({
        ...config,
        signal: config.signal ?? signal,
        throwOnError: true,
      }).unwrap();
    },
  });
}

/**
 * @summary 本人资料。
 * {@link /api/student-portal/me}
 */
export function useClassroomStudentPortalGetMyProfile<
  TData = ClassroomStudentPortalGetMyProfileStatus200,
  TQueryData = ClassroomStudentPortalGetMyProfileStatus200,
  TQueryKey extends QueryKey = ClassroomStudentPortalGetMyProfileQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        ClassroomStudentPortalGetMyProfileStatus200,
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
  const queryKey = resolvedOptions?.queryKey ?? classroomStudentPortalGetMyProfileQueryKey();

  const queryResult = useQuery(
    {
      ...classroomStudentPortalGetMyProfileQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
