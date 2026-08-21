/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  QuizDeleteOptions,
  QuizDeleteStatus200,
  QuizDeleteStatus204,
  QuizDeleteStatus400,
  QuizDeleteStatus401,
  QuizDeleteStatus403,
  QuizDeleteStatus404,
  QuizDeleteStatus500,
  QuizDeleteStatus501,
} from "../../models/quiz/QuizDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { quizDelete } from "../../clients/quiz/quizDelete";

export const quizDeleteMutationKey = () => [{ url: "/api/app/quiz/:id" }] as const;

export function quizDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = quizDeleteMutationKey();
  return mutationOptions<
    QuizDeleteStatus200 | QuizDeleteStatus204,
    ResponseErrorConfig<
      | QuizDeleteStatus400
      | QuizDeleteStatus401
      | QuizDeleteStatus403
      | QuizDeleteStatus404
      | QuizDeleteStatus500
      | QuizDeleteStatus501
    >,
    QuizDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await quizDelete({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/quiz/:id}
 */
export function useQuizDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      QuizDeleteStatus200 | QuizDeleteStatus204,
      ResponseErrorConfig<
        | QuizDeleteStatus400
        | QuizDeleteStatus401
        | QuizDeleteStatus403
        | QuizDeleteStatus404
        | QuizDeleteStatus500
        | QuizDeleteStatus501
      >,
      QuizDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? quizDeleteMutationKey();

  const baseOptions = quizDeleteMutationOptions(config) as UseMutationOptions<
    QuizDeleteStatus200 | QuizDeleteStatus204,
    ResponseErrorConfig<
      | QuizDeleteStatus400
      | QuizDeleteStatus401
      | QuizDeleteStatus403
      | QuizDeleteStatus404
      | QuizDeleteStatus500
      | QuizDeleteStatus501
    >,
    QuizDeleteOptions,
    TContext
  >;

  return useMutation<
    QuizDeleteStatus200 | QuizDeleteStatus204,
    ResponseErrorConfig<
      | QuizDeleteStatus400
      | QuizDeleteStatus401
      | QuizDeleteStatus403
      | QuizDeleteStatus404
      | QuizDeleteStatus500
      | QuizDeleteStatus501
    >,
    QuizDeleteOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    QuizDeleteStatus200 | QuizDeleteStatus204,
    ResponseErrorConfig<
      | QuizDeleteStatus400
      | QuizDeleteStatus401
      | QuizDeleteStatus403
      | QuizDeleteStatus404
      | QuizDeleteStatus500
      | QuizDeleteStatus501
    >,
    QuizDeleteOptions,
    TContext
  >;
}
