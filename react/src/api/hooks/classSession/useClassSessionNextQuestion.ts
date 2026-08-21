/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassSessionNextQuestionOptions,
  ClassSessionNextQuestionStatus200,
  ClassSessionNextQuestionStatus400,
  ClassSessionNextQuestionStatus401,
  ClassSessionNextQuestionStatus403,
  ClassSessionNextQuestionStatus404,
  ClassSessionNextQuestionStatus500,
  ClassSessionNextQuestionStatus501,
} from "../../models/classSession/ClassSessionNextQuestion";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { classSessionNextQuestion } from "../../clients/classSession/classSessionNextQuestion";

export const classSessionNextQuestionMutationKey = () =>
  [{ url: "/api/app/class-session/:id/next-question" }] as const;

export function classSessionNextQuestionMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = classSessionNextQuestionMutationKey();
  return mutationOptions<
    ClassSessionNextQuestionStatus200,
    ResponseErrorConfig<
      | ClassSessionNextQuestionStatus400
      | ClassSessionNextQuestionStatus401
      | ClassSessionNextQuestionStatus403
      | ClassSessionNextQuestionStatus404
      | ClassSessionNextQuestionStatus500
      | ClassSessionNextQuestionStatus501
    >,
    ClassSessionNextQuestionOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await classSessionNextQuestion({
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
 * {@link /api/app/class-session/:id/next-question}
 */
export function useClassSessionNextQuestion<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ClassSessionNextQuestionStatus200,
      ResponseErrorConfig<
        | ClassSessionNextQuestionStatus400
        | ClassSessionNextQuestionStatus401
        | ClassSessionNextQuestionStatus403
        | ClassSessionNextQuestionStatus404
        | ClassSessionNextQuestionStatus500
        | ClassSessionNextQuestionStatus501
      >,
      ClassSessionNextQuestionOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? classSessionNextQuestionMutationKey();

  const baseOptions = classSessionNextQuestionMutationOptions(config) as UseMutationOptions<
    ClassSessionNextQuestionStatus200,
    ResponseErrorConfig<
      | ClassSessionNextQuestionStatus400
      | ClassSessionNextQuestionStatus401
      | ClassSessionNextQuestionStatus403
      | ClassSessionNextQuestionStatus404
      | ClassSessionNextQuestionStatus500
      | ClassSessionNextQuestionStatus501
    >,
    ClassSessionNextQuestionOptions,
    TContext
  >;

  return useMutation<
    ClassSessionNextQuestionStatus200,
    ResponseErrorConfig<
      | ClassSessionNextQuestionStatus400
      | ClassSessionNextQuestionStatus401
      | ClassSessionNextQuestionStatus403
      | ClassSessionNextQuestionStatus404
      | ClassSessionNextQuestionStatus500
      | ClassSessionNextQuestionStatus501
    >,
    ClassSessionNextQuestionOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ClassSessionNextQuestionStatus200,
    ResponseErrorConfig<
      | ClassSessionNextQuestionStatus400
      | ClassSessionNextQuestionStatus401
      | ClassSessionNextQuestionStatus403
      | ClassSessionNextQuestionStatus404
      | ClassSessionNextQuestionStatus500
      | ClassSessionNextQuestionStatus501
    >,
    ClassSessionNextQuestionOptions,
    TContext
  >;
}
