/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassroomStudentSubmitAnswerOptions,
  ClassroomStudentSubmitAnswerStatus200,
} from "../../models/classroomStudent/ClassroomStudentSubmitAnswer";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { classroomStudentSubmitAnswer } from "../../clients/classroomStudent/classroomStudentSubmitAnswer";

export const classroomStudentSubmitAnswerMutationKey = () =>
  [{ url: "/api/student/class-sessions/:id/answers" }] as const;

export function classroomStudentSubmitAnswerMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = classroomStudentSubmitAnswerMutationKey();
  return mutationOptions<
    ClassroomStudentSubmitAnswerStatus200,
    ResponseErrorConfig<Error>,
    ClassroomStudentSubmitAnswerOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await classroomStudentSubmitAnswer({
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
 * {@link /api/student/class-sessions/:id/answers}
 */
export function useClassroomStudentSubmitAnswer<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ClassroomStudentSubmitAnswerStatus200,
      ResponseErrorConfig<Error>,
      ClassroomStudentSubmitAnswerOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? classroomStudentSubmitAnswerMutationKey();

  const baseOptions = classroomStudentSubmitAnswerMutationOptions(config) as UseMutationOptions<
    ClassroomStudentSubmitAnswerStatus200,
    ResponseErrorConfig<Error>,
    ClassroomStudentSubmitAnswerOptions,
    TContext
  >;

  return useMutation<
    ClassroomStudentSubmitAnswerStatus200,
    ResponseErrorConfig<Error>,
    ClassroomStudentSubmitAnswerOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ClassroomStudentSubmitAnswerStatus200,
    ResponseErrorConfig<Error>,
    ClassroomStudentSubmitAnswerOptions,
    TContext
  >;
}
