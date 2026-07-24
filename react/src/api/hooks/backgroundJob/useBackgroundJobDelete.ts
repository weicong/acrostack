/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BackgroundJobDeletePathId,
  BackgroundJobDeleteStatus200,
  BackgroundJobDeleteStatus204,
  BackgroundJobDeleteStatus400,
  BackgroundJobDeleteStatus401,
  BackgroundJobDeleteStatus403,
  BackgroundJobDeleteStatus404,
  BackgroundJobDeleteStatus500,
  BackgroundJobDeleteStatus501,
} from "../../models/backgroundJob/BackgroundJobDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { backgroundJobDelete } from "../../clients/backgroundJob/backgroundJobDelete.ts";

export const backgroundJobDeleteMutationKey = () =>
  [{ url: "/api/app/background-job/:id" }] as const;

export function backgroundJobDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
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
    { id: BackgroundJobDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return backgroundJobDelete(id, config);
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
      { id: BackgroundJobDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
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
    { id: BackgroundJobDeletePathId },
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
    { id: BackgroundJobDeletePathId },
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
    { id: BackgroundJobDeletePathId },
    TContext
  >;
}
