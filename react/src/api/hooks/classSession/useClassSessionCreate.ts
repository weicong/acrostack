/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassSessionCreateOptions,
  ClassSessionCreateStatus200,
  ClassSessionCreateStatus400,
  ClassSessionCreateStatus401,
  ClassSessionCreateStatus403,
  ClassSessionCreateStatus404,
  ClassSessionCreateStatus500,
  ClassSessionCreateStatus501,
} from "../../models/classSession/ClassSessionCreate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { classSessionCreate } from "../../clients/classSession/classSessionCreate";

export const classSessionCreateMutationKey = () => [{ url: "/api/app/class-session" }] as const;

export function classSessionCreateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = classSessionCreateMutationKey();
  return mutationOptions<
    ClassSessionCreateStatus200,
    ResponseErrorConfig<
      | ClassSessionCreateStatus400
      | ClassSessionCreateStatus401
      | ClassSessionCreateStatus403
      | ClassSessionCreateStatus404
      | ClassSessionCreateStatus500
      | ClassSessionCreateStatus501
    >,
    ClassSessionCreateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await classSessionCreate({ ...config, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/class-session}
 */
export function useClassSessionCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ClassSessionCreateStatus200,
      ResponseErrorConfig<
        | ClassSessionCreateStatus400
        | ClassSessionCreateStatus401
        | ClassSessionCreateStatus403
        | ClassSessionCreateStatus404
        | ClassSessionCreateStatus500
        | ClassSessionCreateStatus501
      >,
      ClassSessionCreateOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? classSessionCreateMutationKey();

  const baseOptions = classSessionCreateMutationOptions(config) as UseMutationOptions<
    ClassSessionCreateStatus200,
    ResponseErrorConfig<
      | ClassSessionCreateStatus400
      | ClassSessionCreateStatus401
      | ClassSessionCreateStatus403
      | ClassSessionCreateStatus404
      | ClassSessionCreateStatus500
      | ClassSessionCreateStatus501
    >,
    ClassSessionCreateOptions,
    TContext
  >;

  return useMutation<
    ClassSessionCreateStatus200,
    ResponseErrorConfig<
      | ClassSessionCreateStatus400
      | ClassSessionCreateStatus401
      | ClassSessionCreateStatus403
      | ClassSessionCreateStatus404
      | ClassSessionCreateStatus500
      | ClassSessionCreateStatus501
    >,
    ClassSessionCreateOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ClassSessionCreateStatus200,
    ResponseErrorConfig<
      | ClassSessionCreateStatus400
      | ClassSessionCreateStatus401
      | ClassSessionCreateStatus403
      | ClassSessionCreateStatus404
      | ClassSessionCreateStatus500
      | ClassSessionCreateStatus501
    >,
    ClassSessionCreateOptions,
    TContext
  >;
}
