/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BackgroundJobAbandonPathId,
  BackgroundJobAbandonStatus200,
  BackgroundJobAbandonStatus204,
  BackgroundJobAbandonStatus400,
  BackgroundJobAbandonStatus401,
  BackgroundJobAbandonStatus403,
  BackgroundJobAbandonStatus404,
  BackgroundJobAbandonStatus500,
  BackgroundJobAbandonStatus501,
} from "../../models/backgroundJob/BackgroundJobAbandon.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { backgroundJobAbandon } from "../../clients/backgroundJob/backgroundJobAbandon.ts";

export const backgroundJobAbandonMutationKey = () =>
  [{ url: "/api/app/background-job/:id/abandon" }] as const;

export function backgroundJobAbandonMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
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
    { id: BackgroundJobAbandonPathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return backgroundJobAbandon(id, config);
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
      { id: BackgroundJobAbandonPathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
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
    { id: BackgroundJobAbandonPathId },
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
    { id: BackgroundJobAbandonPathId },
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
    { id: BackgroundJobAbandonPathId },
    TContext
  >;
}
