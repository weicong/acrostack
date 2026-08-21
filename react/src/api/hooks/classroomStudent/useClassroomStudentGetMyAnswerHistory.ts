/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassroomStudentGetMyAnswerHistoryOptions,
  ClassroomStudentGetMyAnswerHistoryStatus200,
} from "../../models/classroomStudent/ClassroomStudentGetMyAnswerHistory";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { classroomStudentGetMyAnswerHistory } from "../../clients/classroomStudent/classroomStudentGetMyAnswerHistory";

export const classroomStudentGetMyAnswerHistoryQueryKey = ({
  path,
}: Omit<ClassroomStudentGetMyAnswerHistoryOptions, "headers">) =>
  [{ url: "/api/student/class-sessions/:id/my-answers", params: path }] as const;

type ClassroomStudentGetMyAnswerHistoryQueryKey = ReturnType<
  typeof classroomStudentGetMyAnswerHistoryQueryKey
>;

export function classroomStudentGetMyAnswerHistoryQueryOptions(
  { path }: ClassroomStudentGetMyAnswerHistoryOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = classroomStudentGetMyAnswerHistoryQueryKey({ path });
  return queryOptions<
    ClassroomStudentGetMyAnswerHistoryStatus200,
    ResponseErrorConfig<Error>,
    ClassroomStudentGetMyAnswerHistoryStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await classroomStudentGetMyAnswerHistory({
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
 * {@link /api/student/class-sessions/:id/my-answers}
 */
export function useClassroomStudentGetMyAnswerHistory<
  TData = ClassroomStudentGetMyAnswerHistoryStatus200,
  TQueryData = ClassroomStudentGetMyAnswerHistoryStatus200,
  TQueryKey extends QueryKey = ClassroomStudentGetMyAnswerHistoryQueryKey,
>(
  {
    path,
  }: {
    path:
      | ClassroomStudentGetMyAnswerHistoryOptions["path"]
      | (() => ClassroomStudentGetMyAnswerHistoryOptions["path"]);
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        ClassroomStudentGetMyAnswerHistoryStatus200,
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
    resolvedOptions?.queryKey ?? classroomStudentGetMyAnswerHistoryQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...classroomStudentGetMyAnswerHistoryQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
