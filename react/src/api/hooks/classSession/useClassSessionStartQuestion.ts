/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassSessionStartQuestionOptions,
  ClassSessionStartQuestionStatus200,
  ClassSessionStartQuestionStatus400,
  ClassSessionStartQuestionStatus401,
  ClassSessionStartQuestionStatus403,
  ClassSessionStartQuestionStatus404,
  ClassSessionStartQuestionStatus500,
  ClassSessionStartQuestionStatus501,
} from "../../models/classSession/ClassSessionStartQuestion";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { classSessionStartQuestion } from "../../clients/classSession/classSessionStartQuestion";

export const classSessionStartQuestionMutationKey = () =>
  [{ url: "/api/app/class-session/:id/start-question/:questionId" }] as const;

export function classSessionStartQuestionMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = classSessionStartQuestionMutationKey();
  return mutationOptions<
    ClassSessionStartQuestionStatus200,
    ResponseErrorConfig<
      | ClassSessionStartQuestionStatus400
      | ClassSessionStartQuestionStatus401
      | ClassSessionStartQuestionStatus403
      | ClassSessionStartQuestionStatus404
      | ClassSessionStartQuestionStatus500
      | ClassSessionStartQuestionStatus501
    >,
    ClassSessionStartQuestionOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await classSessionStartQuestion({
        ...config,
        path,
        body,
        throwOnError: true,
      });
      return data;
    },
  });
}

/**
 * {@link /api/app/class-session/:id/start-question/:questionId}
 */
export function useClassSessionStartQuestion<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ClassSessionStartQuestionStatus200,
      ResponseErrorConfig<
        | ClassSessionStartQuestionStatus400
        | ClassSessionStartQuestionStatus401
        | ClassSessionStartQuestionStatus403
        | ClassSessionStartQuestionStatus404
        | ClassSessionStartQuestionStatus500
        | ClassSessionStartQuestionStatus501
      >,
      ClassSessionStartQuestionOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? classSessionStartQuestionMutationKey();

  const baseOptions = classSessionStartQuestionMutationOptions(config) as UseMutationOptions<
    ClassSessionStartQuestionStatus200,
    ResponseErrorConfig<
      | ClassSessionStartQuestionStatus400
      | ClassSessionStartQuestionStatus401
      | ClassSessionStartQuestionStatus403
      | ClassSessionStartQuestionStatus404
      | ClassSessionStartQuestionStatus500
      | ClassSessionStartQuestionStatus501
    >,
    ClassSessionStartQuestionOptions,
    TContext
  >;

  return useMutation<
    ClassSessionStartQuestionStatus200,
    ResponseErrorConfig<
      | ClassSessionStartQuestionStatus400
      | ClassSessionStartQuestionStatus401
      | ClassSessionStartQuestionStatus403
      | ClassSessionStartQuestionStatus404
      | ClassSessionStartQuestionStatus500
      | ClassSessionStartQuestionStatus501
    >,
    ClassSessionStartQuestionOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ClassSessionStartQuestionStatus200,
    ResponseErrorConfig<
      | ClassSessionStartQuestionStatus400
      | ClassSessionStartQuestionStatus401
      | ClassSessionStartQuestionStatus403
      | ClassSessionStartQuestionStatus404
      | ClassSessionStartQuestionStatus500
      | ClassSessionStartQuestionStatus501
    >,
    ClassSessionStartQuestionOptions,
    TContext
  >;
}
