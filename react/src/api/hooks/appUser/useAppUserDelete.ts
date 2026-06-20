/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  AppUserDeletePathId,
  AppUserDeleteStatus200,
  AppUserDeleteStatus204,
  AppUserDeleteStatus400,
  AppUserDeleteStatus401,
  AppUserDeleteStatus403,
  AppUserDeleteStatus404,
  AppUserDeleteStatus500,
  AppUserDeleteStatus501,
} from "../../models/appUser/AppUserDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { appUserDelete } from "../../clients/appUser/appUserDelete.ts";

export const appUserDeleteMutationKey = () => [{ url: "/api/app/app-user/:id" }] as const;

export function appUserDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = appUserDeleteMutationKey();
  return mutationOptions<
    AppUserDeleteStatus200 | AppUserDeleteStatus204,
    ResponseErrorConfig<
      | AppUserDeleteStatus400
      | AppUserDeleteStatus401
      | AppUserDeleteStatus403
      | AppUserDeleteStatus404
      | AppUserDeleteStatus500
      | AppUserDeleteStatus501
    >,
    { id: AppUserDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return appUserDelete(id, config);
    },
  });
}

/**
 * {@link /api/app/app-user/:id}
 */
export function useAppUserDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      AppUserDeleteStatus200 | AppUserDeleteStatus204,
      ResponseErrorConfig<
        | AppUserDeleteStatus400
        | AppUserDeleteStatus401
        | AppUserDeleteStatus403
        | AppUserDeleteStatus404
        | AppUserDeleteStatus500
        | AppUserDeleteStatus501
      >,
      { id: AppUserDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? appUserDeleteMutationKey();

  const baseOptions = appUserDeleteMutationOptions(config) as UseMutationOptions<
    AppUserDeleteStatus200 | AppUserDeleteStatus204,
    ResponseErrorConfig<
      | AppUserDeleteStatus400
      | AppUserDeleteStatus401
      | AppUserDeleteStatus403
      | AppUserDeleteStatus404
      | AppUserDeleteStatus500
      | AppUserDeleteStatus501
    >,
    { id: AppUserDeletePathId },
    TContext
  >;

  return useMutation<
    AppUserDeleteStatus200 | AppUserDeleteStatus204,
    ResponseErrorConfig<
      | AppUserDeleteStatus400
      | AppUserDeleteStatus401
      | AppUserDeleteStatus403
      | AppUserDeleteStatus404
      | AppUserDeleteStatus500
      | AppUserDeleteStatus501
    >,
    { id: AppUserDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    AppUserDeleteStatus200 | AppUserDeleteStatus204,
    ResponseErrorConfig<
      | AppUserDeleteStatus400
      | AppUserDeleteStatus401
      | AppUserDeleteStatus403
      | AppUserDeleteStatus404
      | AppUserDeleteStatus500
      | AppUserDeleteStatus501
    >,
    { id: AppUserDeletePathId },
    TContext
  >;
}
