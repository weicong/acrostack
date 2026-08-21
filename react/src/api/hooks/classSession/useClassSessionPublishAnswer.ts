/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassSessionPublishAnswerOptions,
  ClassSessionPublishAnswerStatus200,
  ClassSessionPublishAnswerStatus400,
  ClassSessionPublishAnswerStatus401,
  ClassSessionPublishAnswerStatus403,
  ClassSessionPublishAnswerStatus404,
  ClassSessionPublishAnswerStatus500,
  ClassSessionPublishAnswerStatus501,
} from "../../models/classSession/ClassSessionPublishAnswer";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { classSessionPublishAnswer } from "../../clients/classSession/classSessionPublishAnswer";

export const classSessionPublishAnswerMutationKey = () =>
  [{ url: "/api/app/class-session/:id/publish-answer/:questionId" }] as const;

export function classSessionPublishAnswerMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: { response?: "text/plain" | "application/json" | "text/json" };
  } = {},
) {
  const mutationKey = classSessionPublishAnswerMutationKey();
  return mutationOptions<
    ClassSessionPublishAnswerStatus200,
    ResponseErrorConfig<
      | ClassSessionPublishAnswerStatus400
      | ClassSessionPublishAnswerStatus401
      | ClassSessionPublishAnswerStatus403
      | ClassSessionPublishAnswerStatus404
      | ClassSessionPublishAnswerStatus500
      | ClassSessionPublishAnswerStatus501
    >,
    ClassSessionPublishAnswerOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await classSessionPublishAnswer({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/class-session/:id/publish-answer/:questionId}
 */
export function useClassSessionPublishAnswer<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ClassSessionPublishAnswerStatus200,
      ResponseErrorConfig<
        | ClassSessionPublishAnswerStatus400
        | ClassSessionPublishAnswerStatus401
        | ClassSessionPublishAnswerStatus403
        | ClassSessionPublishAnswerStatus404
        | ClassSessionPublishAnswerStatus500
        | ClassSessionPublishAnswerStatus501
      >,
      ClassSessionPublishAnswerOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: { response?: "text/plain" | "application/json" | "text/json" };
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? classSessionPublishAnswerMutationKey();

  const baseOptions = classSessionPublishAnswerMutationOptions(config) as UseMutationOptions<
    ClassSessionPublishAnswerStatus200,
    ResponseErrorConfig<
      | ClassSessionPublishAnswerStatus400
      | ClassSessionPublishAnswerStatus401
      | ClassSessionPublishAnswerStatus403
      | ClassSessionPublishAnswerStatus404
      | ClassSessionPublishAnswerStatus500
      | ClassSessionPublishAnswerStatus501
    >,
    ClassSessionPublishAnswerOptions,
    TContext
  >;

  return useMutation<
    ClassSessionPublishAnswerStatus200,
    ResponseErrorConfig<
      | ClassSessionPublishAnswerStatus400
      | ClassSessionPublishAnswerStatus401
      | ClassSessionPublishAnswerStatus403
      | ClassSessionPublishAnswerStatus404
      | ClassSessionPublishAnswerStatus500
      | ClassSessionPublishAnswerStatus501
    >,
    ClassSessionPublishAnswerOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ClassSessionPublishAnswerStatus200,
    ResponseErrorConfig<
      | ClassSessionPublishAnswerStatus400
      | ClassSessionPublishAnswerStatus401
      | ClassSessionPublishAnswerStatus403
      | ClassSessionPublishAnswerStatus404
      | ClassSessionPublishAnswerStatus500
      | ClassSessionPublishAnswerStatus501
    >,
    ClassSessionPublishAnswerOptions,
    TContext
  >;
}
