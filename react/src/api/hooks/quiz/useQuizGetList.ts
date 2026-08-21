/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  QuizGetListOptions,
  QuizGetListStatus200,
  QuizGetListStatus400,
  QuizGetListStatus401,
  QuizGetListStatus403,
  QuizGetListStatus404,
  QuizGetListStatus500,
  QuizGetListStatus501,
} from "../../models/quiz/QuizGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { quizGetList } from "../../clients/quiz/quizGetList";

export const quizGetListQueryKey = ({ query }: Omit<QuizGetListOptions, "headers"> = {}) =>
  [{ url: "/api/app/quiz" }, ...(query ? [query] : [])] as const;

type QuizGetListQueryKey = ReturnType<typeof quizGetListQueryKey>;

export function quizGetListQueryOptions(
  { query }: QuizGetListOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = quizGetListQueryKey({ query });
  return queryOptions<
    QuizGetListStatus200,
    ResponseErrorConfig<
      | QuizGetListStatus400
      | QuizGetListStatus401
      | QuizGetListStatus403
      | QuizGetListStatus404
      | QuizGetListStatus500
      | QuizGetListStatus501
    >,
    QuizGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await quizGetList({
        ...config,
        query,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
    },
  });
}

/**
 * {@link /api/app/quiz}
 */
export function useQuizGetList<
  TData = QuizGetListStatus200,
  TQueryData = QuizGetListStatus200,
  TQueryKey extends QueryKey = QuizGetListQueryKey,
>(
  { query }: { query?: QuizGetListOptions["query"] | (() => QuizGetListOptions["query"]) } = {},
  options: {
    query?: Partial<
      QueryObserverOptions<
        QuizGetListStatus200,
        ResponseErrorConfig<
          | QuizGetListStatus400
          | QuizGetListStatus401
          | QuizGetListStatus403
          | QuizGetListStatus404
          | QuizGetListStatus500
          | QuizGetListStatus501
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
  const resolvedParams = { query: typeof query === "function" ? query() : query };
  const queryKey = resolvedOptions?.queryKey ?? quizGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...quizGetListQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | QuizGetListStatus400
      | QuizGetListStatus401
      | QuizGetListStatus403
      | QuizGetListStatus404
      | QuizGetListStatus500
      | QuizGetListStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
