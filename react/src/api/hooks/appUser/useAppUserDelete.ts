/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  AppUserDeleteOptions,
  AppUserDeleteStatus200,
  AppUserDeleteStatus204,
  AppUserDeleteStatus400,
  AppUserDeleteStatus401,
  AppUserDeleteStatus403,
  AppUserDeleteStatus404,
  AppUserDeleteStatus500,
  AppUserDeleteStatus501,
} from "../../models/appUser/AppUserDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { appUserDelete } from "../../clients/appUser/appUserDelete";

export const appUserDeleteMutationKey = () => [{ url: "/api/app/app-user/:id" }] as const;

export function appUserDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
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
    AppUserDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await appUserDelete({ ...config, path, throwOnError: true });
      return data;
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
      AppUserDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
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
    AppUserDeleteOptions,
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
    AppUserDeleteOptions,
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
    AppUserDeleteOptions,
    TContext
  >;
}
