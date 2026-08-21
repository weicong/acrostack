/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassSessionCreatePresentationTokenOptions,
  ClassSessionCreatePresentationTokenStatus200,
  ClassSessionCreatePresentationTokenStatus400,
  ClassSessionCreatePresentationTokenStatus401,
  ClassSessionCreatePresentationTokenStatus403,
  ClassSessionCreatePresentationTokenStatus404,
  ClassSessionCreatePresentationTokenStatus500,
  ClassSessionCreatePresentationTokenStatus501,
} from "../../models/classSession/ClassSessionCreatePresentationToken";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { classSessionCreatePresentationToken } from "../../clients/classSession/classSessionCreatePresentationToken";

export const classSessionCreatePresentationTokenMutationKey = () =>
  [{ url: "/api/app/class-session/:id/presentation-token" }] as const;

export function classSessionCreatePresentationTokenMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: { response?: "text/plain" | "application/json" | "text/json" };
  } = {},
) {
  const mutationKey = classSessionCreatePresentationTokenMutationKey();
  return mutationOptions<
    ClassSessionCreatePresentationTokenStatus200,
    ResponseErrorConfig<
      | ClassSessionCreatePresentationTokenStatus400
      | ClassSessionCreatePresentationTokenStatus401
      | ClassSessionCreatePresentationTokenStatus403
      | ClassSessionCreatePresentationTokenStatus404
      | ClassSessionCreatePresentationTokenStatus500
      | ClassSessionCreatePresentationTokenStatus501
    >,
    ClassSessionCreatePresentationTokenOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await classSessionCreatePresentationToken({
        ...config,
        path,
        throwOnError: true,
      });
      return data;
    },
  });
}

/**
 * {@link /api/app/class-session/:id/presentation-token}
 */
export function useClassSessionCreatePresentationToken<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ClassSessionCreatePresentationTokenStatus200,
      ResponseErrorConfig<
        | ClassSessionCreatePresentationTokenStatus400
        | ClassSessionCreatePresentationTokenStatus401
        | ClassSessionCreatePresentationTokenStatus403
        | ClassSessionCreatePresentationTokenStatus404
        | ClassSessionCreatePresentationTokenStatus500
        | ClassSessionCreatePresentationTokenStatus501
      >,
      ClassSessionCreatePresentationTokenOptions,
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
    mutationOptions.mutationKey ?? classSessionCreatePresentationTokenMutationKey();

  const baseOptions = classSessionCreatePresentationTokenMutationOptions(
    config,
  ) as UseMutationOptions<
    ClassSessionCreatePresentationTokenStatus200,
    ResponseErrorConfig<
      | ClassSessionCreatePresentationTokenStatus400
      | ClassSessionCreatePresentationTokenStatus401
      | ClassSessionCreatePresentationTokenStatus403
      | ClassSessionCreatePresentationTokenStatus404
      | ClassSessionCreatePresentationTokenStatus500
      | ClassSessionCreatePresentationTokenStatus501
    >,
    ClassSessionCreatePresentationTokenOptions,
    TContext
  >;

  return useMutation<
    ClassSessionCreatePresentationTokenStatus200,
    ResponseErrorConfig<
      | ClassSessionCreatePresentationTokenStatus400
      | ClassSessionCreatePresentationTokenStatus401
      | ClassSessionCreatePresentationTokenStatus403
      | ClassSessionCreatePresentationTokenStatus404
      | ClassSessionCreatePresentationTokenStatus500
      | ClassSessionCreatePresentationTokenStatus501
    >,
    ClassSessionCreatePresentationTokenOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ClassSessionCreatePresentationTokenStatus200,
    ResponseErrorConfig<
      | ClassSessionCreatePresentationTokenStatus400
      | ClassSessionCreatePresentationTokenStatus401
      | ClassSessionCreatePresentationTokenStatus403
      | ClassSessionCreatePresentationTokenStatus404
      | ClassSessionCreatePresentationTokenStatus500
      | ClassSessionCreatePresentationTokenStatus501
    >,
    ClassSessionCreatePresentationTokenOptions,
    TContext
  >;
}
