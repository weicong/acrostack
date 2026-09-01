/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassSessionGetQuestionHistoryOptions,
  ClassSessionGetQuestionHistoryStatus200,
  ClassSessionGetQuestionHistoryStatus400,
  ClassSessionGetQuestionHistoryStatus401,
  ClassSessionGetQuestionHistoryStatus403,
  ClassSessionGetQuestionHistoryStatus404,
  ClassSessionGetQuestionHistoryStatus500,
  ClassSessionGetQuestionHistoryStatus501,
} from "../../models/classSession/ClassSessionGetQuestionHistory";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { classSessionGetQuestionHistory } from "../../clients/classSession/classSessionGetQuestionHistory";

export const classSessionGetQuestionHistoryQueryKey = ({
  path,
}: Omit<ClassSessionGetQuestionHistoryOptions, "headers">) =>
  [{ url: "/api/app/class-session/:id/question-history", params: path }] as const;

type ClassSessionGetQuestionHistoryQueryKey = ReturnType<
  typeof classSessionGetQuestionHistoryQueryKey
>;

export function classSessionGetQuestionHistoryQueryOptions(
  { path }: ClassSessionGetQuestionHistoryOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = classSessionGetQuestionHistoryQueryKey({ path });
  return queryOptions<
    ClassSessionGetQuestionHistoryStatus200,
    ResponseErrorConfig<
      | ClassSessionGetQuestionHistoryStatus400
      | ClassSessionGetQuestionHistoryStatus401
      | ClassSessionGetQuestionHistoryStatus403
      | ClassSessionGetQuestionHistoryStatus404
      | ClassSessionGetQuestionHistoryStatus500
      | ClassSessionGetQuestionHistoryStatus501
    >,
    ClassSessionGetQuestionHistoryStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await classSessionGetQuestionHistory({
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
 * {@link /api/app/class-session/:id/question-history}
 */
export function useClassSessionGetQuestionHistory<
  TData = ClassSessionGetQuestionHistoryStatus200,
  TQueryData = ClassSessionGetQuestionHistoryStatus200,
  TQueryKey extends QueryKey = ClassSessionGetQuestionHistoryQueryKey,
>(
  {
    path,
  }: {
    path:
      | ClassSessionGetQuestionHistoryOptions["path"]
      | (() => ClassSessionGetQuestionHistoryOptions["path"]);
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        ClassSessionGetQuestionHistoryStatus200,
        ResponseErrorConfig<
          | ClassSessionGetQuestionHistoryStatus400
          | ClassSessionGetQuestionHistoryStatus401
          | ClassSessionGetQuestionHistoryStatus403
          | ClassSessionGetQuestionHistoryStatus404
          | ClassSessionGetQuestionHistoryStatus500
          | ClassSessionGetQuestionHistoryStatus501
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
  const queryKey =
    resolvedOptions?.queryKey ?? classSessionGetQuestionHistoryQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...classSessionGetQuestionHistoryQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | ClassSessionGetQuestionHistoryStatus400
      | ClassSessionGetQuestionHistoryStatus401
      | ClassSessionGetQuestionHistoryStatus403
      | ClassSessionGetQuestionHistoryStatus404
      | ClassSessionGetQuestionHistoryStatus500
      | ClassSessionGetQuestionHistoryStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
