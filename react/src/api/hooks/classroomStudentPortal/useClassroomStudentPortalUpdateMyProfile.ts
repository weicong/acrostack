/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassroomStudentPortalUpdateMyProfileOptions,
  ClassroomStudentPortalUpdateMyProfileStatus200,
} from "../../models/classroomStudentPortal/ClassroomStudentPortalUpdateMyProfile";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { classroomStudentPortalUpdateMyProfile } from "../../clients/classroomStudentPortal/classroomStudentPortalUpdateMyProfile";

export const classroomStudentPortalUpdateMyProfileMutationKey = () =>
  [{ url: "/api/student-portal/me" }] as const;

export function classroomStudentPortalUpdateMyProfileMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = classroomStudentPortalUpdateMyProfileMutationKey();
  return mutationOptions<
    ClassroomStudentPortalUpdateMyProfileStatus200,
    ResponseErrorConfig<Error>,
    ClassroomStudentPortalUpdateMyProfileOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      return classroomStudentPortalUpdateMyProfile({
        ...config,
        body,
        throwOnError: true,
      }).unwrap();
    },
  });
}

/**
 * @summary 更新本人资料（姓名/单位/职务；手机号不可改）。
 * {@link /api/student-portal/me}
 */
export function useClassroomStudentPortalUpdateMyProfile<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ClassroomStudentPortalUpdateMyProfileStatus200,
      ResponseErrorConfig<Error>,
      ClassroomStudentPortalUpdateMyProfileOptions,
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
  const mutationKey =
    mutationOptions.mutationKey ?? classroomStudentPortalUpdateMyProfileMutationKey();

  const baseOptions = classroomStudentPortalUpdateMyProfileMutationOptions(
    config,
  ) as UseMutationOptions<
    ClassroomStudentPortalUpdateMyProfileStatus200,
    ResponseErrorConfig<Error>,
    ClassroomStudentPortalUpdateMyProfileOptions,
    TContext
  >;

  return useMutation<
    ClassroomStudentPortalUpdateMyProfileStatus200,
    ResponseErrorConfig<Error>,
    ClassroomStudentPortalUpdateMyProfileOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ClassroomStudentPortalUpdateMyProfileStatus200,
    ResponseErrorConfig<Error>,
    ClassroomStudentPortalUpdateMyProfileOptions,
    TContext
  >;
}
