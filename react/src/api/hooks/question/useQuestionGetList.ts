/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  QuestionGetListOptions,
  QuestionGetListStatus200,
  QuestionGetListStatus400,
  QuestionGetListStatus401,
  QuestionGetListStatus403,
  QuestionGetListStatus404,
  QuestionGetListStatus500,
  QuestionGetListStatus501,
} from "../../models/question/QuestionGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { questionGetList } from "../../clients/question/questionGetList";

export const questionGetListQueryKey = ({ query }: Omit<QuestionGetListOptions, "headers"> = {}) =>
  [{ url: "/api/app/question" }, ...(query ? [query] : [])] as const;

type QuestionGetListQueryKey = ReturnType<typeof questionGetListQueryKey>;

export function questionGetListQueryOptions(
  { query }: QuestionGetListOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = questionGetListQueryKey({ query });
  return queryOptions<
    QuestionGetListStatus200,
    ResponseErrorConfig<
      | QuestionGetListStatus400
      | QuestionGetListStatus401
      | QuestionGetListStatus403
      | QuestionGetListStatus404
      | QuestionGetListStatus500
      | QuestionGetListStatus501
    >,
    QuestionGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await questionGetList({
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
 * {@link /api/app/question}
 */
export function useQuestionGetList<
  TData = QuestionGetListStatus200,
  TQueryData = QuestionGetListStatus200,
  TQueryKey extends QueryKey = QuestionGetListQueryKey,
>(
  {
    query,
  }: { query?: QuestionGetListOptions["query"] | (() => QuestionGetListOptions["query"]) } = {},
  options: {
    query?: Partial<
      QueryObserverOptions<
        QuestionGetListStatus200,
        ResponseErrorConfig<
          | QuestionGetListStatus400
          | QuestionGetListStatus401
          | QuestionGetListStatus403
          | QuestionGetListStatus404
          | QuestionGetListStatus500
          | QuestionGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? questionGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...questionGetListQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | QuestionGetListStatus400
      | QuestionGetListStatus401
      | QuestionGetListStatus403
      | QuestionGetListStatus404
      | QuestionGetListStatus500
      | QuestionGetListStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
