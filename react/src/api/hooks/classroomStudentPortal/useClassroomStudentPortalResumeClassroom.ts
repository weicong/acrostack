/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassroomStudentPortalResumeClassroomOptions,
  ClassroomStudentPortalResumeClassroomStatus200,
} from "../../models/classroomStudentPortal/ClassroomStudentPortalResumeClassroom";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { classroomStudentPortalResumeClassroom } from "../../clients/classroomStudentPortal/classroomStudentPortalResumeClassroom";

export const classroomStudentPortalResumeClassroomMutationKey = () =>
  [{ url: "/api/student-portal/my/classrooms/:sessionId/resume" }] as const;

export function classroomStudentPortalResumeClassroomMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: { response?: "text/plain" | "application/json" | "text/json" };
  } = {},
) {
  const mutationKey = classroomStudentPortalResumeClassroomMutationKey();
  return mutationOptions<
    ClassroomStudentPortalResumeClassroomStatus200,
    ResponseErrorConfig<Error>,
    ClassroomStudentPortalResumeClassroomOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      return classroomStudentPortalResumeClassroom({
        ...config,
        path,
        throwOnError: true,
      }).unwrap();
    },
  });
}

/**
 * @summary 从门户进入课堂：校验会员关系后签发课堂短期令牌。
 * {@link /api/student-portal/my/classrooms/:sessionId/resume}
 */
export function useClassroomStudentPortalResumeClassroom<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ClassroomStudentPortalResumeClassroomStatus200,
      ResponseErrorConfig<Error>,
      ClassroomStudentPortalResumeClassroomOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: { response?: "text/plain" | "application/json" | "text/json" };
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey =
    mutationOptions.mutationKey ?? classroomStudentPortalResumeClassroomMutationKey();

  const baseOptions = classroomStudentPortalResumeClassroomMutationOptions(
    config,
  ) as UseMutationOptions<
    ClassroomStudentPortalResumeClassroomStatus200,
    ResponseErrorConfig<Error>,
    ClassroomStudentPortalResumeClassroomOptions,
    TContext
  >;

  return useMutation<
    ClassroomStudentPortalResumeClassroomStatus200,
    ResponseErrorConfig<Error>,
    ClassroomStudentPortalResumeClassroomOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ClassroomStudentPortalResumeClassroomStatus200,
    ResponseErrorConfig<Error>,
    ClassroomStudentPortalResumeClassroomOptions,
    TContext
  >;
}
