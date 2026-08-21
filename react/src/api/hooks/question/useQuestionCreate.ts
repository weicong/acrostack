/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  QuestionCreateOptions,
  QuestionCreateStatus200,
  QuestionCreateStatus400,
  QuestionCreateStatus401,
  QuestionCreateStatus403,
  QuestionCreateStatus404,
  QuestionCreateStatus500,
  QuestionCreateStatus501,
} from "../../models/question/QuestionCreate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { questionCreate } from "../../clients/question/questionCreate";

export const questionCreateMutationKey = () => [{ url: "/api/app/question" }] as const;

export function questionCreateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = questionCreateMutationKey();
  return mutationOptions<
    QuestionCreateStatus200,
    ResponseErrorConfig<
      | QuestionCreateStatus400
      | QuestionCreateStatus401
      | QuestionCreateStatus403
      | QuestionCreateStatus404
      | QuestionCreateStatus500
      | QuestionCreateStatus501
    >,
    QuestionCreateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await questionCreate({ ...config, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/question}
 */
export function useQuestionCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      QuestionCreateStatus200,
      ResponseErrorConfig<
        | QuestionCreateStatus400
        | QuestionCreateStatus401
        | QuestionCreateStatus403
        | QuestionCreateStatus404
        | QuestionCreateStatus500
        | QuestionCreateStatus501
      >,
      QuestionCreateOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? questionCreateMutationKey();

  const baseOptions = questionCreateMutationOptions(config) as UseMutationOptions<
    QuestionCreateStatus200,
    ResponseErrorConfig<
      | QuestionCreateStatus400
      | QuestionCreateStatus401
      | QuestionCreateStatus403
      | QuestionCreateStatus404
      | QuestionCreateStatus500
      | QuestionCreateStatus501
    >,
    QuestionCreateOptions,
    TContext
  >;

  return useMutation<
    QuestionCreateStatus200,
    ResponseErrorConfig<
      | QuestionCreateStatus400
      | QuestionCreateStatus401
      | QuestionCreateStatus403
      | QuestionCreateStatus404
      | QuestionCreateStatus500
      | QuestionCreateStatus501
    >,
    QuestionCreateOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    QuestionCreateStatus200,
    ResponseErrorConfig<
      | QuestionCreateStatus400
      | QuestionCreateStatus401
      | QuestionCreateStatus403
      | QuestionCreateStatus404
      | QuestionCreateStatus500
      | QuestionCreateStatus501
    >,
    QuestionCreateOptions,
    TContext
  >;
}
