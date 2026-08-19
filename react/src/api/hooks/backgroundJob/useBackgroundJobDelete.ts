/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BackgroundJobDeleteOptions,
  BackgroundJobDeleteStatus200,
  BackgroundJobDeleteStatus204,
  BackgroundJobDeleteStatus400,
  BackgroundJobDeleteStatus401,
  BackgroundJobDeleteStatus403,
  BackgroundJobDeleteStatus404,
  BackgroundJobDeleteStatus500,
  BackgroundJobDeleteStatus501,
} from "../../models/backgroundJob/BackgroundJobDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { backgroundJobDelete } from "../../clients/backgroundJob/backgroundJobDelete";

export const backgroundJobDeleteMutationKey = () =>
  [{ url: "/api/app/background-job/:id" }] as const;

export function backgroundJobDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = backgroundJobDeleteMutationKey();
  return mutationOptions<
    BackgroundJobDeleteStatus200 | BackgroundJobDeleteStatus204,
    ResponseErrorConfig<
      | BackgroundJobDeleteStatus400
      | BackgroundJobDeleteStatus401
      | BackgroundJobDeleteStatus403
      | BackgroundJobDeleteStatus404
      | BackgroundJobDeleteStatus500
      | BackgroundJobDeleteStatus501
    >,
    BackgroundJobDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await backgroundJobDelete({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/background-job/:id}
 */
export function useBackgroundJobDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BackgroundJobDeleteStatus200 | BackgroundJobDeleteStatus204,
      ResponseErrorConfig<
        | BackgroundJobDeleteStatus400
        | BackgroundJobDeleteStatus401
        | BackgroundJobDeleteStatus403
        | BackgroundJobDeleteStatus404
        | BackgroundJobDeleteStatus500
        | BackgroundJobDeleteStatus501
      >,
      BackgroundJobDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? backgroundJobDeleteMutationKey();

  const baseOptions = backgroundJobDeleteMutationOptions(config) as UseMutationOptions<
    BackgroundJobDeleteStatus200 | BackgroundJobDeleteStatus204,
    ResponseErrorConfig<
      | BackgroundJobDeleteStatus400
      | BackgroundJobDeleteStatus401
      | BackgroundJobDeleteStatus403
      | BackgroundJobDeleteStatus404
      | BackgroundJobDeleteStatus500
      | BackgroundJobDeleteStatus501
    >,
    BackgroundJobDeleteOptions,
    TContext
  >;

  return useMutation<
    BackgroundJobDeleteStatus200 | BackgroundJobDeleteStatus204,
    ResponseErrorConfig<
      | BackgroundJobDeleteStatus400
      | BackgroundJobDeleteStatus401
      | BackgroundJobDeleteStatus403
      | BackgroundJobDeleteStatus404
      | BackgroundJobDeleteStatus500
      | BackgroundJobDeleteStatus501
    >,
    BackgroundJobDeleteOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BackgroundJobDeleteStatus200 | BackgroundJobDeleteStatus204,
    ResponseErrorConfig<
      | BackgroundJobDeleteStatus400
      | BackgroundJobDeleteStatus401
      | BackgroundJobDeleteStatus403
      | BackgroundJobDeleteStatus404
      | BackgroundJobDeleteStatus500
      | BackgroundJobDeleteStatus501
    >,
    BackgroundJobDeleteOptions,
    TContext
  >;
}
