/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassSessionStartOptions,
  ClassSessionStartStatus200,
  ClassSessionStartStatus400,
  ClassSessionStartStatus401,
  ClassSessionStartStatus403,
  ClassSessionStartStatus404,
  ClassSessionStartStatus500,
  ClassSessionStartStatus501,
} from "../../models/classSession/ClassSessionStart";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { classSessionStart } from "../../clients/classSession/classSessionStart";

export const classSessionStartMutationKey = () =>
  [{ url: "/api/app/class-session/:id/start" }] as const;

export function classSessionStartMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: { response?: "text/plain" | "application/json" | "text/json" };
  } = {},
) {
  const mutationKey = classSessionStartMutationKey();
  return mutationOptions<
    ClassSessionStartStatus200,
    ResponseErrorConfig<
      | ClassSessionStartStatus400
      | ClassSessionStartStatus401
      | ClassSessionStartStatus403
      | ClassSessionStartStatus404
      | ClassSessionStartStatus500
      | ClassSessionStartStatus501
    >,
    ClassSessionStartOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await classSessionStart({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/class-session/:id/start}
 */
export function useClassSessionStart<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ClassSessionStartStatus200,
      ResponseErrorConfig<
        | ClassSessionStartStatus400
        | ClassSessionStartStatus401
        | ClassSessionStartStatus403
        | ClassSessionStartStatus404
        | ClassSessionStartStatus500
        | ClassSessionStartStatus501
      >,
      ClassSessionStartOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: { response?: "text/plain" | "application/json" | "text/json" };
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? classSessionStartMutationKey();

  const baseOptions = classSessionStartMutationOptions(config) as UseMutationOptions<
    ClassSessionStartStatus200,
    ResponseErrorConfig<
      | ClassSessionStartStatus400
      | ClassSessionStartStatus401
      | ClassSessionStartStatus403
      | ClassSessionStartStatus404
      | ClassSessionStartStatus500
      | ClassSessionStartStatus501
    >,
    ClassSessionStartOptions,
    TContext
  >;

  return useMutation<
    ClassSessionStartStatus200,
    ResponseErrorConfig<
      | ClassSessionStartStatus400
      | ClassSessionStartStatus401
      | ClassSessionStartStatus403
      | ClassSessionStartStatus404
      | ClassSessionStartStatus500
      | ClassSessionStartStatus501
    >,
    ClassSessionStartOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ClassSessionStartStatus200,
    ResponseErrorConfig<
      | ClassSessionStartStatus400
      | ClassSessionStartStatus401
      | ClassSessionStartStatus403
      | ClassSessionStartStatus404
      | ClassSessionStartStatus500
      | ClassSessionStartStatus501
    >,
    ClassSessionStartOptions,
    TContext
  >;
}
