/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassroomPublicJoinOptions,
  ClassroomPublicJoinStatus200,
} from "../../models/classroomPublic/ClassroomPublicJoin";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { classroomPublicJoin } from "../../clients/classroomPublic/classroomPublicJoin";

export const classroomPublicJoinMutationKey = () =>
  [{ url: "/api/public/class-sessions/join" }] as const;

export function classroomPublicJoinMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = classroomPublicJoinMutationKey();
  return mutationOptions<
    ClassroomPublicJoinStatus200,
    ResponseErrorConfig<Error>,
    ClassroomPublicJoinOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await classroomPublicJoin({ ...config, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * @summary 加入课堂：校验课堂码 -> 创建 Participant -> 签发课堂范围短期令牌。
 * {@link /api/public/class-sessions/join}
 */
export function useClassroomPublicJoin<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ClassroomPublicJoinStatus200,
      ResponseErrorConfig<Error>,
      ClassroomPublicJoinOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? classroomPublicJoinMutationKey();

  const baseOptions = classroomPublicJoinMutationOptions(config) as UseMutationOptions<
    ClassroomPublicJoinStatus200,
    ResponseErrorConfig<Error>,
    ClassroomPublicJoinOptions,
    TContext
  >;

  return useMutation<
    ClassroomPublicJoinStatus200,
    ResponseErrorConfig<Error>,
    ClassroomPublicJoinOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ClassroomPublicJoinStatus200,
    ResponseErrorConfig<Error>,
    ClassroomPublicJoinOptions,
    TContext
  >;
}
