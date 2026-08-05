/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BackgroundJobRequeuePathId,
  BackgroundJobRequeueStatus200,
  BackgroundJobRequeueStatus204,
  BackgroundJobRequeueStatus400,
  BackgroundJobRequeueStatus401,
  BackgroundJobRequeueStatus403,
  BackgroundJobRequeueStatus404,
  BackgroundJobRequeueStatus500,
  BackgroundJobRequeueStatus501,
} from "../../models/backgroundJob/BackgroundJobRequeue.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { backgroundJobRequeue } from "../../clients/backgroundJob/backgroundJobRequeue.ts";

export const backgroundJobRequeueMutationKey = () =>
  [{ url: "/api/app/background-job/:id/requeue" }] as const;

export function backgroundJobRequeueMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = backgroundJobRequeueMutationKey();
  return mutationOptions<
    BackgroundJobRequeueStatus200 | BackgroundJobRequeueStatus204,
    ResponseErrorConfig<
      | BackgroundJobRequeueStatus400
      | BackgroundJobRequeueStatus401
      | BackgroundJobRequeueStatus403
      | BackgroundJobRequeueStatus404
      | BackgroundJobRequeueStatus500
      | BackgroundJobRequeueStatus501
    >,
    { id: BackgroundJobRequeuePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return backgroundJobRequeue(id, config);
    },
  });
}

/**
 * {@link /api/app/background-job/:id/requeue}
 */
export function useBackgroundJobRequeue<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BackgroundJobRequeueStatus200 | BackgroundJobRequeueStatus204,
      ResponseErrorConfig<
        | BackgroundJobRequeueStatus400
        | BackgroundJobRequeueStatus401
        | BackgroundJobRequeueStatus403
        | BackgroundJobRequeueStatus404
        | BackgroundJobRequeueStatus500
        | BackgroundJobRequeueStatus501
      >,
      { id: BackgroundJobRequeuePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? backgroundJobRequeueMutationKey();

  const baseOptions = backgroundJobRequeueMutationOptions(config) as UseMutationOptions<
    BackgroundJobRequeueStatus200 | BackgroundJobRequeueStatus204,
    ResponseErrorConfig<
      | BackgroundJobRequeueStatus400
      | BackgroundJobRequeueStatus401
      | BackgroundJobRequeueStatus403
      | BackgroundJobRequeueStatus404
      | BackgroundJobRequeueStatus500
      | BackgroundJobRequeueStatus501
    >,
    { id: BackgroundJobRequeuePathId },
    TContext
  >;

  return useMutation<
    BackgroundJobRequeueStatus200 | BackgroundJobRequeueStatus204,
    ResponseErrorConfig<
      | BackgroundJobRequeueStatus400
      | BackgroundJobRequeueStatus401
      | BackgroundJobRequeueStatus403
      | BackgroundJobRequeueStatus404
      | BackgroundJobRequeueStatus500
      | BackgroundJobRequeueStatus501
    >,
    { id: BackgroundJobRequeuePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BackgroundJobRequeueStatus200 | BackgroundJobRequeueStatus204,
    ResponseErrorConfig<
      | BackgroundJobRequeueStatus400
      | BackgroundJobRequeueStatus401
      | BackgroundJobRequeueStatus403
      | BackgroundJobRequeueStatus404
      | BackgroundJobRequeueStatus500
      | BackgroundJobRequeueStatus501
    >,
    { id: BackgroundJobRequeuePathId },
    TContext
  >;
}
