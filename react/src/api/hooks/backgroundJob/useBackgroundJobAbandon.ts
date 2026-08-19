/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BackgroundJobAbandonOptions,
  BackgroundJobAbandonStatus200,
  BackgroundJobAbandonStatus204,
  BackgroundJobAbandonStatus400,
  BackgroundJobAbandonStatus401,
  BackgroundJobAbandonStatus403,
  BackgroundJobAbandonStatus404,
  BackgroundJobAbandonStatus500,
  BackgroundJobAbandonStatus501,
} from "../../models/backgroundJob/BackgroundJobAbandon";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { backgroundJobAbandon } from "../../clients/backgroundJob/backgroundJobAbandon";

export const backgroundJobAbandonMutationKey = () =>
  [{ url: "/api/app/background-job/:id/abandon" }] as const;

export function backgroundJobAbandonMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = backgroundJobAbandonMutationKey();
  return mutationOptions<
    BackgroundJobAbandonStatus200 | BackgroundJobAbandonStatus204,
    ResponseErrorConfig<
      | BackgroundJobAbandonStatus400
      | BackgroundJobAbandonStatus401
      | BackgroundJobAbandonStatus403
      | BackgroundJobAbandonStatus404
      | BackgroundJobAbandonStatus500
      | BackgroundJobAbandonStatus501
    >,
    BackgroundJobAbandonOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await backgroundJobAbandon({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/background-job/:id/abandon}
 */
export function useBackgroundJobAbandon<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BackgroundJobAbandonStatus200 | BackgroundJobAbandonStatus204,
      ResponseErrorConfig<
        | BackgroundJobAbandonStatus400
        | BackgroundJobAbandonStatus401
        | BackgroundJobAbandonStatus403
        | BackgroundJobAbandonStatus404
        | BackgroundJobAbandonStatus500
        | BackgroundJobAbandonStatus501
      >,
      BackgroundJobAbandonOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? backgroundJobAbandonMutationKey();

  const baseOptions = backgroundJobAbandonMutationOptions(config) as UseMutationOptions<
    BackgroundJobAbandonStatus200 | BackgroundJobAbandonStatus204,
    ResponseErrorConfig<
      | BackgroundJobAbandonStatus400
      | BackgroundJobAbandonStatus401
      | BackgroundJobAbandonStatus403
      | BackgroundJobAbandonStatus404
      | BackgroundJobAbandonStatus500
      | BackgroundJobAbandonStatus501
    >,
    BackgroundJobAbandonOptions,
    TContext
  >;

  return useMutation<
    BackgroundJobAbandonStatus200 | BackgroundJobAbandonStatus204,
    ResponseErrorConfig<
      | BackgroundJobAbandonStatus400
      | BackgroundJobAbandonStatus401
      | BackgroundJobAbandonStatus403
      | BackgroundJobAbandonStatus404
      | BackgroundJobAbandonStatus500
      | BackgroundJobAbandonStatus501
    >,
    BackgroundJobAbandonOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BackgroundJobAbandonStatus200 | BackgroundJobAbandonStatus204,
    ResponseErrorConfig<
      | BackgroundJobAbandonStatus400
      | BackgroundJobAbandonStatus401
      | BackgroundJobAbandonStatus403
      | BackgroundJobAbandonStatus404
      | BackgroundJobAbandonStatus500
      | BackgroundJobAbandonStatus501
    >,
    BackgroundJobAbandonOptions,
    TContext
  >;
}
