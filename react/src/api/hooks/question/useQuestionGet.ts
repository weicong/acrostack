/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  QuestionGetOptions,
  QuestionGetStatus200,
  QuestionGetStatus400,
  QuestionGetStatus401,
  QuestionGetStatus403,
  QuestionGetStatus404,
  QuestionGetStatus500,
  QuestionGetStatus501,
} from "../../models/question/QuestionGet";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { questionGet } from "../../clients/question/questionGet";

export const questionGetQueryKey = ({ path }: Omit<QuestionGetOptions, "headers">) =>
  [{ url: "/api/app/question/:id", params: path }] as const;

type QuestionGetQueryKey = ReturnType<typeof questionGetQueryKey>;

export function questionGetQueryOptions(
  { path }: QuestionGetOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = questionGetQueryKey({ path });
  return queryOptions<
    QuestionGetStatus200,
    ResponseErrorConfig<
      | QuestionGetStatus400
      | QuestionGetStatus401
      | QuestionGetStatus403
      | QuestionGetStatus404
      | QuestionGetStatus500
      | QuestionGetStatus501
    >,
    QuestionGetStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await questionGet({
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
 * {@link /api/app/question/:id}
 */
export function useQuestionGet<
  TData = QuestionGetStatus200,
  TQueryData = QuestionGetStatus200,
  TQueryKey extends QueryKey = QuestionGetQueryKey,
>(
  { path }: { path: QuestionGetOptions["path"] | (() => QuestionGetOptions["path"]) },
  options: {
    query?: Partial<
      QueryObserverOptions<
        QuestionGetStatus200,
        ResponseErrorConfig<
          | QuestionGetStatus400
          | QuestionGetStatus401
          | QuestionGetStatus403
          | QuestionGetStatus404
          | QuestionGetStatus500
          | QuestionGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? questionGetQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...questionGetQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | QuestionGetStatus400
      | QuestionGetStatus401
      | QuestionGetStatus403
      | QuestionGetStatus404
      | QuestionGetStatus500
      | QuestionGetStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
