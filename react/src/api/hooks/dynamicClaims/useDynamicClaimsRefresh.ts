/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  DynamicClaimsRefreshStatus200,
  DynamicClaimsRefreshStatus204,
  DynamicClaimsRefreshStatus400,
  DynamicClaimsRefreshStatus401,
  DynamicClaimsRefreshStatus403,
  DynamicClaimsRefreshStatus404,
  DynamicClaimsRefreshStatus500,
  DynamicClaimsRefreshStatus501,
} from "../../models/dynamicClaims/DynamicClaimsRefresh";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { dynamicClaimsRefresh } from "../../clients/dynamicClaims/dynamicClaimsRefresh";

export const dynamicClaimsRefreshMutationKey = () =>
  [{ url: "/api/account/dynamic-claims/refresh" }] as const;

export function dynamicClaimsRefreshMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = dynamicClaimsRefreshMutationKey();
  return mutationOptions<
    DynamicClaimsRefreshStatus200 | DynamicClaimsRefreshStatus204,
    ResponseErrorConfig<
      | DynamicClaimsRefreshStatus400
      | DynamicClaimsRefreshStatus401
      | DynamicClaimsRefreshStatus403
      | DynamicClaimsRefreshStatus404
      | DynamicClaimsRefreshStatus500
      | DynamicClaimsRefreshStatus501
    >,
    undefined,
    TContext
  >({
    mutationKey,
    mutationFn: async (_) => {
      const { data } = await dynamicClaimsRefresh({ ...config, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/account/dynamic-claims/refresh}
 */
export function useDynamicClaimsRefresh<TContext>(
  options: {
    mutation?: UseMutationOptions<
      DynamicClaimsRefreshStatus200 | DynamicClaimsRefreshStatus204,
      ResponseErrorConfig<
        | DynamicClaimsRefreshStatus400
        | DynamicClaimsRefreshStatus401
        | DynamicClaimsRefreshStatus403
        | DynamicClaimsRefreshStatus404
        | DynamicClaimsRefreshStatus500
        | DynamicClaimsRefreshStatus501
      >,
      undefined,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? dynamicClaimsRefreshMutationKey();

  const baseOptions = dynamicClaimsRefreshMutationOptions(config) as UseMutationOptions<
    DynamicClaimsRefreshStatus200 | DynamicClaimsRefreshStatus204,
    ResponseErrorConfig<
      | DynamicClaimsRefreshStatus400
      | DynamicClaimsRefreshStatus401
      | DynamicClaimsRefreshStatus403
      | DynamicClaimsRefreshStatus404
      | DynamicClaimsRefreshStatus500
      | DynamicClaimsRefreshStatus501
    >,
    undefined,
    TContext
  >;

  return useMutation<
    DynamicClaimsRefreshStatus200 | DynamicClaimsRefreshStatus204,
    ResponseErrorConfig<
      | DynamicClaimsRefreshStatus400
      | DynamicClaimsRefreshStatus401
      | DynamicClaimsRefreshStatus403
      | DynamicClaimsRefreshStatus404
      | DynamicClaimsRefreshStatus500
      | DynamicClaimsRefreshStatus501
    >,
    undefined,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    DynamicClaimsRefreshStatus200 | DynamicClaimsRefreshStatus204,
    ResponseErrorConfig<
      | DynamicClaimsRefreshStatus400
      | DynamicClaimsRefreshStatus401
      | DynamicClaimsRefreshStatus403
      | DynamicClaimsRefreshStatus404
      | DynamicClaimsRefreshStatus500
      | DynamicClaimsRefreshStatus501
    >,
    undefined,
    TContext
  >;
}
