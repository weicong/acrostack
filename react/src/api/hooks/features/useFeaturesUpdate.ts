/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  FeaturesUpdateOptions,
  FeaturesUpdateStatus200,
  FeaturesUpdateStatus204,
  FeaturesUpdateStatus400,
  FeaturesUpdateStatus401,
  FeaturesUpdateStatus403,
  FeaturesUpdateStatus404,
  FeaturesUpdateStatus500,
  FeaturesUpdateStatus501,
} from "../../models/features/FeaturesUpdate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { featuresUpdate } from "../../clients/features/featuresUpdate";

export const featuresUpdateMutationKey = () =>
  [{ url: "/api/feature-management/features" }] as const;

export function featuresUpdateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: { request?: "application/json" | "text/json" | "application/*+json" };
  } = {},
) {
  const mutationKey = featuresUpdateMutationKey();
  return mutationOptions<
    FeaturesUpdateStatus200 | FeaturesUpdateStatus204,
    ResponseErrorConfig<
      | FeaturesUpdateStatus400
      | FeaturesUpdateStatus401
      | FeaturesUpdateStatus403
      | FeaturesUpdateStatus404
      | FeaturesUpdateStatus500
      | FeaturesUpdateStatus501
    >,
    FeaturesUpdateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ query, body }) => {
      const { data } = await featuresUpdate({ ...config, query, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/feature-management/features}
 */
export function useFeaturesUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      FeaturesUpdateStatus200 | FeaturesUpdateStatus204,
      ResponseErrorConfig<
        | FeaturesUpdateStatus400
        | FeaturesUpdateStatus401
        | FeaturesUpdateStatus403
        | FeaturesUpdateStatus404
        | FeaturesUpdateStatus500
        | FeaturesUpdateStatus501
      >,
      FeaturesUpdateOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: { request?: "application/json" | "text/json" | "application/*+json" };
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? featuresUpdateMutationKey();

  const baseOptions = featuresUpdateMutationOptions(config) as UseMutationOptions<
    FeaturesUpdateStatus200 | FeaturesUpdateStatus204,
    ResponseErrorConfig<
      | FeaturesUpdateStatus400
      | FeaturesUpdateStatus401
      | FeaturesUpdateStatus403
      | FeaturesUpdateStatus404
      | FeaturesUpdateStatus500
      | FeaturesUpdateStatus501
    >,
    FeaturesUpdateOptions,
    TContext
  >;

  return useMutation<
    FeaturesUpdateStatus200 | FeaturesUpdateStatus204,
    ResponseErrorConfig<
      | FeaturesUpdateStatus400
      | FeaturesUpdateStatus401
      | FeaturesUpdateStatus403
      | FeaturesUpdateStatus404
      | FeaturesUpdateStatus500
      | FeaturesUpdateStatus501
    >,
    FeaturesUpdateOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    FeaturesUpdateStatus200 | FeaturesUpdateStatus204,
    ResponseErrorConfig<
      | FeaturesUpdateStatus400
      | FeaturesUpdateStatus401
      | FeaturesUpdateStatus403
      | FeaturesUpdateStatus404
      | FeaturesUpdateStatus500
      | FeaturesUpdateStatus501
    >,
    FeaturesUpdateOptions,
    TContext
  >;
}
