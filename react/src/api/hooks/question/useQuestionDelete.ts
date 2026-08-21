/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  QuestionDeleteOptions,
  QuestionDeleteStatus200,
  QuestionDeleteStatus204,
  QuestionDeleteStatus400,
  QuestionDeleteStatus401,
  QuestionDeleteStatus403,
  QuestionDeleteStatus404,
  QuestionDeleteStatus500,
  QuestionDeleteStatus501,
} from "../../models/question/QuestionDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { questionDelete } from "../../clients/question/questionDelete";

export const questionDeleteMutationKey = () => [{ url: "/api/app/question/:id" }] as const;

export function questionDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = questionDeleteMutationKey();
  return mutationOptions<
    QuestionDeleteStatus200 | QuestionDeleteStatus204,
    ResponseErrorConfig<
      | QuestionDeleteStatus400
      | QuestionDeleteStatus401
      | QuestionDeleteStatus403
      | QuestionDeleteStatus404
      | QuestionDeleteStatus500
      | QuestionDeleteStatus501
    >,
    QuestionDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await questionDelete({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/question/:id}
 */
export function useQuestionDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      QuestionDeleteStatus200 | QuestionDeleteStatus204,
      ResponseErrorConfig<
        | QuestionDeleteStatus400
        | QuestionDeleteStatus401
        | QuestionDeleteStatus403
        | QuestionDeleteStatus404
        | QuestionDeleteStatus500
        | QuestionDeleteStatus501
      >,
      QuestionDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? questionDeleteMutationKey();

  const baseOptions = questionDeleteMutationOptions(config) as UseMutationOptions<
    QuestionDeleteStatus200 | QuestionDeleteStatus204,
    ResponseErrorConfig<
      | QuestionDeleteStatus400
      | QuestionDeleteStatus401
      | QuestionDeleteStatus403
      | QuestionDeleteStatus404
      | QuestionDeleteStatus500
      | QuestionDeleteStatus501
    >,
    QuestionDeleteOptions,
    TContext
  >;

  return useMutation<
    QuestionDeleteStatus200 | QuestionDeleteStatus204,
    ResponseErrorConfig<
      | QuestionDeleteStatus400
      | QuestionDeleteStatus401
      | QuestionDeleteStatus403
      | QuestionDeleteStatus404
      | QuestionDeleteStatus500
      | QuestionDeleteStatus501
    >,
    QuestionDeleteOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    QuestionDeleteStatus200 | QuestionDeleteStatus204,
    ResponseErrorConfig<
      | QuestionDeleteStatus400
      | QuestionDeleteStatus401
      | QuestionDeleteStatus403
      | QuestionDeleteStatus404
      | QuestionDeleteStatus500
      | QuestionDeleteStatus501
    >,
    QuestionDeleteOptions,
    TContext
  >;
}
