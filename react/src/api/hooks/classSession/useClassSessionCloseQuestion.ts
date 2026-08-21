/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassSessionCloseQuestionOptions,
  ClassSessionCloseQuestionStatus200,
  ClassSessionCloseQuestionStatus400,
  ClassSessionCloseQuestionStatus401,
  ClassSessionCloseQuestionStatus403,
  ClassSessionCloseQuestionStatus404,
  ClassSessionCloseQuestionStatus500,
  ClassSessionCloseQuestionStatus501,
} from "../../models/classSession/ClassSessionCloseQuestion";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { classSessionCloseQuestion } from "../../clients/classSession/classSessionCloseQuestion";

export const classSessionCloseQuestionMutationKey = () =>
  [{ url: "/api/app/class-session/:id/close-question/:questionId" }] as const;

export function classSessionCloseQuestionMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: { response?: "text/plain" | "application/json" | "text/json" };
  } = {},
) {
  const mutationKey = classSessionCloseQuestionMutationKey();
  return mutationOptions<
    ClassSessionCloseQuestionStatus200,
    ResponseErrorConfig<
      | ClassSessionCloseQuestionStatus400
      | ClassSessionCloseQuestionStatus401
      | ClassSessionCloseQuestionStatus403
      | ClassSessionCloseQuestionStatus404
      | ClassSessionCloseQuestionStatus500
      | ClassSessionCloseQuestionStatus501
    >,
    ClassSessionCloseQuestionOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await classSessionCloseQuestion({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/class-session/:id/close-question/:questionId}
 */
export function useClassSessionCloseQuestion<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ClassSessionCloseQuestionStatus200,
      ResponseErrorConfig<
        | ClassSessionCloseQuestionStatus400
        | ClassSessionCloseQuestionStatus401
        | ClassSessionCloseQuestionStatus403
        | ClassSessionCloseQuestionStatus404
        | ClassSessionCloseQuestionStatus500
        | ClassSessionCloseQuestionStatus501
      >,
      ClassSessionCloseQuestionOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: { response?: "text/plain" | "application/json" | "text/json" };
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? classSessionCloseQuestionMutationKey();

  const baseOptions = classSessionCloseQuestionMutationOptions(config) as UseMutationOptions<
    ClassSessionCloseQuestionStatus200,
    ResponseErrorConfig<
      | ClassSessionCloseQuestionStatus400
      | ClassSessionCloseQuestionStatus401
      | ClassSessionCloseQuestionStatus403
      | ClassSessionCloseQuestionStatus404
      | ClassSessionCloseQuestionStatus500
      | ClassSessionCloseQuestionStatus501
    >,
    ClassSessionCloseQuestionOptions,
    TContext
  >;

  return useMutation<
    ClassSessionCloseQuestionStatus200,
    ResponseErrorConfig<
      | ClassSessionCloseQuestionStatus400
      | ClassSessionCloseQuestionStatus401
      | ClassSessionCloseQuestionStatus403
      | ClassSessionCloseQuestionStatus404
      | ClassSessionCloseQuestionStatus500
      | ClassSessionCloseQuestionStatus501
    >,
    ClassSessionCloseQuestionOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ClassSessionCloseQuestionStatus200,
    ResponseErrorConfig<
      | ClassSessionCloseQuestionStatus400
      | ClassSessionCloseQuestionStatus401
      | ClassSessionCloseQuestionStatus403
      | ClassSessionCloseQuestionStatus404
      | ClassSessionCloseQuestionStatus500
      | ClassSessionCloseQuestionStatus501
    >,
    ClassSessionCloseQuestionOptions,
    TContext
  >;
}
