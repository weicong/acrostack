/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassroomPublicPreJoinOptions,
  ClassroomPublicPreJoinStatus200,
} from "../../models/classroomPublic/ClassroomPublicPreJoin";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { classroomPublicPreJoin } from "../../clients/classroomPublic/classroomPublicPreJoin";

export const classroomPublicPreJoinMutationKey = () =>
  [{ url: "/api/public/class-sessions/pre-join" }] as const;

export function classroomPublicPreJoinMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = classroomPublicPreJoinMutationKey();
  return mutationOptions<
    ClassroomPublicPreJoinStatus200,
    ResponseErrorConfig<Error>,
    ClassroomPublicPreJoinOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      return classroomPublicPreJoin({ ...config, body, throwOnError: true }).unwrap();
    },
  });
}

/**
 * @summary 探测加入：按手机号判断是否已有学员档案（决定是否展示 单位/职务 表单）。
 * {@link /api/public/class-sessions/pre-join}
 */
export function useClassroomPublicPreJoin<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ClassroomPublicPreJoinStatus200,
      ResponseErrorConfig<Error>,
      ClassroomPublicPreJoinOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? classroomPublicPreJoinMutationKey();

  const baseOptions = classroomPublicPreJoinMutationOptions(config) as UseMutationOptions<
    ClassroomPublicPreJoinStatus200,
    ResponseErrorConfig<Error>,
    ClassroomPublicPreJoinOptions,
    TContext
  >;

  return useMutation<
    ClassroomPublicPreJoinStatus200,
    ResponseErrorConfig<Error>,
    ClassroomPublicPreJoinOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ClassroomPublicPreJoinStatus200,
    ResponseErrorConfig<Error>,
    ClassroomPublicPreJoinOptions,
    TContext
  >;
}
