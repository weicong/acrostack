/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  QuizGetOptions,
  QuizGetStatus200,
  QuizGetStatus400,
  QuizGetStatus401,
  QuizGetStatus403,
  QuizGetStatus404,
  QuizGetStatus500,
  QuizGetStatus501,
} from "../../models/quiz/QuizGet";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { quizGet } from "../../clients/quiz/quizGet";

export const quizGetQueryKey = ({ path }: Omit<QuizGetOptions, "headers">) =>
  [{ url: "/api/app/quiz/:id", params: path }] as const;

type QuizGetQueryKey = ReturnType<typeof quizGetQueryKey>;

export function quizGetQueryOptions(
  { path }: QuizGetOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = quizGetQueryKey({ path });
  return queryOptions<
    QuizGetStatus200,
    ResponseErrorConfig<
      | QuizGetStatus400
      | QuizGetStatus401
      | QuizGetStatus403
      | QuizGetStatus404
      | QuizGetStatus500
      | QuizGetStatus501
    >,
    QuizGetStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await quizGet({
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
 * {@link /api/app/quiz/:id}
 */
export function useQuizGet<
  TData = QuizGetStatus200,
  TQueryData = QuizGetStatus200,
  TQueryKey extends QueryKey = QuizGetQueryKey,
>(
  { path }: { path: QuizGetOptions["path"] | (() => QuizGetOptions["path"]) },
  options: {
    query?: Partial<
      QueryObserverOptions<
        QuizGetStatus200,
        ResponseErrorConfig<
          | QuizGetStatus400
          | QuizGetStatus401
          | QuizGetStatus403
          | QuizGetStatus404
          | QuizGetStatus500
          | QuizGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? quizGetQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...quizGetQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | QuizGetStatus400
      | QuizGetStatus401
      | QuizGetStatus403
      | QuizGetStatus404
      | QuizGetStatus500
      | QuizGetStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
