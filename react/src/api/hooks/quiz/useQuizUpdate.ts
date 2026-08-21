/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  QuizUpdateOptions,
  QuizUpdateStatus200,
  QuizUpdateStatus400,
  QuizUpdateStatus401,
  QuizUpdateStatus403,
  QuizUpdateStatus404,
  QuizUpdateStatus500,
  QuizUpdateStatus501,
} from "../../models/quiz/QuizUpdate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { quizUpdate } from "../../clients/quiz/quizUpdate";

export const quizUpdateMutationKey = () => [{ url: "/api/app/quiz/:id" }] as const;

export function quizUpdateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = quizUpdateMutationKey();
  return mutationOptions<
    QuizUpdateStatus200,
    ResponseErrorConfig<
      | QuizUpdateStatus400
      | QuizUpdateStatus401
      | QuizUpdateStatus403
      | QuizUpdateStatus404
      | QuizUpdateStatus500
      | QuizUpdateStatus501
    >,
    QuizUpdateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await quizUpdate({ ...config, path, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/quiz/:id}
 */
export function useQuizUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      QuizUpdateStatus200,
      ResponseErrorConfig<
        | QuizUpdateStatus400
        | QuizUpdateStatus401
        | QuizUpdateStatus403
        | QuizUpdateStatus404
        | QuizUpdateStatus500
        | QuizUpdateStatus501
      >,
      QuizUpdateOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: {
        request?: "application/json" | "text/json" | "application/*+json";
        response?: "text/plain" | "application/json" | "text/json";
      };
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? quizUpdateMutationKey();

  const baseOptions = quizUpdateMutationOptions(config) as UseMutationOptions<
    QuizUpdateStatus200,
    ResponseErrorConfig<
      | QuizUpdateStatus400
      | QuizUpdateStatus401
      | QuizUpdateStatus403
      | QuizUpdateStatus404
      | QuizUpdateStatus500
      | QuizUpdateStatus501
    >,
    QuizUpdateOptions,
    TContext
  >;

  return useMutation<
    QuizUpdateStatus200,
    ResponseErrorConfig<
      | QuizUpdateStatus400
      | QuizUpdateStatus401
      | QuizUpdateStatus403
      | QuizUpdateStatus404
      | QuizUpdateStatus500
      | QuizUpdateStatus501
    >,
    QuizUpdateOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    QuizUpdateStatus200,
    ResponseErrorConfig<
      | QuizUpdateStatus400
      | QuizUpdateStatus401
      | QuizUpdateStatus403
      | QuizUpdateStatus404
      | QuizUpdateStatus500
      | QuizUpdateStatus501
    >,
    QuizUpdateOptions,
    TContext
  >;
}
