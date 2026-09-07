/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassroomStudentPortalGetMyClassroomAnswersOptions,
  ClassroomStudentPortalGetMyClassroomAnswersStatus200,
} from "../../models/classroomStudentPortal/ClassroomStudentPortalGetMyClassroomAnswers";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { classroomStudentPortalGetMyClassroomAnswers } from "../../clients/classroomStudentPortal/classroomStudentPortalGetMyClassroomAnswers";

export const classroomStudentPortalGetMyClassroomAnswersQueryKey = ({
  path,
}: Omit<ClassroomStudentPortalGetMyClassroomAnswersOptions, "headers">) =>
  [{ url: "/api/student-portal/my/classrooms/:sessionId/answers", params: path }] as const;

type ClassroomStudentPortalGetMyClassroomAnswersQueryKey = ReturnType<
  typeof classroomStudentPortalGetMyClassroomAnswersQueryKey
>;

export function classroomStudentPortalGetMyClassroomAnswersQueryOptions(
  { path }: ClassroomStudentPortalGetMyClassroomAnswersOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = classroomStudentPortalGetMyClassroomAnswersQueryKey({ path });
  return queryOptions<
    ClassroomStudentPortalGetMyClassroomAnswersStatus200,
    ResponseErrorConfig<Error>,
    ClassroomStudentPortalGetMyClassroomAnswersStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return classroomStudentPortalGetMyClassroomAnswers({
        ...config,
        path,
        signal: config.signal ?? signal,
        throwOnError: true,
      }).unwrap();
    },
  });
}

/**
 * @summary 本人某课堂的答题记录（逐题回顾；正确答案仅公布后下发）。
 * {@link /api/student-portal/my/classrooms/:sessionId/answers}
 */
export function useClassroomStudentPortalGetMyClassroomAnswers<
  TData = ClassroomStudentPortalGetMyClassroomAnswersStatus200,
  TQueryData = ClassroomStudentPortalGetMyClassroomAnswersStatus200,
  TQueryKey extends QueryKey = ClassroomStudentPortalGetMyClassroomAnswersQueryKey,
>(
  {
    path,
  }: {
    path:
      | ClassroomStudentPortalGetMyClassroomAnswersOptions["path"]
      | (() => ClassroomStudentPortalGetMyClassroomAnswersOptions["path"]);
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        ClassroomStudentPortalGetMyClassroomAnswersStatus200,
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
    resolvedOptions?.queryKey ??
    classroomStudentPortalGetMyClassroomAnswersQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...classroomStudentPortalGetMyClassroomAnswersQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
