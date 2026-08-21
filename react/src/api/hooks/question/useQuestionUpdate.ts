/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  QuestionUpdateOptions,
  QuestionUpdateStatus200,
  QuestionUpdateStatus400,
  QuestionUpdateStatus401,
  QuestionUpdateStatus403,
  QuestionUpdateStatus404,
  QuestionUpdateStatus500,
  QuestionUpdateStatus501,
} from "../../models/question/QuestionUpdate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { questionUpdate } from "../../clients/question/questionUpdate";

export const questionUpdateMutationKey = () => [{ url: "/api/app/question/:id" }] as const;

export function questionUpdateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = questionUpdateMutationKey();
  return mutationOptions<
    QuestionUpdateStatus200,
    ResponseErrorConfig<
      | QuestionUpdateStatus400
      | QuestionUpdateStatus401
      | QuestionUpdateStatus403
      | QuestionUpdateStatus404
      | QuestionUpdateStatus500
      | QuestionUpdateStatus501
    >,
    QuestionUpdateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await questionUpdate({ ...config, path, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/question/:id}
 */
export function useQuestionUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      QuestionUpdateStatus200,
      ResponseErrorConfig<
        | QuestionUpdateStatus400
        | QuestionUpdateStatus401
        | QuestionUpdateStatus403
        | QuestionUpdateStatus404
        | QuestionUpdateStatus500
        | QuestionUpdateStatus501
      >,
      QuestionUpdateOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? questionUpdateMutationKey();

  const baseOptions = questionUpdateMutationOptions(config) as UseMutationOptions<
    QuestionUpdateStatus200,
    ResponseErrorConfig<
      | QuestionUpdateStatus400
      | QuestionUpdateStatus401
      | QuestionUpdateStatus403
      | QuestionUpdateStatus404
      | QuestionUpdateStatus500
      | QuestionUpdateStatus501
    >,
    QuestionUpdateOptions,
    TContext
  >;

  return useMutation<
    QuestionUpdateStatus200,
    ResponseErrorConfig<
      | QuestionUpdateStatus400
      | QuestionUpdateStatus401
      | QuestionUpdateStatus403
      | QuestionUpdateStatus404
      | QuestionUpdateStatus500
      | QuestionUpdateStatus501
    >,
    QuestionUpdateOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    QuestionUpdateStatus200,
    ResponseErrorConfig<
      | QuestionUpdateStatus400
      | QuestionUpdateStatus401
      | QuestionUpdateStatus403
      | QuestionUpdateStatus404
      | QuestionUpdateStatus500
      | QuestionUpdateStatus501
    >,
    QuestionUpdateOptions,
    TContext
  >;
}
