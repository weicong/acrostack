/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassSessionRestartOptions,
  ClassSessionRestartStatus200,
  ClassSessionRestartStatus400,
  ClassSessionRestartStatus401,
  ClassSessionRestartStatus403,
  ClassSessionRestartStatus404,
  ClassSessionRestartStatus500,
  ClassSessionRestartStatus501,
} from "../../models/classSession/ClassSessionRestart";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { classSessionRestart } from "../../clients/classSession/classSessionRestart";

export const classSessionRestartMutationKey = () =>
  [{ url: "/api/app/class-session/:id/restart" }] as const;

export function classSessionRestartMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: { response?: "text/plain" | "application/json" | "text/json" };
  } = {},
) {
  const mutationKey = classSessionRestartMutationKey();
  return mutationOptions<
    ClassSessionRestartStatus200,
    ResponseErrorConfig<
      | ClassSessionRestartStatus400
      | ClassSessionRestartStatus401
      | ClassSessionRestartStatus403
      | ClassSessionRestartStatus404
      | ClassSessionRestartStatus500
      | ClassSessionRestartStatus501
    >,
    ClassSessionRestartOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await classSessionRestart({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/class-session/:id/restart}
 */
export function useClassSessionRestart<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ClassSessionRestartStatus200,
      ResponseErrorConfig<
        | ClassSessionRestartStatus400
        | ClassSessionRestartStatus401
        | ClassSessionRestartStatus403
        | ClassSessionRestartStatus404
        | ClassSessionRestartStatus500
        | ClassSessionRestartStatus501
      >,
      ClassSessionRestartOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: { response?: "text/plain" | "application/json" | "text/json" };
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? classSessionRestartMutationKey();

  const baseOptions = classSessionRestartMutationOptions(config) as UseMutationOptions<
    ClassSessionRestartStatus200,
    ResponseErrorConfig<
      | ClassSessionRestartStatus400
      | ClassSessionRestartStatus401
      | ClassSessionRestartStatus403
      | ClassSessionRestartStatus404
      | ClassSessionRestartStatus500
      | ClassSessionRestartStatus501
    >,
    ClassSessionRestartOptions,
    TContext
  >;

  return useMutation<
    ClassSessionRestartStatus200,
    ResponseErrorConfig<
      | ClassSessionRestartStatus400
      | ClassSessionRestartStatus401
      | ClassSessionRestartStatus403
      | ClassSessionRestartStatus404
      | ClassSessionRestartStatus500
      | ClassSessionRestartStatus501
    >,
    ClassSessionRestartOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ClassSessionRestartStatus200,
    ResponseErrorConfig<
      | ClassSessionRestartStatus400
      | ClassSessionRestartStatus401
      | ClassSessionRestartStatus403
      | ClassSessionRestartStatus404
      | ClassSessionRestartStatus500
      | ClassSessionRestartStatus501
    >,
    ClassSessionRestartOptions,
    TContext
  >;
}
