/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassSessionFinishOptions,
  ClassSessionFinishStatus200,
  ClassSessionFinishStatus400,
  ClassSessionFinishStatus401,
  ClassSessionFinishStatus403,
  ClassSessionFinishStatus404,
  ClassSessionFinishStatus500,
  ClassSessionFinishStatus501,
} from "../../models/classSession/ClassSessionFinish";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { classSessionFinish } from "../../clients/classSession/classSessionFinish";

export const classSessionFinishMutationKey = () =>
  [{ url: "/api/app/class-session/:id/finish" }] as const;

export function classSessionFinishMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: { response?: "text/plain" | "application/json" | "text/json" };
  } = {},
) {
  const mutationKey = classSessionFinishMutationKey();
  return mutationOptions<
    ClassSessionFinishStatus200,
    ResponseErrorConfig<
      | ClassSessionFinishStatus400
      | ClassSessionFinishStatus401
      | ClassSessionFinishStatus403
      | ClassSessionFinishStatus404
      | ClassSessionFinishStatus500
      | ClassSessionFinishStatus501
    >,
    ClassSessionFinishOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await classSessionFinish({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/class-session/:id/finish}
 */
export function useClassSessionFinish<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ClassSessionFinishStatus200,
      ResponseErrorConfig<
        | ClassSessionFinishStatus400
        | ClassSessionFinishStatus401
        | ClassSessionFinishStatus403
        | ClassSessionFinishStatus404
        | ClassSessionFinishStatus500
        | ClassSessionFinishStatus501
      >,
      ClassSessionFinishOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: { response?: "text/plain" | "application/json" | "text/json" };
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? classSessionFinishMutationKey();

  const baseOptions = classSessionFinishMutationOptions(config) as UseMutationOptions<
    ClassSessionFinishStatus200,
    ResponseErrorConfig<
      | ClassSessionFinishStatus400
      | ClassSessionFinishStatus401
      | ClassSessionFinishStatus403
      | ClassSessionFinishStatus404
      | ClassSessionFinishStatus500
      | ClassSessionFinishStatus501
    >,
    ClassSessionFinishOptions,
    TContext
  >;

  return useMutation<
    ClassSessionFinishStatus200,
    ResponseErrorConfig<
      | ClassSessionFinishStatus400
      | ClassSessionFinishStatus401
      | ClassSessionFinishStatus403
      | ClassSessionFinishStatus404
      | ClassSessionFinishStatus500
      | ClassSessionFinishStatus501
    >,
    ClassSessionFinishOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ClassSessionFinishStatus200,
    ResponseErrorConfig<
      | ClassSessionFinishStatus400
      | ClassSessionFinishStatus401
      | ClassSessionFinishStatus403
      | ClassSessionFinishStatus404
      | ClassSessionFinishStatus500
      | ClassSessionFinishStatus501
    >,
    ClassSessionFinishOptions,
    TContext
  >;
}
