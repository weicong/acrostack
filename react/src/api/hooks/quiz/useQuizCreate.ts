/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  QuizCreateOptions,
  QuizCreateStatus200,
  QuizCreateStatus400,
  QuizCreateStatus401,
  QuizCreateStatus403,
  QuizCreateStatus404,
  QuizCreateStatus500,
  QuizCreateStatus501,
} from "../../models/quiz/QuizCreate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { quizCreate } from "../../clients/quiz/quizCreate";

export const quizCreateMutationKey = () => [{ url: "/api/app/quiz" }] as const;

export function quizCreateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = quizCreateMutationKey();
  return mutationOptions<
    QuizCreateStatus200,
    ResponseErrorConfig<
      | QuizCreateStatus400
      | QuizCreateStatus401
      | QuizCreateStatus403
      | QuizCreateStatus404
      | QuizCreateStatus500
      | QuizCreateStatus501
    >,
    QuizCreateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await quizCreate({ ...config, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/quiz}
 */
export function useQuizCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      QuizCreateStatus200,
      ResponseErrorConfig<
        | QuizCreateStatus400
        | QuizCreateStatus401
        | QuizCreateStatus403
        | QuizCreateStatus404
        | QuizCreateStatus500
        | QuizCreateStatus501
      >,
      QuizCreateOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? quizCreateMutationKey();

  const baseOptions = quizCreateMutationOptions(config) as UseMutationOptions<
    QuizCreateStatus200,
    ResponseErrorConfig<
      | QuizCreateStatus400
      | QuizCreateStatus401
      | QuizCreateStatus403
      | QuizCreateStatus404
      | QuizCreateStatus500
      | QuizCreateStatus501
    >,
    QuizCreateOptions,
    TContext
  >;

  return useMutation<
    QuizCreateStatus200,
    ResponseErrorConfig<
      | QuizCreateStatus400
      | QuizCreateStatus401
      | QuizCreateStatus403
      | QuizCreateStatus404
      | QuizCreateStatus500
      | QuizCreateStatus501
    >,
    QuizCreateOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    QuizCreateStatus200,
    ResponseErrorConfig<
      | QuizCreateStatus400
      | QuizCreateStatus401
      | QuizCreateStatus403
      | QuizCreateStatus404
      | QuizCreateStatus500
      | QuizCreateStatus501
    >,
    QuizCreateOptions,
    TContext
  >;
}
